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
import { BillProvider } from '../../providers/bill/bill';
import { ProductPage } from '../product/product';
/**
 * Generated class for the SplitBillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SplitBillPage = /** @class */ (function () {
    function SplitBillPage(navCtrl, navParams, helper, billProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.helper = helper;
        this.billProvider = billProvider;
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
            show_content: true
        };
        this.helper.events.subscribe('bill.item.clicked', function (data) {
            var item = Object.assign(data.item, {});
            var qty = _this.billProvider.get_order_item(data.index, 'qty');
            if (qty > 0) {
                qty = qty - 1;
                _this.billProvider.set_order_item(data.index, 'qty', qty);
                var index = _this.billProvider.check_nota_order(_this.bill_index, item.product, item.order_session);
                if (index < 0) {
                    var ndata = Object.assign({}, data.item);
                    ndata.qty = 1;
                    ndata.index_ref = data.index;
                    delete ndata.pay_id;
                    delete ndata.detail_id;
                    _this.billProvider.new_nota_order(_this.bill_index, ndata);
                }
                else {
                    var nqty = _this.billProvider.get_nota_order(_this.bill_index, index, 'qty') + 1;
                    _this.billProvider.set_nota_order(_this.bill_index, index, 'qty', nqty);
                }
                if (qty <= 0) {
                    _this.billProvider.remove_order(data.index);
                }
            }
            _this.billProvider.count_pricing();
            _this.helper.events.publish('bill.update', {});
            _this.billProvider.nota_count_pricing(_this.billProvider.get_nota(_this.bill_index));
        });
        if (this.navParams.data.receipt_page_params) {
            this.update_page_parameters(this.navParams.data.receipt_page_params);
        }
    }
    SplitBillPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SplitBillPage');
    };
    SplitBillPage.prototype.update_page_parameters = function (data) {
        if (data === void 0) { data = {}; }
        this.receipt_page_params = Object.assign(this.receipt_page_params, data);
    };
    SplitBillPage.prototype.ionViewWillEnter = function () {
        console.log(this.navParams.data.bill);
        this.billProvider.update_bill_component(this.navParams.data.bill, false);
        this.billProvider.count_pricing();
        this.helper.events.publish('bill.update', {});
        var cBill = Object.assign({}, this.navParams.data.bill);
        cBill.orders = [];
        cBill.ref_bill = cBill.pay_id;
        delete cBill.pay_id;
        cBill.visitor_name = "#spl-" + cBill.ref_bill;
        this.bill_index = this.billProvider.new_nota(cBill);
        /*
        this.billProvider.set_header();
        this.billProvider.insert_item();
        this.billProvider.insert_item();
        this.billProvider.insert_item();
        
        */
    };
    SplitBillPage.prototype.ionViewWillUnload = function () {
        this.helper.events.unsubscribe('bill.item.clicked');
    };
    SplitBillPage.prototype.pay_transaction = function () {
        console.log(this.billProvider.get_nota(this.bill_index));
        var bill = this.billProvider.get_nota(this.bill_index);
        bill.reference_bill = this.billProvider.get_bill();
        if (Object.keys(bill.reference_bill.orders).length < 1 || Object.keys(bill.orders).length < 1) {
            this.helper.alertCtrl.create({
                title: 'Kesalahan',
                subTitle: 'Data tidak boleh kosong',
                buttons: ['OK']
            }).present();
            return false;
        }
        this.navCtrl.setRoot(ProductPage, {
            previous: 'transaction-page',
            event: 'transaction.split',
            trigger_event: 'product.pay',
            bill: bill,
            receipt_page_params: {
                can_edit_slide_item: true
            }
        });
    };
    SplitBillPage.prototype.update_receipt = function () {
        // let receipt = this.get_data_receipt();
        this.billProvider.set_nota_property(this.bill_index, 'visitor_name', this.bill.visitor_name);
        this.billProvider.update_bill_component({}, true);
    };
    SplitBillPage.prototype.editItem = function (item, index) {
        var qty = this.billProvider.get_nota_order(this.bill_index, index, 'qty');
        if (qty > 0) {
            qty = qty - 1;
            this.billProvider.set_nota_order(this.bill_index, index, 'qty', qty);
            item.id = item.product;
            this.billProvider.insert_product(item);
            if (qty > 0) {
            }
            else {
                this.billProvider.remove_nota_order(this.bill_index, index);
            }
        }
        this.billProvider.count_pricing();
        this.helper.events.publish('bill.update', {});
        this.billProvider.nota_count_pricing(this.billProvider.get_nota(this.bill_index));
    };
    SplitBillPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-split-bill',
            templateUrl: 'split-bill.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, HelperProvider, BillProvider])
    ], SplitBillPage);
    return SplitBillPage;
}());
export { SplitBillPage };
//# sourceMappingURL=split-bill.js.map