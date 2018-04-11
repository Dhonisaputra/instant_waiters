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
import { IonicPage, NavController, NavParams, Events, ModalController, ViewController } from 'ionic-angular';
import { BillProvider } from '../../providers/bill/bill';
// import { ProductProvider } from '../../providers/product/product';
import { DbLocalProvider } from '../../providers/db-local/db-local';
import { TablePage } from '../table/table';
import { TotalPaymentEditorPage } from '../total-payment-editor/total-payment-editor';
import { EditReceiptItemPage } from '../edit-receipt-item/edit-receipt-item';
import { HelperProvider } from '../../providers/helper/helper';
import { MemberNewFormPage } from '../member-new-form/member-new-form';
import { MemberPage } from '../member/member';
import * as $ from "jquery";
/**
* Generated class for the ReceiptPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var ReceiptPage = /** @class */ (function () {
    function ReceiptPage(helper, navCtrl, navParams, events, dbLocalProvider, billProvider, modalCtrl, viewCtrl) {
        var _this = this;
        this.helper = helper;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.dbLocalProvider = dbLocalProvider;
        this.billProvider = billProvider;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.receipts = [];
        this.event_handler = {};
        this.bill = this.billProvider.default_bill_value();
        this.receipt_page_params = {
            can_edit_slide_item: true,
            can_edit_bill_total: true,
            can_edit_table: false,
            can_edit_visitor_name: false,
            show_footer: true,
            show_header: true,
            show_content: true,
            show_split_arrow: false,
        };
        this.receipts = [];
        this.taxqty = 10;
        // if(navParams)
        // update data
        // event listener to update bill
        events.subscribe('bill.update', function (data) {
            _this.trigger_update_receipt();
        });
        // event listener to get data bill and passing to emiter
        events.subscribe('get.data.receipt', function (data) {
            var data_receipts = _this.billProvider.data_bill({
                _passed_data: data,
            });
            events.publish('receive.data.receipt', data_receipts);
        });
        // event listener to reset data bill
        events.subscribe('reset.data.receipt', function (data) {
            _this.billProvider.reset_bill();
            _this.bill = {};
            _this.trigger_update_receipt();
        });
        if (this.navParams.data.receipt_page_params) {
            this.update_page_parameters(this.navParams.data.receipt_page_params);
        }
    }
    // function trigger to updating data receipts
    ReceiptPage.prototype.trigger_update_receipt = function () {
        var data = this.billProvider.data_bill();
        this.set_receipts(data);
        this.billProvider.detection_order_session_from_orders(data.orders);
    };
    ReceiptPage.prototype.update_receipt = function () {
        // let receipt = this.get_data_receipt();
        /*if(this.billProvider.get_bill_component('member_id'))
        {
            this.billProvider.set_bill_component('member_id', undefined);

            this.billProvider.set_bill_component('member', undefined);

            this.billProvider.set_bill_component('nota_screenshot', undefined);
        }*/
        this.billProvider.set_bill_component('visitor_name', this.bill.visitor_name);
        this.billProvider.update_bill_component({}, true);
    };
    ReceiptPage.prototype.get_data_receipt = function () {
        var receipt = {
            // GrandTotalPrice  : this.GrandTotalPrice,
            // sumPrice         : this.sumPrice,
            // tax              : this.tax,
            // receipts         : this.receipts,
            visitor_name: this.bill.visitor_name,
        };
        return receipt;
    };
    ReceiptPage.prototype.set_receipts = function (data) {
        if (data === void 0) { data = {}; }
        this.bill = data;
    };
    ReceiptPage.prototype.get_orders = function () {
        var orders = this.billProvider.get_bill_component('orders');
        return orders;
    };
    ReceiptPage.prototype.ionViewDidLoad = function () {
    };
    ReceiptPage.prototype.ionViewWillUnload = function () {
    };
    ReceiptPage.prototype.update_page_parameters = function (data) {
        if (data === void 0) { data = {}; }
        this.receipt_page_params = Object.assign(this.receipt_page_params, data);
    };
    ReceiptPage.prototype.ionViewWillEnter = function () {
        switch (this.navParams.data.event) {
            case "transaction.edit":
                break;
            default:
                this.trigger_update_receipt();
                break;
        }
        this.detect_parameters();
    };
    ReceiptPage.prototype.detect_parameters = function () {
        this.event_handler[this.navParams.data.events] = this.navParams.data;
    };
    ReceiptPage.prototype.change_table = function () {
        this.events.publish('bill.table.change', {});
        // if(this.receipt_page_params.can_edit_table)
        // {
        var index = -1;
        var isFound = false;
        var navCtrlLen = this.navCtrl.length();
        this.navCtrl.setRoot(TablePage, {
            previous: 'product-page',
            event: 'bill.changeTable',
            trigger_event: 'table.change',
            data: this.event_handler['table.pick']
        });
        // }
    };
    ReceiptPage.prototype.removeReceipt = function (ev, item) {
        // alert('removed')
    };
    ReceiptPage.prototype.removeItem = function (index, item) {
        this.billProvider.remove_order(index);
        this.billProvider.count_pricing();
        this.billProvider.update_bill();
        this.trigger_update_receipt();
    };
    ReceiptPage.prototype.reduceItem = function (index, item) {
        item = Object.assign({}, item);
        var dataitem = this.billProvider.get_order(index);
        if (item.detail_id) {
            delete item.detail_id;
            if (!this.billProvider.isset_order_session()) {
                this.billProvider.add_order_session();
            }
            item.order_session = this.billProvider.get_active_order_session();
            item.id = item.product;
            item.qty = -Math.abs(1);
            item.price = -Math.abs(item.price * item.qty);
            this.billProvider.insert_item(item, 'reduce');
            this.billProvider.set_order_session_item_counter(item.order_session);
            this.trigger_update_receipt();
        }
        else {
            if (item.qty <= 0) {
                return false;
            }
            this.billProvider.update_order_item(index, 'qty', parseInt(item.qty) - 1);
            this.billProvider.count_pricing();
            this.billProvider.update_bill();
            this.trigger_update_receipt();
        }
    };
    ReceiptPage.prototype.addItem = function (index, item) {
        item = Object.assign({}, item);
        var dataitem = this.billProvider.get_order(index);
        if (item.detail_id) {
            delete item.detail_id;
            if (!this.billProvider.isset_order_session()) {
                this.billProvider.add_order_session();
            }
            item.order_session = this.billProvider.get_active_order_session();
            item.id = item.product;
            this.billProvider.insert_item(item);
            this.billProvider.set_order_session_item_counter(item.order_session);
            this.trigger_update_receipt();
        }
        else {
            if (parseInt(dataitem.qty) >= parseInt(dataitem.stock)) {
                return false;
            }
            else {
                this.billProvider.update_order_item(index, 'qty', parseInt(item.qty) + 1);
                this.billProvider.count_pricing();
                this.billProvider.update_bill();
                this.trigger_update_receipt();
            }
        }
    };
    ReceiptPage.prototype.editItem = function (item, index) {
        this.events.publish('bill.item.clicked', { item: item, index: index });
        if (!this.receipt_page_params.can_edit_slide_item) {
            return false;
        }
        item.index = index;
        var modal = this.modalCtrl.create(EditReceiptItemPage, item);
        // let modal = this.modalCtrl.create(EditReceiptItemPage, item)
        modal.present();
        // modal.onDidDismiss(data => {
        // this.trigger_update_receipt();
        // });
    };
    ReceiptPage.prototype.edit_total_payment = function () {
        var _this = this;
        if (!this.receipt_page_params.can_edit_bill_total) {
            return false;
        }
        // this.navCtrl.push(TotalPaymentEditorPage, {})
        var modal = this.modalCtrl.create(TotalPaymentEditorPage, {});
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.trigger_update_receipt();
        });
    };
    ReceiptPage.prototype.openFormNewMember = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        var modal = this.modalCtrl.create(MemberNewFormPage, data.data);
        modal.onDidDismiss(function (data) {
            _this.callbackNewMember(data);
        });
        modal.present();
    };
    ReceiptPage.prototype.callbackNewMember = function (data) {
        var _this = this;
        if (data.data) {
            this.bill.visitor_name = data.data.member_name;
            this.billProvider.set_bill_component('member_id', data.data.member_id);
            this.billProvider.set_bill_component('member', data.data);
            this.helper.html2canvas($('.receipt-product')[0])
                .then(function (canvas) {
                var img = canvas.toDataURL();
                // img = this.helper.html_encode(img);
                img = img.split(',')[1];
                _this.billProvider.set_bill_component('nota_screenshot', img);
            })
                .catch(function (err) {
                console.log("error canvas", err);
            });
            this.update_receipt();
        }
    };
    ReceiptPage.prototype.openFormDataMember = function () {
        var _this = this;
        var modal = this.modalCtrl.create(MemberPage, {
            event: "pick.member",
            onClick: function (member) {
                _this.viewCtrl.dismiss(member);
            }
        });
        modal.onDidDismiss(function (data) {
            _this.callbackNewMember(data);
        });
        modal.present();
    };
    ReceiptPage.prototype.optionVisitor = function () {
        var _this = this;
        var visitor_name = this.bill.visitor_name;
        this.helper.actionSheet.create({
            title: 'Opsi lanjutan',
            buttons: [
                {
                    text: 'Tambahkan Member',
                    handler: function () {
                        _this.openFormNewMember({
                            data: {
                                member: { member_name: visitor_name }
                            }
                        });
                    }
                }, {
                    text: 'Pilih Member',
                    handler: function () {
                        _this.openFormDataMember();
                    }
                }
            ]
        }).present();
    };
    ReceiptPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-receipt',
            templateUrl: 'receipt.html',
        }),
        __metadata("design:paramtypes", [HelperProvider, NavController, NavParams, Events, DbLocalProvider, BillProvider, ModalController, ViewController])
    ], ReceiptPage);
    return ReceiptPage;
}());
export { ReceiptPage };
//# sourceMappingURL=receipt.js.map