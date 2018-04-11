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
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { HelperProvider } from '../../providers/helper/helper';
import { LoginPage } from '../login/login';
import { TablePage } from '../table/table';
import { ProductPage } from '../product/product';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WaitersPage } from '../waiters/waiters';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
/**
 * Generated class for the OutletListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OutletListPage = /** @class */ (function () {
    function OutletListPage(screenOrientation, splashScreen, navCtrl, navParams, device_id, helper, platform) {
        var _this = this;
        this.screenOrientation = screenOrientation;
        this.splashScreen = splashScreen;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.device_id = device_id;
        this.helper = helper;
        this.platform = platform;
        this.uid = '';
        this.outlets = [];
        this.helper.local.set_params('login_outlet_device', false);
        this.helper.airemote.initialize({}, function () {
            _this.helper.airemote.subscribe('outlet_list.refresh', function () {
                _this.get_outlet();
            });
        });
        this.helper.storage.get(this.helper.config.variable.credential)
            .then(function (val) {
            if (!_this.platform.is('cordova')) {
                _this.helper.storage.get('uuid')
                    .then(function (uuid) {
                    if (!uuid) {
                        _this.uid = val.outlet.outlet_id + '-' + _this.helper.moment().valueOf() + '-' + val.users.users_id;
                        _this.helper.storage.set('uuid', _this.uid);
                    }
                    else {
                        _this.uid = uuid;
                        _this.helper.local.set_params('uuid', _this.uid);
                    }
                    _this.get_outlet();
                });
            }
            else {
                _this.device_id.get()
                    .then(function (uuid) {
                    _this.uid = uuid ? uuid : val.outlet.outlet_id + '-' + _this.helper.moment().valueOf() + '-' + val.users.users_id;
                    _this.helper.local.set_params('uuid', _this.uid);
                    _this.get_outlet();
                    _this.helper.airemote.socket_listener_general();
                });
            }
        });
    }
    OutletListPage.prototype.get_outlet_refresh = function ($event) {
        this.get_outlet()
            .done(function () {
            if (typeof $event.complete == 'function') {
                $event.complete();
            }
        });
    };
    OutletListPage.prototype.get_outlet = function () {
        var _this = this;
        if (!this.helper.local.get_params(this.helper.config.variable.credential)) {
            this.navCtrl.setRoot(LoginPage);
            return false;
        }
        var loading = this.helper.loadingCtrl.create({
            content: "Mengambil data outlet"
        });
        loading.present();
        var users_id = this.helper.local.get_params(this.helper.config.variable.credential).users.users_id;
        var url = this.helper.config.base_url('admin/outlet/employee');
        var ajax = this.helper.$.post(url, { users_id: users_id, smartphone: true, uuid: this.uid })
            .done(function (res) {
            loading.dismiss();
            res = JSON.parse(res);
            _this.outlets = res;
        })
            .always(function () {
            loading.dismiss();
        });
        return ajax;
    };
    OutletListPage.prototype.selectOutlet = function (item) {
        var _this = this;
        this.helper.play('audio');
        var pending_devices = item.pending_devices ? item.pending_devices.split(',') : [];
        var active_devices = item.connected_devices ? item.connected_devices.split(',') : [];
        if (pending_devices.indexOf(this.uid) >= 0) {
            this.helper.alertCtrl.create({
                title: "Menunggu konfirmasi",
                message: "Anda telah melakukan permintaan hak akses, silahkan menunggu konfirmasi dari outlet",
                buttons: ["OK"]
            }).present();
            return false;
        }
        else if (!item.device_status_confirmation || active_devices.indexOf(this.uid) < 0) {
            this.helper.alertCtrl.create({
                title: "",
                message: "Device anda belum terdaftar dalam outlet " + item.outlet_name + ' pilih "Kirim permintaan akses" untuk mengirimkan permintaan akses kepada outlet.',
                buttons: ["Tutup", {
                        text: "Kirim permintaan akses",
                        handler: function () {
                            var loading = _this.helper.loadingCtrl.create({
                                content: "Mengirimkan permintaan. Silahkan tunggu!"
                            });
                            loading.present();
                            var users_id = _this.helper.local.get_params(_this.helper.config.variable.credential).users.users_id;
                            var url = _this.helper.config.base_url('admin/device/authority/request');
                            var data = {
                                users_id: users_id,
                                outlet_id: item.outlet_id,
                                uuid: _this.uid
                            };
                            _this.helper.$.post(url, data)
                                .then(function (res) {
                                res = JSON.parse(res);
                                switch (res.code) {
                                    case 200:
                                        _this.helper.alertCtrl.create({
                                            title: "Permintaan hak akses sukses",
                                            message: "Menunggu konfirmasi dari admin outlet",
                                            buttons: ["OK"]
                                        }).present();
                                        break;
                                    case 304:
                                        _this.helper.alertCtrl.create({
                                            title: "Permintaan hak akses outlet",
                                            message: "Permintaan telah dikirimkan. Menunggu konfirmasi outlet",
                                            buttons: ["OK"]
                                        }).present();
                                        break;
                                    default:
                                        _this.helper.alertCtrl.create({
                                            title: "Permintaan hak akses Gagal",
                                            message: "Terdapat kesalahan saat melakukan pengiriman hak akses ke outlet. Silahkan ulangi kembali!",
                                            buttons: ["OK"]
                                        }).present();
                                        break;
                                }
                            })
                                .fail(function () {
                                _this.helper.alertCtrl.create({
                                    title: "Permintaan hak akses Gagal",
                                    message: "Terdapat kesalahan saat melakukan pengiriman hak akses ke outlet. Silahkan ulangi kembali!",
                                    buttons: ["OK"]
                                }).present();
                            })
                                .always(function () {
                                loading.dismiss();
                            });
                        }
                    }]
            }).present();
        }
        else {
            var data_1 = this.helper.local.get_params(this.helper.config.variable.credential);
            data_1.outlet = Object.assign(data_1.outlet, item);
            data_1.data = Object.assign(data_1.data, item);
            data_1.outlet_device = item;
            data_1.outlet_device.uuid = this.uid;
            this.helper.storage.set(this.helper.config.variable.credential, data_1);
            this.helper.local.set_params(this.helper.config.variable.credential, data_1);
            this.helper.storage.get(this.helper.config.variable.settings)
                .then(function (resSettings) {
                var default_page = resSettings && !resSettings.choose_table_first ? ProductPage : TablePage;
                _this.helper.local.set_params('login_outlet_device', true);
                _this.helper.airemote.socket_listener();
                _this.helper.airemote.send(item.outlet_id + '.notif.ring', '', { toast: true, title: "Pemberitahuan perangkat terhubung", text: data_1.users.users_fullname + " tersambung kedalam sistem." }, function () {
                    if (item.outlet_roles_id == 3) {
                        _this.navCtrl.setRoot(WaitersPage);
                    }
                    else {
                        if (_this.platform.is('android')) {
                            _this.screenOrientation.lock(_this.screenOrientation.ORIENTATIONS.LANDSCAPE)
                                .catch(function () {
                            });
                        }
                        _this.navCtrl.setRoot(default_page);
                    }
                });
            });
        }
    };
    OutletListPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad OutletListPage');
    };
    OutletListPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-outlet-list',
            templateUrl: 'outlet-list.html',
        }),
        __metadata("design:paramtypes", [ScreenOrientation, SplashScreen, NavController, NavParams, UniqueDeviceID, HelperProvider, Platform])
    ], OutletListPage);
    return OutletListPage;
}());
export { OutletListPage };
//# sourceMappingURL=outlet-list.js.map