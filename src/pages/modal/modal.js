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
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalPage = /** @class */ (function () {
    function ModalPage(navCtrl, navParams, helper) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.helper = helper;
        this.modal = {};
        this.data_modal = [];
        this.state = 'new';
        this.outlet = parseInt(this.helper.local.get_params(this.helper.config.variable.credential).data.outlet_id);
        this.users_outlet = parseInt(this.helper.local.get_params(this.helper.config.variable.credential).data.users_outlet_id);
    }
    ModalPage.prototype.ionViewDidLoad = function () {
    };
    ModalPage.prototype.ionViewWillEnter = function () {
        this.get_modal();
    };
    ModalPage.prototype.reset_modal_form_data = function () {
        this.modal.modal_nominal = '';
        this.modal.modal_note = '';
    };
    ModalPage.prototype.create_new_modal = function () {
        var _this = this;
        var url = this.helper.config.base_url('admin/outlet/modal/add');
        var load = this.helper.loadingCtrl.create({
            content: "Menyimpan data"
        });
        load.present();
        this.modal.users_outlet_id = this.users_outlet;
        this.modal.outlet_id = this.outlet;
        this.helper.$.ajax({
            url: url,
            data: this.modal,
            type: 'POST',
            dataType: 'json'
        })
            .done(function (res) {
            if (res.code == 200) {
                _this.get_modal();
                _this.reset_modal_form_data();
            }
        })
            .always(function () {
            load.dismiss();
        });
    };
    ModalPage.prototype.update_modal = function () {
        var _this = this;
        var url = this.helper.config.base_url('admin/outlet/modal/update');
        var load = this.helper.loadingCtrl.create({
            content: "Memperbarui data"
        });
        this.modal.users_outlet_id = this.users_outlet;
        this.modal.outlet_id = this.outlet;
        load.present();
        this.helper.$.ajax({
            url: url,
            data: this.modal,
            type: 'POST',
            dataType: 'json'
        })
            .done(function (res) {
            if (res.code == 200) {
                _this.reset_modal_form_data();
                // this.modal = {}
                _this.get_modal();
            }
        })
            .always(function () {
            load.dismiss();
        });
    };
    ModalPage.prototype.delete_modal = function () {
        var _this = this;
        var url = this.helper.config.base_url('admin/outlet/modal/delete');
        var load = this.helper.loadingCtrl.create({
            content: "Memeriksa data"
        });
        load.present();
        this.modal.users_outlet_id = this.users_outlet;
        this.modal.outlet_id = this.outlet;
        this.helper.$.ajax({
            url: url,
            data: this.modal,
            type: 'POST',
            dataType: 'json'
        })
            .done(function (res) {
            if (res.code == 200) {
                _this.get_modal();
                _this.reset_modal_form_data();
                // this.modal = {}
            }
        })
            .always(function () {
            load.dismiss();
        });
    };
    ModalPage.prototype.get_modal = function () {
        var _this = this;
        var url = this.helper.config.base_url('admin/outlet/modal/get');
        var load = this.helper.loadingCtrl.create({
            content: "Memeriksa data"
        });
        var params = {
            outlet_id: this.outlet,
            fields: 'modal_id,users_outlet_id,outlet_id,modal_date,modal_nominal,modal_note,modal_date_only,users_fullname',
            where: {
                'modal_date_only': this.helper.moment().format('YYYY-MM-DD'),
                'outlet_id': this.outlet
            },
            join: ["users_outlet"]
        };
        load.present();
        this.helper.$.ajax({
            url: url,
            data: params,
            type: 'POST',
            dataType: 'json'
        })
            .done(function (res) {
            if (res.code == 200) {
                _this.data_modal = res.data;
            }
        })
            .always(function () {
            load.dismiss();
        });
    };
    ModalPage.prototype.advanceOptions = function (index, item) {
        var _this = this;
        this.helper.actionSheet.create({
            title: 'Opsi Lanjutan',
            buttons: [
                {
                    text: 'Edit data modal',
                    handler: function () {
                        _this.state = 'update';
                        _this.modal = _this.helper.clone_object(item);
                    }
                }, {
                    text: 'Hapus data modal',
                    handler: function () {
                        _this.helper.alertCtrl.create({
                            title: "Hapus modal awal",
                            "message": 'Aksi ini akan menghapus data modal. apakah anda akan tetap melanjutkan?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    handler: function (data) {
                                    }
                                },
                                {
                                    text: 'Hapus',
                                    handler: function (data) {
                                        _this.modal = _this.helper.clone_object(item);
                                        _this.delete_modal();
                                    }
                                }
                            ]
                        }).present();
                    }
                }
            ]
        }).present();
    };
    ModalPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-modal',
            templateUrl: 'modal.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, HelperProvider])
    ], ModalPage);
    return ModalPage;
}());
export { ModalPage };
//# sourceMappingURL=modal.js.map