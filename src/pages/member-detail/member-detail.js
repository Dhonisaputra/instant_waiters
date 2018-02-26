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
 * Generated class for the MemberDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MemberDetailPage = /** @class */ (function () {
    function MemberDetailPage(navCtrl, navParams, helper) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.helper = helper;
        this.transaction = [];
        this.detail_member = {};
    }
    MemberDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MemberDetailPage');
    };
    MemberDetailPage.prototype.ionViewWillEnter = function () {
        this.outlet = this.helper.local.get_params(this.helper.config.variable.credential).data.outlet_id;
        this.detail_member = this.navParams.data.data;
        this.get_transaction();
    };
    MemberDetailPage.prototype.get_transaction = function () {
        var _this = this;
        var url = this.helper.config.base_url('admin/outlet/transaction/get');
        var params = {
            where: {
                member_id: this.navParams.data.data.member_id
            },
            limit: 20,
            outlet: this.outlet,
            page: 1,
            join: ['table', 'discount'],
            fields: "member_id,pay_id,users_outlet,table_id,bank_id,discount_id,payment_method,outlet,payment_nominal,payment_date,visitor_name,payment_date_only,payment_bills,tax_percent,tax_nominal,paid_date,payment_total,paid_nominal,paid_with_bank_nominal,payment_complement_status,payment_complement_note,orders,table_name,payment_rest,discount_name,discount_percent,discount_nominal,payment_cancel_status,payment_cancel_note,reference_counter"
        };
        var load = this.helper.loadingCtrl.create({
            content: "Memeriksa data"
        });
        load.present();
        this.helper.$.ajax({
            url: url,
            data: params,
            type: 'POST',
            dataType: 'json'
        })
            .done(function (res) {
            _this.transaction = res.data;
        })
            .always(function () {
            load.dismiss();
        });
    };
    MemberDetailPage.prototype.transform_date = function (date) {
        return this.helper.moment(date).format('HH:mm - YYYY MMM DD');
    };
    MemberDetailPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-member-detail',
            templateUrl: 'member-detail.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, HelperProvider])
    ], MemberDetailPage);
    return MemberDetailPage;
}());
export { MemberDetailPage };
//# sourceMappingURL=member-detail.js.map