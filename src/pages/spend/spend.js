var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelperProvider } from '../../providers/helper/helper';
import { ProductProvider } from '../../providers/product/product';
import { transition, trigger, animate, style } from '@angular/animations';
/**
* Generated class for the SpendPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var SpendPage = /** @class */ (function () {
    function SpendPage(navCtrl, navParams, helper, product) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.helper = helper;
        this.product = product;
        this.spend = {};
        this.spend_item_form = {};
        this.spend_item = [];
        this.products = [];
        this.ingredients = [];
        this.data_spend = [];
        this.spend_item_form_state = 'new';
        this.is_restaurant = helper.local.get_params(helper.config.variable.credential).data.serv_id != 1 || helper.local.get_params(helper.config.variable.credential).data.serv_id != 2;
        this.state = 'list';
        this.spend = {
            sp_date: this.helper.moment().add(7, 'hour').toISOString(),
            sp_paid: this.helper.moment().add(7, 'hour').toISOString(),
        };
        this.outlet = this.helper.local.get_params(this.helper.config.variable.credential).data.outlet_id;
        if (helper.local.get_params(helper.config.variable.credential).data.serv_id == 1 || helper.local.get_params(helper.config.variable.credential).data.serv_id == 2) {
            this.get_ingredient_data();
        }
        else {
            this.product.get_product({ data: {
                    outlet: this.outlet,
                    limit: 1000,
                    page: 1
                }, online: true })
                .then(function (res) {
                res = JSON.parse(res);
                if (res.code == 200) {
                    _this.products = res.data;
                }
            });
        }
    }
    SpendPage.prototype.ionViewDidLoad = function () {
    };
    SpendPage.prototype.ionViewWillEnter = function () {
        this.get_data_spend();
        // detect any params
        this.spend.sp_type = this.navParams.get('sp_type');
    };
    SpendPage.prototype.openSpendItem = function () {
        /*if(!this.spend.sp_bill || this.spend.sp_bill > 1)
        {
            this.helper.alertCtrl.create({
                title: "Data kurang lengkap",
                "message": "Mohon untuk mengisi uang yang dibayarkan",
                buttons: ["OK"]
            }).present();
            return false;
        }*/
        this.state = 'spend_item';
    };
    SpendPage.prototype.get_ingredient_data = function () {
        var _this = this;
        // serv_id
        var loading = this.helper.loadingCtrl.create({
            content: "Memeriksa data"
        });
        loading.present();
        var url = this.helper.config.base_url('admin/outlet/ingredient/get');
        this.helper.$.ajax({
            url: url,
            type: 'POST',
            data: {
                limit: 1000,
                page: 1,
                outlet_id: this.helper.local.get_params(this.helper.config.variable.credential).data.outlet_id,
                where: {
                    outlet_id: this.helper.local.get_params(this.helper.config.variable.credential).data.outlet_id
                }
            },
            dataType: 'json'
        })
            .done(function (res) {
            if (res.code == 200) {
                _this.ingredients = res.data;
            }
        })
            .always(function () {
            loading.dismiss();
        });
    };
    SpendPage.prototype.get_data_spend = function () {
        var _this = this;
        var loading = this.helper.loadingCtrl.create({
            content: "Memeriksa data"
        });
        loading.present();
        var url = this.helper.config.base_url('admin/outlet/spend/get');
        this.helper.$.ajax({
            url: url,
            type: 'POST',
            data: {
                outlet_id: this.helper.local.get_params(this.helper.config.variable.credential).data.outlet_id,
                where: {
                    spend_date_only: this.helper.moment().format('YYYY-MM-DD')
                }
            },
            dataType: 'json'
        })
            .done(function (res) {
            if (res.code == 200) {
                _this.data_spend = res.data;
            }
        })
            .always(function () {
            loading.dismiss();
        });
    };
    SpendPage.prototype.create_new_spend_data = function () {
        var _this = this;
        var loading = this.helper.loadingCtrl.create({
            content: "Menambahkan data"
        });
        loading.present();
        var data = this.spend;
        data.outlet_id = this.helper.local.get_params(this.helper.config.variable.credential).data.outlet_id;
        data.users_outlet_id = this.helper.local.get_params(this.helper.config.variable.credential).data.users_outlet_id;
        data.items = this.spend_item;
        var url;
        if (!this.spend.sp_id) {
            url = this.helper.config.base_url('admin/outlet/spend/add');
        }
        else {
            url = this.helper.config.base_url('admin/outlet/spend/update');
        }
        console.log(data);
        this.helper.$.ajax({
            url: url,
            type: 'POST',
            data: data,
            dataType: 'json'
        })
            .done(function (res) {
            if (res.code == 200) {
                _this.ResetItem();
                _this.reset_spend_item();
                _this.view_state = undefined;
                _this.state = 'list';
                _this.get_data_spend();
                _this.spend = {
                    sp_supplier: '',
                    sp_note: ''
                };
            }
        })
            .always(function () {
            loading.dismiss();
        });
    };
    SpendPage.prototype.countChargeNominal = function (ev) {
        var value = ev.target.value;
        this.spend.sp_disc_percent = value;
        // ev.target.value = this.helper.percentToNominal(value);
    };
    SpendPage.prototype.countChargePercent = function (ev) {
        this.spend.sp_disc_nominal;
    };
    SpendPage.prototype.countTotal = function ($ev) {
        var value = this.spend_item_form.sp_dt_price ? this.helper.IDRtoInt(this.spend_item_form.sp_dt_price) : 0;
        var qty = this.spend_item_form.sp_dt_qty ? this.spend_item_form.sp_dt_qty : 0;
        var total = value * qty;
        this.spend_item_form.sp_dt_total = this.helper.intToIDR(total);
        this.spend_item_form.sp_dt_price = this.helper.intToIDR(value);
    };
    SpendPage.prototype.SaveItem = function () {
        if (this.spend.sp_type) {
            var index = 0;
            if (this.is_restaurant) {
                index = this.ingredients.map(function (res) { return res.ingd_id; }).indexOf(this.spend_item_form.ingd_id);
                this.spend_item_form['product_item'] = this.ingredients[index];
            }
            else {
                index = this.products.map(function (res) { return res.id; }).indexOf(this.spend_item_form.prod_id);
                this.spend_item_form['product_item'] = this.products[index];
            }
        }
        if (this.spend.sp_type == 0 && (!this.spend_item_form.sp_dt_desc || this.spend_item_form.sp_dt_desc == '')) {
            this.helper.alertCtrl.create({
                message: "Deskripsi tidak boleh kosong!",
                buttons: ["OK"]
            }).present();
            return false;
        }
        if (Object.keys(this.spend_item_form).length > 0) {
            this.spend_item.push(this.spend_item_form);
        }
        this.countTotalSpend();
        this.ResetItem();
    };
    SpendPage.prototype.reset_spend_item = function () {
        this.spend_item = [];
    };
    SpendPage.prototype.ResetItem = function () {
        this.spend_item_form_state = 'new';
        this.spend_item_form_index = undefined;
        this.spend_item_form = {
            prod_id: '',
            sp_dt_qty: '',
            sp_dt_total: '',
            sp_dt_desc: '',
            sp_dt_note: '',
        };
        if (!this.spend.sp_type) {
            this.spend_item_form.sp_dt_price = '';
        }
    };
    SpendPage.prototype.RemoveItem = function (index) {
        this.spend_item.splice(index, 1);
    };
    SpendPage.prototype.EditItem = function (index, item) {
        console.log(item);
        this.spend_item_form_state = 'edit';
        this.spend_item_form_index = index;
        this.spend_item_form = item;
    };
    SpendPage.prototype.UpdateItem = function (index, item) {
        this.spend_item[this.spend_item_form_index] = this.spend_item_form;
        this.countTotalSpend();
        this.ResetItem();
    };
    SpendPage.prototype.countTotalSpend = function () {
        var _this = this;
        var sp_dt_total = this.spend_item.map(function (res) {
            return _this.helper.IDRtoInt(res.sp_dt_total);
        });
        var total = 0;
        this.helper.$.each(sp_dt_total, function (i, val) {
            total = total + val;
        });
        // discount
        var disc_nominal = this.helper.IDRtoInt(this.spend.sp_disc_nominal) > 0 ? this.spend.sp_disc_nominal : 0;
        if (this.spend.sp_disc_percent) {
            disc_nominal = this.helper.percentToNominal(this.spend.sp_disc_percent, total);
            this.spend.sp_disc_nominal = disc_nominal;
        }
        // tax
        var tax_nominal = this.helper.IDRtoInt(this.spend.sp_tax_nominal) > 0 ? this.spend.sp_tax_nominal : 0;
        if (this.spend.sp_tax_percent) {
            tax_nominal = this.helper.percentToNominal(this.spend.sp_tax_percent, total);
            this.spend.sp_tax_nominal = tax_nominal;
        }
        total = total - disc_nominal + tax_nominal;
        this.spend.sp_total = total;
        this.spend.sp_bill = total;
    };
    SpendPage.prototype.advanceOptions = function (index, item) {
        var _this = this;
        this.helper.actionSheet.create({
            title: 'Opsi Lanjutan',
            buttons: [
                {
                    text: 'Edit item',
                    handler: function () {
                        item = Object.assign({}, item);
                        _this.EditItem(index, item);
                    }
                },
                {
                    text: 'Hapus item',
                    handler: function () {
                        _this.RemoveItem(index);
                    }
                }
            ]
        }).present();
    };
    SpendPage.prototype.changeToIDR = function ($event) {
        var value_number = this.helper.IDRtoInt($event.target.value);
        var value = this.helper.intToIDR(value_number);
        this.spend.sp_bill = value;
    };
    SpendPage.prototype.close_preview = function () {
        this.view_state = 'form';
        this.state = 'list';
        this.spend = {};
        this.spend_item = [];
    };
    SpendPage.prototype.openSpendPreview = function () {
        this.state = 'spend_preview';
        this.countTotalSpend();
    };
    SpendPage.prototype.opsiLanjutanSpendItem = function (index, item) {
        var _this = this;
        this.helper.actionSheet.create({
            title: 'Opsi Lanjutan',
            buttons: [
                {
                    text: 'Lihat data',
                    handler: function () {
                        item = Object.assign({}, item);
                        _this.spend = item;
                        _this.spend_item = item.items;
                        _this.state = 'spend_preview';
                        _this.view_state = 'view';
                    }
                }, {
                    text: 'Edit data',
                    handler: function () {
                        console.log(item);
                        // this.EditItem(index, item)
                        item = Object.assign({}, item);
                        item.sp_type = item.sp_type == 1 ? false : true;
                        _this.spend = item;
                        _this.spend_item = item.items;
                        _this.helper.$.each(_this.spend_item, function (i, val) {
                            _this.spend_item[i].product_item = val;
                        });
                        _this.state = 'new_spend';
                        console.log(_this.spend_item);
                    }
                },
                {
                    text: 'Hapus data',
                    handler: function () {
                        _this.RemoveDataSpend(item);
                    }
                }
            ]
        }).present();
    };
    SpendPage.prototype.RemoveDataSpend = function (item) {
        var _this = this;
        var loading = this.helper.loadingCtrl.create({
            content: "Menghapus data"
        });
        var url = this.helper.config.base_url('admin/outlet/spend/delete');
        this.helper.$.ajax({
            url: url,
            type: 'POST',
            data: item,
            dataType: 'json'
        })
            .done(function (res) {
            if (res.code == 200) {
                // this.data_spend = res.data;
                // this.reset_spend_item();
                _this.state = 'list';
                // this.get_data_spend();
            }
        })
            .always(function () {
            loading.dismiss();
        });
    };
    SpendPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-spend',
            templateUrl: 'spend.html',
            animations: [
                trigger('pageTransition', [
                    transition('*=>list', [style({
                            transform: 'translateX(100%)'
                        }), animate(200)]),
                    transition('*=>new_spend', [style({
                            transform: 'translateX(-100%)'
                        }), animate(200)]),
                    transition('new_spend=>spend_item', [style({
                            transform: 'translateX(100%)'
                        }), animate(200)]),
                    transition('spend_item=>*', [style({
                            transform: 'translateX(-100%)'
                        }), animate(200)]),
                ])
            ]
        }),
        __metadata("design:paramtypes", [NavController, NavParams, HelperProvider, ProductProvider])
    ], SpendPage);
    return SpendPage;
}());
export { SpendPage };
//# sourceMappingURL=spend.js.map