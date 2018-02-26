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
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { BillProvider } from '../../providers/bill/bill';
import { HelperProvider } from '../../providers/helper/helper';
/**
 * Generated class for the BillItemEditorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BillItemEditorPage = /** @class */ (function () {
    function BillItemEditorPage(navCtrl, navParams, billProvider, helper, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.billProvider = billProvider;
        this.helper = helper;
        this.events = events;
        this.bill = {};
        // this.navParams.data = {} // this code use to reset navParams. bcause, whenever a page pushed from this page and popped back, this data bill item always from the previous event. 
    }
    BillItemEditorPage.prototype.ionViewWillEnter = function () {
        this.bill = this.navParams.data.bill;
        console.log(this.bill);
        this.billProvider.update_bill_component(this.navParams.data.bill, false);
        this.billProvider.count_pricing();
        this.events.publish('bill.update', {});
    };
    BillItemEditorPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-bill-item-editor',
            templateUrl: 'bill-item-editor.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, BillProvider, HelperProvider, Events])
    ], BillItemEditorPage);
    return BillItemEditorPage;
}());
export { BillItemEditorPage };
//# sourceMappingURL=bill-item-editor.js.map