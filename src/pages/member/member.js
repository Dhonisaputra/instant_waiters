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
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { HelperProvider } from '../../providers/helper/helper';
import { MemberNewFormPage } from '../member-new-form/member-new-form';
import { MemberDetailPage } from '../member-detail/member-detail';
/**
 * Generated class for the MemberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MemberPage = /** @class */ (function () {
    function MemberPage(navCtrl, navParams, helper, modalCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.helper = helper;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.segment_member = 'member_list';
        this.member = [];
        this.segment_member = 'member_list';
        this.outlet = this.helper.local.get_params(this.helper.config.variable.credential).data.outlet_id;
    }
    MemberPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MemberPage');
    };
    MemberPage.prototype.fetching_member = function () {
        var _this = this;
        var load = this.helper.loadingCtrl.create({
            content: "Memeriksa data"
        });
        load.present();
        this.helper.$.ajax({
            type: "POST",
            url: this.helper.config.base_url('admin/outlet/member/get'),
            data: {
                outlet_id: this.outlet
            },
            dataType: 'json'
        })
            .done(function (res) {
            _this.member = res.data;
        })
            .always(function () {
            load.dismiss();
        });
    };
    MemberPage.prototype.ionViewWillEnter = function () {
        this.fetching_member();
    };
    MemberPage.prototype.hapus_member = function (item) {
        var _this = this;
        var load = this.helper.loadingCtrl.create({
            content: "menghapus member"
        });
        load.present();
        this.helper.$.ajax({
            type: "POST",
            url: this.helper.config.base_url('admin/outlet/member/delete'),
            data: {
                outlet_id: this.outlet,
                member_id: item.member_id
            },
            dataType: 'json'
        })
            .done(function (res) {
            // this.member = res.data
            if (res.code == 200) {
                _this.helper.alertCtrl.create({
                    title: "Member berhasil dihapus",
                    message: "Member telah berhasil dihapus",
                    buttons: ["OK"]
                }).present();
                _this.fetching_member();
            }
            else {
                _this.helper.alertCtrl.create({
                    title: "Terdapat kesalah",
                    message: "Member gagal dihapus",
                    buttons: ["OK", {
                            text: 'Ulangi',
                            handler: function () {
                                _this.hapus_member(item);
                            }
                        }]
                }).present();
            }
        })
            .fail(function () {
            _this.helper.alertCtrl.create({
                title: "Terdapat kesalah",
                message: "Member gagal dihapus",
                buttons: ["OK", {
                        text: 'Ulangi',
                        handler: function () {
                            _this.hapus_member(item);
                        }
                    }]
            }).present();
        })
            .always(function () {
            load.dismiss();
        });
    };
    MemberPage.prototype.update_new_member = function () {
    };
    MemberPage.prototype.openFormPopover = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        var modal = this.modalCtrl.create(MemberNewFormPage, data);
        modal.onDidDismiss(function (data) {
            _this.fetching_member();
        });
        modal.present();
    };
    MemberPage.prototype.pickMember = function (index, item) {
        switch (this.navParams.data.event) {
            case "pick.member":
                this.viewCtrl.dismiss({ data: item });
                break;
            default:
                // code...
                this.openDetailPage(index, item);
                break;
        }
        // this.navCtrl.push(MemberNewFormPage);
    };
    MemberPage.prototype.openDetailPage = function (index, item) {
        console.log(index, item);
        this.navCtrl.push(MemberDetailPage, { index: index, data: item });
    };
    MemberPage.prototype.advanceOptions = function (index, item) {
        var _this = this;
        this.helper.actionSheet.create({
            title: 'Opsi lanjutan',
            buttons: [
                {
                    text: 'Edit Member',
                    handler: function () {
                        _this.openFormPopover({ index: index, member: item, event: 'edit' });
                    }
                }, {
                    text: 'Buka Detail Member',
                    handler: function () {
                        _this.openDetailPage(index, item);
                    }
                }, {
                    text: 'Hapus Member',
                    handler: function () {
                        _this.helper.alertCtrl.create({
                            title: "Peringatan",
                            message: "Apakah anda akan menghapus member ini?",
                            buttons: ["Batal", {
                                    text: 'Hapus',
                                    handler: function () {
                                        _this.hapus_member(item);
                                    }
                                }]
                        }).present();
                    }
                }
            ]
        }).present();
    };
    MemberPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-member',
            templateUrl: 'member.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, HelperProvider, ModalController, ViewController])
    ], MemberPage);
    return MemberPage;
}());
export { MemberPage };
//# sourceMappingURL=member.js.map