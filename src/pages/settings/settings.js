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
import { DbLocalProvider } from '../../providers/db-local/db-local';
import { HelperProvider } from '../../providers/helper/helper';
import { ErrorPage } from '../../pages/error/error';
import { LoginPage } from '../../pages/login/login';
import { PrintBluetoothPanelPage } from '../../pages/print-bluetooth-panel/print-bluetooth-panel';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, db, helper) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.helper = helper;
        this.segment = 'menu';
        this.settings = {
            choose_table_first: true
        };
        this.users = {};
        this.settings = Object.assign(this.settings, this.helper.local.get_params(this.helper.config.variable.settings));
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.update_settings = function () {
        this.helper.local.set_params(this.helper.config.variable.settings, this.settings);
        this.helper.storage.set(this.helper.config.variable.settings, this.settings);
        this.helper.toast.create({
            message: "Settings telah diperbarui",
            duration: 1500
        }).present();
    };
    SettingsPage.prototype.to_error_page = function (code, message) {
        this.navCtrl.push(ErrorPage, { code: code, message: message });
    };
    SettingsPage.prototype.sync = function () {
        this.db.sync();
    };
    SettingsPage.prototype.logout = function () {
        this.helper.local.reset_params('is_login');
        this.helper.storage.remove(this.helper.config.variable.credential);
        this.helper.storage.remove('pinned_product');
        this.helper.local.set_params(this.helper.config.variable.credential, { users: {}, data: {}, outlet: {}, type_product: [] });
        this.helper.local.set_params('pinned_params', []);
        this.navCtrl.setRoot(LoginPage);
    };
    SettingsPage.prototype.openPrinterBluetoothPrinterSettings = function () {
        this.navCtrl.push(PrintBluetoothPanelPage);
    };
    SettingsPage.prototype.updateUser = function () {
        var _this = this;
        if (this.users.new_password != this.users.rePassword) {
            this.helper.alertCtrl.create({
                title: "Kesalahan",
                message: "password tidak sama",
                buttons: ["OK"]
            }).present();
            return false;
        }
        var url = this.helper.config.base_url('sign/mobile_change_password');
        var users_id = this.helper.local.get_params(this.helper.config.variable.credential).users.users_id;
        this.helper.$.post(url, { users_id: users_id, new_password: this.users.new_password, old_password: this.users.old_password })
            .done(function (res) {
            res = JSON.parse(res);
            switch (res.code) {
                case 200:
                    _this.helper.toast.create({
                        message: "password sudah diganti",
                        duration: 2000
                    }).present();
                    break;
                case 404:
                    _this.helper.alertCtrl.create({
                        title: "Kesalahan",
                        message: "Pengguna tidak ditemukan",
                        buttons: ["OK"]
                    }).present();
                    break;
                default:
                case 500:
                    _this.helper.alertCtrl.create({
                        title: "Kesalahan Fatal",
                        message: "System tidak dapat mengolah permintaan anda. Silahkan laporkan kepada pengembang sistem",
                        buttons: ["OK"]
                    }).present();
                    break;
                case 304:
                    _this.helper.alertCtrl.create({
                        title: "Tidak ada perubahan",
                        message: "Password yang anda isikan sama dengan sebelumnya, tidak dapat melakukan perubahan",
                        buttons: ["OK"]
                    }).present();
                    break;
            }
        })
            .fail(function () {
            _this.helper.alertCtrl.create({
                title: "Kesalahan Fatal",
                message: "System tidak dapat mengolah permintaan anda. Silahkan laporkan kepada pengembang sistem",
                buttons: ["OK"]
            }).present();
        });
    };
    SettingsPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-settings',
            templateUrl: 'settings.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, DbLocalProvider, HelperProvider])
    ], SettingsPage);
    return SettingsPage;
}());
export { SettingsPage };
//# sourceMappingURL=settings.js.map