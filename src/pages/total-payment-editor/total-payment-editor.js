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
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HelperProvider } from '../../providers/helper/helper';
import { BillProvider } from '../../providers/bill/bill';
import * as $ from "jquery";
// import * as moment from 'moment';
/**
 * Generated class for the TotalPaymentEditorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TotalPaymentEditorPage = /** @class */ (function () {
    function TotalPaymentEditorPage(navCtrl, viewCtrl, navParams, billProvider, helper) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.billProvider = billProvider;
        this.helper = helper;
        this.bill = {};
        this.page_params = {
            action: 'default',
            view_type: 'modal',
            show_history_stock: true,
            show_segment: true,
            show_detail_product: true,
        };
        this.bill = this.billProvider.get_bill_component();
        this.outlet = this.helper.local.get_params(this.helper.config.variable.credential).data.outlet_id;
        this.get_discount();
        if (this.navParams.data.page_params) {
            this.update_page_parameters(this.navParams.data.page_params);
        }
    }
    TotalPaymentEditorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailStockPage');
    };
    TotalPaymentEditorPage.prototype.update_page_parameters = function (data) {
        if (data === void 0) { data = {}; }
        this.page_params = Object.assign(this.page_params, data);
    };
    TotalPaymentEditorPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    TotalPaymentEditorPage.prototype.countTaxNominal = function () {
        this.bill.tax_percent = this.helper.toInt(this.bill.tax_percent) > 99 ? 99 : this.bill.tax_percent;
        var val = this.helper.IDRtoInt(this.bill.tax_percent);
        var total = this.billProvider.get_bill_component('payment_bills');
        var tax_nominal = total * (val / 100);
        this.billProvider.set_bill_component('tax_nominal', tax_nominal);
        this.billProvider.set_bill_component('tax_percent', val);
        this.billProvider.count_pricing();
    };
    TotalPaymentEditorPage.prototype.countTaxPercent = function () {
        var val = this.helper.IDRtoInt(this.bill.tax_nominal);
        var total = this.billProvider.get_bill_component('payment_bills');
        var tax_percent = ((val / total) * 100).toFixed(1); // to make 1 digit after comma
        this.billProvider.set_bill_component('tax_percent', tax_percent);
        this.billProvider.set_bill_component('tax_nominal', val);
        this.bill.tax_percent = tax_percent;
        this.billProvider.count_pricing();
    };
    TotalPaymentEditorPage.prototype.countDiscountNominal = function (el) {
        if (el === void 0) { el = {}; }
        var discount_percent = this.helper.toInt(this.bill.discount_percent) > 99 ? 99 : this.bill.discount_percent;
        if (el.target && discount_percent >= 99) {
            $(el.target).val(discount_percent);
            this.bill.discount_percent = discount_percent;
        }
        var val = this.helper.IDRtoInt(this.bill.discount_percent);
        var total = this.billProvider.get_bill_component('payment_bills');
        var discount_nominal = total * (val / 100);
        this.billProvider.set_bill_component('discount_nominal', discount_nominal);
        this.billProvider.set_bill_component('discount_percent', val);
        this.billProvider.count_pricing();
    };
    TotalPaymentEditorPage.prototype.countDiscountPercent = function (el) {
        if (el === void 0) { el = {}; }
        var val = this.helper.IDRtoInt(this.bill.discount_nominal);
        var total = this.billProvider.get_bill_component('payment_bills');
        if (val >= total && el.target) {
            val = total;
            this.bill.discount_nominal = val;
            $(el.target).val(val);
        }
        var discount_percent = ((val / total) * 100).toFixed(1); // to make 1 digit after comma
        this.billProvider.set_bill_component('discount_percent', discount_percent);
        this.billProvider.set_bill_component('discount_nominal', val);
        this.bill.discount_percent = discount_percent;
        this.billProvider.count_pricing();
    };
    TotalPaymentEditorPage.prototype.updateItem = function () {
        this.billProvider.update_bill();
        this.billProvider.count_pricing();
        this.closeModal();
    };
    TotalPaymentEditorPage.prototype.change_discount = function () {
        var index = this.bill.discounts.map(function (res) {
            return res.discount_id;
        }).indexOf(this.bill.discount_id);
        if (this.bill.discount_id < 1) {
            this.bill.discount_percent = 0;
            this.billProvider.set_bill_component('discount', '');
            console.log('no change');
        }
        else {
            var discount = this.bill.discounts[index];
            this.bill.discount_percent = discount.discount_percent;
            this.billProvider.set_bill_component('discount', this.bill.discounts[index]);
        }
        this.billProvider.set_bill_component('discount_id', this.bill.discount_id);
        this.countDiscountNominal();
        /*if(this.bill.discount[index].discount_percent < 1 && this.bill.discounts[index].discount_nominal > 0)
        {
            this.bill.discount_nominal = this.bill.discounts[index].discount_nominal;
            this.billProvider.set_bill_component('discount_nominal', this.bill.discounts[index].discount_nominal);
        }else
        {
    
            this.bill.discount_percent = this.bill.discounts[index].discount_percent;
            this.billProvider.set_bill_component('discount_nominal', this.bill.discounts[index].discount_percent);
            this.countDiscountNominal()
        }*/
    };
    TotalPaymentEditorPage.prototype.toggleTax = function (e) {
        if (this.bill.is_tax) {
            this.bill.tax_percent = 10;
        }
        else {
            this.bill.tax_percent = 0;
        }
        this.countTaxNominal();
    };
    TotalPaymentEditorPage.prototype.toggleDiscount = function () {
        this.bill.discount_percent = 0;
        if (this.bill.is_discount) {
        }
        else {
            this.bill.discount_percent = 0;
            this.bill.discount = [];
            this.bill.is_discount = 0;
            this.bill.discount_type_fill = 0;
            this.bill.discount_id = 0;
        }
        this.countDiscountNominal();
    };
    TotalPaymentEditorPage.prototype.get_discount = function () {
        var _this = this;
        this.outlet = this.helper.local.get_params(this.helper.config.variable.credential).data.outlet_id;
        var data = {
            outlet: this.outlet
        };
        console.log(data);
        $.post(this.helper.config.base_url('admin/disc-manage/data/discount/active'), data)
            .done(function (res) {
            res = !_this.helper.isJSON(res) ? res : JSON.parse(res);
            _this.bill.discounts = res.data;
        });
    };
    TotalPaymentEditorPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-total-payment-editor',
            templateUrl: 'total-payment-editor.html',
        }),
        __metadata("design:paramtypes", [NavController, ViewController, NavParams, BillProvider, HelperProvider])
    ], TotalPaymentEditorPage);
    return TotalPaymentEditorPage;
}());
export { TotalPaymentEditorPage };
//# sourceMappingURL=total-payment-editor.js.map