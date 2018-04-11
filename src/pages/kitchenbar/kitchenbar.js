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
import { IonicPage, NavController, NavParams, LoadingController, ActionSheetController, AlertController } from 'ionic-angular';
import { DbLocalProvider } from '../../providers/db-local/db-local';
import { ConfigProvider } from '../../providers/config/config';
import { PaymentPage } from "../payment/payment";
import { ProductPage } from "../product/product";
import { SplitBillPage } from "../split-bill/split-bill";
import { BillProvider } from "../../providers/bill/bill";
import { BillItemEditorPage } from "../bill-item-editor/bill-item-editor";
import { HelperProvider } from '../../providers/helper/helper';
import * as $ from "jquery";
import * as moment from 'moment';
/**
 * Generated class for the KitchenbarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KitchenbarPage = /** @class */ (function () {
    function KitchenbarPage(billProvider, actionSheetCtrl, alertCtrl, navCtrl, navParams, dbLocalProvider, helper, config, loadingCtrl) {
        this.billProvider = billProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbLocalProvider = dbLocalProvider;
        this.helper = helper;
        this.config = config;
        this.loadingCtrl = loadingCtrl;
        this.items = [];
        this.original_items = [];
        this.filter_by = "visitor_name";
        this.order_by = 'payment_date DESC';
        this.filter_input = '';
        this.payment_status = -1;
        this.filter_date_start = moment().format('MM/DD/YYYY');
        this.filter_date_end = moment().format('MM/DD/YYYY');
        this.edit_transaction_status = false;
        this.page_params = {
            action: 'default',
            toggleSearchInput: false,
            toggleFilter: false
        };
        this.transaction_params = { data: { limit: 20, page: 1 } };
        this.outlet = this.helper.local.get_params(this.helper.config.variable.credential).outlet.outlet_id;
        var dataFetch = {
            online: true,
            infinite: false,
            data: {
                limit: 20,
                outlet: this.outlet,
                page: 1,
                join: ['table', 'discount'],
                fields: "pay_id,users_outlet,table_id,bank_id,discount_id,payment_method,outlet,payment_nominal,payment_date,visitor_name,payment_date_only,payment_bills,tax_percent,tax_nominal,paid_date,payment_total,paid_nominal,paid_with_bank_nominal,payment_complement_status,payment_complement_note,orders,table_name,payment_rest,discount_name,discount_percent,discount_nominal,payment_cancel_status,payment_cancel_note,reference_counter"
            }
        };
        if (this.navParams.data.body) {
            if (this.navParams.data.today == true) {
                this.navParams.data.body.where['payment_date_only'] = moment().format('YYYY-MM-DD');
                this.navParams.data.body.where['outlet_id'] = this.outlet;
                this.navParams.data.body.group_by = 'pay_id, pay_dt_order_session';
                this.navParams.data.body.order_by = 'pay_date ASC';
                this.payment_status = 0;
                this.filter_by = 'payment_date';
            }
            dataFetch.data = Object.assign(dataFetch.data, this.navParams.data.body);
            // this.get_transaction(dataFetch);
        }
        this.transaction_params = dataFetch;
        this.filter_transaction();
        if (this.navParams.data.page_params) {
            this.update_page_parameters(this.navParams.data.page_params);
        }
    }
    KitchenbarPage.prototype.ionViewDidLoad = function () {
    };
    KitchenbarPage.prototype.update_page_parameters = function (data) {
        if (data === void 0) { data = {}; }
        this.page_params = Object.assign(this.page_params, data);
    };
    KitchenbarPage.prototype.get_transaction = function (data) {
        var _this = this;
        if (data === void 0) { data = { data: {} }; }
        var loadingData = this.loadingCtrl.create({
            content: "Silahkan tunggu"
        });
        loadingData.present();
        this.transaction_params = data;
        var url = this.config.base_url('admin/outlet/transaction/realtime/kitchenbar');
        var ndata = {
            "where": {
                "outlet_id": this.outlet,
            },
            "join": ["md_prod_type", "tr_payment", "mg_member"],
            "group_by": "pay_id,pay_dt_order_session"
        };
        data.data = Object.assign(ndata, data.data);
        return $.post(url, data.data)
            .done(function (res) {
            res = !_this.helper.isJSON(res) ? res : JSON.parse(res);
            if (res.code == 200) {
                if (data.infinite == true) {
                    _this.items = _this.items.concat(res.data);
                    _this.original_items = _this.original_items.concat(res.data);
                }
                else {
                    _this.items = res.data;
                    _this.original_items = res.data;
                }
            }
            else {
                alert('Error occured while fetching data transaction!');
            }
        })
            .always(function () {
            loadingData.dismiss();
        });
    };
    KitchenbarPage.prototype.product_sort = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Urutkan berdasarkan',
            buttons: [
                {
                    text: 'Nama costumer',
                    handler: function () {
                        _this.filter_by = "visitor_name";
                        _this.filter_transaction();
                    }
                }, {
                    text: 'Nomor nota',
                    handler: function () {
                        _this.filter_by = "pay_id";
                        _this.filter_transaction();
                    }
                }, {
                    text: 'Tanggal pembelian',
                    handler: function () {
                        _this.filter_by = "payment_date";
                        _this.filter_transaction();
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        // actionSheet.dismiss();
                    }
                }
            ]
        });
        actionSheet.present();
    };
    KitchenbarPage.prototype.infinite_scroll = function (ev) {
        var _this = this;
        if (ev === void 0) { ev = {}; }
        this.transaction_params.data.page += 1;
        this.transaction_params.infinite = true;
        this.get_transaction(this.transaction_params)
            .then(function () {
            if (_this.transaction_params.infinite == true && ev.complete) {
                ev.complete();
            }
        });
    };
    KitchenbarPage.prototype.search_transaction = function (ev) {
        if (ev === void 0) { ev = {}; }
        var val = this.filter_input;
        var character_length = 4;
        if (val && val.length < character_length) {
            return false;
        }
        this.filter_transaction();
    };
    KitchenbarPage.prototype.filter_transaction = function (ev) {
        if (ev === void 0) { ev = {}; }
        var exclude_to_filter_input = ['table_name', 'visitor_name', 'pay_id'];
        var val = this.filter_input;
        if (val && exclude_to_filter_input.indexOf('this.filter_by') > -1) {
            return false;
        }
        this.transaction_params.data.where = {};
        this.transaction_params.data.like = [];
        this.transaction_params.infinite = false;
        this.transaction_params.data.page = 1;
        if (val && val.trim() != '') {
            if (this.filter_by == 'visitor_name') {
                this.transaction_params.data.like = [[this.filter_by, val]];
                delete this.transaction_params.data.where[this.filter_by];
            }
            else {
                this.transaction_params.data.where[this.filter_by] = val;
                delete this.transaction_params.data.like;
            }
        }
        if (this.filter_by == 'payment_date') {
            this.transaction_params.data.like = [[this.filter_by, moment().format("YYYY-MM-DD")]];
        }
        this.transaction_params.data.where['payment_complement_status'] = this.payment_status;
        if (this.payment_status < 0) {
            delete this.transaction_params.data.where['payment_complement_status'];
        }
        this.transaction_params.data.order_by = this.order_by;
        this.get_transaction(this.transaction_params)
            .then(function () {
        });
    };
    KitchenbarPage.prototype.edit_transaction = function (i, item) {
        this.navCtrl.push(PaymentPage, {
            previous: 'transaction-page',
            event: 'transaction.edit',
            trigger_event: 'transaction.edit',
            bill: item,
            receipt_page_params: {
                can_edit_slide_item: false
            }
        });
    };
    KitchenbarPage.prototype.pay_transaction = function (i, item) {
        item = Object.assign({}, item);
        this.navCtrl.push(ProductPage, {
            previous: 'transaction-page',
            event: 'transaction.edit',
            trigger_event: 'product.pay',
            bill: item,
            receipt_page_params: {
                can_edit_slide_item: true
            }
        });
    };
    KitchenbarPage.prototype.info_transaction = function (index, item) {
        this.navCtrl.push(BillItemEditorPage, {
            bill: item, index: index,
            receipt_page_params: {
                can_edit_slide_item: false,
                can_edit_bill_total: false,
                can_edit_table: true, can_edit_visitor_name: true
            }
        });
    };
    KitchenbarPage.prototype.default_click_transaction = function (index, item) {
        if (!this.navParams.data.event) {
            this.info_transaction(index, item);
        }
        else {
            this.pay_transaction(index, item);
        }
    };
    KitchenbarPage.prototype.transform_date = function (date) {
        return moment(date).format('HH:mm - YYYY MMM DD');
    };
    KitchenbarPage.prototype.cancel_transaction = function (index, item) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Success',
            subTitle: 'Orderan telah dibatalkan',
            buttons: ['OK']
        });
        var alertGagal = this.alertCtrl.create({
            title: 'Kesalahan',
            subTitle: 'Terdapat kesalahan saat membatalkan order. Silahkan dicoba kembali!',
            buttons: ['OK']
        });
        var prompt = this.alertCtrl.create({
            title: 'Batalkan pesanan',
            message: "Silahkan isikan alasan",
            inputs: [
                {
                    name: 'cancel_note',
                    placeholder: 'Alasan pembatalan'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        // console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        var loading = _this.helper.loadingCtrl.create({
                            content: 'Silahkan tunggu'
                        });
                        loading.present();
                        _this.billProvider.cancel_bill(item.pay_id, data.cancel_note)
                            .then(function (res) {
                            res = !_this.helper.isJSON(res) ? res : JSON.parse(res);
                            if (res.code == 200) {
                                alert.present();
                            }
                            else {
                                alertGagal.present();
                            }
                        })
                            .fail(function () {
                            alertGagal.present();
                        })
                            .always(function () {
                            loading.dismiss();
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    KitchenbarPage.prototype.advanceOptions = function (index, item) {
        var _this = this;
        if (item.payment_nominal <= 0 && item.payment_cancel_status == 0) {
            this.actionSheetCtrl.create({
                title: 'Opsi lanjutan',
                buttons: [
                    {
                        text: 'Gabungkan Nota',
                        handler: function () {
                            // this.filter_transaction()
                        }
                    }, {
                        text: 'Pisahkan Nota',
                        handler: function () {
                            _this.splitBill(index, item);
                        }
                    }, {
                        text: 'Lihat Detail Transaksi',
                        handler: function () {
                            _this.info_transaction(index, item);
                        }
                    }
                ]
            }).present();
        }
        else if (item.payment_nominal > 0 && item.payment_cancel_status == 0) {
            this.actionSheetCtrl.create({
                title: 'Opsi lanjutan',
                buttons: [
                    {
                        text: 'Lihat Detail Transaksi',
                        handler: function () {
                            _this.info_transaction(index, item);
                        }
                    }
                ]
            }).present();
        }
    };
    KitchenbarPage.prototype.splitBill = function (index, item) {
        this.navCtrl.push(SplitBillPage, {
            index: index, bill: item,
            receipt_page_params: {
                can_edit_slide_item: false,
                can_edit_bill_total: false,
                can_edit_table: false, can_edit_visitor_name: false,
                show_footer: false,
                show_split_arrow: true
            }
        });
    };
    KitchenbarPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-kitchenbar',
            templateUrl: 'kitchenbar.html',
        }),
        __metadata("design:paramtypes", [BillProvider, ActionSheetController, AlertController, NavController, NavParams, DbLocalProvider, HelperProvider, ConfigProvider, LoadingController])
    ], KitchenbarPage);
    return KitchenbarPage;
}());
export { KitchenbarPage };
//# sourceMappingURL=kitchenbar.js.map