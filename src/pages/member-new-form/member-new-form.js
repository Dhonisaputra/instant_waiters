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
import { MemberPage } from '../member/member';
/**
 * Generated class for the MemberNewFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MemberNewFormPage = /** @class */ (function () {
    function MemberNewFormPage(navCtrl, navParams, helper, viewController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.helper = helper;
        this.viewController = viewController;
        this.segment_member = 'member_list';
        this.member = {};
        this.segment_member = 'member_list';
        this.outlet = this.helper.local.get_params(this.helper.config.variable.credential).data.outlet_id;
    }
    MemberNewFormPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MemberPage');
    };
    MemberNewFormPage.prototype.ionViewWillEnter = function () {
        if (this.navParams.data.event) {
            switch (this.navParams.data.event) {
                case "edit":
                    // code...
                    this.member.state = 'update';
                    break;
                default:
                    // code...
                    break;
            }
        }
        else {
            this.member = {};
        }
        if (this.navParams.data.member) {
            this.member = Object.assign({}, this.navParams.data.member);
            console.log(this.member);
        }
    };
    MemberNewFormPage.prototype.create_new_member = function () {
        var _this = this;
        var load = this.helper.loadingCtrl.create({
            content: "Memeriksa data"
        });
        load.present();
        this.member.outlet_id = this.outlet;
        this.helper.$.ajax({
            type: "POST",
            url: this.helper.config.base_url('admin/outlet/member/add'),
            data: this.member,
            dataType: 'json'
        })
            .done(function (res) {
            console.log(res);
            if (res.code == 200) {
                _this.member = {};
                _this.viewController.dismiss({ data: res.data });
            }
        })
            .always(function () {
            load.dismiss();
        });
    };
    MemberNewFormPage.prototype.update_new_member = function () {
        var _this = this;
        var load = this.helper.loadingCtrl.create({
            content: "Memeriksa data"
        });
        load.present();
        this.member.outlet_id = this.outlet;
        this.helper.$.ajax({
            type: "POST",
            url: this.helper.config.base_url('admin/outlet/member/update'),
            data: this.member,
            dataType: 'json'
        })
            .done(function (res) {
            console.log(res);
            if (res.code == 200) {
                _this.member = {};
                _this.navCtrl.setRoot(MemberPage);
            }
        })
            .always(function () {
            load.dismiss();
        });
    };
    MemberNewFormPage.prototype.closeModal = function () {
        this.viewController.dismiss();
    };
    MemberNewFormPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-member-new-form',
            templateUrl: 'member-new-form.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, HelperProvider, ViewController])
    ], MemberNewFormPage);
    return MemberNewFormPage;
}());
export { MemberNewFormPage };
//# sourceMappingURL=member-new-form.js.map