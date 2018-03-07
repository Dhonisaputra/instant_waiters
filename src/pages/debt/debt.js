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
/**
 * Generated class for the DebtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DebtPage = /** @class */ (function () {
    function DebtPage(navCtrl, navParams, helper) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.helper = helper;
        this.debts = [];
        this.state = 'list';
        this.page_params = {};
        this.filter_input = '';
        this.filter_params = 'member_name';
        this.page_params = {
            toggleSearchInput: false
        };
    }
    DebtPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DebtPage');
        this.outlet = this.helper.local.get_params(this.helper.config.variable.credential).data.outlet_id;
        this.get_data_debt();
    };
    DebtPage.prototype.filter_hutang = function () {
        var _this = this;
        if (this.filter_input.length > 0 && this.filter_input.length < 5) {
            return false;
        }
        var loading = this.helper.loadingCtrl.create({
            content: "Memeriksa data"
        });
        loading.present();
        var url = this.helper.config.base_url('admin/outlet/debt/get/list');
        var data = {
            fields: 'total_debt_rest,debt_id,pay_id,member_id,debt_date,debt_in,debt_out,debt_rest,outlet_id,member_name,member_mail,member_phone',
            outlet_id: this.outlet,
            group_by: 'member_id',
            where: {},
            like: [[this.filter_params, this.filter_input]]
        };
        this.helper.$.ajax({
            url: url,
            type: 'POST',
            data: data,
            dataType: "json"
        })
            .done(function (res) {
            if (res.code == 200) {
                _this.debts = res.data;
            }
            console.log(res);
        })
            .always(function () {
            loading.dismiss();
        });
    };
    DebtPage.prototype.get_data_debt = function (params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        var loading = this.helper.loadingCtrl.create({
            content: "Memeriksa data"
        });
        loading.present();
        var url = this.helper.config.base_url('admin/outlet/debt/get/list');
        var data = {
            fields: 'debt_rest_pay_id,debt_id,pay_id,member_id,debt_date,debt_in,debt_out,debt_rest,outlet_id,member_name,member_mail,member_code,member_phone',
            outlet_id: this.outlet,
            group_by: 'member_id',
            order_by: 'pay_id DESC',
            where: {}
        };
        this.helper.$.ajax({
            url: url,
            type: 'POST',
            data: data,
            dataType: "json"
        })
            .done(function (res) {
            if (res.code == 200) {
                _this.filter_params = 'member_mail';
                _this.filter_input = '';
                _this.debts = res.data;
            }
            console.log(res);
        })
            .always(function () {
            loading.dismiss();
        });
    };
    DebtPage.prototype.cicilHutang = function (item) {
        var _this = this;
        this.helper.alertCtrl.create({
            title: "Isikan jumlah cicilan",
            inputs: [{
                    name: 'cicilan',
                    type: "number",
                    placeholder: 'jumlah cicilan',
                    handler: function (val) {
                        console.log(val);
                    }
                }],
            buttons: [
                {
                    text: 'Batal',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Tambahkan cicilan',
                    handler: function (data) {
                        console.log(data);
                        _this.process_cicil_hutang(item, data.cicilan);
                    }
                }
            ]
        }).present();
    };
    DebtPage.prototype.process_cicil_hutang = function (item, cicilan) {
        var _this = this;
        var loading = this.helper.loadingCtrl.create({
            content: "Memeriksa data"
        });
        loading.present();
        var url;
        if (this.state == 'list') {
            url = this.helper.config.base_url('admin/outlet/debt/pay/nominal');
        }
        else {
            url = this.helper.config.base_url('admin/outlet/debt/save');
        }
        item.debt_out = cicilan;
        item.debt_in = 0;
        if (this.state == 'detail' || this.state == 'history') {
            item.pay_type = "PAY_BY_BILL";
        }
        this.helper.$.ajax({
            url: url,
            type: 'POST',
            data: item,
            dataType: "json"
        })
            .done(function (res) {
            if (res.code == 200) {
                switch (_this.state) {
                    default:
                    case "list":
                        // code...
                        _this.get_data_debt();
                        break;
                    case "detail":
                        // code...
                        _this.openDetailDebt(_this.detail_item);
                        if (res.credit_rest > 0) {
                            _this.helper.alertCtrl.create({
                                title: "Kembalian cicilan",
                                message: "Terdapat kembalian cicilan sebesar <strong> " + res.credit_rest + " </strong>",
                                buttons: ["OK"]
                            }).present();
                        }
                        break;
                    case "history":
                        // code...
                        _this.openLogDebt(_this.detail_item);
                        if (res.credit_rest > 0) {
                            _this.helper.alertCtrl.create({
                                title: "Kembalian cicilan",
                                message: "Terdapat kembalian cicilan sebesar <strong> " + res.credit_rest + " </strong>",
                                buttons: ["OK"]
                            }).present();
                        }
                        break;
                }
            }
        })
            .always(function () {
            loading.dismiss();
        });
    };
    DebtPage.prototype.openDetailDebt = function (item) {
        var _this = this;
        this.detail_item = item;
        var loading = this.helper.loadingCtrl.create({
            content: "Memeriksa data"
        });
        loading.present();
        var url = this.helper.config.base_url('admin/outlet/debt/get/detail');
        var data = {
            outlet_id: this.outlet,
            fields: 'debt_rest_pay_id,total_debt_in,total_debt_out,debt_id,pay_id,member_id,debt_date,debt_in,debt_out,debt_rest,outlet_id,member_name,member_mail,member_phone,member_code',
            where: {
                member_id: item.member_id,
            },
            group_by: 'pay_id'
        };
        this.helper.$.ajax({
            url: url,
            type: 'POST',
            data: data,
            dataType: "json"
        })
            .done(function (res) {
            if (res.code == 200) {
                if (res.data.length <= 0) {
                    _this.outDetail();
                }
                else {
                    _this.debts = res.data;
                }
            }
        })
            .always(function () {
            loading.dismiss();
        });
    };
    DebtPage.prototype.openLogDebt = function (item) {
        var _this = this;
        this.detail_item = item;
        var loading = this.helper.loadingCtrl.create({
            content: "Memeriksa data"
        });
        loading.present();
        var url = this.helper.config.base_url('admin/outlet/debt/get/detail');
        var data = {
            outlet_id: this.outlet,
            fields: 'debt_id,pay_id,member_id,debt_date,debt_in,debt_out,debt_rest,outlet_id,member_name,member_mail,member_phone,member_code',
            where: {
                member_id: item.member_id,
                pay_id: item.pay_id,
            },
            order_by: 'debt_date DESC'
        };
        this.helper.$.ajax({
            url: url,
            type: 'POST',
            data: data,
            dataType: "json"
        })
            .done(function (res) {
            if (res.code == 200) {
                if (res.data.length <= 0) {
                    _this.openDetailDebt(item);
                }
                else {
                    _this.debts = res.data;
                }
            }
        })
            .always(function () {
            loading.dismiss();
        });
    };
    DebtPage.prototype.advanceOptions = function (index, item) {
        var _this = this;
        this.helper.actionSheet.create({
            title: 'Opsi lanjutan',
            buttons: [{
                    text: "Lihat data hutang",
                    handler: function () {
                        _this.state = 'detail';
                        _this.debts = [];
                        _this.openDetailDebt(item);
                    }
                }, {
                    text: "Cicil hutang member",
                    handler: function () {
                        _this.cicilHutang(item);
                    }
                }, {
                    text: "Kirim email pengingat hutang",
                    handler: function () {
                        _this.debtReminder(item);
                    }
                }, {
                    text: "Lihat kartu hutang",
                    handler: function () {
                        var url = _this.helper.config.base_url('admin/outlet/debt/bill/' + _this.outlet + '/' + item.member_id);
                        window.open(url, '_blank');
                    }
                }]
        }).present();
    };
    DebtPage.prototype.advanceOptionsDetail = function (index, item) {
        var _this = this;
        this.helper.actionSheet.create({
            title: 'Opsi lanjutan',
            buttons: [{
                    text: "Lihat log pembayaran",
                    handler: function () {
                        _this.state = 'history';
                        _this.debts = [];
                        _this.openLogDebt(item);
                    }
                }, {
                    text: "Cicil hutang nota",
                    handler: function () {
                        _this.cicilHutang(item);
                    }
                } /*,{
                    text: "Kirim email pengingat hutang",
                    handler: ()=>{
                        this.debtReminder(item)
                    }
                },{
                    text: "Lihat kartu hutang",
                    handler: ()=>{
                        let url = this.helper.config.base_url('admin/outlet/debt/bill/'+this.outlet+'/'+item.member_id)
                        window.open(url,'_blank')
                    }
                }*/
            ]
        }).present();
    };
    DebtPage.prototype.outDetail = function () {
        this.state = 'list';
        this.debts = [];
        this.get_data_debt();
    };
    DebtPage.prototype.outFromLog = function () {
        this.state = 'detail';
        this.debts = [];
        this.openDetailDebt(this.detail_item);
    };
    DebtPage.prototype.filter_options = function () {
        var _this = this;
        this.helper.actionSheet.create({
            title: "Filter lanjutan",
            buttons: [
                {
                    text: "Email member",
                    handler: function () {
                        _this.filter_params = 'member_mail';
                    }
                }, {
                    text: "Nama member",
                    handler: function () {
                        _this.filter_params = 'member_name';
                    }
                }, {
                    text: "Telephone member",
                    handler: function () {
                        _this.filter_params = 'member_phone';
                    }
                }, {
                    text: "Kode unik member",
                    handler: function () {
                        _this.filter_params = 'member_code';
                    }
                },
            ]
        }).present();
    };
    DebtPage.prototype.debtReminder = function (item) {
        var _this = this;
        var loading = this.helper.loadingCtrl.create({
            content: "Mengirimkan email",
        });
        loading.present();
        var url = this.helper.config.base_url('admin/outlet/debt/reminder');
        var data = {
            outlet_id: this.outlet,
            where: { member_id: item.member_id },
            fields: 'outlet_address,outlet_phone,outlet_logo,outlet_name,total_debt_rest,debt_id,pay_id,member_id,debt_date,debt_in,debt_out,debt_rest,outlet_id,member_name,member_mail,member_phone',
            item: item
        };
        this.helper.$.ajax({
            url: url,
            data: data,
            type: "POST",
            dataType: "json"
        })
            .done(function (res) {
            console.log(res);
            switch (res.code) {
                case 200:
                    _this.helper.alertCtrl.create({
                        title: "Proses berhasil",
                        message: "Pengingat telah dikirimkan",
                        buttons: ["OK"]
                    }).present();
                    break;
                default:
                    _this.helper.alertCtrl.create({
                        title: "Terjadi kesalahan",
                        message: "Pengingat gagal dikirimkan",
                        buttons: ["OK"]
                    }).present();
                    break;
            }
        })
            .fail(function () {
            _this.helper.alertCtrl.create({
                title: "Terjadi kesalahan code:500",
                message: "Fatal Error. Silahkan laporkan kepada pengembang aplikasi. ",
                buttons: ["OK"]
            }).present();
        })
            .always(function () {
            loading.dismiss();
        });
    };
    DebtPage.prototype.open_debt_card = function () {
        var url = this.helper.config.base_url('admin/outlet/debt/card/' + this.outlet);
        window.open(url, '_blank');
    };
    DebtPage.prototype.pay_as_nominal = function () {
    };
    DebtPage.prototype.pay_as_pay_id = function () {
    };
    DebtPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-debt',
            templateUrl: 'debt.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, HelperProvider])
    ], DebtPage);
    return DebtPage;
}());
export { DebtPage };
//# sourceMappingURL=debt.js.map