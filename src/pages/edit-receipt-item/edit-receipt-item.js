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
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { BillProvider } from '../../providers/bill/bill';
import * as $ from "jquery";
/**
 * Generated class for the EditReceiptItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditReceiptItemPage = /** @class */ (function () {
    function EditReceiptItemPage(viewCtrl, navCtrl, navParams, billProvider, alertCtrl) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.billProvider = billProvider;
        this.alertCtrl = alertCtrl;
        this.item = {};
    }
    EditReceiptItemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditReceiptItemPage');
    };
    EditReceiptItemPage.prototype.ionViewWillEnter = function () {
        this.item = {};
        // this.billProvider.update_data_bill()
        console.log(this.navParams.data.index);
        var item = this.billProvider.get_order(this.navParams.data.index);
        this.item = item ? item : {};
    };
    EditReceiptItemPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    EditReceiptItemPage.prototype.countChargeNominal = function (el) {
        if (el === void 0) { el = {}; }
        var product_price = this.billProvider.helper.IDRtoInt(this.billProvider.get_order_item(this.item.index, 'price'));
        var qty = this.billProvider.helper.IDRtoInt(this.billProvider.get_order_item(this.item.index, 'qty'));
        var val = this.billProvider.helper.IDRtoInt(this.item.discount_percent);
        if (val >= 99 && el.target) {
            val = 99;
            $(el.target).val(val);
            this.item.discount_percent = val;
        }
        var price = this.billProvider.helper.IDRtoInt(this.item.price);
        var chargeNominal = price * (val / 100);
        this.item.totalWithCharge = this.billProvider.helper.intToIDR(price + chargeNominal);
        this.item.discount_nominal = this.billProvider.helper.intToIDR(chargeNominal);
        this.billProvider.update_order_item(this.item.index, 'discount_nominal', chargeNominal);
        this.billProvider.update_order_item(this.item.index, 'total', (product_price * qty) - chargeNominal);
    };
    EditReceiptItemPage.prototype.countChargePercent = function (el) {
        if (el === void 0) { el = {}; }
        var product_price = this.billProvider.helper.IDRtoInt(this.billProvider.get_order_item(this.item.index, 'price'));
        var qty = this.billProvider.helper.IDRtoInt(this.billProvider.get_order_item(this.item.index, 'qty'));
        var val = this.billProvider.helper.IDRtoInt(this.item.discount_nominal);
        var price = this.billProvider.helper.IDRtoInt(this.item.price);
        if (val >= product_price && el.target) {
            val = product_price;
            $(el.target).val(val);
            this.item.discount_nominal = val;
        }
        val = val ? val : 0;
        this.item.discount_percent = ((val / price) * 100).toFixed(1); // to make 1 digit after comma
        this.item.totalWithCharge = this.billProvider.helper.intToIDR(price + val);
        this.billProvider.update_order_item(this.item.index, 'discount_percent', this.item.discount_percent);
        this.billProvider.update_order_item(this.item.index, 'total', (product_price * qty) - val);
    };
    EditReceiptItemPage.prototype.changeNotes = function () {
        this.item.note = this.item.note ? this.item.note : '';
        this.billProvider.update_order_item(this.item.index, 'notes', this.item.note);
        // this.ionViewWillEnter()
    };
    EditReceiptItemPage.prototype.changeComplementNotes = function () {
        this.item.complement_note = this.item.complement_note ? this.item.complement_note : '';
        this.billProvider.update_order_item(this.item.index, 'complement_note', this.item.complement_note);
        // this.ionViewWillEnter()
    };
    EditReceiptItemPage.prototype.changeComplementItems = function (type, el) {
        if (type === void 0) { type = 'input'; }
        if (el === void 0) { el = {}; }
        var qty;
        switch (type) {
            case "input":
                qty = this.billProvider.get_order_item(this.item.index, 'qty');
                var complement_item = this.item.complement_item > qty ? qty : this.item.complement_item;
                if (this.item.complement_item >= qty && el.target) {
                    $(el.target).val(complement_item);
                    this.item.complement_item = complement_item;
                }
                this.billProvider.update_order_item(this.item.index, 'complement_item', this.item.complement_item);
                break;
            case "reduce":
                this.item.complement_item -= 1;
                if (this.item.complement_item < 1) {
                    this.item.complement_item = 1;
                }
                this.billProvider.update_order_item(this.item.index, 'complement_item', this.item.complement_item);
                break;
            case "add":
                // code...
                this.item.complement_item += 1;
                qty = this.billProvider.get_order_item(this.item.index, 'qty');
                this.item.complement_item = this.item.complement_item > qty ? qty : this.item.complement_item;
                this.billProvider.update_order_item(this.item.index, 'complement_item', this.item.complement_item);
                break;
            default:
                // code...
                break;
        }
        // this.ionViewWillEnter()
    };
    EditReceiptItemPage.prototype.changeComplementStatus = function () {
        var product_price = this.billProvider.helper.IDRtoInt(this.billProvider.get_order_item(this.item.index, 'price'));
        var qty = this.billProvider.helper.IDRtoInt(this.billProvider.get_order_item(this.item.index, 'qty'));
        var complement_status = this.item.complement_status ? 1 : 0;
        this.billProvider.update_order_item(this.item.index, 'complement_status', complement_status);
        if (this.item.complement_status > 0) {
            // jika ditemukan complement < 1, maka lakukan complement semuanya.
            if (!this.item.complement_item || this.item.complement_item < 1) {
                this.item.complement_item = this.billProvider.get_order_item(this.item.index, 'qty');
            }
            else {
            }
            // update total
            if (this.item.complement_item == qty) {
                this.billProvider.update_order_item(this.item.index, 'total', 0);
            }
            else {
                var not_complement = qty - this.item.complement_item;
                var price = not_complement * product_price;
                this.billProvider.update_order_item(this.item.index, 'total', price);
            }
            // simpan complement item.
            this.billProvider.update_order_item(this.item.index, 'complement_item', this.item.complement_item);
        }
        else {
            this.item.complement_item = 0;
            this.billProvider.update_order_item(this.item.index, 'total', product_price * qty);
            this.billProvider.update_order_item(this.item.index, 'complement_item', 0);
            this.countChargeNominal();
        }
        // this.ionViewWillEnter()
    };
    EditReceiptItemPage.prototype.reduceItem = function () {
        var dataitem = this.billProvider.get_order(this.item.index);
        if (dataitem.qty <= 1) {
            return false;
        }
        else {
            this.billProvider.update_order_item(this.item.index, 'qty', parseInt(this.item.qty) - 1);
            this.billProvider.count_pricing();
            this.ionViewWillEnter();
            // this.trigger_update_receipt();
        }
    };
    EditReceiptItemPage.prototype.addItem = function () {
        var dataitem = this.billProvider.get_order(this.item.index);
        this.billProvider.update_order_item(this.item.index, 'qty', parseInt(this.item.qty) + 1);
        this.billProvider.count_pricing();
        this.ionViewWillEnter();
        // this.trigger_update_receipt();
    };
    EditReceiptItemPage.prototype.updateItem = function () {
        var alertErrorProduct = this.alertCtrl.create({
            title: 'Kesalahan',
            subTitle: 'Mohon untuk mengisi catatan complement!',
            buttons: ["OK"]
        });
        if (this.item.complement_status > 0 && (!this.item.complement_note || this.item.complement_note.toString().length < 1)) {
            alertErrorProduct.present();
            return false;
        }
        this.changeComplementStatus();
        this.billProvider.update_bill();
        this.billProvider.count_pricing();
        // this.closeModal();
        this.navCtrl.pop({});
        /*this.navCtrl.setRoot(ProductPage,{
          event: 'order.return',
          trigger_event: 'order.return',
          page_params:
          {
            use_temporary_data: true
          }
        })*/
    };
    EditReceiptItemPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-edit-receipt-item',
            templateUrl: 'edit-receipt-item.html',
        }),
        __metadata("design:paramtypes", [ViewController, NavController, NavParams, BillProvider, AlertController])
    ], EditReceiptItemPage);
    return EditReceiptItemPage;
}());
export { EditReceiptItemPage };
//# sourceMappingURL=edit-receipt-item.js.map