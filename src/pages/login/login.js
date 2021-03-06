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
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { HelperProvider } from '../../providers/helper/helper';
import { TablePage } from '../table/table';
import { ProductPage } from '../product/product';
import { OutletListPage } from '../outlet-list/outlet-list';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, helper, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.helper = helper;
        this.platform = platform;
        this.user = {};
        this.win = window;
        console.log(this.win.plugins);
        if (this.win.plugins && typeof this.win.plugins.screensize == 'function') {
            document.addEventListener("deviceready", function () {
                _this.win.plugins.screensize.get(function (res) {
                    var wi = Math.pow(res.width / res.xdpi, 2);
                    var hi = Math.pow(res.height / res.ydpi, 2);
                    var dim = Math.sqrt(hi + wi);
                    if (dim < 6) {
                        _this.helper.alertCtrl.create({
                            title: 'Gagal masuk sistem',
                            subTitle: 'Ukuran layar anda tidak memenuhi syarat instalasi aplikasi.',
                            message: "Aplikasi hanya berjalan pada layar smartphone minimal 6 Inches",
                            enableBackdropDismiss: false,
                            buttons: [{
                                    text: 'OK',
                                    handler: function () {
                                        _this.platform.exitApp();
                                    }
                                }]
                        }).present();
                    }
                    else {
                        _this.check_credential();
                    }
                }, false);
            });
        }
        else {
            this.check_credential();
        }
    }
    LoginPage.prototype.check_credential = function () {
        var _this = this;
        console.log('login');
        var loader = this.helper.loadingCtrl.create({
            content: 'Melakukan pengecheckan pengguna. Silahkan tunggu..'
        });
        loader.present();
        this.helper.storage.get(this.helper.config.variable.credential)
            .then(function (val) {
            console.log(val);
            if (!val || !val.outlet) {
                _this.helper.local.set_params('is_login', false);
                loader.dismiss();
            }
            else {
                _this.helper.storage.get(_this.helper.config.variable.settings)
                    .then(function (resSettings) {
                    val.outlet_device = {};
                    _this.helper.local.set_params(_this.helper.config.variable.credential, val);
                    _this.helper.local.set_params('is_login', true);
                    _this.helper.local.set_params(_this.helper.config.variable.settings, resSettings);
                    var default_page = resSettings && !resSettings.choose_table_first ? ProductPage : TablePage;
                    _this.navCtrl.setRoot(OutletListPage);
                    loader.dismiss();
                });
            }
        });
    };
    LoginPage.prototype.signIn = function () {
        var _this = this;
        var loader = this.helper.loadingCtrl.create({
            content: 'Silahkan tunggu..'
        });
        var alert = this.helper.alertCtrl.create({
            title: 'Gagal login',
            message: 'Terjadi kesalahan saat melakukan login! silahkan ulangi kembali!',
            buttons: ['OK']
        });
        var alertSuccess = this.helper.alertCtrl.create({
            title: 'Login diterima',
            subTitle: 'Memindahkan menuju kehalaman utama!',
            buttons: ['OK']
        });
        var url = this.helper.config.base_url('signin-process') + '?mobile';
        var data = this.user;
        if (!data.user_email_or_phone || !data.user_password) {
            alert.setMessage('Email dan Password tidak boleh kosong!');
            alert.present();
            return false;
        }
        loader.present();
        this.helper.$.post(url, {
            user_email_or_phone: data.user_email_or_phone,
            user_password: data.user_password
        })
            .then(function (res) {
            res = !_this.helper.isJSON(res) ? res : JSON.parse(res);
            if (res.status == 1) {
                _this.helper.local.set_params('is_login', true);
                _this.helper.local.set_params(_this.helper.config.variable.credential, res);
                _this.helper.storage.set(_this.helper.config.variable.credential, res);
                // alertSuccess.present();
                _this.navCtrl.setRoot(OutletListPage);
            }
            else {
                _this.helper.local.set_params('is_login', false);
                if (res.msg) {
                    alert.setMessage(res.msg);
                }
                alert.present();
            }
        }, function (err) {
            _this.helper.alertCtrl.create({
                title: "Login gagal",
                message: "SIlahkan check data login anda",
                buttons: ["OK"]
            }).present();
        })
            .always(function () {
            loader.dismiss();
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-login',
            templateUrl: 'login.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, HelperProvider, Platform])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map