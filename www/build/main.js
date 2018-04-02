webpackJsonp([24],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrinterServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the PrinterServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PrinterServiceProvider = (function () {
    function PrinterServiceProvider(platform) {
        this.platform = platform;
        this.defaultTimeout = 100;
        this.win = window;
        if (!this.win.cordova) {
            console.log("Cordova not available");
        }
        if (this.win.cordova && !this.win.DatecsPrinter) {
            console.log("DatecsPrinter plugin is missing. Have you installed the plugin? \nRun 'cordova plugin add cordova-plugin-datecs-printer'");
        }
    }
    PrinterServiceProvider.prototype.isAvailable = function () {
        return !this.platform.is('mobileweb') && this.win.DatecsPrinter;
    };
    PrinterServiceProvider.prototype.listBluetoothDevices = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.DatecsPrinter.listBluetoothDevices(function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.connect = function (address) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.DatecsPrinter.connect(address, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.disconnect = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.DatecsPrinter.disconnect(function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.feedPaper = function (lines) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.DatecsPrinter.feedPaper(lines, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.printText = function (text, charset) {
        var _this = this;
        if (charset === void 0) { charset = 'UTF-8'; }
        // ISO-8859-1
        return new Promise(function (resolve, reject) {
            _this.win.DatecsPrinter.printText(text, charset, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.printSelfTest = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.DatecsPrinter.printSelfTest(function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.getStatus = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.DatecsPrinter.getStatus(function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.getTemperature = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.DatecsPrinter.getTemperature(function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.setBarcode = function (align, small, scale, hri, height) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.DatecsPrinter.setBarcode(align, small, scale, hri, height, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.printBarcode = function (data, type) {
        var _this = this;
        if (type === void 0) { type = 73; }
        return new Promise(function (resolve, reject) {
            _this.win.DatecsPrinter.printBarcode(type, data, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.printImage = function (image, width, height, align) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.DatecsPrinter.printImage(image, width, height, align, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.drawPageRectangle = function (x, y, width, height, fillMode) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.DatecsPrinter.drawPageRectangle(x, y, width, height, fillMode, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.drawPageFrame = function (x, y, width, height, fillMode, thickness) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.DatecsPrinter.drawPageFrame(x, y, width, height, fillMode, thickness, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.selectPageMode = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.DatecsPrinter.selectPageMode(function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.selectStandardMode = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.DatecsPrinter.selectStandardMode(function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.setPageRegion = function (x, y, width, height, direction) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.DatecsPrinter.setPageRegion(x, y, width, height, direction, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.printPage = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.DatecsPrinter.printPage(function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.write = function (bytes) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.DatecsPrinter.write(bytes, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.writeHex = function (hex) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.DatecsPrinter.writeHex(hex, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], PrinterServiceProvider);
    return PrinterServiceProvider;
}());

//# sourceMappingURL=printer-service.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutletListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_unique_device_id__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_helper_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__table_table__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_product__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the OutletListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OutletListPage = (function () {
    function OutletListPage(splashScreen, navCtrl, navParams, device_id, helper, platform) {
        var _this = this;
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
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
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
                var default_page = resSettings && !resSettings.choose_table_first ? __WEBPACK_IMPORTED_MODULE_6__product_product__["a" /* ProductPage */] : __WEBPACK_IMPORTED_MODULE_5__table_table__["a" /* TablePage */];
                _this.navCtrl.setRoot(default_page);
                _this.helper.local.set_params('login_outlet_device', true);
                _this.helper.airemote.socket_listener();
                _this.helper.airemote.send(item.outlet_id + '.notif.ring', '', { toast: true, title: "Pemberitahuan perangkat terhubung", text: data_1.users.users_fullname + " tersambung kedalam sistem." }, function () {
                });
            });
        }
    };
    OutletListPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad OutletListPage');
    };
    OutletListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-outlet-list',template:/*ion-inline-start:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\outlet-list\outlet-list.html"*/'<!--\n  Generated template for the OutletListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n	<ion-toolbar color="main">\n	  <ion-navbar>\n	  	<button ion-button menuToggle>\n	      <ion-icon name="menu"></ion-icon>\n	    </button>\n	    <ion-title>Outlet anda</ion-title>\n	  </ion-navbar>\n	</ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-refresher (ionRefresh)="get_outlet_refresh($event)">\n    	<ion-refresher-content></ion-refresher-content>\n  	</ion-refresher>\n	<ion-row class="outlet-list">\n        <ion-col col-4 *ngFor="let item of outlets; let i = index;" (click)="selectOutlet(item)">\n          <ion-card>\n      		<img src="{{helper.config.base_url()}}{{item.outlet_logo}}">\n      		<div class="card-container">\n	          	<div class="card-title">{{item.outlet_name}}</div>\n	          	<div class="card-subtitle"><ion-icon ios="ios-contact" md="ios-contact"></ion-icon> <span>{{item.outlet_roles_name}}</span> </div>\n      		</div>\n          </ion-card>\n        </ion-col>\n    </ion-row>\n    <div *ngIf="!outlets || outlets.length < 1" class="text-align--center">\n		Anda tidak memiliki outlet untuk dikelola\n	</div>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\outlet-list\outlet-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_unique_device_id__["a" /* UniqueDeviceID */], __WEBPACK_IMPORTED_MODULE_3__providers_helper_helper__["a" /* HelperProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], OutletListPage);
    return OutletListPage;
}());

//# sourceMappingURL=outlet-list.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceiptPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_bill_bill__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_db_local_db_local__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__table_table__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__total_payment_editor_total_payment_editor__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_receipt_item_edit_receipt_item__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_helper_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__member_new_form_member_new_form__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__member_member__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jquery__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { ProductProvider } from '../../providers/product/product';








/**
* Generated class for the ReceiptPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var ReceiptPage = (function () {
    function ReceiptPage(helper, navCtrl, navParams, events, dbLocalProvider, billProvider, modalCtrl, viewCtrl) {
        var _this = this;
        this.helper = helper;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.dbLocalProvider = dbLocalProvider;
        this.billProvider = billProvider;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.receipts = [];
        this.event_handler = {};
        this.bill = this.billProvider.default_bill_value();
        this.receipt_page_params = {
            can_edit_slide_item: true,
            can_edit_bill_total: true,
            can_edit_table: false,
            can_edit_visitor_name: false,
            show_footer: true,
            show_header: true,
            show_content: true,
            show_split_arrow: false,
        };
        this.receipts = [];
        this.taxqty = 10;
        // if(navParams)
        // update data
        // event listener to update bill
        events.subscribe('bill.update', function (data) {
            _this.trigger_update_receipt();
        });
        // event listener to get data bill and passing to emiter
        events.subscribe('get.data.receipt', function (data) {
            var data_receipts = _this.billProvider.data_bill({
                _passed_data: data,
            });
            events.publish('receive.data.receipt', data_receipts);
        });
        // event listener to reset data bill
        events.subscribe('reset.data.receipt', function (data) {
            _this.billProvider.reset_bill();
            _this.bill = {};
            _this.trigger_update_receipt();
        });
        if (this.navParams.data.receipt_page_params) {
            this.update_page_parameters(this.navParams.data.receipt_page_params);
        }
    }
    // function trigger to updating data receipts
    ReceiptPage.prototype.trigger_update_receipt = function () {
        var data = this.billProvider.data_bill();
        this.set_receipts(data);
        this.billProvider.detection_order_session_from_orders(data.orders);
    };
    ReceiptPage.prototype.update_receipt = function () {
        // let receipt = this.get_data_receipt();
        /*if(this.billProvider.get_bill_component('member_id'))
        {
            this.billProvider.set_bill_component('member_id', undefined);

            this.billProvider.set_bill_component('member', undefined);

            this.billProvider.set_bill_component('nota_screenshot', undefined);
        }*/
        this.billProvider.set_bill_component('visitor_name', this.bill.visitor_name);
        this.billProvider.update_bill_component({}, true);
    };
    ReceiptPage.prototype.get_data_receipt = function () {
        var receipt = {
            // GrandTotalPrice  : this.GrandTotalPrice,
            // sumPrice         : this.sumPrice,
            // tax              : this.tax,
            // receipts         : this.receipts,
            visitor_name: this.bill.visitor_name,
        };
        return receipt;
    };
    ReceiptPage.prototype.set_receipts = function (data) {
        if (data === void 0) { data = {}; }
        this.bill = data;
    };
    ReceiptPage.prototype.get_orders = function () {
        var orders = this.billProvider.get_bill_component('orders');
        return orders;
    };
    ReceiptPage.prototype.ionViewDidLoad = function () {
    };
    ReceiptPage.prototype.ionViewWillUnload = function () {
    };
    ReceiptPage.prototype.update_page_parameters = function (data) {
        if (data === void 0) { data = {}; }
        this.receipt_page_params = Object.assign(this.receipt_page_params, data);
    };
    ReceiptPage.prototype.ionViewWillEnter = function () {
        switch (this.navParams.data.event) {
            case "transaction.edit":
                break;
            default:
                this.trigger_update_receipt();
                break;
        }
        this.detect_parameters();
    };
    ReceiptPage.prototype.detect_parameters = function () {
        this.event_handler[this.navParams.data.events] = this.navParams.data;
    };
    ReceiptPage.prototype.change_table = function () {
        this.events.publish('bill.table.change', {});
        // if(this.receipt_page_params.can_edit_table)
        // {
        var index = -1;
        var isFound = false;
        var navCtrlLen = this.navCtrl.length();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__table_table__["a" /* TablePage */], {
            previous: 'product-page',
            event: 'bill.changeTable',
            trigger_event: 'table.change',
            data: this.event_handler['table.pick']
        });
        // }
    };
    ReceiptPage.prototype.removeReceipt = function (ev, item) {
        // alert('removed')
    };
    ReceiptPage.prototype.removeItem = function (index, item) {
        this.billProvider.remove_order(index);
        this.billProvider.count_pricing();
        this.billProvider.update_bill();
        this.trigger_update_receipt();
    };
    ReceiptPage.prototype.reduceItem = function (index, item) {
        item = Object.assign({}, item);
        var dataitem = this.billProvider.get_order(index);
        if (item.detail_id) {
            delete item.detail_id;
            if (!this.billProvider.isset_order_session()) {
                this.billProvider.add_order_session();
            }
            item.order_session = this.billProvider.get_active_order_session();
            item.id = item.product;
            item.qty = -Math.abs(1);
            item.price = -Math.abs(item.price * item.qty);
            this.billProvider.insert_item(item, 'reduce');
            this.billProvider.set_order_session_item_counter(item.order_session);
            this.trigger_update_receipt();
        }
        else {
            if (item.qty <= 0) {
                return false;
            }
            this.billProvider.update_order_item(index, 'qty', parseInt(item.qty) - 1);
            this.billProvider.count_pricing();
            this.billProvider.update_bill();
            this.trigger_update_receipt();
        }
    };
    ReceiptPage.prototype.addItem = function (index, item) {
        item = Object.assign({}, item);
        var dataitem = this.billProvider.get_order(index);
        if (item.detail_id) {
            delete item.detail_id;
            if (!this.billProvider.isset_order_session()) {
                this.billProvider.add_order_session();
            }
            item.order_session = this.billProvider.get_active_order_session();
            item.id = item.product;
            this.billProvider.insert_item(item);
            this.billProvider.set_order_session_item_counter(item.order_session);
            this.trigger_update_receipt();
        }
        else {
            if (parseInt(dataitem.qty) >= parseInt(dataitem.stock)) {
                return false;
            }
            else {
                this.billProvider.update_order_item(index, 'qty', parseInt(item.qty) + 1);
                this.billProvider.count_pricing();
                this.billProvider.update_bill();
                this.trigger_update_receipt();
            }
        }
    };
    ReceiptPage.prototype.editItem = function (item, index) {
        this.events.publish('bill.item.clicked', { item: item, index: index });
        if (!this.receipt_page_params.can_edit_slide_item) {
            return false;
        }
        item.index = index;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__edit_receipt_item_edit_receipt_item__["a" /* EditReceiptItemPage */], item);
        // let modal = this.modalCtrl.create(EditReceiptItemPage, item)
        // modal.present();
        // modal.onDidDismiss(data => {
        // this.trigger_update_receipt();
        // });
    };
    ReceiptPage.prototype.edit_total_payment = function () {
        var _this = this;
        if (!this.receipt_page_params.can_edit_bill_total) {
            return false;
        }
        // this.navCtrl.push(TotalPaymentEditorPage, {})
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__total_payment_editor_total_payment_editor__["a" /* TotalPaymentEditorPage */], {});
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.trigger_update_receipt();
        });
    };
    ReceiptPage.prototype.openFormNewMember = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        console.log(data.data);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__member_new_form_member_new_form__["a" /* MemberNewFormPage */], data.data);
        modal.onDidDismiss(function (data) {
            _this.callbackNewMember(data);
        });
        modal.present();
    };
    ReceiptPage.prototype.callbackNewMember = function (data) {
        var _this = this;
        if (data.data) {
            this.bill.visitor_name = data.data.member_name;
            this.billProvider.set_bill_component('member_id', data.data.member_id);
            this.billProvider.set_bill_component('member', data.data);
            this.helper.html2canvas(__WEBPACK_IMPORTED_MODULE_10_jquery__('.receipt-product')[0])
                .then(function (canvas) {
                var img = canvas.toDataURL();
                // img = this.helper.html_encode(img);
                img = img.split(',')[1];
                _this.billProvider.set_bill_component('nota_screenshot', img);
            })
                .catch(function (err) {
                console.log("error canvas", err);
            });
            this.update_receipt();
        }
    };
    ReceiptPage.prototype.openFormDataMember = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__member_member__["a" /* MemberPage */], {
            event: "pick.member",
            onClick: function (member) {
                _this.viewCtrl.dismiss(member);
            }
        });
        modal.onDidDismiss(function (data) {
            _this.callbackNewMember(data);
        });
        modal.present();
    };
    ReceiptPage.prototype.optionVisitor = function () {
        var _this = this;
        var visitor_name = this.bill.visitor_name;
        this.helper.actionSheet.create({
            title: 'Opsi lanjutan',
            buttons: [
                {
                    text: 'Tambahkan Member',
                    handler: function () {
                        _this.openFormNewMember({
                            data: {
                                member: { member_name: visitor_name }
                            }
                        });
                    }
                }, {
                    text: 'Pilih Member',
                    handler: function () {
                        _this.openFormDataMember();
                    }
                }
            ]
        }).present();
    };
    ReceiptPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-receipt',template:/*ion-inline-start:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\receipt\receipt.html"*/'<!--\n\n  Generated template for the ReceiptPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n	<div class="receipt receipt-container relative">\n\n		<div class="receipt-header" *ngIf="receipt_page_params.show_header">\n\n			<div class="receipt--costumer-header pseudo">\n\n				<h5 class="title">{{helper.local.get_params(this.helper.config.variable.credential).outlet.outlet_name? helper.local.get_params(this.helper.config.variable.credential).outlet.outlet_name : \'\'}}</h5>\n\n				<div class=" center " style="display: flex;"><div style="width: 80%;">{{helper.local.get_params(this.helper.config.variable.credential).outlet.outlet_address?helper.local.get_params(this.helper.config.variable.credential).outlet.outlet_address:\'\'}}</div> </div>\n\n				<div>{{helper.local.get_params(this.helper.config.variable.credential).outlet.outlet_phone?helper.local.get_params(this.helper.config.variable.credential).outlet.outlet_phone:\'\'}}</div>\n\n			</div>\n\n			<ion-row class="receipt-headinput">\n\n				<ion-col col-5>\n\n					<input type="text" name="" class="text-align--center form-control form-receipt--border-bottom form-receipt--table"  placeholder="Nomor Meja" [disabled]="can_edit_table" [(ngModel)]="bill.table_name" (input)="update_receipt()" (click)="change_table()">\n\n				</ion-col>\n\n				<ion-col col-2></ion-col>\n\n				<ion-col col-5>\n\n					<input type="text" name="" class="text-align--center form-control form-receipt--border-bottom form-receipt--customer"  placeholder="Atas nama" [disabled]="can_edit_visitor_name" [(ngModel)]="bill.visitor_name" (input)="update_receipt()" (press)="optionVisitor()">\n\n				</ion-col>\n\n			</ion-row>	\n\n		</div>\n\n		<div class="receipt-body" *ngIf="receipt_page_params.show_content">\n\n			\n\n			<div class="" style="display:flex; border-bottom: 1px solid #aaa; padding-bottom: 3px;margin-top: 10px; font-weight: 700;">\n\n				<div style="width: 10%">QTY</div>\n\n				<div style="width: 50%">ITEM</div>\n\n				<div style="width: 20%">HARGA</div>\n\n				<div style="width: 20%">JUMLAH</div>\n\n				<div style="width: 10%" *ngIf="receipt_page_params.show_split_arrow"></div>\n\n			</div>\n\n\n\n			<ion-list style="margin-top: 10px;">\n\n				<div *ngFor="let item of get_orders(); let i = index;">\n\n					<div class="session-order" *ngIf="item.first_session_order && item.order_session > 0">\n\n						Tambahan ke {{item.order_session}}\n\n					</div>\n\n					\n\n					<ion-item-sliding >\n\n						<ion-item class="item-receipt" id="receipt-product-{{item.id}}" style="display: flex; padding-left: 0px;" (click)="editItem(item, i)">\n\n							<div style="display: flex;font-size: .8em;">\n\n								<div class="receipt-detail--component text-align--center" style="width: 10%;"  >\n\n									<span class="product-amount">{{item.qty}}</span>\n\n									<p class="italic receipt-detail--component--properties" *ngIf="item.complement_status > 0 && item.complement_item < item.qty">{{item.complement_item}}</p>\n\n\n\n								</div>\n\n								\n\n								<div class="receipt-detail--component text-align--left" style="width: 50%;" >\n\n									<span>{{item.name}}</span><br>\n\n									<p class="italic receipt-detail--component--properties" *ngIf="item.complement_status > 0">Complement</p>\n\n									<p class="italic receipt-detail--component--properties" *ngIf="billProvider.helper.IDRtoInt(item.discount_nominal) > 0 && (billProvider.helper.toInt(item.complement_status) != 1 || billProvider.helper.toInt(item.complement_item) < billProvider.helper.toInt(item.qty) )">Diskon {{billProvider.helper.toInt(item.discount_percent)}}%</p>\n\n									<p class="receipt-detail--component--notes">{{item.note}}</p>\n\n								</div>\n\n\n\n								<div class="receipt-detail--component" style="width: 20%;">\n\n									<span> {{billProvider.helper.intToIDR(item.price)}} </span>\n\n									<p class="italic receipt-detail--component--properties" *ngIf="item.complement_status > 0"> &nbsp; </p>\n\n									<p class="italic receipt-detail--component--properties" *ngIf="billProvider.helper.IDRtoInt(item.discount_nominal) > 0 && (billProvider.helper.toInt(item.complement_status) != 1 || billProvider.helper.toInt(item.complement_item) < billProvider.helper.toInt(item.qty) )">-{{ billProvider.helper.intToIDR(item.discount_nominal) }}</p>\n\n								</div>\n\n\n\n								<div class="receipt-detail--component" style="width: 20%;">{{billProvider.helper.intToIDR(item.total)}}</div>\n\n								<div style="width: 10%;" *ngIf="receipt_page_params.show_split_arrow"> <ion-icon md="ios-arrow-forward" ios="ios-arrow-forward"></ion-icon></div>\n\n							</div>\n\n						</ion-item>\n\n\n\n						<!-- menu slider -->\n\n					    <ion-item-options side="right" *ngIf="receipt_page_params.can_edit_slide_item">\n\n					      <button ion-button color="danger" class="center distributed" (click)="removeItem(i, item)">\n\n					        <ion-icon name="trash" style="padding-left: 10px; padding-bottom: 0px; padding-right: 10px;"></ion-icon>\n\n					      </button>\n\n					    </ion-item-options>\n\n					    <ion-item-options side="left" *ngIf="receipt_page_params.can_edit_slide_item">\n\n					      <button ion-button color="secondary" class="center distributed" (click)="reduceItem(i, item)">\n\n					        <ion-icon name="remove" style="padding-left: 10px; padding-bottom: 0px; padding-right: 10px;"></ion-icon>\n\n					      </button>\n\n					      <button ion-button color="primary" class="center distributed" (click)="addItem(i, item)">\n\n					        <ion-icon name="add" style="padding-left: 10px; padding-bottom: 0px; padding-right: 10px;"></ion-icon>\n\n					      </button>\n\n					    </ion-item-options>\n\n					</ion-item-sliding>\n\n				</div>\n\n			</ion-list>\n\n			<div class="" *ngIf="!billProvider.get_bill_component(\'orders\') || billProvider.get_bill_component(\'orders\').length < 1" class="text-align--center"> Silahkan pilih menu disamping! </div>\n\n		</div>\n\n		<div class="receipt-footer" (click)="edit_total_payment()" *ngIf="receipt_page_params.show_footer"> \n\n			<table class="" style="margin-bottom: 0px;width: 100%;">\n\n				<tbody style="padding-top: 10px">\n\n					<tr class="" *ngIf="billProvider.get_bill_component(\'tax_nominal\')>0 || billProvider.get_bill_component(\'discount_nominal\')>0">\n\n						<td style="width: 10%;"></td>							\n\n						<td style="width: 10%;"></td>							\n\n						<td style="width: 48%;" class="text-align--right">Bill</td>\n\n						<td style="width: 5%;" class="text-align--right"><span class="">Rp.</span> </td>\n\n						<td style="width: 10%;" class="text-align--right"><span>{{billProvider.helper.intToIDR(bill.payment_bills)}} </span> </td>\n\n					</tr>\n\n\n\n					<tr class="" *ngIf="billProvider.get_bill_component(\'tax_nominal\')>0">\n\n						<td style="width: 10%;"></td>\n\n						<td style="width: 10%;"></td>							\n\n						<td style="width: 48%;" class="text-align--right">Pajak</td>\n\n						<td style="width: 5%;" class="text-align--right"><span class="">Rp.</span> </td>\n\n						<td style="width: 10%;" class="text-align--right"><span>{{billProvider.helper.intToIDR(billProvider.get_bill_component(\'tax_nominal\'))}} </span> </td>\n\n					</tr>\n\n\n\n					<tr class="" *ngIf="billProvider.get_bill_component(\'discount_nominal\')>0">\n\n						<td style="width: 10%;"></td>\n\n						<td style="width: 10%;"></td>							\n\n						<td style="width: 48%;" class="text-align--right">Diskon {{ billProvider.helper.toInt(billProvider.get_bill_component(\'discount_percent\')) > 0? billProvider.get_bill_component(\'discount_percent\')+\'%\':\'\'  }}</td>\n\n						<td style="width: 5%;" class="text-align--right"><span class="">Rp.</span> </td>\n\n						<td style="width: 10%;" class="text-align--right"><span>{{billProvider.helper.intToIDR(billProvider.get_bill_component(\'discount_nominal\'))}} </span> </td>\n\n					</tr>\n\n\n\n					<tr >\n\n						<td style="width: 10%;" ></td>\n\n						<td style="width: 10%;"></td>							\n\n						<td style="width: 48%; padding-top: 10px; font-size: 1.3em;" class="text-align--right">Total</td>\n\n						<td style="width: 5%; padding-top: 10px; font-size: 1.3em;" class="text-align--right"><span class="">Rp.</span> </td>\n\n						<td style="width: 10%; padding-top: 10px; font-size: 1.3em;" class="text-align--right"><span>{{billProvider.helper.intToIDR(billProvider.get_bill_component(\'payment_total\'))}} </span> </td>\n\n					</tr>\n\n\n\n				</tbody>\n\n			</table>\n\n		</div>\n\n	</div>\n\n'/*ion-inline-end:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\receipt\receipt.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_helper_helper__["a" /* HelperProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_3__providers_db_local_db_local__["a" /* DbLocalProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_bill_bill__["a" /* BillProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
    ], ReceiptPage);
    return ReceiptPage;
}());

//# sourceMappingURL=receipt.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillItemEditorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_bill_bill__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_helper_helper__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the BillItemEditorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BillItemEditorPage = (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bill-item-editor',template:/*ion-inline-start:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\bill-item-editor\bill-item-editor.html"*/'<!--\n\n  Generated template for the BillItemEditorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n	<ion-toolbar color="main">\n\n		<ion-navbar>\n\n			<ion-title>Nota {{bill.pay_id}}</ion-title>\n\n		</ion-navbar>\n\n	</ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content id="product-box-detail">\n\n	<ion-grid>\n\n		<ion-row class="relative" id="product-content-body">\n\n			\n\n			<div  col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 id="section-left">\n\n				<div class="receipt-product">\n\n					<page-receipt></page-receipt> \n\n				</div>\n\n			</div>\n\n			<ion-col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 id="section-right" class="column">\n\n\n\n				<div class="box" id="box-product">\n\n					\n\n					<div class="bs-row">\n\n						<div class="col-md-12">\n\n							<ion-list>\n\n								<ion-item>\n\n									No. Nota\n\n									<ion-note item-end>\n\n										{{bill.pay_id}}\n\n									</ion-note>\n\n								</ion-item>\n\n\n\n								<ion-item>\n\n									Nama pelanggan\n\n									<ion-note item-end>\n\n										{{bill.visitor_name}}\n\n									</ion-note>\n\n								</ion-item>\n\n								<ion-item>\n\n									Nomor meja\n\n									<ion-note item-end>\n\n										<span *ngIf="bill.table_id && bill.table_name">{{bill.table_name}}</span>\n\n										<span *ngIf="!bill.table_id || !bill.table_name"> - </span>\n\n									</ion-note>\n\n								</ion-item>\n\n\n\n								\n\n								<ion-item>\n\n									Total Bill\n\n									<ion-note item-end>\n\n										Rp.{{ helper.intToIDR(bill.payment_bills) }}\n\n									</ion-note>\n\n								</ion-item>\n\n\n\n								<ion-item>\n\n									Pajak\n\n									<ion-note item-end>\n\n										<span *ngIf="bill.tax_nominal"> Rp.{{helper.intToIDR(bill.tax_nominal)}} </span>\n\n										<span *ngIf="!bill.tax_nominal"> - </span>\n\n									</ion-note>\n\n								</ion-item>\n\n\n\n								<ion-item>\n\n									Discount\n\n									<ion-note item-end>\n\n										<span *ngIf="bill.discount_id"> {{bill.discount_percent}} %,  Rp.{{helper.intToIDR(helper.percentToNominal(bill.discount_percent, bill.payment_bills)) }} </span>\n\n										<span *ngIf="!bill.discount_id"> - </span>\n\n									</ion-note>\n\n								</ion-item>\n\n\n\n								<ion-item>\n\n									Total Pembayaran\n\n									<ion-note item-end>\n\n										Rp.{{ helper.intToIDR(bill.payment_total) }}\n\n									</ion-note>\n\n								</ion-item>\n\n\n\n								<ion-item>\n\n									Bayar Tunai\n\n									<ion-note item-end>\n\n										<span *ngIf="bill.payment_nominal > 0">Rp. {{ helper.intToIDR(bill.payment_nominal) }}</span>\n\n										<span *ngIf="bill.payment_nominal <= 0">-</span>\n\n									</ion-note>\n\n								</ion-item>\n\n\n\n							</ion-list>\n\n						</div>\n\n					</div>\n\n				</div>	\n\n			</ion-col>\n\n			\n\n\n\n		</ion-row>\n\n	</ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\bill-item-editor\bill-item-editor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_bill_bill__["a" /* BillProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_helper_helper__["a" /* HelperProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], BillItemEditorPage);
    return BillItemEditorPage;
}());

//# sourceMappingURL=bill-item-editor.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DebtPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_helper_helper__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DebtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DebtPage = (function () {
    function DebtPage(navCtrl, navParams, helper) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.helper = helper;
        this.debts = [];
        this.state = 'list';
        this.page_params = {};
        this.filter_input = '';
        this.filter_params = 'member_name';
        this.page_params = {
            toggleSearchInput: false
        };
    }
    DebtPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DebtPage');
        this.outlet = this.helper.local.get_params(this.helper.config.variable.credential).data.outlet_id;
        this.get_data_debt();
    };
    DebtPage.prototype.filter_hutang = function () {
        var _this = this;
        if (this.filter_input.length > 0 && this.filter_input.length < 5) {
            return false;
        }
        var loading = this.helper.loadingCtrl.create({
            content: "Memeriksa data"
        });
        loading.present();
        var url = this.helper.config.base_url('admin/outlet/debt/get/list');
        var data = {
            fields: 'total_debt_rest,debt_id,pay_id,member_id,debt_date,debt_in,debt_out,debt_rest,outlet_id,member_name,member_mail,member_phone',
            outlet_id: this.outlet,
            group_by: 'member_id',
            where: {},
            like: [[this.filter_params, this.filter_input]]
        };
        this.helper.$.ajax({
            url: url,
            type: 'POST',
            data: data,
            dataType: "json"
        })
            .done(function (res) {
            if (res.code == 200) {
                _this.debts = res.data;
            }
            console.log(res);
        })
            .always(function () {
            loading.dismiss();
        });
    };
    DebtPage.prototype.get_data_debt = function (params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        var loading = this.helper.loadingCtrl.create({
            content: "Memeriksa data"
        });
        loading.present();
        var url = this.helper.config.base_url('admin/outlet/debt/get/list');
        var data = {
            fields: 'debt_rest_pay_id,total_debt_out,debt_id,total_debt_in,pay_id,member_id,debt_date,debt_in,debt_out,debt_rest,outlet_id,member_name,member_mail,member_code,member_phone',
            outlet_id: this.outlet,
            group_by: 'member_id',
            order_by: 'pay_id DESC',
            where: {}
        };
        this.helper.$.ajax({
            url: url,
            type: 'POST',
            data: data,
            dataType: "json"
        })
            .done(function (res) {
            if (res.code == 200) {
                _this.filter_params = 'member_mail';
                _this.filter_input = '';
                _this.debts = res.data;
            }
            console.log(res);
        })
            .always(function () {
            loading.dismiss();
        });
    };
    DebtPage.prototype.cicilHutang = function (item) {
        var _this = this;
        this.helper.alertCtrl.create({
            title: "Isikan jumlah cicilan",
            inputs: [{
                    name: 'cicilan',
                    type: "number",
                    placeholder: 'jumlah cicilan',
                    handler: function (val) {
                        console.log(val);
                    }
                }],
            buttons: [
                {
                    text: 'Batal',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Tambahkan cicilan',
                    handler: function (data) {
                        console.log(data);
                        _this.process_cicil_hutang(item, data.cicilan);
                    }
                }
            ]
        }).present();
    };
    DebtPage.prototype.process_cicil_hutang = function (item, cicilan) {
        var _this = this;
        var loading = this.helper.loadingCtrl.create({
            content: "Memeriksa data"
        });
        loading.present();
        var url;
        if (this.state == 'list') {
            url = this.helper.config.base_url('admin/outlet/debt/pay/nominal');
        }
        else {
            url = this.helper.config.base_url('admin/outlet/debt/save');
        }
        item.debt_out = cicilan;
        item.debt_in = 0;
        if (this.state == 'detail' || this.state == 'history') {
            item.pay_type = "PAY_BY_BILL";
        }
        this.helper.$.ajax({
            url: url,
            type: 'POST',
            data: item,
            dataType: "json"
        })
            .done(function (res) {
            if (res.code == 200) {
                switch (_this.state) {
                    default:
                    case "list":
                        // code...
                        _this.get_data_debt();
                        break;
                    case "detail":
                        // code...
                        _this.openDetailDebt(_this.detail_item);
                        if (res.credit_rest > 0) {
                            _this.helper.alertCtrl.create({
                                title: "Kembalian cicilan",
                                message: "Terdapat kembalian cicilan sebesar <strong> " + res.credit_rest + " </strong>",
                                buttons: ["OK"]
                            }).present();
                        }
                        break;
                    case "history":
                        // code...
                        _this.openLogDebt(_this.detail_item);
                        if (res.credit_rest > 0) {
                            _this.helper.alertCtrl.create({
                                title: "Kembalian cicilan",
                                message: "Terdapat kembalian cicilan sebesar <strong> " + res.credit_rest + " </strong>",
                                buttons: ["OK"]
                            }).present();
                        }
                        break;
                }
            }
        })
            .always(function () {
            loading.dismiss();
        });
    };
    DebtPage.prototype.openDetailDebt = function (item) {
        var _this = this;
        this.detail_item = item;
        var loading = this.helper.loadingCtrl.create({
            content: "Memeriksa data"
        });
        loading.present();
        var url = this.helper.config.base_url('admin/outlet/debt/get/detail');
        var data = {
            outlet_id: this.outlet,
            fields: 'debt_rest_pay_id,total_debt_in,total_debt_out,debt_id,pay_id,member_id,debt_date,debt_in,debt_out,debt_rest,outlet_id,member_name,member_mail,member_phone,member_code',
            where: {
                member_id: item.member_id,
            },
            group_by: 'pay_id'
        };
        this.helper.$.ajax({
            url: url,
            type: 'POST',
            data: data,
            dataType: "json"
        })
            .done(function (res) {
            if (res.code == 200) {
                if (res.data.length <= 0) {
                    _this.outDetail();
                }
                else {
                    _this.debts = res.data;
                }
            }
        })
            .always(function () {
            loading.dismiss();
        });
    };
    DebtPage.prototype.openLogDebt = function (item) {
        var _this = this;
        this.detail_item = item;
        var loading = this.helper.loadingCtrl.create({
            content: "Memeriksa data"
        });
        loading.present();
        var url = this.helper.config.base_url('admin/outlet/debt/get/detail');
        var data = {
            outlet_id: this.outlet,
            fields: 'debt_id,pay_id,member_id,debt_date,debt_in,debt_out,debt_rest,outlet_id,member_name,member_mail,member_phone,member_code',
            where: {
                member_id: item.member_id,
                pay_id: item.pay_id,
            },
            order_by: 'debt_date DESC'
        };
        this.helper.$.ajax({
            url: url,
            type: 'POST',
            data: data,
            dataType: "json"
        })
            .done(function (res) {
            if (res.code == 200) {
                if (res.data.length <= 0) {
                    _this.openDetailDebt(item);
                }
                else {
                    _this.debts = res.data;
                }
            }
        })
            .always(function () {
            loading.dismiss();
        });
    };
    DebtPage.prototype.advanceOptions = function (index, item) {
        var _this = this;
        this.helper.actionSheet.create({
            title: 'Opsi lanjutan',
            buttons: [{
                    text: "Lihat data hutang",
                    handler: function () {
                        _this.state = 'detail';
                        _this.debts = [];
                        _this.openDetailDebt(item);
                    }
                }, {
                    text: "Cicil hutang member",
                    handler: function () {
                        _this.cicilHutang(item);
                    }
                }, {
                    text: "Kirim email pengingat hutang",
                    handler: function () {
                        _this.debtReminder(item);
                    }
                }, {
                    text: "Lihat kartu hutang",
                    handler: function () {
                        var url = _this.helper.config.base_url('admin/outlet/debt/bill/' + _this.outlet + '/' + item.member_id);
                        window.open(url, '_blank');
                    }
                }]
        }).present();
    };
    DebtPage.prototype.advanceOptionsDetail = function (index, item) {
        var _this = this;
        this.helper.actionSheet.create({
            title: 'Opsi lanjutan',
            buttons: [{
                    text: "Lihat log pembayaran",
                    handler: function () {
                        _this.state = 'history';
                        _this.debts = [];
                        _this.openLogDebt(item);
                    }
                }, {
                    text: "Cicil hutang nota",
                    handler: function () {
                        _this.cicilHutang(item);
                    }
                } /*,{
                    text: "Kirim email pengingat hutang",
                    handler: ()=>{
                        this.debtReminder(item)
                    }
                },{
                    text: "Lihat kartu hutang",
                    handler: ()=>{
                        let url = this.helper.config.base_url('admin/outlet/debt/bill/'+this.outlet+'/'+item.member_id)
                        window.open(url,'_blank')
                    }
                }*/
            ]
        }).present();
    };
    DebtPage.prototype.outDetail = function () {
        this.state = 'list';
        this.debts = [];
        this.get_data_debt();
    };
    DebtPage.prototype.outFromLog = function () {
        this.state = 'detail';
        this.debts = [];
        this.openDetailDebt(this.detail_item);
    };
    DebtPage.prototype.filter_options = function () {
        var _this = this;
        this.helper.actionSheet.create({
            title: "Filter lanjutan",
            buttons: [
                {
                    text: "Email member",
                    handler: function () {
                        _this.filter_params = 'member_mail';
                    }
                }, {
                    text: "Nama member",
                    handler: function () {
                        _this.filter_params = 'member_name';
                    }
                }, {
                    text: "Telephone member",
                    handler: function () {
                        _this.filter_params = 'member_phone';
                    }
                }, {
                    text: "Kode unik member",
                    handler: function () {
                        _this.filter_params = 'member_code';
                    }
                },
            ]
        }).present();
    };
    DebtPage.prototype.debtReminder = function (item) {
        var _this = this;
        var loading = this.helper.loadingCtrl.create({
            content: "Mengirimkan email",
        });
        loading.present();
        var url = this.helper.config.base_url('admin/outlet/debt/reminder');
        var data = {
            outlet_id: this.outlet,
            where: { member_id: item.member_id },
            fields: 'outlet_address,outlet_phone,outlet_logo,outlet_name,total_debt_rest,debt_id,pay_id,member_id,debt_date,debt_in,debt_out,debt_rest,outlet_id,member_name,member_mail,member_phone',
            item: item
        };
        this.helper.$.ajax({
            url: url,
            data: data,
            type: "POST",
            dataType: "json"
        })
            .done(function (res) {
            console.log(res);
            switch (res.code) {
                case 200:
                    _this.helper.alertCtrl.create({
                        title: "Proses berhasil",
                        message: "Pengingat telah dikirimkan",
                        buttons: ["OK"]
                    }).present();
                    break;
                default:
                    _this.helper.alertCtrl.create({
                        title: "Terjadi kesalahan",
                        message: "Pengingat gagal dikirimkan",
                        buttons: ["OK"]
                    }).present();
                    break;
            }
        })
            .fail(function () {
            _this.helper.alertCtrl.create({
                title: "Terjadi kesalahan code:500",
                message: "Fatal Error. Silahkan laporkan kepada pengembang aplikasi. ",
                buttons: ["OK"]
            }).present();
        })
            .always(function () {
            loading.dismiss();
        });
    };
    DebtPage.prototype.open_debt_card = function () {
        var url = this.helper.config.base_url('admin/outlet/debt/card/' + this.outlet);
        window.open(url, '_blank');
    };
    DebtPage.prototype.pay_as_nominal = function () {
    };
    DebtPage.prototype.pay_as_pay_id = function () {
    };
    DebtPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-debt',template:/*ion-inline-start:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\debt\debt.html"*/'<!--\n\n  Generated template for the DebtPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n	\n\n	<ion-toolbar color="main">\n\n		\n\n		<ion-navbar>\n\n			<button ion-button menuToggle *ngIf="state == \'list\'">\n\n				<ion-icon name="menu"></ion-icon>\n\n			</button>\n\n			<ion-buttons left>\n\n			    \n\n			    <button ion-button icon-only clear color="light" *ngIf="state == \'detail\'" (click)="outDetail()">\n\n			      <ion-icon name="arrow-back"></ion-icon>\n\n			    </button>\n\n			</ion-buttons>\n\n\n\n			<ion-buttons left>    \n\n			    <button ion-button icon-only clear color="light" *ngIf="state == \'history\'" (click)="outFromLog()">\n\n			      <ion-icon name="arrow-back"></ion-icon>\n\n			    </button>\n\n			</ion-buttons>\n\n			<ion-title *ngIf="state == \'list\'">Hutang</ion-title>\n\n			<ion-title *ngIf="state == \'detail\'">Detail Hutang </ion-title>\n\n			<ion-title *ngIf="state == \'history\'">Log Hutang</ion-title>\n\n			\n\n			\n\n\n\n			<ion-searchbar *ngIf="page_params.toggleSearchInput" class="searchbar-toolbar" (ionInput)="filter_hutang()" [(ngModel)]="filter_input" style="padding: 0px 5px; width:40%;"></ion-searchbar>\n\n			<ion-buttons class="center distributed" *ngIf="state == \'list\'">\n\n				<button ion-button icon-only color="light" (click)="page_params.toggleSearchInput=!page_params.toggleSearchInput">\n\n					<ion-icon name="search" *ngIf="!page_params.toggleSearchInput"></ion-icon>\n\n					<ion-icon name="close" *ngIf="page_params.toggleSearchInput"></ion-icon>\n\n				</button>\n\n			</ion-buttons>\n\n			<ion-buttons class="center distributed" *ngIf="state == \'list\'">\n\n				<button ion-button clear icon-right color="light" (click)="filter_options()">\n\n				  Filter <ion-icon name="funnel"></ion-icon>\n\n				</button>\n\n			</ion-buttons>\n\n			<ion-buttons class="center distributed" *ngIf="state == \'list\'">\n\n				<button ion-button clear icon-right color="light" (click)="open_debt_card()">\n\n				  Download Kartu hutang\n\n				</button>\n\n			</ion-buttons>\n\n			<ion-buttons class="center distributed" *ngIf="state == \'detail\'">\n\n				<button ion-button clear icon-right color="light" (click)="cicilHutang(detail_item)">\n\n				  Cicil berdasarkan nominal\n\n				</button>\n\n			</ion-buttons>\n\n			<ion-buttons class="center distributed" *ngIf="state == \'history\'">\n\n				<button ion-button clear icon-right color="light" (click)="pay_as_pay_id(detail_item)">\n\n				  Cicil berdasarkan nota\n\n				</button>\n\n			</ion-buttons>\n\n		</ion-navbar>\n\n	</ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n	<div *ngIf="state == \'list\'">\n\n\n\n		<ion-row>\n\n	        <ion-col col-4 *ngFor="let debt of debts; let i = index;" (press)="advanceOptions(i, debt)">\n\n	          <ion-card padding>\n\n	          	<h2 class="text-main">{{debt.member_name}}</h2>\n\n	          	<div style="margin-top: 15px;" class="text-muted">\n\n	          		<div style="font-size: .7em;">  \n\n						<strong>Hutang terbayar:</strong> {{helper.intToIDR(debt.total_debt_out)}}\n\n	          		</div>\n\n	          		<div style="font-size: .7em;">  \n\n						<strong>Sisa Hutang :</strong> {{helper.intToIDR(debt.debt_rest_pay_id)}}\n\n	          		</div>\n\n	          		<div style="font-size: .7em;">  \n\n						<strong>Total hutang:</strong> {{helper.intToIDR(debt.total_debt_in)}}\n\n	          		</div>\n\n	          	</div>\n\n	          </ion-card>\n\n	        </ion-col>\n\n	    </ion-row>\n\n	    <div *ngIf="!debts || debts.length < 1" class="text-align--center">\n\n			Tidak ada hutang ditemukan\n\n		</div>\n\n		<!-- <ion-item *ngFor="let debt of debts; let i = index; " (click)="advanceOptions(i, debt)">\n\n			<h2>{{debt.member_name}}</h2>\n\n			<p>\n\n				<span> <strong>Hutang terbayar:</strong> {{helper.intToIDR(debt.total_debt_out)}}</span>\n\n				<span> <strong>Sisa Hutang :</strong> {{helper.intToIDR(debt.debt_rest_pay_id)}}</span>\n\n				<span> <strong>Total hutang:</strong> {{helper.intToIDR(debt.total_debt_in)}}</span>\n\n			</p>\n\n		</ion-item> -->\n\n	</div>\n\n\n\n	<div *ngIf="state == \'detail\'">\n\n		<div *ngIf="debts.length > 0" padding>\n\n			<div style="margin-top: 6px;"> <strong>Name :</strong> {{debts[0][\'member_name\']}} </div>\n\n			<div style="margin-top: 6px;"> <strong>Email :</strong> {{debts[0][\'member_mail\']}} </div>\n\n			<div style="margin-top: 6px;"> <strong>Phone :</strong> {{debts[0][\'member_phone\']}} </div>\n\n		</div>\n\n		<ion-row>\n\n	        <ion-col col-4 *ngFor="let debt of debts; let i = index;" (press)="advanceOptions(i, debt)">\n\n	          <ion-card padding>\n\n	          	<h2 class="text-main">Nota {{helper.get_initial_outlet_name(helper.local.get_params(helper.config.variable.credential).outlet.outlet_name,\'.\')}}/NT/000{{debt.debt_id}}</h2>\n\n	          	<div style="margin-top: 15px;" class="text-muted">\n\n	          		<div style="font-size: .7em;">  \n\n						<strong>Hutang terbayar:</strong> {{helper.intToIDR(debt.total_debt_out)}}\n\n	          		</div>\n\n	          		<div style="font-size: .7em;">  \n\n						<strong>Sisa Hutang :</strong> {{helper.intToIDR(debt.debt_rest_pay_id)}}\n\n	          		</div>\n\n	          		<div style="font-size: .7em;">  \n\n						<strong>Total hutang:</strong> {{helper.intToIDR(debt.total_debt_in)}}\n\n	          		</div>\n\n	          	</div>\n\n	          </ion-card>\n\n	        </ion-col>\n\n	    </ion-row>\n\n		<!-- <ion-item *ngFor="let debt of debts; let i = index; " (click)="advanceOptionsDetail(i, debt)" [ngClass]="{\'sr-only\':debt.debt_rest <= 0 ?true : false}">\n\n			<h2><strong>{{debt.member_name}}</strong></h2>\n\n			<p>\n\n				<span><strong>Nota : </strong> {{helper.intToIDR(debt.pay_id)}}</span> &middot; \n\n				<span><strong>Hutang : </strong> Rp.{{helper.intToIDR(debt.total_debt_in)}}</span> &middot;\n\n				<span><strong>Dibayar : </strong> Rp.{{helper.intToIDR(debt.total_debt_out)}}</span> &middot;\n\n				<span><strong>Sisa hutang : </strong> Rp.{{helper.intToIDR(debt.debt_rest_pay_id)}}</span>\n\n			</p>\n\n		</ion-item> -->\n\n	</div>\n\n\n\n	<ion-list *ngIf="state == \'history\'">\n\n		<ion-item *ngFor="let debt of debts; let i = index; ">\n\n			<h2><strong>{{helper.moment(debt.debt_date).format(\'DD MMM YYYY - HH:MM\')}}</strong></h2> <span *ngIf="debt.debt_out > 0" class="bs-label label-success">Pembayaran</span> <span *ngIf="debt.debt_in > 0" class="bs-label label-main">Pengadaan hutang</span>\n\n			\n\n			<div style="margin-top: 5px;">\n\n				<span>Nominal : </span> <span *ngIf="debt.debt_out > 0">{{helper.intToIDR(debt.debt_out)}}</span> <span *ngIf="debt.debt_in > 0">{{helper.intToIDR(debt.debt_in)}}</span>\n\n			</div>\n\n		</ion-item>\n\n	</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\debt\debt.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_helper_helper__["a" /* HelperProvider */]])
    ], DebtPage);
    return DebtPage;
}());

//# sourceMappingURL=debt.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditReceiptItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_bill_bill__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EditReceiptItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditReceiptItemPage = (function () {
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
            __WEBPACK_IMPORTED_MODULE_3_jquery__(el.target).val(val);
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
            __WEBPACK_IMPORTED_MODULE_3_jquery__(el.target).val(val);
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
                    __WEBPACK_IMPORTED_MODULE_3_jquery__(el.target).val(complement_item);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-receipt-item',template:/*ion-inline-start:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\edit-receipt-item\edit-receipt-item.html"*/'<!--\n\n  Generated template for the EditReceiptItemPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-toolbar color="main">\n\n  <ion-navbar>\n\n    <ion-title>Edit product nota</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="updateItem()">\n\n        Tutup\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n</ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row class="relative center " id="product-content-body">\n\n     \n\n      <ion-col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 id="section-right" class="column">\n\n            \n\n            <ion-row class="row form-group">\n\n              <ion-col col-3 class="">Jumlah Pembelian</ion-col>\n\n              <ion-col col-9 class=" input-box input-group">\n\n                <button class="" ion-button color="light" icon-only id="" round (click)="reduceItem()" style="margin-right: 10px;">\n\n                  <ion-icon name="remove"></ion-icon>\n\n                </button>\n\n                <input type="number" class="form-control form-control--lg" name="" [(ngModel)]="item.qty">\n\n                <button class="" ion-button color="light" icon-only id="" round (click)="addItem()"  style="margin-left: 10px;">\n\n                  <ion-icon name="add"></ion-icon>\n\n                </button>\n\n              </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row class="form-group">\n\n              <ion-col col-3 class="">Harga</ion-col>\n\n              <ion-col col-9 class=" input-box input-group">\n\n                <input type="text" class="form-control--lg" name="" [(ngModel)]="item.price" disabled>\n\n              </ion-col>\n\n            </ion-row>\n\n            \n\n            <ion-row class="row form-group">\n\n              <ion-col col-3 class="">Diskon</ion-col>\n\n              <ion-col col-9 class=" input-box input-group">\n\n                <input type="number" maxlength="2" min="1" max="99" class="form-control--lg form-control" name="" style="width: 18%;" [(ngModel)]="item.discount_percent" (input)="countChargeNominal($event)">\n\n                <span class="input-group-addon" id="basic-addon1"> % </span>\n\n                <input type="number" class="form-control--lg form-control" name="" [(ngModel)]="item.discount_nominal" (input)="countChargePercent($event)">\n\n              </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row class="form-group">\n\n              <ion-col col-3 class="">Keterangan</ion-col>\n\n              <ion-col col-9 class=" input-box">\n\n                <textarea class="form-control" [(ngModel)]="item.note" (input)="changeNotes()" style="height: 100px;"></textarea>\n\n              </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row class="form-group">\n\n             \n\n              <ion-col col-3 class="">Complement?</ion-col>\n\n              <ion-col col-9 class=" input-box">\n\n                  <ion-toggle checked="false" value="1" [(ngModel)]="item.complement_status" (ionChange)="changeComplementStatus()"></ion-toggle>\n\n              </ion-col>\n\n            </ion-row>\n\n  \n\n            <ion-row class="form-group" *ngIf="item.complement_status > 0">\n\n              <ion-col col-3 class="">Complement Item</ion-col>\n\n              <ion-col col-9 class=" input-box input-group">\n\n                 <button class="" ion-button color="light" icon-only id="" round (click)="changeComplementItems(\'reduce\')" style="margin-right: 10px;">\n\n                  <ion-icon name="remove"></ion-icon>\n\n                </button>\n\n                <input type="number" min="1" max="{{item.qty}}" class="form-control" [(ngModel)]="item.complement_item" (input)="changeComplementItems(\'input\', $event)">\n\n                <button class="" ion-button color="light" icon-only id="" round (click)="changeComplementItems(\'add\')"  style="margin-left: 10px;">\n\n                  <ion-icon name="add"></ion-icon>\n\n                </button>\n\n                \n\n              </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row class="form-group" *ngIf="item.complement_status > 0">\n\n              <ion-col col-3 class="">Complement Note</ion-col>\n\n              <ion-col col-9 class=" input-box">\n\n                <textarea class="form-control" [(ngModel)]="item.complement_note" (input)="changeComplementNotes()" style="height: 100px;"></textarea>\n\n              </ion-col>\n\n            </ion-row>\n\n\n\n            <!-- <ion-row class="row form-group center">\n\n                <button ion-button end (click)="updateItem()">Simpan</button>\n\n\n\n                <button ion-button color="danger" (click)="closeModal()">Batal</button>\n\n            </ion-row> -->\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\edit-receipt-item\edit-receipt-item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_bill_bill__["a" /* BillProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], EditReceiptItemPage);
    return EditReceiptItemPage;
}());

//# sourceMappingURL=edit-receipt-item.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ErrorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ErrorPage = (function () {
    function ErrorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.page_params = { code: 500, message: "Page not found" };
        this.page_params = Object.assign(this.page_params, this.navParams.data);
        console.log(this.page_params);
    }
    ErrorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ErrorPage');
    };
    ErrorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-error',template:/*ion-inline-start:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\error\error.html"*/'<!--\n\n  Generated template for the ErrorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n	\n\n	<ion-toolbar color="main">\n\n		<ion-navbar>\n\n			<button ion-button menuToggle>\n\n				<ion-icon name="menu"></ion-icon>\n\n			</button>\n\n			<ion-title>Error {{page_params.code}}</ion-title>\n\n		</ion-navbar>\n\n	</ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="" >\n\n	<div class="center distributed" style="height: 90vh;flex-direction: column;">\n\n		<div class="col-md-7 col-xs-12 col-sm-8 col-lg-6" style="text-align: center;">\n\n				\n\n			<h1 style="font-size: 15rem;">{{page_params.code}}</h1>\n\n			<p style="font-size: 3rem;">{{page_params.message}}</p>\n\n		</div>\n\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\error\error.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ErrorPage);
    return ErrorPage;
}());

//# sourceMappingURL=error.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TotalPaymentEditorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_helper_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_bill_bill__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import * as moment from 'moment';
/**
 * Generated class for the TotalPaymentEditorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TotalPaymentEditorPage = (function () {
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
            __WEBPACK_IMPORTED_MODULE_4_jquery__(el.target).val(discount_percent);
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
            __WEBPACK_IMPORTED_MODULE_4_jquery__(el.target).val(val);
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
        __WEBPACK_IMPORTED_MODULE_4_jquery__["post"](this.helper.config.base_url('admin/disc-manage/data/discount/active'), data)
            .done(function (res) {
            res = !_this.helper.isJSON(res) ? res : JSON.parse(res);
            _this.bill.discounts = res.data;
        });
    };
    TotalPaymentEditorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-total-payment-editor',template:/*ion-inline-start:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\total-payment-editor\total-payment-editor.html"*/'<!--\n\n  Generated template for the TotalPaymentEditorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n	<ion-toolbar color="main">\n\n\n\n		<ion-navbar>\n\n			<ion-title>Edit total pembayaran</ion-title>\n\n			<ion-buttons end>\n\n				<button ion-button icon-only (click)="updateItem()" *ngIf="page_params.view_type == \'modal\' ">\n\n					Selesai\n\n				</button>\n\n			</ion-buttons>\n\n		</ion-navbar>\n\n\n\n	</ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<ion-grid>\n\n		<ion-row>\n\n			<ion-col offset-2 col-7 col-xs-12 col-sm-10 col-md-7 >\n\n				<ion-row class="row form-group">\n\n					<ion-col col-3 class="">Total Belanja</ion-col>\n\n					<ion-col col-9 class=" input-box">\n\n						<input type="text" class="form-control--lg" name="" disabled value="Rp. {{helper.intToIDR(billProvider.get_bill_component(\'payment_bills\'))}}">\n\n					</ion-col>\n\n				</ion-row>\n\n\n\n				<ion-row class="row form-group ion-checkbox-no-bordered">\n\n					<ion-col col-3 class=""></ion-col>\n\n					<ion-col col-9 class=" input-box input-group">\n\n						<ion-item style="padding-left: 0px;">\n\n							<ion-label style="border-bottom: none;">Tambahkan diskon</ion-label>\n\n						  	<ion-checkbox color="primary" checked="true" value="1" [(ngModel)]="bill.is_discount" (ionChange)="toggleDiscount()"></ion-checkbox>\n\n						</ion-item>\n\n					</ion-col>\n\n				</ion-row>\n\n\n\n				\n\n				<ion-row class="row form-group" *ngIf="bill.is_discount">\n\n					<ion-col col-3 class=""></ion-col>\n\n					<ion-col col-3 class="">\n\n						<div>\n\n							<ion-toggle checked="false" [(ngModel)]="bill.discount_type_fill"></ion-toggle>\n\n						</div>\n\n						<!-- <ion-select [(ngModel)]="bill.discount_type_fill" style="max-width:100%; width: 100%;">\n\n						    <ion-option value="0" selected>Pilih Type</ion-option>\n\n						    <ion-option value="1">Manual</ion-option>\n\n						    <ion-option value="2">Master Data</ion-option>\n\n						</ion-select> -->\n\n					</ion-col>\n\n\n\n					<ion-col col-6 class="" *ngIf="bill.discount_type_fill">\n\n						<ion-select [(ngModel)]="bill.discount_id" (ionChange)="change_discount()" style="max-width:100%; width: 100%;">\n\n							<ion-option value="0"  selected> Pilih Diskon </ion-option>\n\n							<ion-option value="{{item.discount_id}}" *ngFor="let item of bill.discounts" > {{item.discount_name}} - {{item.discount_percent}} % </ion-option>\n\n					    </ion-select>\n\n					</ion-col>\n\n					<ion-col col-6 class=" input-box input-group" *ngIf="!bill.discount_type_fill">\n\n						<input type="number" class="form-control--lg form-control" max="99" min="1" name="" style="width: 20%;" [(ngModel)]="bill.discount_percent" (input)="countDiscountNominal($event)" >\n\n						<span class="input-group-addon" id="basic-addon1"> % </span>\n\n						<input type="" class="form-control--lg form-control" name="" [(ngModel)]="bill.discount_nominal" (input)="countDiscountPercent($event)">\n\n					</ion-col>\n\n				</ion-row>\n\n\n\n				\n\n				<!-- <ion-row class="row form-group" *ngIf="bill.is_discount">\n\n					<ion-col col-3 class="">Discount</ion-col>\n\n					<ion-col col-9 class=" input-box input-group">\n\n						\n\n					</ion-col>\n\n				</ion-row> -->\n\n				\n\n				<ion-row class="row form-group ion-checkbox-no-bordered">\n\n					<ion-col col-3 class=""></ion-col>\n\n					<ion-col col-9 class=" input-box input-group">\n\n						<ion-item style="padding-left: 0px;">\n\n							<ion-label style="border-bottom: none;">Tambahkan Pajak</ion-label>\n\n						  	<ion-checkbox color="primary" checked value="1" [(ngModel)]="bill.is_tax" (ionChange)="toggleTax($event)"></ion-checkbox>\n\n						</ion-item>\n\n					</ion-col>\n\n				</ion-row>\n\n\n\n				<ion-row class="row form-group">\n\n					<ion-col col-3 class="">Pajak</ion-col>\n\n					<ion-col col-9 class=" input-box input-group">\n\n						<input type="number" min="1" max="99"  class="form-control--lg form-control" disabled="" name="" style="width: 18%;" [(ngModel)]="bill.tax_percent"  (input)="countTaxNominal()" value="10">\n\n						<span class="input-group-addon" id="basic-addon1"> % </span>\n\n						<input type="" class="form-control--lg form-control" name="" disabled="" [(ngModel)]="bill.tax_nominal" (input)="countTaxPercent()">\n\n					</ion-col>\n\n				</ion-row>\n\n\n\n				<ion-row class="form-group">\n\n					<ion-col col-3 class="">Total </ion-col>\n\n					<ion-col col-9 class=" input-box">\n\n						<input type="text" disabled class="form-control--lg" name="" value="Rp. {{ helper.intToIDR(billProvider.get_bill_component(\'payment_total\')) }}">\n\n					</ion-col>\n\n				</ion-row>\n\n\n\n				<!-- <ion-row class="row form-group center">\n\n						<button ion-button end (click)="updateItem()">Simpan</button>\n\n\n\n						<button ion-button color="danger" (click)="closeModal()">Batal</button>\n\n				</ion-row> -->\n\n			\n\n			</ion-col>\n\n		</ion-row>				\n\n	</ion-grid>\n\n\n\n						\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\total-payment-editor\total-payment-editor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_bill_bill__["a" /* BillProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_helper_helper__["a" /* HelperProvider */]])
    ], TotalPaymentEditorPage);
    return TotalPaymentEditorPage;
}());

//# sourceMappingURL=total-payment-editor.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_helper_helper__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MemberDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MemberDetailPage = (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-member-detail',template:/*ion-inline-start:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\member-detail\member-detail.html"*/'<!--\n\n  Generated template for the MemberDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>member-detail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<div class="row">\n\n		<div class="col-md-4">\n\n			<ion-list>\n\n				<ion-item>\n\n					Nama\n\n					<ion-note>\n\n						{{detail_member.member_name}}\n\n					</ion-note>\n\n				</ion-item>\n\n\n\n				<ion-item>\n\n					Email\n\n					<ion-note>\n\n						{{detail_member.member_mail}}\n\n					</ion-note>\n\n				</ion-item>\n\n\n\n				<ion-item>\n\n					Phone\n\n					<ion-note>\n\n						{{detail_member.member_phone}}\n\n					</ion-note>\n\n				</ion-item>\n\n			</ion-list>\n\n		</div>\n\n		<div class="col-md-8">\n\n			<ion-list>\n\n				<ion-item *ngFor="let item of transaction; let i = index">\n\n					<span>{{transform_date(item.payment_date)}}</span> &middot;\n\n					<span style="font-weight:700; ">\n\n						{{item.visitor_name}}\n\n					</span>\n\n					<p style="margin-top: 10px;">\n\n						<span> Nota {{item.pay_id}} &middot;</span>\n\n						<span *ngIf="!item.table_name"> Tidak memilih meja &middot;</span> \n\n						<span *ngIf="item.table_name"> {{item.table_name}} &middot;</span> \n\n						<span> Rp.{{helper.intToIDR(item.payment_total)}} &middot;</span>\n\n						<span *ngIf="item.payment_nominal > 0 && item.payment_cancel_status == 0" class="bs-label label-success"> Terbayar </span>\n\n						<span *ngIf="item.payment_nominal < 1 && item.payment_cancel_status == 0" class="bs-label label-warning"> Belum Dibayar </span>\n\n						<span *ngIf="item.payment_cancel_status == 1" class="bs-label label-danger"> Pembayaran Dibatalkan </span>\n\n			      	<!-- {{item.payment_nominal + item.paid_with_bank_nominal}} -->\n\n					</p>\n\n					<p>\n\n						\n\n					</p>\n\n					<ion-icon name="done-all" *ngIf="item.payment_nominal > 0 && item.payment_cancel_status == 0" color="primary" item-end></ion-icon>\n\n					<ion-icon name="alert" *ngIf="item.payment_nominal < 1 && item.payment_cancel_status == 0" color="warning" item-end></ion-icon>\n\n					<ion-icon name="trash" *ngIf="item.payment_cancel_status == 1" color="danger" item-end></ion-icon>\n\n				</ion-item>\n\n			</ion-list>\n\n		</div>\n\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\member-detail\member-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_helper_helper__["a" /* HelperProvider */]])
    ], MemberDetailPage);
    return MemberDetailPage;
}());

//# sourceMappingURL=member-detail.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendReceiptPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_product__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_helper_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_bill_bill__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SendReceiptPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SendReceiptPage = (function () {
    function SendReceiptPage(navCtrl, navParams, helper, billProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.helper = helper;
        this.billProvider = billProvider;
        this.latest_bill_id = {};
        this.email = '';
        this.latest_bill_id = this.navParams.get('data');
    }
    SendReceiptPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SendReceiptPage');
    };
    SendReceiptPage.prototype.sendReceiptToEmail = function (returned) {
        var _this = this;
        if (returned === void 0) { returned = false; }
        if (this.email.length < 1) {
            this.helper.alertCtrl.create({
                title: "Kesalahan",
                message: "Untuk mengirimkan nota ke alamat email, mohon isikan email pengguna pada kolom email yang telah disediakan.",
                buttons: ["OK"]
            }).present();
            return false;
        }
        var loading = this.helper.loadingCtrl.create({
            content: "Mengirimkan nota"
        });
        loading.present();
        var url = this.helper.config.base_url('admin/outlet/transaction/send_bill');
        return this.helper.$.post(url, { pay_id: this.latest_bill_id, email: this.email })
            .done(function (res) {
            res = JSON.parse(res);
            loading.dismiss();
            if (res.code == 200) {
                if (!returned) {
                    _this.helper.alertCtrl.create({
                        title: "Proses selesai",
                        message: "Email telah dikirimkan",
                        buttons: ["OK"]
                    }).present();
                }
            }
            else {
                _this.helper.alertCtrl.create({
                    title: "Proses gagal",
                    message: "Email gagal dikirimkan",
                    buttons: ["OK"]
                }).present();
            }
        })
            .fail(function () {
            loading.dismiss();
            _this.helper.alertCtrl.create({
                title: "Proses gagal",
                message: "Email gagal dikirimkan",
                buttons: ["OK"]
            }).present();
        });
    };
    SendReceiptPage.prototype.printReceipt = function () {
        var _this = this;
        var loadingPrint = this.helper.loadingCtrl.create({
            content: "Mencetak nota",
        });
        loadingPrint.present();
        return this.process_print_nota(this.latest_bill_id)
            .then(function () {
            loadingPrint.dismiss();
            _this.helper.alertCtrl.create({
                title: "Proses selesai",
                message: "Nota telah tercetak",
                buttons: ["OK"]
            }).present();
        }, function () {
            _this.helper.alertCtrl.create({
                title: "Proses gagal",
                message: "Nota gagal tercetak",
                buttons: ["OK"]
            }).present();
            loadingPrint.dismiss();
        });
    };
    SendReceiptPage.prototype.sendAndPrint = function () {
        var _this = this;
        this.sendReceiptToEmail(true)
            .done(function (res) {
            res = JSON.parse(res);
            if (res.code == 200) {
                _this.printReceipt()
                    .then(function () {
                });
            }
        });
    };
    SendReceiptPage.prototype.backToCashier = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__product_product__["a" /* ProductPage */], {
            previous: 'payment-page',
            event: 'payment.cashier',
            trigger_event: "order.new",
            message: "Nota telah dibayarkan"
        });
    };
    SendReceiptPage.prototype.process_print_nota = function (nota) {
        var _this = this;
        if (nota === void 0) { nota = null; }
        return new Promise(function (resolve, reject) {
            if (!_this.helper.printer.isAvailable()) {
                _this.helper.alertCtrl.create({
                    title: "Kesalahan",
                    message: "Layanan printer tidak tersedia untuk perangkat ini",
                    buttons: ["OK"]
                }).present();
                return false;
            }
            _this.helper.local.opendb('printer_connected')
                .then(function (device) {
                console.log(device);
                if (!device || !device.address) {
                    _this.helper.alertCtrl.create({
                        title: "Printer tidak ditemukan",
                        message: "Silahkan menuju settings dan pilih menu printer.",
                        buttons: ["OK"]
                    }).present();
                    return false;
                }
                _this.helper.printer.connect(device.address)
                    .then(function () {
                    setTimeout(function () {
                        var t = _this.billProvider.print_nota(nota);
                        _this.helper.printer.printText(t)
                            .then(function () {
                            resolve();
                        }, function () {
                            reject();
                        });
                    }, 2000); // set timeout
                });
            });
        }); // end of promise
    };
    SendReceiptPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-send-receipt',template:/*ion-inline-start:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\send-receipt\send-receipt.html"*/'<!--\n\n  Generated template for the SendReceiptPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n	<ion-toolbar color="main">\n\n	  <ion-navbar>\n\n	    <ion-title>Send Receipt</ion-title>\n\n	  </ion-navbar>\n\n	</ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<div class="sendreceipt-box">\n\n		<div class="" style="margin-bottom: 35px;">Bagaimana anda menyerahkan struk ini kepada pelanggan?</div>\n\n		<div style="width: 60%">\n\n			<div style="display: flex;" class="btn-action">\n\n				<input type="email" name="" class="input-send-email-inline" placeholder="Email pelanggan" [(ngModel)]="email">\n\n				<button class="flat btn-send-email-inline" ion-button color="secondary" (click)="sendReceiptToEmail()"> Kirim </button>\n\n			</div>\n\n			<button class="btn-action" ion-button block color="secondary" (click)="printReceipt()">Cetak Struk ini</button>\n\n			<button class="btn-action" ion-button block color="secondary" (click)="sendAndPrint()">Cetak dan Email struk ini</button>\n\n			<button class="btn-action" ion-button block color="danger" (click)="backToCashier()">Kembali ke cashier.</button>\n\n		</div>\n\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\send-receipt\send-receipt.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_helper_helper__["a" /* HelperProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_bill_bill__["a" /* BillProvider */]])
    ], SendReceiptPage);
    return SendReceiptPage;
}());

//# sourceMappingURL=send-receipt.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplitBillPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_helper_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_bill_bill__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_product__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SplitBillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SplitBillPage = (function () {
    function SplitBillPage(navCtrl, navParams, helper, billProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.helper = helper;
        this.billProvider = billProvider;
        this.receipts = [];
        this.event_handler = {};
        this.bill = this.billProvider.default_bill_value();
        this.receipt_page_params = {
            can_edit_slide_item: true,
            can_edit_bill_total: true,
            can_edit_table: false,
            can_edit_visitor_name: false,
            show_footer: true,
            show_header: true,
            show_content: true
        };
        this.helper.events.subscribe('bill.item.clicked', function (data) {
            var item = Object.assign(data.item, {});
            var qty = _this.billProvider.get_order_item(data.index, 'qty');
            if (qty > 0) {
                qty = qty - 1;
                _this.billProvider.set_order_item(data.index, 'qty', qty);
                var index = _this.billProvider.check_nota_order(_this.bill_index, item.product, item.order_session);
                if (index < 0) {
                    var ndata = Object.assign({}, data.item);
                    ndata.qty = 1;
                    ndata.index_ref = data.index;
                    delete ndata.pay_id;
                    delete ndata.detail_id;
                    _this.billProvider.new_nota_order(_this.bill_index, ndata);
                }
                else {
                    var nqty = _this.billProvider.get_nota_order(_this.bill_index, index, 'qty') + 1;
                    _this.billProvider.set_nota_order(_this.bill_index, index, 'qty', nqty);
                }
                if (qty <= 0) {
                    _this.billProvider.remove_order(data.index);
                }
            }
            _this.billProvider.count_pricing();
            _this.helper.events.publish('bill.update', {});
            _this.billProvider.nota_count_pricing(_this.billProvider.get_nota(_this.bill_index));
        });
        if (this.navParams.data.receipt_page_params) {
            this.update_page_parameters(this.navParams.data.receipt_page_params);
        }
    }
    SplitBillPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SplitBillPage');
    };
    SplitBillPage.prototype.update_page_parameters = function (data) {
        if (data === void 0) { data = {}; }
        this.receipt_page_params = Object.assign(this.receipt_page_params, data);
    };
    SplitBillPage.prototype.ionViewWillEnter = function () {
        console.log(this.navParams.data.bill);
        this.billProvider.update_bill_component(this.navParams.data.bill, false);
        this.billProvider.count_pricing();
        this.helper.events.publish('bill.update', {});
        var cBill = Object.assign({}, this.navParams.data.bill);
        cBill.orders = [];
        cBill.ref_bill = cBill.pay_id;
        delete cBill.pay_id;
        cBill.visitor_name = "#spl-" + cBill.ref_bill;
        this.bill_index = this.billProvider.new_nota(cBill);
        /*
        this.billProvider.set_header();
        this.billProvider.insert_item();
        this.billProvider.insert_item();
        this.billProvider.insert_item();
        
        */
    };
    SplitBillPage.prototype.ionViewWillUnload = function () {
        this.helper.events.unsubscribe('bill.item.clicked');
    };
    SplitBillPage.prototype.pay_transaction = function () {
        console.log(this.billProvider.get_nota(this.bill_index));
        var bill = this.billProvider.get_nota(this.bill_index);
        bill.reference_bill = this.billProvider.get_bill();
        if (Object.keys(bill.reference_bill.orders).length < 1 || Object.keys(bill.orders).length < 1) {
            this.helper.alertCtrl.create({
                title: 'Kesalahan',
                subTitle: 'Data tidak boleh kosong',
                buttons: ['OK']
            }).present();
            return false;
        }
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__product_product__["a" /* ProductPage */], {
            previous: 'transaction-page',
            event: 'transaction.split',
            trigger_event: 'product.pay',
            bill: bill,
            receipt_page_params: {
                can_edit_slide_item: true
            }
        });
    };
    SplitBillPage.prototype.update_receipt = function () {
        // let receipt = this.get_data_receipt();
        this.billProvider.set_nota_property(this.bill_index, 'visitor_name', this.bill.visitor_name);
        this.billProvider.update_bill_component({}, true);
    };
    SplitBillPage.prototype.editItem = function (item, index) {
        var qty = this.billProvider.get_nota_order(this.bill_index, index, 'qty');
        if (qty > 0) {
            qty = qty - 1;
            this.billProvider.set_nota_order(this.bill_index, index, 'qty', qty);
            item.id = item.product;
            this.billProvider.insert_product(item);
            if (qty > 0) {
            }
            else {
                this.billProvider.remove_nota_order(this.bill_index, index);
            }
        }
        this.billProvider.count_pricing();
        this.helper.events.publish('bill.update', {});
        this.billProvider.nota_count_pricing(this.billProvider.get_nota(this.bill_index));
    };
    SplitBillPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-split-bill',template:/*ion-inline-start:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\split-bill\split-bill.html"*/'<!--\n\n  Generated template for the SplitBillPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n	\n\n	<ion-toolbar color="main">\n\n		<ion-navbar>\n\n			<ion-title>Pisahkan bill</ion-title>\n\n		</ion-navbar>\n\n		<ion-buttons end>\n\n			<button ion-button clear color="light" (click)="pay_transaction()">\n\n				Bayar\n\n			</button>\n\n		</ion-buttons>\n\n		\n\n	</ion-toolbar>\n\n	\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding id="page-split-bill">\n\n	<ion-grid class="">\n\n		<ion-row class="relative center">\n\n			<div  col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 id="section-left">\n\n				<div class="">\n\n					<page-receipt></page-receipt> \n\n				</div>\n\n			</div>\n\n			<div  col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 id="section-right">\n\n				<div class="receipt relative">\n\n					<div class="receipt-header" *ngIf="receipt_page_params.show_header">\n\n						<div class="receipt--costumer-header pseudo">\n\n							<h5 class="title">{{helper.local.get_params(helper.config.variable.credential).outlet.outlet_name? helper.local.get_params(helper.config.variable.credential).outlet.outlet_name : \'\'}}</h5>\n\n							<div class=" center " style="display: flex;"><div style="width: 80%;">{{helper.local.get_params(helper.config.variable.credential).outlet.outlet_address?helper.local.get_params(helper.config.variable.credential).outlet.outlet_address:\'\'}}</div> </div>\n\n							<div>{{helper.local.get_params(helper.config.variable.credential).outlet.outlet_phone?helper.local.get_params(helper.config.variable.credential).outlet.outlet_phone:\'\'}}</div>\n\n						</div>\n\n						<ion-row class="receipt-headinput">\n\n							<ion-col col-5>\n\n								<input type="text" name="" class="text-align--center form-control form-receipt--border-bottom form-receipt--table"  placeholder="Nomor Meja" [disabled]="can_edit_table" [(ngModel)]="bill.table_name" (input)="update_receipt()" (click)="change_table()">\n\n							</ion-col>\n\n							<ion-col col-2></ion-col>\n\n							<ion-col col-5>\n\n								<input type="text" name="" class="text-align--center form-control form-receipt--border-bottom form-receipt--customer"  placeholder="Atas nama" [disabled]="can_edit_visitor_name" [(ngModel)]="bill.visitor_name" (input)="update_receipt()">\n\n							</ion-col>\n\n						</ion-row>	\n\n					</div>\n\n					<div class="receipt-body" *ngIf="receipt_page_params.show_content">\n\n						\n\n						<div class="" style="display:flex; border-bottom: 1px solid #aaa; padding-bottom: 3px;margin-top: 10px; font-weight: 700;">\n\n							<div style="width: 10%"></div>\n\n							<div style="width: 10%">QTY</div>\n\n							<div style="width: 50%">ITEM</div>\n\n							<div style="width: 20%">HARGA</div>\n\n							<div style="width: 20%">JUMLAH</div>\n\n						</div>\n\n\n\n						<ion-list style="margin-top: 10px;">\n\n							<div *ngFor="let item of this.billProvider.get_nota(this.bill_index).orders; let i = index;">\n\n								<div class="session-order" *ngIf="item.first_session_order && item.order_session > 0">\n\n									Tambahan ke {{item.order_session}}\n\n								</div>\n\n								\n\n								<ion-item-sliding >\n\n									<ion-item class="item-receipt" id="receipt-product-{{item.id}}" style="display: flex; padding-left: 0px;" (click)="editItem(item, i)">\n\n										<div style="display: flex;font-size: .8em;">\n\n											<div class="receipt-detail--component text-align--center" style="width: 10%;"  >\n\n												<ion-icon md="ios-arrow-back" ios="ios-arrow-back"></ion-icon>\n\n											</div>\n\n											<div class="receipt-detail--component text-align--center" style="width: 10%;"  >\n\n												<span class="product-amount">{{item.qty}}</span>\n\n												<p class="italic receipt-detail--component--properties" *ngIf="item.complement_status > 0 && item.complement_item < item.qty">{{item.complement_item}}</p>\n\n\n\n											</div>\n\n											\n\n											<div class="receipt-detail--component text-align--left" style="width: 50%;" >\n\n												<span>{{item.name}}</span><br>\n\n												<p class="italic receipt-detail--component--properties" *ngIf="item.complement_status > 0">Complement</p>\n\n												<p class="italic receipt-detail--component--properties" *ngIf="billProvider.helper.IDRtoInt(item.discount_nominal) > 0 && (billProvider.helper.toInt(item.complement_status) != 1 || billProvider.helper.toInt(item.complement_item) < billProvider.helper.toInt(item.qty) )">Diskon {{billProvider.helper.toInt(item.discount_percent)}}%</p>\n\n												<p class="receipt-detail--component--notes">{{item.note}}</p>\n\n											</div>\n\n\n\n											<div class="receipt-detail--component" style="width: 20%;">\n\n												<span> {{billProvider.helper.intToIDR(item.price)}} </span>\n\n												<p class="italic receipt-detail--component--properties" *ngIf="item.complement_status > 0"> &nbsp; </p>\n\n												<p class="italic receipt-detail--component--properties" *ngIf="billProvider.helper.IDRtoInt(item.discount_nominal) > 0 && (billProvider.helper.toInt(item.complement_status) != 1 || billProvider.helper.toInt(item.complement_item) < billProvider.helper.toInt(item.qty) )">-{{ billProvider.helper.intToIDR(item.discount_nominal) }}</p>\n\n											</div>\n\n											<div class="receipt-detail--component" style="width: 20%;">{{billProvider.helper.intToIDR(item.total)}}</div>\n\n										</div>\n\n									</ion-item>\n\n\n\n									<!-- menu slider -->\n\n								    <ion-item-options side="right" *ngIf="receipt_page_params.can_edit_slide_item">\n\n								      <button ion-button color="danger" class="center distributed" (click)="removeItem(i, item)">\n\n								        <ion-icon name="trash" style="padding-left: 10px; padding-bottom: 0px; padding-right: 10px;"></ion-icon>\n\n								      </button>\n\n								    </ion-item-options>\n\n								    <ion-item-options side="left" *ngIf="receipt_page_params.can_edit_slide_item">\n\n								      <button ion-button color="secondary" class="center distributed" (click)="reduceItem(i, item)">\n\n								        <ion-icon name="remove" style="padding-left: 10px; padding-bottom: 0px; padding-right: 10px;"></ion-icon>\n\n								      </button>\n\n								      <button ion-button color="primary" class="center distributed" (click)="addItem(i, item)">\n\n								        <ion-icon name="add" style="padding-left: 10px; padding-bottom: 0px; padding-right: 10px;"></ion-icon>\n\n								      </button>\n\n								    </ion-item-options>\n\n								</ion-item-sliding>\n\n							</div>\n\n						</ion-list>\n\n						<div class="" *ngIf="!billProvider.get_bill_component(\'orders\') || billProvider.get_bill_component(\'orders\').length < 1" class="text-align--center"> Silahkan pilih menu disamping! </div>\n\n					</div>\n\n					<div class="receipt-footer" (click)="edit_total_payment()" *ngIf="receipt_page_params.show_footer"> \n\n						<!-- <table class="" style="margin-bottom: 0px;width: 100%;">\n\n							<tbody style="padding-top: 10px">\n\n								<tr class="" *ngIf="billProvider.get_bill_component(\'tax_nominal\')>0 || billProvider.get_bill_component(\'discount_nominal\')>0">\n\n									<td style="width: 10%;"></td>							\n\n									<td style="width: 10%;"></td>							\n\n									<td style="width: 48%;" class="text-align--right">Bill</td>\n\n									<td style="width: 5%;" class="text-align--right"><span class="">Rp.</span> </td>\n\n									<td style="width: 10%;" class="text-align--right"><span>{{billProvider.helper.intToIDR(bill.payment_bills)}} </span> </td>\n\n								</tr>\n\n\n\n								<tr class="" *ngIf="billProvider.get_bill_component(\'tax_nominal\')>0">\n\n									<td style="width: 10%;"></td>\n\n									<td style="width: 10%;"></td>							\n\n									<td style="width: 48%;" class="text-align--right">Pajak</td>\n\n									<td style="width: 5%;" class="text-align--right"><span class="">Rp.</span> </td>\n\n									<td style="width: 10%;" class="text-align--right"><span>{{billProvider.helper.intToIDR(billProvider.get_bill_component(\'tax_nominal\'))}} </span> </td>\n\n								</tr>\n\n\n\n								<tr class="" *ngIf="billProvider.get_bill_component(\'discount_nominal\')>0">\n\n									<td style="width: 10%;"></td>\n\n									<td style="width: 10%;"></td>							\n\n									<td style="width: 48%;" class="text-align--right">Diskon {{ billProvider.helper.toInt(billProvider.get_bill_component(\'discount_percent\')) > 0? billProvider.get_bill_component(\'discount_percent\')+\'%\':\'\'  }}</td>\n\n									<td style="width: 5%;" class="text-align--right"><span class="">Rp.</span> </td>\n\n									<td style="width: 10%;" class="text-align--right"><span>{{billProvider.helper.intToIDR(billProvider.get_bill_component(\'discount_nominal\'))}} </span> </td>\n\n								</tr>\n\n\n\n								<tr >\n\n									<td style="width: 10%;" ></td>\n\n									<td style="width: 10%;"></td>							\n\n									<td style="width: 48%; padding-top: 10px; font-size: 1.3em;" class="text-align--right">Total</td>\n\n									<td style="width: 5%; padding-top: 10px; font-size: 1.3em;" class="text-align--right"><span class="">Rp.</span> </td>\n\n									<td style="width: 10%; padding-top: 10px; font-size: 1.3em;" class="text-align--right"><span>{{billProvider.helper.intToIDR(billProvider.get_bill_component(\'payment_total\'))}} </span> </td>\n\n								</tr>\n\n\n\n							</tbody>\n\n						</table> -->\n\n					</div>\n\n				</div>\n\n			</div>\n\n		</ion-row>\n\n	</ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\split-bill\split-bill.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_helper_helper__["a" /* HelperProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_bill_bill__["a" /* BillProvider */]])
    ], SplitBillPage);
    return SplitBillPage;
}());

//# sourceMappingURL=split-bill.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TooltipProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TooltipProductPage = (function () {
    function TooltipProductPage(navCtrl, navParams, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
    }
    TooltipProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TooltipProductPage');
    };
    TooltipProductPage.prototype.zoom = function (type) {
        if (type === void 0) { type = "in"; }
        // this.navParams.data.zoom('out')
        this.events.publish('zoom.controller', { event: type });
    };
    TooltipProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tooltip-product',template:/*ion-inline-start:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\tooltip-product\tooltip-product.html"*/'<!--\n\n  Generated template for the TooltipProductPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content>\n\n	<ion-list>\n\n		\n\n\n\n		<ion-item class="component--zoom" style="">\n\n             <button ion-button color="main" round (click)="zoom(\'out\')">\n\n             	<ion-icon name="remove"></ion-icon>\n\n             </button>\n\n             Zoom product\n\n			<button ion-button color="main" round (click)="zoom()">\n\n				<ion-icon name="add"></ion-icon>\n\n			</button>\n\n		</ion-item>  \n\n	</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\tooltip-product\tooltip-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], TooltipProductPage);
    return TooltipProductPage;
}());

//# sourceMappingURL=tooltip-product.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_helper_helper__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalPage = (function () {
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
        if (this.modal.modal_nominal < 1 || !this.modal.modal_note) {
            this.helper.alertCtrl.create({
                title: "Kesalahan",
                message: "Silahkan lengkapi isian yang tersedia",
                buttons: ["OK"]
            }).present();
            return false;
        }
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
            else {
                _this.helper.alertCtrl.create({
                    title: "Kesalahan code:" + res.code,
                    message: res.message,
                    buttons: ["OK"]
                }).present();
            }
        })
            .fail(function () {
            _this.helper.alertCtrl.create({
                title: "Kesalahan code:" + 500,
                message: "Terdapat kesalahan saat penginputan data. Silahkan laporkan pengembang sistem untuk tindak lanjut",
                buttons: ["OK"]
            }).present();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal',template:/*ion-inline-start:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\modal\modal.html"*/'<!--\n\n  Generated template for the ModalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-toolbar color="main">\n\n  <ion-navbar>\n\n  	<button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Modal</ion-title>\n\n  </ion-navbar>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<div class="row">\n\n		<div class="col-md-4 col-xs-5" >\n\n			<ion-card>\n\n\n\n			  <ion-card-header>\n\n			    Menu Modal\n\n			  </ion-card-header>\n\n\n\n			  <ion-card-content>\n\n			    <!-- Add card content here! -->\n\n				<ion-list>\n\n\n\n					<ion-item>\n\n						<ion-label floating>Modal Nominal</ion-label>\n\n						<ion-input type="number" [(ngModel)]="modal.modal_nominal"></ion-input>\n\n					</ion-item>\n\n\n\n					<ion-item>\n\n						<ion-label floating>Catatan</ion-label>\n\n						<ion-textarea [(ngModel)]="modal.modal_note" style="height: 100%"></ion-textarea>\n\n					</ion-item>\n\n\n\n					<ion-item class="sr-only">\n\n					</ion-item>\n\n\n\n				</ion-list>\n\n				<div padding>\n\n					\n\n						<button ion-button block *ngIf="state==\'new\'" (click)="create_new_modal()"> Tambah modal </button>\n\n\n\n						<button ion-button block *ngIf="state==\'update\'" (click)="update_modal()"> Perbarui modal </button>\n\n				</div>\n\n			  </ion-card-content>\n\n\n\n			</ion-card>\n\n		</div>\n\n		<div class="col-md-8 col-xs-7" >\n\n\n\n			<div *ngIf="!data_modal || data_modal.length < 1" class="text-align--center">\n\n				Belum ada modal ditambahkan untuk hari ini.\n\n			</div>\n\n\n\n			<ion-row>\n\n		        <ion-col col-6 *ngFor="let item of data_modal; let i = index;" (press)="advanceOptions(i, item)">\n\n		          <ion-card padding>\n\n		          	<h2>Rp.{{helper.intToIDR(item.modal_nominal)}}</h2>\n\n		          	<div style="margin-top: 15px;" class="text-muted">\n\n		          		<div style="font-size: .7em;"> <ion-icon ios="ios-time" md="md-time"></ion-icon> {{helper.moment(item.modal_date).format(\'HH:mm - DD/MM/YYYY\')}} </div>\n\n		          		<div style="font-size: .7em;"> <ion-icon ios="ios-contact" md="md-contact"></ion-icon> {{item.users_fullname}} </div>\n\n		          	</div>\n\n		          </ion-card>\n\n		        </ion-col>\n\n		    </ion-row>\n\n		</div>\n\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\modal\modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_helper_helper__["a" /* HelperProvider */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_db_local_db_local__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_helper_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_error_error__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_print_bluetooth_panel_print_bluetooth_panel__ = __webpack_require__(345);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = (function () {
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_error_error__["a" /* ErrorPage */], { code: code, message: message });
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
    };
    SettingsPage.prototype.openPrinterBluetoothPrinterSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_print_bluetooth_panel_print_bluetooth_panel__["a" /* PrintBluetoothPanelPage */]);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\settings\settings.html"*/'<!--\n\n  Generated template for the SettingsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n	<ion-toolbar color="main">\n\n\n\n		<ion-navbar>\n\n			<button ion-button menuToggle>\n\n				<ion-icon name="menu"></ion-icon>\n\n			</button>\n\n			<ion-title>Pengaturan</ion-title>\n\n		</ion-navbar>\n\n\n\n	</ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<ion-list *ngIf="segment == \'menu\'">\n\n		<button ion-item icon-only (click)="segment = \'global\'">\n\n			<ion-icon name="settings" item-start></ion-icon>\n\n			Settings\n\n			<ion-icon name="arrow-forward" item-end></ion-icon>\n\n		</button>  \n\n\n\n		<button ion-item icon-only  (click)="openPrinterBluetoothPrinterSettings()">\n\n			<ion-icon name="print" item-start></ion-icon>\n\n			Printer\n\n			<ion-icon name="arrow-forward" item-end></ion-icon>\n\n		</button>  \n\n\n\n		<button ion-item icon-only (click)="to_error_page(404, \'Page under constructed!\')">\n\n			<ion-icon name="sync" item-start></ion-icon>\n\n			Synchronize\n\n			<ion-icon name="arrow-forward" item-end></ion-icon>\n\n		</button>  \n\n\n\n		<button ion-item icon-only (click)="segment = \'pengguna\'">\n\n			<ion-icon name="person" item-start></ion-icon>\n\n			Pengguna\n\n			<ion-icon name="arrow-forward" item-end></ion-icon>\n\n		</button>  \n\n		<ion-item-divider>\n\n			Logout\n\n		</ion-item-divider>\n\n		<button ion-item icon-only (click)="logout()">\n\n			<ion-icon name="unlock" item-start></ion-icon>\n\n			Logout\n\n		</button> \n\n\n\n	</ion-list>\n\n\n\n	<!-- Page -->\n\n	<div *ngIf="segment == \'global\'">\n\n  		<button ion-button color="primary" icon-left (click)="segment = \'menu\'" style="margin-left: 15px;"> <ion-icon name="arrow-back"></ion-icon> &nbsp; Kembali</button>\n\n  		<hr>\n\n		<ion-list>\n\n  			<ion-item>\n\n  				<ion-label> Pilih meja ketika order? </ion-label>\n\n  				<ion-toggle checked="true" (ionChange)="update_settings()" [(ngModel)]="settings.choose_table_first"></ion-toggle>\n\n			</ion-item>\n\n\n\n			<ion-item>\n\n  				<ion-label> Aktifkan mode hutang? </ion-label>\n\n  				<ion-toggle checked="true" (ionChange)="update_settings()" [(ngModel)]="settings.debt_mode"></ion-toggle>\n\n			</ion-item>\n\n		</ion-list>\n\n	</div>\n\n\n\n	<div *ngIf="segment == \'pengguna\'">\n\n  		<button ion-button color="primary" icon-left (click)="segment = \'menu\'" style="margin-left: 15px;"> <ion-icon name="arrow-back"></ion-icon> &nbsp; Kembali</button>\n\n  		<hr>\n\n  		<ion-list>\n\n\n\n  			<ion-item>\n\n  				<ion-label floating>Password lama</ion-label>\n\n  				<ion-input type="password" [(ngModel)]="users.old_password"></ion-input>\n\n  			</ion-item>\n\n  			<ion-item>\n\n  				<ion-label floating>Password baru</ion-label>\n\n  				<ion-input type="password" [(ngModel)]="users.new_password"></ion-input>\n\n  			</ion-item>\n\n  			<ion-item>\n\n  				<ion-label floating>Ulangi Password</ion-label>\n\n  				<ion-input type="password" [(ngModel)]="users.rePassword"></ion-input>\n\n  			</ion-item>\n\n\n\n  			<ion-item>\n\n  				<button ion-button block (click)="updateUser()">Update</button>\n\n  			</ion-item>\n\n\n\n  		</ion-list>\n\n	</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_db_local_db_local__["a" /* DbLocalProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_helper_helper__["a" /* HelperProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_helper_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_product_product__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_animations__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
* Generated class for the SpendPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var SpendPage = (function () {
    function SpendPage(navCtrl, navParams, helper, product) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.helper = helper;
        this.product = product;
        this.spend = {};
        this.spend_item_form = {};
        this.spend_item = [];
        this.products = [];
        this.ingredients = [];
        this.data_spend = [];
        this.spend_item_form_state = 'new';
        this.is_restaurant = helper.local.get_params(helper.config.variable.credential).outlet.serv_id != 1 || helper.local.get_params(helper.config.variable.credential).outlet.serv_id != 2;
        this.state = 'list';
        this.spend = {
            sp_date: this.helper.moment().add(7, 'hour').toISOString(),
            sp_paid: this.helper.moment().add(7, 'hour').toISOString(),
        };
        this.outlet = this.helper.local.get_params(this.helper.config.variable.credential).data.outlet_id;
        if (helper.local.get_params(helper.config.variable.credential).outlet.serv_id == 1 || helper.local.get_params(helper.config.variable.credential).outlet.serv_id == 2) {
            this.get_ingredient_data();
        }
        else {
            this.product.get_product({ data: {
                    outlet: this.outlet,
                    limit: 1000,
                    page: 1
                }, online: true })
                .then(function (res) {
                res = JSON.parse(res);
                if (res.code == 200) {
                    _this.products = res.data;
                }
            });
        }
    }
    SpendPage.prototype.ionViewDidLoad = function () {
    };
    SpendPage.prototype.ionViewWillEnter = function () {
        this.get_data_spend();
        // detect any params
        this.spend.sp_type = this.navParams.get('sp_type');
    };
    SpendPage.prototype.openSpendItem = function () {
        /*if(!this.spend.sp_bill || this.spend.sp_bill > 1)
        {
            this.helper.alertCtrl.create({
                title: "Data kurang lengkap",
                "message": "Mohon untuk mengisi uang yang dibayarkan",
                buttons: ["OK"]
            }).present();
            return false;
        }*/
        this.state = 'spend_item';
    };
    SpendPage.prototype.get_ingredient_data = function () {
        var _this = this;
        // serv_id
        var loading = this.helper.loadingCtrl.create({
            content: "Memeriksa data"
        });
        loading.present();
        var url = this.helper.config.base_url('admin/outlet/ingredient/get');
        this.helper.$.ajax({
            url: url,
            type: 'POST',
            data: {
                limit: 1000,
                page: 1,
                outlet_id: this.helper.local.get_params(this.helper.config.variable.credential).data.outlet_id,
                where: {
                    outlet_id: this.helper.local.get_params(this.helper.config.variable.credential).data.outlet_id
                }
            },
            dataType: 'json'
        })
            .done(function (res) {
            if (res.code == 200) {
                _this.ingredients = res.data;
            }
        })
            .always(function () {
            loading.dismiss();
        });
    };
    SpendPage.prototype.get_data_spend = function () {
        var _this = this;
        var loading = this.helper.loadingCtrl.create({
            content: "Memeriksa data"
        });
        loading.present();
        var url = this.helper.config.base_url('admin/outlet/spend/get');
        this.helper.$.ajax({
            url: url,
            type: 'POST',
            data: {
                outlet_id: this.helper.local.get_params(this.helper.config.variable.credential).data.outlet_id,
                where: {
                    spend_date_only: this.helper.moment().format('YYYY-MM-DD')
                }
            },
            dataType: 'json'
        })
            .done(function (res) {
            if (res.code == 200) {
                _this.data_spend = res.data;
            }
        })
            .always(function () {
            loading.dismiss();
        });
    };
    SpendPage.prototype.create_new_spend_data = function () {
        var _this = this;
        var loading = this.helper.loadingCtrl.create({
            content: "Menambahkan data"
        });
        loading.present();
        var data = this.spend;
        data.outlet_id = this.helper.local.get_params(this.helper.config.variable.credential).data.outlet_id;
        data.users_outlet_id = this.helper.local.get_params(this.helper.config.variable.credential).data.users_outlet_id;
        data.items = this.spend_item;
        var url;
        if (!this.spend.sp_id) {
            url = this.helper.config.base_url('admin/outlet/spend/add');
        }
        else {
            url = this.helper.config.base_url('admin/outlet/spend/update');
        }
        this.helper.$.ajax({
            url: url,
            type: 'POST',
            data: data,
            dataType: 'json'
        })
            .done(function (res) {
            if (res.code == 200) {
                _this.ResetItem();
                _this.reset_spend_item();
                _this.view_state = undefined;
                _this.state = 'list';
                _this.get_data_spend();
                _this.spend = {
                    sp_supplier: '',
                    sp_note: ''
                };
            }
        })
            .always(function () {
            loading.dismiss();
        });
    };
    SpendPage.prototype.countChargeNominal = function (ev) {
        var value = ev.target.value;
        this.spend.sp_disc_percent = value;
        // ev.target.value = this.helper.percentToNominal(value);
    };
    SpendPage.prototype.countChargePercent = function (ev) {
        this.spend.sp_disc_nominal;
    };
    SpendPage.prototype.countTotal = function ($ev) {
        var value = this.spend_item_form.sp_dt_price ? this.helper.IDRtoInt(this.spend_item_form.sp_dt_price) : 0;
        var qty = this.spend_item_form.sp_dt_qty ? this.spend_item_form.sp_dt_qty : 0;
        var total = value * qty;
        this.spend_item_form.sp_dt_total = this.helper.intToIDR(total);
        this.spend_item_form.sp_dt_price = this.helper.intToIDR(value);
    };
    SpendPage.prototype.SaveItem = function () {
        if (this.spend.sp_type) {
            var index = 0;
            if (this.is_restaurant) {
                index = this.ingredients.map(function (res) { return res.ingd_id; }).indexOf(this.spend_item_form.ingd_id);
                this.spend_item_form['product_item'] = this.ingredients[index];
            }
            else {
                index = this.products.map(function (res) { return res.id; }).indexOf(this.spend_item_form.prod_id);
                this.spend_item_form['product_item'] = this.products[index];
            }
        }
        if (this.spend.sp_type == 0 && (!this.spend_item_form.sp_dt_desc || this.spend_item_form.sp_dt_desc == '')) {
            this.helper.alertCtrl.create({
                message: "Deskripsi tidak boleh kosong!",
                buttons: ["OK"]
            }).present();
            return false;
        }
        if (Object.keys(this.spend_item_form).length > 0) {
            this.spend_item.push(this.spend_item_form);
        }
        this.countTotalSpend();
        this.ResetItem();
    };
    SpendPage.prototype.reset_spend_item = function () {
        this.spend_item = [];
    };
    SpendPage.prototype.ResetItem = function () {
        this.spend_item_form_state = 'new';
        this.spend_item_form_index = undefined;
        this.spend_item_form = {
            prod_id: '',
            sp_dt_qty: '',
            sp_dt_total: '',
            sp_dt_desc: '',
            sp_dt_note: '',
        };
        if (!this.spend.sp_type) {
            this.spend_item_form.sp_dt_price = '';
        }
    };
    SpendPage.prototype.RemoveItem = function (index) {
        this.spend_item.splice(index, 1);
    };
    SpendPage.prototype.EditItem = function (index, item) {
        console.log(item);
        this.spend_item_form_state = 'edit';
        this.spend_item_form_index = index;
        this.spend_item_form = item;
    };
    SpendPage.prototype.UpdateItem = function (index, item) {
        this.spend_item[this.spend_item_form_index] = this.spend_item_form;
        this.countTotalSpend();
        this.ResetItem();
    };
    SpendPage.prototype.countTotalSpend = function () {
        var _this = this;
        var sp_dt_total = this.spend_item.map(function (res) {
            return _this.helper.IDRtoInt(res.sp_dt_total);
        });
        var total = 0;
        this.helper.$.each(sp_dt_total, function (i, val) {
            total = total + val;
        });
        // discount
        var disc_nominal = this.helper.IDRtoInt(this.spend.sp_disc_nominal) > 0 ? this.spend.sp_disc_nominal : 0;
        if (this.spend.sp_disc_percent) {
            disc_nominal = this.helper.percentToNominal(this.spend.sp_disc_percent, total);
            this.spend.sp_disc_nominal = disc_nominal;
        }
        // tax
        var tax_nominal = this.helper.IDRtoInt(this.spend.sp_tax_nominal) > 0 ? this.spend.sp_tax_nominal : 0;
        if (this.spend.sp_tax_percent) {
            tax_nominal = this.helper.percentToNominal(this.spend.sp_tax_percent, total);
            this.spend.sp_tax_nominal = tax_nominal;
        }
        total = total - disc_nominal + tax_nominal;
        this.spend.sp_total = total;
        this.spend.sp_bill = total;
    };
    SpendPage.prototype.advanceOptions = function (index, item) {
        var _this = this;
        this.helper.actionSheet.create({
            title: 'Opsi Lanjutan',
            buttons: [
                {
                    text: 'Edit item',
                    handler: function () {
                        item = Object.assign({}, item);
                        _this.EditItem(index, item);
                    }
                },
                {
                    text: 'Hapus item',
                    handler: function () {
                        _this.RemoveItem(index);
                    }
                }
            ]
        }).present();
    };
    SpendPage.prototype.changeToIDR = function ($event) {
        var value_number = this.helper.IDRtoInt($event.target.value);
        var value = this.helper.intToIDR(value_number);
        this.spend.sp_bill = value;
    };
    SpendPage.prototype.close_preview = function () {
        this.view_state = 'form';
        this.state = 'list';
        this.spend = {};
        this.spend_item = [];
    };
    SpendPage.prototype.openSpendPreview = function () {
        this.state = 'spend_preview';
        this.countTotalSpend();
    };
    SpendPage.prototype.opsiLanjutanSpendItem = function (index, item) {
        var _this = this;
        this.helper.actionSheet.create({
            title: 'Opsi Lanjutan',
            buttons: [
                {
                    text: 'Lihat data',
                    handler: function () {
                        item = Object.assign({}, item);
                        _this.spend = item;
                        _this.spend_item = item.items;
                        _this.state = 'spend_preview';
                        _this.view_state = 'view';
                    }
                }, {
                    text: 'Edit data',
                    handler: function () {
                        console.log(item);
                        // this.EditItem(index, item)
                        item = Object.assign({}, item);
                        item.sp_type = item.sp_type == 1 ? false : true;
                        _this.spend = item;
                        _this.spend_item = item.items;
                        _this.helper.$.each(_this.spend_item, function (i, val) {
                            _this.spend_item[i].product_item = val;
                        });
                        _this.state = 'new_spend';
                        console.log(_this.spend_item);
                    }
                },
                {
                    text: 'Hapus data',
                    handler: function () {
                        _this.RemoveDataSpend(item);
                    }
                }
            ]
        }).present();
    };
    SpendPage.prototype.RemoveDataSpend = function (item) {
        var _this = this;
        var loading = this.helper.loadingCtrl.create({
            content: "Menghapus data"
        });
        var url = this.helper.config.base_url('admin/outlet/spend/delete');
        this.helper.$.ajax({
            url: url,
            type: 'POST',
            data: item,
            dataType: 'json'
        })
            .done(function (res) {
            if (res.code == 200) {
                // this.data_spend = res.data;
                // this.reset_spend_item();
                _this.state = 'list';
                // this.get_data_spend();
            }
        })
            .always(function () {
            loading.dismiss();
        });
    };
    SpendPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-spend',template:/*ion-inline-start:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\spend\spend.html"*/'<!--\n\n  Generated template for the SpendPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n	<ion-toolbar color="main">\n\n\n\n	  <ion-navbar>\n\n		<ion-buttons left>\n\n		    \n\n		    <button ion-button icon-only clear color="light" *ngIf="state == \'new_spend\'" (click)="state = \'list\'">\n\n		      <ion-icon name="arrow-back"></ion-icon>\n\n		    </button>\n\n\n\n		    <button ion-button icon-only clear color="light" *ngIf="state == \'spend_item\'" (click)="state = \'new_spend\'">\n\n		      <ion-icon name="arrow-back"></ion-icon>\n\n		    </button>\n\n\n\n		    <button ion-button icon-only clear color="light" *ngIf="state == \'spend_preview\' && view_state != \'view\'" (click)="state = \'spend_item\'">\n\n		      <ion-icon name="arrow-back"></ion-icon>\n\n		    </button>\n\n		</ion-buttons>\n\n\n\n	  	<button ion-button menuToggle *ngIf="state == \'list\'">\n\n	      <ion-icon name="menu"></ion-icon>\n\n	    </button>\n\n\n\n	    <ion-title>\n\n	    	<span *ngIf="state == \'list\'"><span *ngIf="spend.sp_type == 1">Pengadaan barang</span><span *ngIf="spend.sp_type == 0">Pengeluaran tak terduga</span></span>\n\n	    	<span *ngIf="state == \'new_spend\'">Tambah data <span *ngIf="spend.sp_type == 1">pengadaan</span><span *ngIf="spend.sp_type == 0">pengeluaran</span></span>\n\n	    	<span *ngIf="state == \'spend_item\'">Tambah item</span>\n\n	    	<span *ngIf="state == \'spend_preview\'">Preview <span *ngIf="spend.sp_type == 1">pengadaan</span><span *ngIf="spend.sp_type == 0">pengeluaran</span></span>\n\n	    </ion-title>\n\n\n\n		<ion-buttons end *ngIf="state == \'list\'"  >\n\n			<button ion-button clear color="light" (click)="state = \'new_spend\'">\n\n		      <ion-icon name="add"></ion-icon> &nbsp;\n\n		      Tambah data\n\n		    </button>\n\n		</ion-buttons>\n\n		<ion-buttons end *ngIf="state == \'new_spend\'" >\n\n		    <button ion-button clear color="light" (click)="openSpendItem()">\n\n		      Selanjutnya &nbsp;\n\n		      <ion-icon name="arrow-forward"></ion-icon>\n\n		    </button>\n\n		</ion-buttons>\n\n\n\n		<ion-buttons end *ngIf="state == \'spend_item\'" >\n\n		    <button ion-button clear color="light" (click)="openSpendPreview()">\n\n		      Selanjutnya &nbsp;\n\n		      <ion-icon name="arrow-forward"></ion-icon>\n\n		    </button>\n\n		</ion-buttons>\n\n\n\n		<ion-buttons end *ngIf="state == \'spend_preview\'" >\n\n		    <button ion-button clear color="light" *ngIf="!view_state || view_state != \'view\'" (click)="create_new_spend_data();">\n\n		      Simpan &nbsp;\n\n		      <ion-icon name="send"></ion-icon>\n\n		    </button>\n\n\n\n		    <button ion-button clear color="light" *ngIf="view_state == \'view\'" (click)="close_preview();">\n\n		      close &nbsp;\n\n		    </button>\n\n		</ion-buttons>\n\n\n\n	  </ion-navbar>\n\n	</ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n	<div *ngIf="state == \'list\'" [@pageTransition]="state" padding>\n\n		<div class="text-align--center" *ngIf="!data_spend || data_spend.length < 1">\n\n			Data Tidak Ditemukan \n\n		</div>\n\n		<ion-list *ngIf="data_spend">\n\n			<ion-item *ngFor="let item of data_spend; let i = index; " (click)="opsiLanjutanSpendItem(i, item)">\n\n				<h2>{{item.sp_supplier}}</h2>\n\n				<p>  \n\n					<span> Rp.{{helper.intToIDR(item.sp_total)}} </span>\n\n				</p>\n\n			</ion-item>\n\n		</ion-list>\n\n	</div>\n\n\n\n	<div *ngIf="state == \'new_spend\'" [@pageTransition]="state" style="padding-top: 15px;">\n\n		<div class="row center">\n\n			<div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">\n\n				<ion-list>\n\n\n\n					<!-- <ion-item>\n\n						<ion-label *ngIf="!spend.sp_type"> Pengeluaran <br><span class="text-info" style="font-size: .7em; ">Ganti toggle disamping untuk mengganti data.</span></ion-label>\n\n						<ion-label *ngIf="spend.sp_type"> Pengadaan <br><span class="text-info" style="font-size: .7em; ">Ganti toggle disamping untuk mengganti data.</span></ion-label>\n\n						<ion-toggle checked="false" value="1" [(ngModel)]="spend.sp_type"></ion-toggle>\n\n					</ion-item> -->\n\n\n\n				  <ion-item style="height: 85px;">\n\n				    <ion-label stacked>Supplier</ion-label>\n\n				    <ion-input type="text" [(ngModel)]="spend.sp_supplier"></ion-input>\n\n				  </ion-item>\n\n\n\n				  \n\n				</ion-list>\n\n			</div>\n\n			<div class="col-md-6 col-lg-6 col-xs-12 col-sm-12">\n\n				<div class="row">\n\n					<div class="col-md-6 col-sm-12 col-xs-12">\n\n						<ion-item style="height: 85px;">\n\n						    <ion-label stacked>Tanggal pengadaan</ion-label>\n\n						    <ion-datetime displayFormat="YYYY-MM-DD HH:mm" pickerFormat="YYYY-MM-DD HH:mm" [(ngModel)]="spend.sp_date"> </ion-datetime>\n\n						</ion-item>\n\n						\n\n					</div>\n\n					<div class="col-md-6 col-sm-12 col-xs-12">\n\n						\n\n						<ion-item style="height: 85px;">\n\n						    <ion-label stacked>Tanggal dibayarkan</ion-label>\n\n						    <ion-datetime displayFormat="YYYY-MM-DD HH:mm" pickerFormat="YYYY-MM-DD HH:mm" [(ngModel)]="spend.sp_paid"> </ion-datetime>\n\n						</ion-item>\n\n						\n\n					</div>\n\n				</div>	\n\n\n\n\n\n			</div>\n\n			<div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">\n\n				<ion-item style="height: 85px;">\n\n				    <ion-label stacked>Catatan</ion-label>\n\n				    <ion-textarea [(ngModel)]="spend.sp_note"></ion-textarea>\n\n\n\n				</ion-item>\n\n			</div>\n\n		</div>\n\n		<hr>\n\n		<div class="row">\n\n	 		<div class="col-md-4">\n\n	 			\n\n 					\n\n		 			<ion-list>\n\n		 				<ion-item *ngIf="spend.sp_type && helper.local.get_params(helper.config.variable.credential).outlet.serv_id != 1 && helper.local.get_params(helper.config.variable.credential).outlet.serv_id != 2 ">\n\n		 					<ion-label stacked>Product</ion-label>\n\n		 					<ion-select [(ngModel)]="spend_item_form.prod_id">\n\n		 						<ion-option selected>--Pilih Produk--</ion-option>\n\n		 						<ion-option *ngFor="let item of products; let i = index;" value="{{item.id}}">{{item.name}}</ion-option>\n\n		 					</ion-select >\n\n		 				</ion-item>\n\n\n\n		 				<ion-item *ngIf="spend.sp_type && (helper.local.get_params(helper.config.variable.credential).outlet.serv_id == 1 || helper.local.get_params(helper.config.variable.credential).outlet.serv_id == 2 )">\n\n		 					<ion-label stacked>Ingredient</ion-label>\n\n		 					<ion-select [(ngModel)]="spend_item_form.ingd_id">\n\n		 						<ion-option selected>--Pilih Produk--</ion-option>\n\n		 						<ion-option *ngFor="let item of ingredients; let i = index;" value="{{item.ingd_id}}">{{item.ingd_name}}</ion-option>\n\n		 					</ion-select >\n\n		 				</ion-item>\n\n		 				\n\n		 				<ion-item *ngIf="spend.sp_type == 0">\n\n		 					<ion-label stacked>Deskripsi</ion-label>\n\n		 					<ion-textarea name="desc" type="text" [(ngModel)]="spend_item_form.sp_dt_desc" style="height: 100px;"></ion-textarea>\n\n		 				</ion-item>\n\n\n\n		 				<ion-item>\n\n		 					<ion-label stacked>Jumlah</ion-label>\n\n		 					<ion-input name="qty" type="number" [(ngModel)]="spend_item_form.sp_dt_qty" (input)="countTotal($event)"> </ion-input>\n\n		 				</ion-item>\n\n\n\n		 				<ion-item>\n\n		 					<ion-label stacked>Harga per-item</ion-label>\n\n		 					<ion-input type="number" [(ngModel)]="spend_item_form.sp_dt_price" (input)="countTotal($event)"> </ion-input>\n\n		 				</ion-item>\n\n\n\n		 				<ion-item>\n\n		 					<ion-label stacked>Total</ion-label>\n\n		 					<ion-input name="total" type="text" [(ngModel)]="spend_item_form.sp_dt_total" disabled></ion-input>\n\n		 				</ion-item>\n\n\n\n		 				\n\n\n\n		 				<ion-item *ngIf="spend.sp_type == 1">\n\n		 					<ion-label stacked>Catatan</ion-label>\n\n		 					<ion-textarea name="note" type="text" [(ngModel)]="spend_item_form.sp_dt_note" style="height: 100px;"></ion-textarea>\n\n		 				</ion-item>\n\n\n\n		 				<ion-item>\n\n			 				<button ion-button  block type="button" color="main" (click)="SaveItem()" *ngIf="spend_item_form_state==\'new\'">\n\n			 					Tambahkan item \n\n							</button>\n\n							<button ion-button  block type="button" color="main" (click)="UpdateItem()" *ngIf="spend_item_form_state==\'edit\'">\n\n			 					Perbarui data\n\n							</button>\n\n							<button ion-button block  type="reset" color="dark" (click)="ResetItem()">\n\n			 					Reset\n\n							</button>\n\n		 				</ion-item>\n\n\n\n		 				<ion-item>\n\n		 				</ion-item>\n\n\n\n	 				</ion-list>\n\n\n\n	 			\n\n	 		</div>\n\n	 		<div class="col-md-8">\n\n	 			\n\n	 			<ion-list  *ngIf="spend.sp_type == 0">\n\n	 				<ion-item *ngFor="let item of spend_item; let i = index;" style="" (press)="advanceOptions(i, item)" (click)="advanceOptions(i, item)">\n\n	 					<h1 *ngIf="spend.sp_type == 1">{{item.product_item.name}}</h1>\n\n	 					<h4 *ngIf="spend.sp_type == 0">Item {{i+1}}</h4>\n\n	 					<p>\n\n	 						<span style="font-weight: 700;">QTY: </span> <span>{{item.sp_dt_qty}}</span> &middot;\n\n	 						<span style="font-weight: 700;">Harga: </span> <span>{{item.sp_dt_price}}</span> &middot;\n\n	 						<span style="font-weight: 700;">Total: </span> <span>{{item.sp_dt_total}}</span>\n\n	 					</p>\n\n	 				</ion-item>\n\n	 			</ion-list>\n\n	 			<ion-list  *ngIf="spend.sp_type == 1">\n\n	 				<ion-item *ngFor="let item of spend_item; let i = index;" style="" (press)="advanceOptions(i, item)" (click)="advanceOptions(i, item)">\n\n	 					<h1 *ngIf="spend.sp_type == 1">{{item.product_item.ingd_name}}</h1>\n\n	 					<p>\n\n	 						<span style="font-weight: 700;">QTY: </span> <span>{{item.sp_dt_qty}}</span> &middot;\n\n	 						<span style="font-weight: 700;">Harga: </span> <span>{{item.sp_dt_price}}</span> &middot;\n\n	 						<span style="font-weight: 700;">Total: </span> <span>{{item.sp_dt_total}}</span>\n\n	 					</p>\n\n	 				</ion-item>\n\n	 			</ion-list>\n\n	 		</div>\n\n\n\n		</div>\n\n		\n\n	</div>\n\n\n\n	<div *ngIf="state == \'spend_item\'" [@pageTransition]="state">\n\n	 	<div class="row center">\n\n			<div class="col-md-5 col-lg-5 col-xs-12 col-sm-12">\n\n				  \n\n				<ion-list>\n\n					\n\n\n\n					<div class=" form-group" padding>\n\n						<label>Pajak</label>\n\n						<div class="input-box input-group" style="margin-top: 8px;">\n\n							<input type="number" maxlength="2" min="1" max="99" class="form-control--lg form-control" name="" style="width: 18%;" id="" (input)="countTotalSpend()" [(ngModel)]="spend.sp_tax_percent">\n\n							<span class="input-group-addon" id="basic-addon1"> % </span>\n\n							<input type="number" class="form-control--lg form-control" name="" id="" placeholder="Pajak nominal" (input)="countTotalSpend()" [(ngModel)]="spend.sp_tax_nominal">\n\n						</div>\n\n					</div>\n\n\n\n					<div class=" form-group" padding>\n\n						<label>Diskon</label>\n\n						<div class="input-box input-group" style="margin-top: 8px;">\n\n							<input type="number" maxlength="2" min="1" max="99" class="form-control--lg form-control" name="" style="width: 18%;" id="" (input)="countTotalSpend()"[(ngModel)]="spend.sp_disc_percent">\n\n							<span class="input-group-addon" id="basic-addon1"> % </span>\n\n							<input type="number" class="form-control--lg form-control" name="" id="" placeholder="Diskon nominal" (input)="countTotalSpend()" [(ngModel)]="spend.sp_disc_nominal">\n\n						</div>\n\n					</div>\n\n\n\n					<ion-item>\n\n				    	<ion-label floating>Total biaya</ion-label>\n\n				    	<ion-input type="text" disabled value="{{helper.intToIDR(spend.sp_total)}}"></ion-input>\n\n				  	</ion-item>\n\n\n\n				  	<ion-item>\n\n				    	<ion-label floating>Uang dibayarkan</ion-label>\n\n				    	<ion-input type="text"  [(ngModel)]="spend.sp_bill"  (input)="changeToIDR($event)"></ion-input>\n\n				  	</ion-item>\n\n\n\n				  <ion-item>\n\n				  </ion-item>\n\n\n\n				</ion-list>\n\n			</div>\n\n		</div>\n\n	</div>\n\n\n\n	<div *ngIf="state == \'spend_preview\'" [@pageTransition]="state">\n\n		<ion-list>\n\n			<ion-item>\n\n				Supplier\n\n				<ion-note item-end>\n\n					{{spend.sp_supplier}}\n\n				</ion-note>\n\n			</ion-item>\n\n			<ion-item>\n\n				Tanggal pembelian\n\n				<ion-note item-end>\n\n					{{helper.moment(spend.sp_date).format(\'YYYY-MM-DD HH:mm\')}}\n\n				</ion-note>\n\n			</ion-item>\n\n			<ion-item>\n\n				Tanggal dibayarkan\n\n				<ion-note item-end>\n\n					{{helper.moment(spend.sp_paid).format(\'YYYY-MM-DD HH:mm\')}}\n\n				</ion-note>\n\n			</ion-item>\n\n			<ion-item>\n\n				Type\n\n				<ion-note item-end>\n\n					<span *ngIf="spend.sp_type">Pengadaan</span>\n\n					<span *ngIf="!spend.sp_type">Pengeluaran</span>\n\n				</ion-note>\n\n			</ion-item>\n\n			<ion-item-divider color="main">Item pembelian</ion-item-divider>\n\n			<ion-item *ngFor="let item of spend_item; let i = index;" style="" (press)="advanceOptions(i, item)" (click)="advanceOptions(i, item)">\n\n				<h1 *ngIf="item.product_item">{{item.product_item.name}}</h1>\n\n				<h1 *ngIf="!item.product_item">Item {{i+1}}</h1>\n\n				<p>\n\n					<span style="font-weight: 700;">QTY: </span> <span>{{item.sp_dt_qty}}</span> &middot;\n\n					<span style="font-weight: 700;">Harga: </span> <span>{{item.sp_dt_price}}</span> &middot;\n\n					<span style="font-weight: 700;">Total: </span> <span>{{item.sp_dt_total}}</span>\n\n				</p>\n\n			</ion-item>\n\n\n\n			<ion-item-divider color="main">Detail pembayaran</ion-item-divider>\n\n			<ion-item>\n\n				Diskon\n\n				<ion-note item-end>\n\n					<span *ngIf="!spend.sp_disc_percent || spend.sp_disc_percent < 1">0 %,</span>\n\n					<span *ngIf="spend.sp_disc_percent > 0">{{spend.sp_disc_percent}} %,</span>\n\n					<span *ngIf="spend.sp_tax_nominal > 0" >Rp. {{helper.intToIDR(spend.sp_disc_nominal)}}</span>\n\n					<span *ngIf="!spend.sp_tax_nominal || spend.sp_tax_nominal < 1" >Rp. {{helper.intToIDR(spend.sp_disc_nominal)}}</span>\n\n				</ion-note>\n\n			</ion-item>\n\n\n\n			<ion-item>\n\n				Pajak\n\n				<ion-note item-end>\n\n					<span *ngIf="!spend.sp_tax_percent || spend.sp_tax_percent < 1">0 %,</span>\n\n					<span *ngIf="spend.sp_tax_percent > 0" >{{spend.sp_tax_percent}} %,</span>\n\n					<span *ngIf="spend.sp_tax_nominal > 0" >Rp. {{helper.intToIDR(spend.sp_tax_nominal)}}</span>\n\n					<span *ngIf="!spend.sp_tax_nominal || spend.sp_tax_percent < 1" >Rp. 0</span>\n\n				</ion-note>\n\n			</ion-item>\n\n\n\n			<ion-item>\n\n				Total harga\n\n				<ion-note item-end>\n\n					<span >Rp. {{helper.intToIDR(spend.sp_total)}}</span>\n\n				</ion-note>\n\n			</ion-item>\n\n\n\n			<ion-item>\n\n				Uang Dibayarkan\n\n				<ion-note item-end>\n\n					<span >Rp. {{spend.sp_bill}}</span>\n\n				</ion-note>\n\n			</ion-item>\n\n\n\n			\n\n		</ion-list>\n\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\spend\spend.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* trigger */])('pageTransition', [
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* transition */])('*=>list', [Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* style */])({
                            transform: 'translateX(100%)'
                        }), Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])(200)]),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* transition */])('*=>new_spend', [Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* style */])({
                            transform: 'translateX(-100%)'
                        }), Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])(200)]),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* transition */])('new_spend=>spend_item', [Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* style */])({
                            transform: 'translateX(100%)'
                        }), Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])(200)]),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* transition */])('spend_item=>*', [Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* style */])({
                            transform: 'translateX(-100%)'
                        }), Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])(200)]),
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_helper_helper__["a" /* HelperProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_product_product__["a" /* ProductProvider */]])
    ], SpendPage);
    return SpendPage;
}());

//# sourceMappingURL=spend.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StocksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product_product__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_stock_detail_stock__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_helper_helper__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the StocksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StocksPage = (function () {
    function StocksPage(navCtrl, navParams, productProvider, helper) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productProvider = productProvider;
        this.helper = helper;
        this.restaurant_mode = this.helper.local.get_params(this.helper.config.variable.credential).outlet.serv_id == 1 || this.helper.local.get_params(this.helper.config.variable.credential).outlet.serv_id == 2;
        this.items = [];
        this.ingredients = [];
        this.original_items = [];
        this.page_params = {
            action: 'default',
            toggleSearchInput: false,
            toggleFilter: false
        };
        this.detailStockPage = __WEBPACK_IMPORTED_MODULE_3__detail_stock_detail_stock__["a" /* DetailStockPage */];
        this.outlet = this.helper.local.get_params(this.helper.config.variable.credential).data.outlet_id;
        if (this.restaurant_mode) {
            this.get_ingredient_data();
        }
        else {
            this.first_time_get_product();
        }
        /*this.dbLocalProvider.opendb('outlet')
        .then((val)=>{
          this.outlet = val;
          
        })*/
        if (this.navParams.data.page_params) {
            this.update_page_parameters(this.navParams.data.page_params);
        }
    }
    StocksPage.prototype.get_ingredient_data = function () {
        var _this = this;
        // serv_id
        var loading = this.helper.loadingCtrl.create({
            content: "Memeriksa data"
        });
        loading.present();
        var url = this.helper.config.base_url('admin/outlet/ingredient/get');
        this.helper.$.ajax({
            url: url,
            type: 'POST',
            data: {
                limit: 1000,
                page: 1,
                outlet_id: this.helper.local.get_params(this.helper.config.variable.credential).data.outlet_id,
                where: {
                    outlet_id: this.helper.local.get_params(this.helper.config.variable.credential).data.outlet_id
                }
            },
            dataType: 'json'
        })
            .done(function (res) {
            if (res.code == 200) {
                _this.ingredients = res.data;
            }
        })
            .always(function () {
            loading.dismiss();
        });
    };
    StocksPage.prototype.first_time_get_product = function (refresher) {
        if (refresher === void 0) { refresher = {}; }
        this.get_product({
            online: true,
            data: {
                limit: 0,
                outlet: this.outlet,
                fields: 'id,outlet,type,price,name,unit,stock,image,stock_latest_update',
                order_by: 'stock_latest_update DESC'
            }
        })
            .then(function () {
            if (typeof refresher.complete == 'function') {
                refresher.complete();
            }
        });
    };
    StocksPage.prototype.get_product = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.productProvider.get_product(data)
            .then(function (res) {
            res = !_this.helper.isJSON(res) ? res : JSON.parse(res);
            if (data.infinite == true) {
                _this.items = _this.items.concat(res.data);
                _this.original_items = _this.original_items.concat(res.data);
            }
            else {
                _this.items = res.data;
                _this.original_items = res.data;
            }
            // this.filter_product()
        });
    };
    StocksPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StocksPage');
    };
    StocksPage.prototype.update_page_parameters = function (data) {
        if (data === void 0) { data = {}; }
        this.page_params = Object.assign(this.page_params, data);
    };
    StocksPage.prototype.filter_stock = function (ev) {
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.original_items.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.items = this.original_items;
        }
    };
    StocksPage.prototype.openDetailStock = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detail_stock_detail_stock__["a" /* DetailStockPage */], item);
    };
    StocksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-stocks',template:/*ion-inline-start:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\stocks\stocks.html"*/'<!--\n\n  Generated template for the StocksPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-toolbar color="main">\n\n\n\n        <ion-navbar>\n\n            <button ion-button menuToggle>\n\n                <ion-icon name="menu"></ion-icon>\n\n            </button>\n\n            <ion-title>Stok</ion-title>\n\n            <ion-searchbar class="searchbar-toolbar" *ngIf="page_params.toggleSearchInput" (ionInput)="filter_stock($event)" style="width: 35%;"></ion-searchbar>\n\n            <ion-buttons class="center distributed">\n\n                <button ion-button icon-only color="light" (click)="page_params.toggleSearchInput=!page_params.toggleSearchInput">\n\n                    <ion-icon name="search" *ngIf="!page_params.toggleSearchInput"></ion-icon>\n\n                    <ion-icon name="close" *ngIf="page_params.toggleSearchInput"></ion-icon>\n\n                </button>\n\n            </ion-buttons>\n\n        </ion-navbar>\n\n        \n\n\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-refresher (ionRefresh)="first_time_get_product($event)">\n\n        <ion-refresher-content></ion-refresher-content>\n\n    </ion-refresher>\n\n    \n\n    <ion-list style="margin-top: 10px;">\n\n        <ion-item style="padding: 6px 0px;">\n\n            <span class="pull-right">\n\n                <strong>{{items.length||ingredients.length}}</strong> produk ditemukan. \n\n            </span>\n\n        </ion-item>\n\n        <div *ngIf="!restaurant_mode">\n\n            \n\n            <ion-item *ngIf="items.length < 1" class="text-align--center"  style="padding: 6px 0px;">\n\n                Tidak ditemukan produk\n\n            </ion-item>\n\n            <button ion-item *ngFor="let item of items" style="padding: 6px 0px;" (click)="openDetailStock(item)">\n\n                {{item.name}}\n\n                <span class="bs-label pull-right"  [ngClass]="{\'label-primary\': item.stock > 0, \'label-warning\': item.stock == 0, \'label-danger\': item.stock < 0 }"> {{item.stock}}</span>\n\n                <!-- <span class="bs-label label-warning" *ngIf="item.stock == 0"> {{item.stock}}</span> -->\n\n                <!-- <span class="bs-label label-danger" *ngIf="item.stock < 0"> {{item.stock}}</span> -->\n\n                <ion-icon name="arrow-forward" item-end></ion-icon>\n\n            </button>\n\n        </div>\n\n\n\n        <div *ngIf="restaurant_mode">\n\n            \n\n            <ion-item *ngIf="ingredients.length < 1" class="text-align--center"  style="padding: 6px 0px;">\n\n                Tidak ditemukan produk\n\n            </ion-item>\n\n            <button ion-item *ngFor="let item of ingredients" style="padding: 6px 0px;" (click)="openDetailStock(item)">\n\n                {{item.ingd_name}}\n\n                <span class="bs-label pull-right"  [ngClass]="{\'label-primary\': item.ingd_stock > 0, \'label-warning\': item.ingd_stock == 0, \'label-danger\': item.ingd_stock < 0 }"> {{item.ingd_stock}}</span>\n\n                <span class="bs-label label-warning" *ngIf="item.ingd_stock == 0"> {{item.ingd_stock}}</span>\n\n                <span class="bs-label label-danger" *ngIf="item.ingd_stock < 0"> {{item.ingd_stock}}</span>\n\n                <ion-icon name="arrow-forward" item-end></ion-icon>\n\n            </button>\n\n        </div>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\stocks\stocks.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_product_product__["a" /* ProductProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_helper_helper__["a" /* HelperProvider */]])
    ], StocksPage);
    return StocksPage;
}());

//# sourceMappingURL=stocks.js.map

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_config_config__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_db_local_db_local__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_helper_helper__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
Generated class for the BillProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
var BillProvider = (function () {
    function BillProvider(loadingCtrl, config, alertCont, dbLocalProvider, events, helper) {
        this.loadingCtrl = loadingCtrl;
        this.config = config;
        this.alertCont = alertCont;
        this.dbLocalProvider = dbLocalProvider;
        this.events = events;
        this.helper = helper;
        this.bill = this.default_bill_value();
        this.temp_bill = this.default_bill_value(); // it will be temporary variable,
        this.records_bill = []; // use if we want to create another bill
        this.pull_data_bill();
    }
    BillProvider.prototype.default_bill_value = function () {
        return {
            order_session: [],
            orders: [],
            payment_bills: 0,
            payment_total: 0,
            payment_nominal: 0,
            discount_nominal: 0,
            discount_percent: 0,
            discount_id: undefined,
            tax_nominal: 0,
            tax_percent: 0,
            outlet: undefined,
            visitor_name: '',
            table_id: undefined,
            payment_method: undefined,
            paid_nominal: undefined,
            paid_with_bank_nominal: undefined,
            table: {}
        };
    };
    BillProvider.prototype.save = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        var loader = this.loadingCtrl.create({
            content: "Memproses permintaan...",
        });
        loader.present();
        var alertData = this.alertCont.create({
            title: "Process gagal",
            message: "Terdapat galat ketika menyimpan nota. Silahkan laporkan pengembang sistem.",
            buttons: ["Ok"]
        });
        var successData = this.alertCont.create({
            title: "Process selesai",
            message: "Nota telah disimpan",
            buttons: ["Ok"]
        });
        var url = this.config.base_url('admin/outlet/transaction/add');
        var billdata = this.data_bill(data);
        billdata = Object.assign(billdata, data);
        billdata.complement_status = data.complement_status == 'true' ? 1 : 0;
        this.bill = billdata;
        return __WEBPACK_IMPORTED_MODULE_3_jquery__["post"](url, billdata)
            .done(function (res) {
            res = !_this.helper.isJSON(res) ? res : JSON.parse(res);
            if (res.code == 200) {
                successData.present();
            }
            else {
                alertData.present();
            }
        })
            .fail(function () {
            alertData.present();
        })
            .always(function () {
            loader.dismiss();
        });
    };
    BillProvider.prototype.get = function (data) {
        var url = this.config.base_url('admin/outlet/transaction/get');
        data = data;
        return __WEBPACK_IMPORTED_MODULE_3_jquery__["post"](url, data)
            .done(function (res) {
            res = JSON.parse(res);
            if (res.code == 500) {
            }
        });
    };
    BillProvider.prototype.get_unpaid_bill = function (data) {
        return this.get(data);
    };
    BillProvider.prototype.get_bill = function () {
        return this.bill;
    };
    BillProvider.prototype.set_bill_component = function (name, value, value_default, also_save_temp) {
        if (value_default === void 0) { value_default = ''; }
        if (also_save_temp === void 0) { also_save_temp = false; }
        this.bill[name] = this.bill[name] ? this.bill[name] : value_default;
        this.bill[name] = value;
        if (also_save_temp) {
            this.temp_bill[name] = this.temp_bill[name] ? this.temp_bill[name] : value_default;
            this.temp_bill[name] = value;
        }
    };
    BillProvider.prototype.get_bill_component = function (name, get_temp) {
        if (name === void 0) { name = undefined; }
        if (get_temp === void 0) { get_temp = false; }
        if (!name) {
            return this.bill;
        }
        return get_temp ? this.temp_bill[name] : this.bill[name];
    };
    BillProvider.prototype.update_bill_component = function (data, update_db, merge) {
        if (data === void 0) { data = {}; }
        if (update_db === void 0) { update_db = false; }
        if (merge === void 0) { merge = true; }
        console.log(data, this.bill, merge);
        if (merge) {
            this.bill = Object.assign(this.bill, data);
        }
        else {
            this.bill = Object.assign(data, {});
        }
        this.temp_bill = this.bill;
        this.detection_order_session_from_orders(this.bill.orders, true);
        if (update_db) {
            this.update_bill();
        }
    };
    BillProvider.prototype.put_bill_component = function (data) {
        if (data === void 0) { data = {}; }
        this.bill = data;
        this.temp_bill = this.bill;
    };
    // O R D E R
    BillProvider.prototype.get_order = function (index) {
        return this.get_bill_component('orders')[index];
    };
    BillProvider.prototype.set_order = function (index, content) {
        if (content === void 0) { content = {}; }
        this.get_bill_component('orders')[index] = content;
    };
    BillProvider.prototype.insert_order = function (data) {
        this.get_bill_component('orders').push(data);
    };
    BillProvider.prototype.remove_order = function (index) {
        this.get_bill_component('orders').splice(index, 1);
    };
    BillProvider.prototype.update_order_item = function (index, name, value) {
        var order = this.get_order(index);
        if (order) {
            order[name] = value;
        }
    };
    BillProvider.prototype.set_order_item = function (index, name, value) {
        this.update_order_item(index, name, value);
    };
    BillProvider.prototype.get_order_item = function (index, name) {
        if (name === void 0) { name = ''; }
        var order = this.get_bill_component('orders');
        return name.length < 1 ? undefined : this.get_order(index)[name];
    };
    BillProvider.prototype.delete_order_item = function (index, name) {
        if (name === void 0) { name = ''; }
        var order = this.get_bill_component('orders');
        if (name.length) {
            delete this.get_order(index)[name];
        }
    };
    // E N D  O F  O R D E R
    BillProvider.prototype.check_existences_order = function (id, event) {
        if (event === void 0) { event = 'add'; }
        if (!id) {
            return { exist: false, index: -1 };
        }
        var order = this.get_bill_component('orders');
        // search object array that contain event == event[add||reduce]
        var result = order.map(function (res) {
            if (res.event && res.event == event) {
                return res.id;
            }
        }).indexOf(id);
        return { index: result, exist: result < 0 ? false : true };
    };
    // only for bill that has been saved in database
    BillProvider.prototype.check_existences_product = function (product, order_session, event) {
        if (event === void 0) { event = 'add'; }
        if (!product) {
            return { exist: false, index: -1 };
        }
        var order = this.get_bill_component('orders');
        // search object array that contain event == event[add||reduce]
        var result = order.map(function (res) {
            if (res.order_session == order_session) {
                return res.product;
            }
        }).indexOf(product);
        return { index: result, exist: result < 0 ? false : true };
    };
    // METHOD
    BillProvider.prototype.insert_item = function (item, event) {
        if (event === void 0) { event = 'add'; }
        var existence = this.check_existences_order(item.id, event);
        item.event = event;
        if (existence.exist && existence.index > -1) {
            var order = this.get_bill_component('orders');
            order[existence.index].qty = parseInt(order[existence.index].qty) + 1;
            order[existence.index].total = parseInt(order[existence.index].qty) * parseInt(order[existence.index].price);
            order[existence.index].total = (order[existence.index].discount_nominal) ? parseInt(order[existence.index].total) - order[existence.index].discount_nominal : order[existence.index].total;
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#receipt-product-' + item.id + '-' + event + ' .product-amount').addClass('pulse');
            setTimeout(function () {
                __WEBPACK_IMPORTED_MODULE_3_jquery__('#receipt-product-' + item.id + '-' + event + ' .product-amount').removeClass('pulse');
            }, 800);
        }
        else {
            item.qty = item.qty && event != 'add' ? item.qty : 1;
            item.total = item.price * item.qty;
            item.total = item.discount_nominal ? parseInt(item.discount_nominal) - item.total : item.total;
            this.insert_order(item);
        }
        this.count_pricing();
        this.update_bill();
    };
    // only for bill that has been saved in database
    BillProvider.prototype.insert_product = function (item, event) {
        if (event === void 0) { event = 'add'; }
        var existence = this.check_existences_product(item.product, item.order_session, event);
        item.event = event;
        console.log(item, existence, this.get_bill_component('orders'));
        if (existence.exist && existence.index > -1) {
            var order = this.get_bill_component('orders');
            order[existence.index].qty = parseInt(order[existence.index].qty) + 1;
            order[existence.index].total = parseInt(order[existence.index].qty) * parseInt(order[existence.index].price);
            order[existence.index].total = (order[existence.index].discount_nominal) ? parseInt(order[existence.index].total) - order[existence.index].discount_nominal : order[existence.index].total;
            __WEBPACK_IMPORTED_MODULE_3_jquery__('.receipt-product-' + item.product + '-' + event + ' .product-amount').addClass('pulse');
            setTimeout(function () {
                __WEBPACK_IMPORTED_MODULE_3_jquery__('.receipt-product-' + item.product + '-' + event + ' .product-amount').removeClass('pulse');
            }, 800);
        }
        else {
            item.qty = item.qty && event != 'add' ? item.qty : 1;
            item.total = item.price * item.qty;
            item.total = item.discount_nominal ? parseInt(item.discount_nominal) - item.total : item.total;
            this.insert_order(item);
        }
        this.count_pricing();
        this.update_bill();
    };
    BillProvider.prototype.count_pricing = function () {
        var _this = this;
        this.set_bill_component('payment_bills', 0);
        this.set_bill_component('payment_total', 0);
        var payment_total = this.get_bill_component('payment_total');
        var payment_bills = this.get_bill_component('payment_bills');
        var tax_nominal = this.get_bill_component('tax_nominal');
        var discount_nominal = this.get_bill_component('discount_nominal');
        var discount_percent = this.get_bill_component('discount_percent');
        var discount_id = this.get_bill_component('discount_id');
        console.log(discount_id, discount_percent, discount_nominal, payment_total);
        tax_nominal = tax_nominal ? parseInt(tax_nominal) : 0;
        discount_nominal = discount_nominal ? parseInt(discount_nominal) : 0;
        var order = this.get_bill_component('orders');
        __WEBPACK_IMPORTED_MODULE_3_jquery__["each"](order, function (i, val) {
            if (!val.complement_status || parseInt(val.complement_status) < 1) {
                var total = order[i].qty * order[i].price;
                var order_discount_nominal = parseInt(val.discount_nominal);
                if (val.discount_percent) {
                    order_discount_nominal = _this.helper.percentToNominal(val.discount_percent, total);
                }
                if (order_discount_nominal) {
                    total = total - order_discount_nominal;
                }
                _this.update_order_item(i, 'total', total);
                _this.update_order_item(i, 'discount_nominal', order_discount_nominal);
                order[i].total = total;
                order[i].discount_nominal = order_discount_nominal;
            }
            else {
                if (val.complement_item < val.qty) {
                    var total = (order[i].qty - val.complement_item) * order[i].price;
                    var order_discount_nominal = parseInt(val.discount_nominal);
                    if (val.discount_percent) {
                        order_discount_nominal = _this.helper.percentToNominal(val.discount_percent, total);
                    }
                    if (order_discount_nominal) {
                        total = total - order_discount_nominal;
                    }
                    _this.update_order_item(i, 'total', total);
                    _this.update_order_item(i, 'discount_nominal', order_discount_nominal);
                    order[i].total = total;
                    order[i].discount_nominal = order_discount_nominal;
                }
                else {
                    order[i].total = 0;
                }
            }
        });
        var RestotalPrice = order.map(function (res) {
            // lakukan pengechekan apakah order memiliki "complement_status";
            if (!res.complement_status || parseInt(res.complement_status) < 1 || (parseInt(res.complement_status) > 0 && res.complement_item < res.qty)) {
                return res.total;
            }
            else {
                return 0;
            }
        });
        for (var i = 0; i < RestotalPrice.length; ++i) {
            payment_bills = payment_bills + parseInt(RestotalPrice[i]);
        }
        if (discount_id && discount_percent) {
            discount_nominal = this.helper.percentToNominal(discount_percent, payment_bills);
        }
        payment_total = payment_bills - discount_nominal + tax_nominal;
        this.set_bill_component('payment_bills', payment_bills, true);
        this.set_bill_component('payment_total', payment_total, true);
        this.set_bill_component('discount_nominal', discount_nominal, true);
    };
    BillProvider.prototype.set_bill = function (data) {
        this.set_bill_component('orders', data.data);
        this.count_pricing();
        this.set_bill_component('visitor_name', data.visitor_name);
        this.set_bill_component('table_id', data.visitor_table);
        this.update_bill();
    };
    BillProvider.prototype.update_bill = function () {
        var bill = this.data_bill();
        // this.dbLocalProvider.setdb('bill.data', this.data_bill())
    };
    BillProvider.prototype.reset_bill = function () {
        this.bill = this.default_bill_value();
        this.dbLocalProvider.removedb('bill.data');
        this.reset_order_session();
    };
    BillProvider.prototype.data_bill = function (data) {
        if (data === void 0) { data = {}; }
        var receipt = this.get_bill_component();
        return Object.assign(receipt, data);
    };
    BillProvider.prototype.set_data_bill = function (data, update_db) {
        if (data === void 0) { data = {}; }
        if (update_db === void 0) { update_db = true; }
    };
    BillProvider.prototype.pull_data_bill = function () {
        var _this = this;
        return this.dbLocalProvider.opendb('bill.data')
            .then(function (res) {
            if (res) {
                _this.put_bill_component(res);
                _this.detection_order_session_from_orders(res.orders);
                _this.events.publish('bill.update');
            }
        });
    };
    /*
    // fungsi ini sebagai penanda tentang jumlah save dari suatu bill
    */
    // set order session from local-storage 
    BillProvider.prototype.reset_order_session = function () {
        this.set_bill_component('order_session', []);
        this.dbLocalProvider.setdb('bill.order_session', this.bill.order_session);
    };
    BillProvider.prototype.set_order_session = function (data) {
        if (data === void 0) { data = []; }
        this.bill.order_session = data;
    };
    // create new order session
    BillProvider.prototype.detection_order_session_from_orders = function (orders, create_new) {
        var _this = this;
        if (orders === void 0) { orders = []; }
        if (create_new === void 0) { create_new = false; }
        this.reset_order_session();
        var order_array = {};
        orders.forEach(function (value, index) {
            value.order_session = parseInt(value.order_session);
            if (!order_array[value.order_session]) {
                order_array[value.order_session] = { count: 1, first: value.id };
                _this.update_order_item(index, 'first_session_order', true);
            }
            else {
                _this.update_order_item(index, 'first_session_order', false);
                order_array[value.order_session].count = order_array[value.order_session].count + 1;
            }
        });
        // recreate previous session
        __WEBPACK_IMPORTED_MODULE_3_jquery__["each"](order_array, function (i, val) {
            _this.add_order_session(val);
        });
        if (create_new) {
            // create new session
            this.add_order_session();
        }
    };
    BillProvider.prototype.add_order_session = function (data) {
        if (data === void 0) { data = {}; }
        this.bill.order_session = this.bill.order_session ? this.bill.order_session : [];
        data = Object.assign({ count: 0, timestamp: __WEBPACK_IMPORTED_MODULE_5_moment__().unix() }, data);
        this.bill.order_session.push(data);
        this.dbLocalProvider.setdb('bill.order_session', this.bill.order_session);
    };
    BillProvider.prototype.get_order_session = function () {
        return this.bill.order_session ? this.bill.order_session.length : 0;
    };
    BillProvider.prototype.set_order_session_item_counter = function (session) {
        this.bill.order_session[session].count = parseInt(this.bill.order_session[session].count) + 1;
    };
    BillProvider.prototype.get_order_session_item_counter = function (session) {
        return this.bill.order_session[session].length;
    };
    BillProvider.prototype.get_active_order_session = function () {
        if (!this.bill.order_session) {
            this.bill.order_session = [];
        }
        return this.bill.order_session.length - 1;
    };
    BillProvider.prototype.isset_order_session = function () {
        var order = this.get_bill_component('orders');
        if (order && order.length < 1) {
            this.reset_order_session();
            return false;
        }
        order = order.filter(function (res) {
            return !res.detail_id;
        });
        return order.length > 0 ? true : false;
    };
    BillProvider.prototype.cancel_bill = function (pay_id, note) {
        var url = this.config.base_url('admin/outlet/transaction/update');
        var billdata = {
            pay_id: pay_id,
            payment_cancel_note: note,
            payment_cancel_status: 1
        };
        return __WEBPACK_IMPORTED_MODULE_3_jquery__["post"](url, billdata);
    };
    // B I L L S 
    BillProvider.prototype.new_nota = function (value) {
        if (value === void 0) { value = undefined; }
        value = value ? value : this.default_bill_value();
        this.records_bill.push(value);
        var index = Object.keys(this.get_nota()).pop();
        return parseInt(index);
    };
    BillProvider.prototype.get_nota = function (index) {
        if (index === void 0) { index = undefined; }
        return !this.records_bill[index] ? this.records_bill : this.records_bill[index];
    };
    BillProvider.prototype.get_nota_component = function (index, property) {
        var nota = this.get_nota(index);
        return nota[property];
    };
    BillProvider.prototype.set_nota_property = function (index, property, value) {
        if (value === void 0) { value = ''; }
        var nota = this.get_nota(index);
        nota[property] = value;
    };
    BillProvider.prototype.check_nota_order = function (index, product, order_session) {
        var nota = this.get_nota(index);
        var indexNota = nota.orders.map(function (res) {
            if (res.order_session == order_session) {
                return res.product;
            }
        }).indexOf(product);
        return indexNota;
    };
    BillProvider.prototype.new_nota_order = function (index, data) {
        var nota = this.get_nota(index);
        nota['orders'].push(data);
    };
    BillProvider.prototype.remove_nota_order = function (index, index_order) {
        var nota = this.get_nota(index);
        nota['orders'].splice(index_order, 1);
    };
    BillProvider.prototype.get_nota_order = function (index, order_index, property) {
        if (property === void 0) { property = undefined; }
        var nota = this.get_nota(index);
        if (order_index >= 0 && !nota['orders'][order_index]) {
            return false;
        }
        if (order_index < 0) {
            return nota['orders'];
        }
        return !property ? nota['orders'][order_index] : nota['orders'][order_index][property];
    };
    BillProvider.prototype.set_nota_order = function (index, order_index, property, value) {
        if (property === void 0) { property = undefined; }
        if (value === void 0) { value = ''; }
        var nota = this.get_nota(index);
        if (property) {
            nota['orders'][order_index][property] = value;
        }
        else {
            nota['orders'][order_index] = value;
        }
    };
    BillProvider.prototype.nota_count_pricing = function (nota) {
        var _this = this;
        nota = Object.assign({}, nota);
        var payment_total = nota['payment_total'];
        var payment_bills = nota['payment_bills'];
        var tax_nominal = nota['tax_nominal'];
        var discount_nominal = nota['discount_nominal'];
        var discount_percent = nota['discount_percent'];
        var discount_id = nota['discount_id'];
        console.log(discount_id, discount_percent, discount_nominal, payment_total);
        tax_nominal = tax_nominal ? parseInt(tax_nominal) : 0;
        discount_nominal = discount_nominal ? parseInt(discount_nominal) : 0;
        var order = nota['orders'];
        __WEBPACK_IMPORTED_MODULE_3_jquery__["each"](order, function (i, val) {
            if (!val.complement_status || parseInt(val.complement_status) < 1) {
                var total = order[i].qty * order[i].price;
                var order_discount_nominal = parseInt(val.discount_nominal);
                if (val.discount_percent) {
                    order_discount_nominal = _this.helper.percentToNominal(val.discount_percent, total);
                }
                if (order_discount_nominal) {
                    total = total - order_discount_nominal;
                }
                nota['orders'][i]['total'] = total;
                nota['orders'][i]['discount_nominal'] = order_discount_nominal;
                order[i].total = total;
                order[i].discount_nominal = order_discount_nominal;
            }
            else {
                if (val.complement_item < val.qty) {
                    var total = (order[i].qty - val.complement_item) * order[i].price;
                    var order_discount_nominal = parseInt(val.discount_nominal);
                    if (val.discount_percent) {
                        order_discount_nominal = _this.helper.percentToNominal(val.discount_percent, total);
                    }
                    if (order_discount_nominal) {
                        total = total - order_discount_nominal;
                    }
                    nota['orders'][i]['total'] = total;
                    nota['orders'][i]['discount_nominal'] = order_discount_nominal;
                    order[i].total = total;
                    order[i].discount_nominal = order_discount_nominal;
                }
                else {
                    order[i].total = 0;
                }
            }
        });
        var RestotalPrice = order.map(function (res) {
            // lakukan pengechekan apakah order memiliki "complement_status";
            if (!res.complement_status || parseInt(res.complement_status) < 1 || (parseInt(res.complement_status) > 0 && res.complement_item < res.qty)) {
                return res.total;
            }
            else {
                return 0;
            }
        });
        for (var i = 0; i < RestotalPrice.length; ++i) {
            payment_bills = payment_bills + parseInt(RestotalPrice[i]);
        }
        if (discount_id && discount_percent) {
            discount_nominal = this.helper.percentToNominal(discount_percent, payment_bills);
        }
        payment_total = payment_bills - discount_nominal + tax_nominal;
        nota.payment_bills = payment_bills;
        nota.payment_total = payment_total;
        nota.discount_nominal = discount_nominal;
        console.log(nota);
        return nota;
    };
    BillProvider.prototype.print_bill = function (nota) {
        var _this = this;
        if (nota === void 0) { nota = ''; }
        var outletName = this.helper.local.get_params(this.helper.config.variable.credential).outlet.outlet_name ? this.helper.local.get_params(this.helper.config.variable.credential).outlet.outlet_name : 'OUTLET';
        var outletAddress = this.helper.local.get_params(this.helper.config.variable.credential).outlet.outlet_address ? this.helper.local.get_params(this.helper.config.variable.credential).outlet.outlet_address : 'ADDRESS';
        var outletPhone = this.helper.local.get_params(this.helper.config.variable.credential).outlet.outlet_phone ? this.helper.local.get_params(this.helper.config.variable.credential).outlet.outlet_phone : 'PHONE';
        var orders = this.get_bill_component('orders');
        var b = this.get_bill();
        var initialName = this.helper.get_initial_outlet_name(outletName).join('.');
        var divider = "\n________________\n";
        nota = nota ? initialName + '/0000' + nota : '-';
        var visitorTable = b.table_name ? b.table_name + '/' : '';
        var visitorName = b.visitor_name ? b.visitor_name : '-';
        var visitor = "Nomor Nota : " + nota + "\nMeja/Pelanggan: " + visitorTable + visitorName + "\n" + "Kasir: " + this.helper.local.get_params(this.helper.config.variable.credential).users.users_fullname + "\nTanggal : " + this.helper.moment().format('DD MMM YYYY HH:mm') + "\n";
        var textPrintHeader = "{center}" + outletName + "\n{s}" + outletAddress + "\n" + outletPhone + "{s}" + divider + "{left}\n\n" + visitor;
        var textPrint = textPrintHeader;
        if (b.member_id) {
            textPrint += "Member : " + initialName + '/000' + b.member_id + "\n";
        }
        textPrint += "{left}" + divider;
        __WEBPACK_IMPORTED_MODULE_3_jquery__["each"](orders, function (i, item) {
            textPrint += "{s}{left}" + item.qty + " " + item.name + " x " + _this.helper.intToIDR(item.price) + "{/s}  {s}{b}" + _this.helper.intToIDR(item.price * item.qty) + "{/b} {/s}{reset}\n";
            if (item.complement_status > 0) {
                var kompl_item = item.complement_status > 0 && item.complement_item < item.qty ? item.complement_item : '';
                textPrint += "{left} {s}{i}" + kompl_item + "{i} komplimen{s}\n";
            }
            if (_this.helper.IDRtoInt(item.discount_nominal) > 0 && (_this.helper.toInt(item.complement_status) != 1 || _this.helper.toInt(item.complement_item) < _this.helper.toInt(item.qty))) {
                textPrint += "{left} {s}Diskon " + _this.helper.toInt(item.discount_percent) + "% {b}(-" + _this.helper.intToIDR(item.discount_nominal) + "){/b} \n";
            }
        });
        textPrint += "________________\n\n{right}";
        /*if(this.get_bill_component('tax_nominal')>0 || this.get_bill_component('discount_nominal')>0 )
        {
            textPrint += "Bill :      "+this.helper.intToIDR(this.bill.payment_bills)+"\n";
        }*/
        // if(this.get_bill_component('tax_nominal')>0 )
        // {
        //     textPrint += "Pajak "+this.get_bill_component('tax_percent')+"% :      "+this.helper.intToIDR(this.get_bill_component('tax_nominal'))+"\n";
        // }
        // if(this.get_bill_component('discount_nominal')>0 )
        // {
        //     let discountPercent = this.helper.toInt(this.get_bill_component('discount_percent')) > 0? this.get_bill_component('discount_percent')+'%':''
        //     textPrint += "Diskon "+discountPercent+":      "+this.helper.intToIDR(this.get_bill_component('discount_nominal'))+"\n";
        // }
        textPrint += "Total :      " + this.helper.intToIDR(this.get_bill_component('payment_total')) + "{/s}\n";
        textPrint += "\n\n{center}{s}Bila ada pelayanan/produk yang kurang \nberkenan, Hub. 0857 1272 2217 \nTerima Kasih\nPowered by folarpos.co.id{/s}\n\n\n\n\n";
        return textPrint;
    };
    BillProvider.prototype.print_nota = function (nota) {
        var _this = this;
        if (nota === void 0) { nota = ''; }
        var outletName = this.helper.local.get_params(this.helper.config.variable.credential).outlet.outlet_name ? this.helper.local.get_params(this.helper.config.variable.credential).outlet.outlet_name : 'OUTLET';
        var outletAddress = this.helper.local.get_params(this.helper.config.variable.credential).outlet.outlet_address ? this.helper.local.get_params(this.helper.config.variable.credential).outlet.outlet_address : 'ADDRESS';
        var outletPhone = this.helper.local.get_params(this.helper.config.variable.credential).outlet.outlet_phone ? this.helper.local.get_params(this.helper.config.variable.credential).outlet.outlet_phone : 'PHONE';
        var orders = this.get_bill_component('orders');
        var b = this.get_bill();
        var initialName = this.helper.get_initial_outlet_name(outletName).join('.');
        var divider = "\n________________\n";
        nota = nota ? initialName + '/0000' + nota : '-';
        var visitorTable = b.table_name ? b.table_name + '/' : '';
        var visitorName = b.visitor_name ? b.visitor_name : '-';
        var visitor = "Nomor Nota : " + nota + "\nMeja/Pelanggan: " + visitorTable + visitorName + "\n" + "Kasir: " + this.helper.local.get_params(this.helper.config.variable.credential).users.users_fullname + "\nTanggal : " + this.helper.moment().format('DD MMM YYYY HH:mm') + "\n";
        var textPrintHeader = "{center}" + outletName + "\n{s}" + outletAddress + "\n" + outletPhone + "{s}" + divider + "{left}\n" + visitor;
        var textPrint = textPrintHeader;
        if (b.member_id) {
            textPrint += "Member : " + initialName + '/000' + b.member_id + "";
        }
        textPrint += "{right}" + divider;
        __WEBPACK_IMPORTED_MODULE_3_jquery__["each"](orders, function (i, item) {
            textPrint += "{s}{right}" + item.qty + " " + item.name + " x " + _this.helper.intToIDR(item.price) + "{/s}  {s}{b}" + _this.helper.intToIDR(item.price * item.qty) + "{/b} {/s}{reset}\n";
            if (item.complement_status > 0) {
                var kompl_item = item.complement_status > 0 && item.complement_item < item.qty ? item.complement_item : '';
                textPrint += "{right} {s}{i}" + kompl_item + "{i} komplimen{s}\n";
            }
            if (_this.helper.IDRtoInt(item.discount_nominal) > 0 && (_this.helper.toInt(item.complement_status) != 1 || _this.helper.toInt(item.complement_item) < _this.helper.toInt(item.qty))) {
                textPrint += "{right} {s}Diskon " + _this.helper.toInt(item.discount_percent) + "% {i}(-" + _this.helper.intToIDR(item.discount_nominal) + "){/i} \n";
            }
        });
        textPrint += "________________\n\n{right}";
        if (this.get_bill_component('tax_nominal') > 0 || this.get_bill_component('discount_nominal') > 0) {
            textPrint += "Bill :      " + this.helper.intToIDR(this.bill.payment_bills) + "\n";
        }
        if (this.get_bill_component('tax_nominal') > 0) {
            textPrint += "Pajak " + this.get_bill_component('tax_percent') + "% :      (-" + this.helper.intToIDR(this.get_bill_component('tax_nominal')) + ")\n";
        }
        if (this.get_bill_component('discount_nominal') > 0) {
            var discountPercent = this.helper.toInt(this.get_bill_component('discount_percent')) > 0 ? this.get_bill_component('discount_percent') + '%' : '';
            textPrint += "Diskon " + discountPercent + ":      (+" + this.helper.intToIDR(this.get_bill_component('discount_nominal')) + ")\n";
        }
        textPrint += "{s}Total :      " + this.helper.intToIDR(this.get_bill_component('payment_total')) + "{/s}\n";
        textPrint += "{s}Tunai :      " + this.helper.intToIDR(this.get_bill_component('payment_nominal')) + "{/s}\n";
        if (this.get_bill_component('paid_with_bank_nominal') > 0) {
            if (this.get_bill_component('payment_bank_charge_percent') > 0) {
                var charge = this.get_bill_component('payment_bank_charge_percent');
                textPrint += "{s}Charge Non-tunai " + charge + ":      (+" + this.helper.intToIDR(this.get_bill_component('payment_bank_charge_nominal')) + "){s}\n";
            }
            textPrint += "{s}Non-tunai :      " + this.helper.intToIDR(this.get_bill_component('paid_with_bank_nominal')) + "{/s}\n";
        }
        textPrint += "{s}Kembali :      " + this.helper.intToIDR(this.get_bill_component('payment_rest')) + "{/s}\n";
        textPrint += "{center}{s}\n\nTerima kasih. Selamat belanja kembali\nBila ada pelayanan/produk yang kurang \nberkenan, Hub." + outletPhone + " \nTerima Kasih\nPowered by folarpos.co.id{/s}\n\n\n\n\n";
        return textPrint;
    };
    BillProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_db_local_db_local__["a" /* DbLocalProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_6__providers_helper_helper__["a" /* HelperProvider */]])
    ], BillProvider);
    return BillProvider;
}());

//# sourceMappingURL=bill.js.map

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		342
	],
	"../pages/bill-item-editor/bill-item-editor.module": [
		500,
		23
	],
	"../pages/bill-saved/bill-saved.module": [
		501,
		22
	],
	"../pages/debt/debt.module": [
		502,
		21
	],
	"../pages/detail-stock/detail-stock.module": [
		503,
		20
	],
	"../pages/edit-receipt-item/edit-receipt-item.module": [
		504,
		19
	],
	"../pages/error/error.module": [
		505,
		18
	],
	"../pages/login/login.module": [
		506,
		17
	],
	"../pages/member-detail/member-detail.module": [
		507,
		16
	],
	"../pages/member-new-form/member-new-form.module": [
		508,
		15
	],
	"../pages/member/member.module": [
		509,
		14
	],
	"../pages/modal/modal.module": [
		510,
		13
	],
	"../pages/outlet-list/outlet-list.module": [
		341
	],
	"../pages/payment/payment.module": [
		511,
		12
	],
	"../pages/print-bluetooth-panel/print-bluetooth-panel.module": [
		344
	],
	"../pages/product/product.module": [
		512,
		11
	],
	"../pages/receipt/receipt.module": [
		519,
		10
	],
	"../pages/send-receipt/send-receipt.module": [
		513,
		9
	],
	"../pages/settings/settings.module": [
		514,
		8
	],
	"../pages/spend-detail/spend-detail.module": [
		515,
		7
	],
	"../pages/spend/spend.module": [
		516,
		6
	],
	"../pages/split-bill/split-bill.module": [
		517,
		5
	],
	"../pages/stocks/stocks.module": [
		518,
		4
	],
	"../pages/table/table.module": [
		521,
		3
	],
	"../pages/tooltip-product/tooltip-product.module": [
		520,
		2
	],
	"../pages/total-payment-editor/total-payment-editor.module": [
		522,
		1
	],
	"../pages/transaction/transaction.module": [
		523,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 199;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DbLocalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_local_notifications__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/*
Generated class for the DbLocalProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
var DbLocalProvider = (function () {
    function DbLocalProvider(http, config, storage, events, localNotifications, transfer, file) {
        this.http = http;
        this.config = config;
        this.storage = storage;
        this.events = events;
        this.localNotifications = localNotifications;
        this.transfer = transfer;
        this.file = file;
        this.fileTransfer = this.transfer.create();
        this.params = {
            is_login: false,
            settings: {
                choose_table_first: true,
                debt_mode: false,
                stok: true,
                transaksi: true,
                member: true,
                modal: true,
                pengeluaran: true,
                settings: true,
                configure_table: false
            }
        }; // variable to store temporary params || karena saya belum bisa ngirim / ganti page menggunakan parameters.
        this.credential = {
            users: {}
        };
    }
    DbLocalProvider.prototype.set_params = function (name, value) {
        if (value === void 0) { value = {}; }
        this.params[name] = value;
    };
    DbLocalProvider.prototype.get_params = function (name) {
        return this.params[name];
    };
    DbLocalProvider.prototype.reset_params = function (name) {
        delete this.params[name];
    };
    DbLocalProvider.prototype.create_database = function () {
        this.sync_table();
    };
    DbLocalProvider.prototype.sync_table = function () {
        var _this = this;
        var urlTable = this.config.base_url('admin/outlet/table/data/get');
        this.storage.get('outlet')
            .then(function (val) {
            var dataTable = { outlet: val, status: 1 };
            __WEBPACK_IMPORTED_MODULE_5_jquery__["post"](urlTable, dataTable)
                .done(function (res) {
                res = JSON.parse(res);
                _this.storage.set('table', res)
                    .then(function () {
                    _this.events.publish('dt.table.done', {});
                    console.info('Data table has been updated');
                })
                    .catch(function () {
                    console.error('Error occured when updating data table');
                });
            });
        });
    };
    DbLocalProvider.prototype.sync_product = function () {
        var _this = this;
        var urlProduct = this.config.base_url('admin/outlet/product/get');
        this.storage.get('outlet')
            .then(function (val) {
            var dataTable = { outlet: val, status: 1, fields: 'id,outlet,type,price,name,unit,stock,image,charge_nominal,charge_percent,status,discount_nominal,discount_percent,status_text,can_be_removed,favorite' };
            __WEBPACK_IMPORTED_MODULE_5_jquery__["post"](urlProduct, dataTable)
                .done(function (res) {
                res = JSON.parse(res);
                if (res.code == 500) {
                    console.error(res.message);
                    return false;
                }
                for (var i = 0; i < res.data.length; i++) {
                    if (res.data[i].image) {
                        var filename = res.data[i].image.thumb ? res.data[i].image.thumb.split('/') : res.data[i].image.url.split('/');
                        res.data[i].image.image_local = _this.file.dataDirectory + 'product/' + filename[filename.length - 2] + '/' + filename[filename.length - 1];
                        _this.fileTransfer.download(res.data[i].image.thumb, _this.file.dataDirectory + 'product/' + filename[filename.length - 2] + '/' + filename[filename.length - 1], true);
                    }
                }
                _this.storage.set('product', res)
                    .then(function () {
                    _this.events.publish('dt.last_sync.done', {});
                    console.info('Data product has been updated');
                })
                    .catch(function () {
                    console.error('Error occured when updating data table');
                });
            });
        });
    };
    DbLocalProvider.prototype.sync = function () {
        var _this = this;
        this.sync_table();
        this.events.subscribe('dt.table.done', function () {
            _this.sync_product();
        });
        this.events.subscribe('dt.last_sync.done', function () {
            // this.sync_product();
            /*this.localNotifications.schedule({
              id: 1,
              text: 'Synchronize data is complete!',
            });*/
        });
    };
    DbLocalProvider.prototype.opendb = function (dbname) {
        return this.storage.get(dbname);
    };
    DbLocalProvider.prototype.setdb = function (dbname, value) {
        return this.storage.set(dbname, value);
    };
    DbLocalProvider.prototype.removedb = function (dbname) {
        return this.storage.remove(dbname);
    };
    DbLocalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */]])
    ], DbLocalProvider);
    return DbLocalProvider;
}());

//# sourceMappingURL=db-local.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__receipt_receipt__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__payment_payment__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transaction_transaction__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detail_stock_detail_stock__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tooltip_product_tooltip_product__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_product_product__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_bill_bill__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_db_local_db_local__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_helper_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_local_notifications__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













/**
* Generated class for the ProductPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var ProductPage = (function () {
    function ProductPage(appCtrl, navCtrl, navParams, events, productProvider, billProvider, modalCtrl, localNotifications, dbLocalProvider, helper, loadingCtrl, alertCtrl, actionSheetCtrl, popoverController) {
        var _this = this;
        this.appCtrl = appCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.productProvider = productProvider;
        this.billProvider = billProvider;
        this.modalCtrl = modalCtrl;
        this.localNotifications = localNotifications;
        this.dbLocalProvider = dbLocalProvider;
        this.helper = helper;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.popoverController = popoverController;
        this.searchinput = false;
        this.unpaid_bill_length = 0;
        this.filter_type_selected = 0;
        this.filter_product_name = '';
        this.filter_sort_product = '';
        this.page_params = {
            use_temporary_data: false,
            product_width: {
                default: 6,
                xs: 6,
                sm: 4,
                md: 3
            }
        };
        this.paymentPage = __WEBPACK_IMPORTED_MODULE_3__payment_payment__["a" /* PaymentPage */];
        this.receipt = __WEBPACK_IMPORTED_MODULE_2__receipt_receipt__["a" /* ReceiptPage */];
        this.items = [];
        this.lists = [];
        events.subscribe('zoom.controller', function (res) {
            _this.product_zoom(res.event);
        });
        events.subscribe('receive.data.receipt', function (res) {
            var data = {
                table_id: res.table,
                outlet: _this.outlet,
                visitor_name: res.visitor,
                users_outlet: 1,
                bank_id: 1,
                payment_method: 1,
                payment_nominal: 0,
                payment_bills: res.sumPrice,
                payment_total: res.GrandTotalPrice,
                receipt: {}
            };
            data.receipt = res;
            if (!res.visitor_name || !res.visitor_table || res.receipts.length < 1) {
                console.error('Please fill table and name');
                _this.helper.alertCtrl.create({
                    title: "Kesalahan",
                    message: "Mohon untuk mengisi nama atau meja pembeli",
                    buttons: ["OK"]
                }).present();
                return false;
            }
            if (res._passed_data.pay == false) {
                billProvider.save(data)
                    .then(function (res) {
                    res = !_this.helper.isJSON(res) ? res : JSON.parse(res);
                    if (res.code == 500) {
                        console.error('Need visitor and table number!');
                        return false;
                    }
                    else {
                        _this.events.publish('reset.data.receipt', {});
                        _this.get_unpaid_bill();
                    }
                });
            }
            else {
                _this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__payment_payment__["a" /* PaymentPage */]);
            }
        });
        if (this.navParams.data.page_params) {
            this.update_page_parameters(this.navParams.data.page_params);
        }
        // pinned product
        this.helper.storage.get('pinned_product')
            .then(function (res) {
            res = res ? res : [];
            _this.helper.local.set_params('pinned_product', res);
        });
        /*this.localNotifications.schedule({
          id: 1,
          text: 'Single ILocalNotification',
        });*/
    }
    ProductPage.prototype.ionViewDidLoad = function () {
        this.outlet = this.helper.local.get_params(this.helper.config.variable.credential).data.outlet_id;
        this.refresh_data({});
        this.billProvider.count_pricing();
        this.get_unpaid_bill();
        /*this.dbLocalProvider.opendb('outlet')
        .then((val)=>{
            
        })*/
    };
    ProductPage.prototype.update_page_parameters = function (data) {
        if (data === void 0) { data = {}; }
        this.page_params = Object.assign(this.page_params, data);
    };
    ProductPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var index;
        this.billProvider.pull_data_bill()
            .then(function () {
            switch (_this.navParams.data.event) {
                case "transaction.edit":
                    _this.billProvider.update_bill_component(_this.navParams.data.bill, true);
                    _this.billProvider.count_pricing();
                    _this.events.publish('bill.update', {});
                    _this.navParams.data = { event: 'order.do' }; // this code use to reset navParams. bcause, whenever a page pushed from this page and popped back, this data bill item always from the previous event. 
                    break;
                case "transaction.split":
                    console.log(_this.navParams.data.bill);
                    _this.billProvider.reset_bill();
                    _this.billProvider.update_bill_component(_this.navParams.data.bill, true, false);
                    _this.billProvider.count_pricing();
                    _this.events.publish('bill.update', {});
                    _this.navParams.data = { event: 'order.do' }; // this code use to reset navParams. bcause, whenever a page pushed from this page and popped back, this data bill item always from the previous event. 
                    break;
                default:
                    // code...
                    break;
            }
            // console.log(this.navParams.data.trigger_event)
            switch (_this.navParams.data.trigger_event) {
                case "new.order":
                case "order.new":
                    _this.billProvider.reset_bill();
                    _this.billProvider.update_bill_component({}, true);
                    _this.events.publish('reset.data.receipt', {});
                    _this.navParams.data = { event: 'order.do' }; // this code use to reset navParams. bcause, whenever a page pushed from this page and popped back, this data bill item always from the previous event. 
                    break;
                case "order.reset":
                    _this.billProvider.reset_order_session();
                    _this.billProvider.set_bill_component('orders', []);
                    _this.billProvider.set_bill_component('visitor_name', '');
                    _this.billProvider.update_bill_component({}, true);
                    _this.events.publish('bill.update', {});
                    break;
                case "order.pick":
                    index = Object.keys(_this.navParams.data.table).shift();
                    _this.billProvider.set_bill_component('table_id', _this.navParams.data.table[index].tab_id);
                    _this.billProvider.set_bill_component('table_name', _this.navParams.data.table[index].tab_name);
                    _this.billProvider.set_bill_component('table', _this.navParams.data.table[index]);
                    _this.billProvider.update_bill_component({}, true);
                    _this.events.publish('bill.update', {});
                    break;
                case "table.change":
                    index = Object.keys(_this.navParams.data.table).shift();
                    _this.billProvider.set_bill_component('table_id', _this.navParams.data.table[index].tab_id);
                    _this.billProvider.set_bill_component('table_name', _this.navParams.data.table[index].tab_name);
                    _this.billProvider.set_bill_component('table', _this.navParams.data.table[index]);
                    _this.billProvider.update_bill_component({}, true);
                    // this.billProvider.pull_data_bill();
                    _this.events.publish('bill.update', {});
                    break;
                default:
                    // code...
                    break;
            }
        });
    };
    ProductPage.prototype.get_categories = function () {
        var _this = this;
        var url = this.helper.config.base_url('admin/outlet/product/categories');
        var data = {
            outlet_id: this.outlet
        };
        this.helper.$.post(url, data)
            .done(function (res) {
            res = !_this.helper.isJSON(res) ? res : JSON.parse(res);
            if (res.code == 200) {
                var variable = _this.helper.local.get_params(_this.helper.config.variable.credential);
                variable['type_product'] = res.data;
                _this.helper.local.set_params(_this.helper.config.variable.credential, variable);
            }
        });
    };
    ProductPage.prototype.get_product = function (data) {
        var _this = this;
        this.get_categories();
        return this.productProvider.get_product(data)
            .then(function (res) {
            res = !_this.helper.isJSON(res) ? res : JSON.parse(res);
            if (data.infinite == true) {
                _this.items = _this.items.concat(res.data);
                _this.original_items = _this.original_items.concat(res.data);
            }
            else {
                _this.items = res.data;
                _this.original_items = res.data;
            }
            // this.filter_product()
        });
    };
    ProductPage.prototype.refresh_data = function (refresher) {
        if (refresher === void 0) { refresher = {}; }
        var loader = this.loadingCtrl.create({
            content: "Mengambil data. Silahkan tunggu",
        });
        loader.present();
        var data = { outlet: this.outlet };
        if (this.filter_sort_product != '') {
            data.order_by = this.filter_sort_product;
        }
        if (this.filter_type_selected > 0) {
            data.where = data.where ? data.where : {};
            data.where.type = this.filter_type_selected;
        }
        else {
            if (data.where && data.where.type) {
                delete data.where.type;
            }
        }
        if (this.filter_product_name.length > 0) {
            data.like = data.like ? data.like : [];
            data.like.push(['name', this.filter_product_name]);
        }
        else {
            delete data.like;
        }
        data.page = 1;
        this.get_product({ data: data, online: true })
            .then(function () {
            if (refresher.complete) {
                refresher.complete();
            }
            loader.dismiss();
        });
    };
    ProductPage.prototype.infinite_product = function (ev) {
        if (ev === void 0) { ev = {}; }
        /*var load = this.loadingCtrl.create({
          content: "Silahkan tunggu",
        });*/
        // load.present()
        this.productProvider.last_options.data.page += 1;
        this.productProvider.last_options.infinite = true;
        this.get_product(this.productProvider.last_options)
            .then(function () {
            if (ev.complete) {
                ev.complete();
            }
            // load.dismiss();
        });
    };
    ProductPage.prototype.add_to_bill = function (item) {
        // check is this bill have been saved before.
        item = Object.assign({}, item);
        if (!this.billProvider.isset_order_session()) {
            this.billProvider.add_order_session();
        }
        item.order_session = this.billProvider.get_active_order_session();
        this.billProvider.insert_item(item);
        this.billProvider.set_order_session_item_counter(item.order_session);
        this.events.publish('bill.update', item);
    };
    ProductPage.prototype.reset_receipts = function () {
        this.billProvider.reset_bill();
        this.billProvider.update_bill_component({}, true);
        this.events.publish('bill.update', {});
        this.items = this.original_items;
        // this.events.publish('reset.data.receipt',{})
    };
    ProductPage.prototype.openSavedBill = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__transaction_transaction__["a" /* TransactionPage */], {
            body: {
                where: { payment_nominal: 0 }
            },
            today: true,
            page_params: {
                action: 'pay'
            },
            previous: 'product-page',
            event: 'transaction.uncomplete'
        });
    };
    ProductPage.prototype.saveBill = function () {
        var _this = this;
        var alertVisitor = this.alertCtrl.create({
            title: 'Nama pembeli',
            inputs: [
                {
                    name: 'alert_visitor_name',
                    placeholder: 'Nama pengunjung'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Selesai',
                    handler: function (data) {
                        _this.billProvider.set_bill_component('visitor_name', data.alert_visitor_name);
                        _this.billProvider.update_bill_component({}, true);
                        _this.events.publish('bill.update', {});
                        setTimeout(function () {
                            _this.process_save_bill()
                                .then(function () {
                                alertVisitor.dismiss();
                            });
                        }, 300);
                    }
                }
            ]
        });
        if (!this.billProvider.get_bill_component('visitor_name') || this.billProvider.get_bill_component('visitor_name').length < 1) {
            alertVisitor.present();
        }
        else {
            this.process_save_bill();
        }
        // this.events.publish('get.data.receipt', {pay:false})
    };
    ProductPage.prototype.get_unpaid_bill = function () {
        var _this = this;
        return this.billProvider.get_unpaid_bill({
            outlet: this.outlet,
            fields: 'payment_nominal,outlet,pay_id,payment_date_only',
            where: {
                payment_date_only: __WEBPACK_IMPORTED_MODULE_12_moment__().format('YYYY-MM-DD'),
                payment_nominal: 0,
            }
        })
            .then(function (res) {
            res = !_this.helper.isJSON(res) ? res : JSON.parse(res);
            _this.unpaid_bill_length = res.data.length;
        });
    };
    ProductPage.prototype.pay_bill = function () {
        var _this = this;
        if (this.error_product()) {
            var alertVisitor_1 = this.alertCtrl.create({
                title: 'Nama pembeli',
                inputs: [
                    {
                        name: 'visitor_name',
                        placeholder: 'Nama pembeli'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function (data) {
                        }
                    },
                    {
                        text: 'Selesai',
                        handler: function (data) {
                            if (data.visitor_name == '' || !data.visitor_name) {
                                _this.helper.alertCtrl.create({
                                    title: "Kesalahan",
                                    message: "Nama pembeli tidak boleh kosong!",
                                    buttons: ["OK"]
                                }).present();
                                return false;
                            }
                            _this.billProvider.set_bill_component('visitor_name', data.visitor_name);
                            _this.events.publish('bill.update', {});
                            setTimeout(function () {
                                alertVisitor_1.dismiss();
                                _this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__payment_payment__["a" /* PaymentPage */]);
                            }, 300);
                        }
                    }
                ]
            });
            /*LINE FOR REQUIRED TABLE ID
            =========================================================================
            */
            /*if(!this.billProvider.get_bill_component('table_id') )
            {
                this.navCtrl.setRoot(TablePage, {
                    previous: 'product-page',
                    event: 'bill.changeTable',
                    trigger_event: 'table.change',
                })
                return false;
            }*/
            /*
            ===========================================================================
            END OF LINE FOR REQUIRED TABLE ID*/
            if (!this.billProvider.get_bill_component('visitor_name') || this.billProvider.get_bill_component('visitor_name').length < 1) {
                alertVisitor_1.present();
            }
            else {
                this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__payment_payment__["a" /* PaymentPage */]);
            }
        }
        // this.events.publish('get.data.receipt', {pay:true})
    };
    ProductPage.prototype.process_save_bill = function () {
        var _this = this;
        return this.billProvider.save({
            users_outlet: 1,
            outlet: this.outlet,
            bank_id: 1,
            payment_method: 1,
            payment_nominal: 0,
        })
            .done(function (res) {
            res = !_this.helper.isJSON(res) ? res : JSON.parse(res);
            if (res.code == 200) {
                _this.events.publish('reset.data.receipt', {});
                _this.get_unpaid_bill();
            }
            else {
            }
        });
    };
    ProductPage.prototype.print_bill = function () {
        var _this = this;
        if (!this.helper.printer.isAvailable()) {
            this.helper.alertCtrl.create({
                title: "Kesalahan",
                message: "Layanan printer tidak tersedia untuk perangkat ini",
                buttons: ["OK"]
            }).present();
            console.log(this.helper.html2canvas);
            return false;
        }
        if (this.error_product()) {
            var alertVisitor_2 = this.alertCtrl.create({
                title: 'Nama pembeli',
                inputs: [
                    {
                        name: 'visitor_name',
                        placeholder: 'Nama pembeli'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function (data) {
                        }
                    },
                    {
                        text: 'Selesai',
                        handler: function (data) {
                            if (data.visitor_name == '' || !data.visitor_name) {
                                _this.helper.alertCtrl.create({
                                    title: "Kesalahan",
                                    message: "Silahkan pilih salah satu produk",
                                    buttons: ["OK"]
                                }).present();
                                return false;
                            }
                            _this.billProvider.set_bill_component('visitor_name', data.visitor_name);
                            _this.events.publish('bill.update', {});
                            setTimeout(function () {
                                alertVisitor_2.dismiss();
                                var loadingPrint = _this.helper.loadingCtrl.create({
                                    content: "Mencetak bill",
                                });
                                loadingPrint.present();
                                _this.process_print_bill()
                                    .then(function () {
                                    loadingPrint.dismiss();
                                }, function () {
                                    loadingPrint.dismiss();
                                });
                            }, 300);
                        }
                    }
                ]
            });
            /*LINE FOR REQUIRED TABLE ID
            =========================================================================
            */
            /*if(!this.billProvider.get_bill_component('table_id') )
            {
                this.navCtrl.setRoot(TablePage, {
                    previous: 'product-page',
                    event: 'bill.changeTable',
                    trigger_event: 'table.change',
                })
                return false;
            }*/
            /*
            ===========================================================================
            END OF LINE FOR REQUIRED TABLE ID*/
            if (!this.billProvider.get_bill_component('visitor_name') || this.billProvider.get_bill_component('visitor_name').length < 1) {
                alertVisitor_2.present();
            }
            else {
                this.process_print_bill();
            }
        }
    };
    ProductPage.prototype.process_print_bill = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.helper.printer.isAvailable()) {
                _this.helper.alertCtrl.create({
                    title: "Kesalahan",
                    message: "Layanan printer tidak tersedia untuk perangkat ini",
                    buttons: ["OK"]
                }).present();
                console.log(_this.helper.html2canvas);
                return false;
            }
            _this.helper.local.opendb('printer_connected')
                .then(function (device) {
                console.log(device);
                if (!device || !device.address) {
                    _this.helper.alertCtrl.create({
                        title: "Printer tidak ditemukan",
                        message: "Silahkan menuju settings dan pilih menu printer.",
                        buttons: ["OK"]
                    }).present();
                    return false;
                }
                _this.helper.printer.connect(device.address)
                    .then(function () {
                    var el = _this.helper.$('.receipt');
                    console.log(_this.billProvider);
                    setTimeout(function () {
                        var t = _this.billProvider.print_bill();
                        _this.helper.printer.printText(t)
                            .then(function () {
                            resolve();
                        }, function () {
                            reject();
                        });
                    }, 2000); // set timeout
                }, function (err) {
                    reject();
                });
            });
        }); // end of promise
    };
    ProductPage.prototype.filter_product = function () {
        var _this = this;
        this.items = this.original_items;
        if (this.filter_type_selected > 0) {
            this.items = this.original_items.filter(function (res) {
                return res.type == _this.filter_type_selected;
            });
        }
        if (this.filter_product_name.length > 0) {
            this.items = this.original_items.filter(function (res) {
                return res.name.indexOf(_this.filter_product_name) > -1;
            });
        }
        return this.items;
    };
    ProductPage.prototype.priceToRupiah = function (number) {
        var idr = this.helper.intToIDR(number);
        return idr;
    };
    ProductPage.prototype.error_product = function () {
        var alertErrorProduct = this.alertCtrl.create({
            title: 'Kesalahan',
            subTitle: 'Silahkan pilih salah satu produk',
            buttons: ["OK"]
        });
        if (this.billProvider.get_bill_component('orders').length < 1) {
            alertErrorProduct.present();
            return false;
        }
        return true;
    };
    ProductPage.prototype.productOptions = function (item, index) {
        var _this = this;
        this.helper.actionSheet.create({
            title: 'Aksi produk',
            buttons: [
                {
                    text: 'Detail product',
                    handler: function () {
                        _this.openDetailProduct(item, index);
                    }
                }, {
                    text: 'Pin produk',
                    handler: function () {
                        _this.pinProduct(item, index);
                    }
                }
            ]
        }).present();
    };
    ProductPage.prototype.pinnedProductOptions = function (item, index) {
        var _this = this;
        this.helper.actionSheet.create({
            title: 'Aksi produk',
            buttons: [
                {
                    text: 'Detail product',
                    handler: function () {
                        _this.openDetailProduct(item, index);
                    }
                }, {
                    text: 'Lepaskan dari pin produk',
                    handler: function () {
                        _this.unpinProduct(item, index);
                    }
                }
            ]
        }).present();
    };
    ProductPage.prototype.unpinProduct = function (item, index) {
        var pinned_product = this.helper.local.get_params('pinned_product');
        pinned_product.splice(index, 1);
        this.helper.local.set_params('pinned_product', pinned_product);
        this.helper.storage.set('pinned_product', pinned_product);
        this.helper.toast.create({
            message: 'Produk telah di hapus dari pin',
            duration: 1500
        }).present();
    };
    ProductPage.prototype.pinProduct = function (item, index) {
        var pinned_product = this.helper.local.get_params('pinned_product');
        pinned_product = pinned_product ? pinned_product : [];
        item.index = index;
        pinned_product.push(item);
        this.helper.local.set_params('pinned_product', pinned_product);
        this.helper.storage.set('pinned_product', pinned_product);
        this.helper.toast.create({
            message: 'Produk telah di pin',
            duration: 1500
        }).present();
    };
    ProductPage.prototype.openDetailProduct = function (item, index) {
        item.page_params = { view_type: 'modal', show_history_stock: false };
        item.index = index;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__detail_stock_detail_stock__["a" /* DetailStockPage */], item);
        modal.present();
    };
    ProductPage.prototype.product_sort = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your album',
            buttons: [
                {
                    text: 'Favorit',
                    handler: function () {
                        _this.filter_sort_product = "favorite DESC";
                        _this.refresh_data();
                    }
                }, {
                    text: 'Termahal',
                    handler: function () {
                        _this.filter_sort_product = "price DESC";
                        _this.refresh_data();
                    }
                }, {
                    text: 'Termurah',
                    handler: function () {
                        _this.filter_sort_product = "price ASC";
                        _this.refresh_data();
                    }
                }, {
                    text: 'Stok',
                    handler: function () {
                        _this.filter_sort_product = "stock DESC";
                        _this.refresh_data();
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        // actionSheet.dismiss();
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ProductPage.prototype.toggleSearchInput = function () {
        this.searchinput = !this.searchinput;
    };
    ProductPage.prototype.product_zoom_controller = function (value, type) {
        var ruleLen = [2, 3, 4, 6];
        var index = ruleLen.indexOf(value);
        /*if(index<0)
        {
            return value;
        }*/
        switch (type) {
            case "in":
                value = index + 1 > ruleLen.length - 1 ? ruleLen[ruleLen.length - 1] : ruleLen[index + 1];
                break;
            case "out":
                value = index - 1 < 0 ? ruleLen[0] : ruleLen[index - 1];
                break;
        }
        return value;
    };
    ProductPage.prototype.product_zoom = function (type) {
        if (type === void 0) { type = 'in'; }
        this.page_params.product_width.xs = this.product_zoom_controller(this.page_params.product_width.xs, type);
        this.page_params.product_width.sm = this.product_zoom_controller(this.page_params.product_width.sm, type);
        this.page_params.product_width.md = this.product_zoom_controller(this.page_params.product_width.md, type);
        /*switch (type) {
            case "in":
                this.page_params.product_width.xs = this.page_params.product_width.xs < 6?  : this.page_params.product_width.xs;
                this.page_params.product_width.sm = this.page_params.product_width.sm < 6?  : this.page_params.product_width.sm;
                this.page_params.product_width.md = this.page_params.product_width.md < 6?  : this.page_params.product_width.md;
                break;
    
            case "out":
                this.page_params.product_width.xs = this.page_params.product_width.xs > 2? this.page_params.product_width.xs - 1 : this.page_params.product_width.xs;
                this.page_params.product_width.sm = this.page_params.product_width.sm > 2? this.page_params.product_width.sm - 1 : this.page_params.product_width.sm;
                this.page_params.product_width.md = this.page_params.product_width.md > 2? this.page_params.product_width.md - 1 : this.page_params.product_width.md;
                break;
            
            default:
                // code...
                break;
        }*/
    };
    ProductPage.prototype.tooltip_present = function (ev) {
        var popover = this.popoverController.create(__WEBPACK_IMPORTED_MODULE_6__tooltip_product_tooltip_product__["a" /* TooltipProductPage */], {
            zoom: this.product_zoom
        });
        popover.present({
            ev: ev,
        });
    };
    ProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product',template:/*ion-inline-start:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\product\product.html"*/'<!--\n\n  Generated template for the ProductPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n	<ion-toolbar color="main" class="center distributed">\n\n		<ion-navbar class="center distributed">\n\n			<button ion-button menuToggle>\n\n				<ion-icon name="menu"></ion-icon>\n\n			</button>\n\n			<ion-title>Kasir</ion-title>\n\n			<ion-searchbar *ngIf="searchinput" end (ionInput)="refresh_data()" [(ngModel)]="filter_product_name" class="searchbar-toolbar" style="padding: 0px;width: 40%;"></ion-searchbar>\n\n			\n\n			<ion-buttons class="center distributed">\n\n				<button ion-button icon-only color="light" (click)="toggleSearchInput()">\n\n					<ion-icon name="search" *ngIf="!searchinput"></ion-icon>\n\n					<ion-icon name="close" *ngIf="searchinput"></ion-icon>\n\n				</button>\n\n			</ion-buttons>\n\n			<ion-buttons end>\n\n				<button ion-button (click)="openSavedBill()">\n\n					Nota tersimpan &nbsp; <ion-badge item-end color="light">{{unpaid_bill_length}}</ion-badge>\n\n				</button>\n\n			</ion-buttons>\n\n\n\n			<ion-buttons end>\n\n				<button ion-button clear icon-right color="light" (click)="tooltip_present($event)">\n\n				  <ion-icon name="more"></ion-icon>\n\n				</button>\n\n			</ion-buttons>\n\n\n\n		</ion-navbar>\n\n	</ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content id="product-box">\n\n\n\n	<ion-grid>\n\n		<ion-row class="relative" id="product-content-body">\n\n			<div  col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 id="section-left">\n\n				<div class="receipt-product">\n\n					<page-receipt></page-receipt> \n\n				</div>\n\n			</div>\n\n\n\n			<ion-col col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 id="section-right" class="column">\n\n\n\n				<div class="box" id="box-product">\n\n					<div class="box-header">\n\n						<ion-row class="center-distributed">\n\n							<ion-col col-10 col-xs-10 col-sm-10 col-md-10 class="tab" style="justify-content:unset; overflow-x: auto;">\n\n								<label class="tab-item relative" [ngClass]="{\'active\': filter_type_selected == 0}" col--33 color="main">\n\n									<input type="radio" class="sr-only" name="type_product" value=0 [(ngModel)]="filter_type_selected" (change)="refresh_data()"> All \n\n								</label>\n\n								<label class="tab-item relative" [ngClass]="{\'active\': filter_type_selected == item.type}" col--33 color="main" *ngFor="let item of helper.local.get_params(helper.config.variable.credential).type_product; let i = index;" >\n\n									<input type="radio" class="sr-only" name="type_product" value="{{item.type}}" [(ngModel)]="filter_type_selected" (change)="refresh_data()"> {{item.alt_type_name}}\n\n								</label>\n\n								<!-- <label class="tab-item relative" col--33 [ngClass]="{\'active\': filter_type_selected == 2}" color="main">\n\n									<input type="radio" class="sr-only" name="type_product" value=2 [(ngModel)]="filter_type_selected" (change)="refresh_data()"> Minuman\n\n								</label> -->\n\n							</ion-col>\n\n							<ion-col col-2 col-xs-2 col-sm-2 col-md-2>\n\n								<button ion-button clear icon-right color="main" (click)="product_sort()">\n\n								  Sort <ion-icon name="funnel"></ion-icon>\n\n								</button>\n\n							</ion-col>\n\n						</ion-row>\n\n					</div>\n\n					<div *ngIf="!this.helper.local.get_params(\'pinned_product\') || this.helper.local.get_params(\'pinned_product\').length > 0" style="margin-bottom:10px;">\n\n						<strong style="font-size: .9em;margin-left: 5px;">Produk di Pin</strong>		\n\n						<ion-row class="box-body" id="">\n\n							<ion-col class="pinned_post col-xs-{{page_params.product_width.xs}} col-sm-{{page_params.product_width.sm}} col-md-{{page_params.product_width.md}} col-lg-{{page_params.product_width.md}} col-xl-{{page_params.product_width.md}} product" *ngFor="let item of this.helper.local.get_params(\'pinned_product\'); let i = index" (click)="add_to_bill(item)" (press)="pinnedProductOptions(item, index)">\n\n								<div class="product-body">\n\n									<div class="product-image" [style.backgroundImage]="\'url(\'+item.image.thumb+\')\'">\n\n										\n\n										<div class="product-name">{{item.name}}</div>\n\n									</div>\n\n									<div class="product-detail">\n\n										<div class="product-detail--price" color="primary"> <ion-icon name="cash"></ion-icon> Rp.{{priceToRupiah(item.price)}}</div>\n\n										<!-- <div class="product-detail--stock" color="secondary" ><ion-icon name="cube"></ion-icon> {{item.stock}}</div> -->\n\n									</div>\n\n								</div>\n\n							</ion-col>\n\n						</ion-row>\n\n					</div>\n\n					<div>\n\n						<strong style="font-size: .9em;margin-left: 5px;" *ngIf="!this.helper.local.get_params(\'pinned_product\') || this.helper.local.get_params(\'pinned_product\').length > 0">Produk</strong>\n\n						<ion-row class="box-body" id="">\n\n\n\n							<ion-col class="col-xs-{{page_params.product_width.xs}} col-sm-{{page_params.product_width.sm}} col-md-{{page_params.product_width.md}} col-lg-{{page_params.product_width.md}} col-xl-{{page_params.product_width.md}} product" *ngFor="let item of items; let i = index" (click)="add_to_bill(item)" (press)="productOptions(item, index)">\n\n								<div class="product-body">\n\n									<div class="product-image" [style.backgroundImage]="\'url(\'+item.image.thumb+\')\'">\n\n										\n\n										<div class="product-name">{{item.name}}</div>\n\n									</div>\n\n									<div class="product-detail">\n\n										<div class="product-detail--price" color="primary"> <ion-icon name="cash"></ion-icon> Rp.{{priceToRupiah(item.price)}}</div>\n\n										<!-- <div class="product-detail--stock" color="secondary" ><ion-icon name="cube"></ion-icon> {{item.stock}}</div> -->\n\n									</div>\n\n								</div>\n\n							</ion-col>\n\n						</ion-row>\n\n					</div>\n\n\n\n								<!-- <ion-col col-6 col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-3 class="product">\n\n									<div class="product-body" style="background-color: white;">\n\n										<div class="product-name">\n\n											<ion-icon name="add" style="color:white; font-size: -webkit-xxx-large;"></ion-icon>\n\n										</div>\n\n									</div>\n\n								</ion-col> -->\n\n								\n\n								<!-- <ion-col col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12>\n\n								\n\n									<button ion-button block color="main" (click)="infinite_product()">Load More</button>\n\n								</ion-col> -->\n\n					<ion-infinite-scroll (ionInfinite)="infinite_product($event)">\n\n					   <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n					 </ion-infinite-scroll>\n\n				</div> <!--  End of payment method -->\n\n			</ion-col>\n\n		</ion-row>\n\n	</ion-grid>\n\n\n\n	\n\n	<ion-fab right bottom absolute-drag absolute-drag-horizontal reduceRight="30">\n\n    <button ion-fab color="main" style="box-shadow: 0px 0px 0px 3px white;"><ion-icon name="apps"></ion-icon></button>\n\n    <ion-fab-list side="top" #fab>\n\n      <button ion-fab ion-fab-item color="main" (click)="print_bill()"> <ion-icon name="print"></ion-icon> <span class="label glow">Cetak Bill</span> </button>\n\n      <button ion-fab ion-fab-item color="main" (click)="pay_bill()"> <ion-icon name="logo-usd"></ion-icon> <span class="label glow">Bayar Pesanan</span> </button>\n\n      <button ion-fab ion-fab-item color="main" (click)="saveBill()"> <ion-icon name="paper"></ion-icon> <span class="label glow">Simpan Pesanan</span> </button>\n\n      <button ion-fab ion-fab-item color="main" (click)="reset_receipts()"> <ion-icon name="trash"></ion-icon> <span class="label glow">Reset Pesanan</span> </button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\product\product.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__providers_product_product__["a" /* ProductProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_product_product__["a" /* ProductProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__providers_bill_bill__["a" /* BillProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__providers_bill_bill__["a" /* BillProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_11__ionic_native_local_notifications__["a" /* LocalNotifications */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__ionic_native_local_notifications__["a" /* LocalNotifications */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_9__providers_db_local_db_local__["a" /* DbLocalProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__providers_db_local_db_local__["a" /* DbLocalProvider */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_10__providers_helper_helper__["a" /* HelperProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__providers_helper_helper__["a" /* HelperProvider */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */]) === "function" && _p || Object])
    ], ProductPage);
    return ProductPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AiRemoteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_db_local_db_local__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_local_notifications__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the AiRemoteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AiRemoteProvider = (function () {
    function AiRemoteProvider(http, toast, localNotifications, alert, local, config, events) {
        this.http = http;
        this.toast = toast;
        this.localNotifications = localNotifications;
        this.alert = alert;
        this.local = local;
        this.config = config;
        this.events = events;
        this.io = __WEBPACK_IMPORTED_MODULE_5_socket_io_client__;
        this.options = {};
        this.isInitialize = false;
        this.isListen = false;
        this.isListenGeneral = false;
        this.options = this.default_params();
    }
    AiRemoteProvider.prototype.initialize = function (params, connect) {
        if (!this.isInitialize) {
            this.options = Object.assign(this.options, params);
            this.options.url = this.options.host + '?cluster=' + this.options.apiKey;
            this.socket = this.io(this.options.url);
            this.isInitialize = true;
            this.socket.on('connect', function () {
                if (typeof connect == 'function') {
                    connect();
                }
            });
        }
    };
    AiRemoteProvider.prototype.default_params = function () {
        return {
            host: 'https://remotep2p.herokuapp.com/',
            apiKey: 'Folarium3838',
            id: undefined
        };
    };
    AiRemoteProvider.prototype.subscribe = function (event, fn) {
        event = this.options.apiKey + "_" + event;
        this.socket.on(event, fn);
    };
    AiRemoteProvider.prototype.send = function (event, target, data, fn) {
        fn = typeof fn == 'undefined' ? function () { } : fn;
        data = {
            target: target,
            data: data,
            _props: {
                apiKey: this.options.apiKey
            }
        };
        this.socket.emit(event, data, fn);
    };
    AiRemoteProvider.prototype.socket_listener = function () {
        var _this = this;
        var isLogin = this.local.get_params('login_outlet_device');
        if (!this.isListen) {
            var outlet_id = this.local.get_params(this.config.variable.credential).data.outlet_id;
            var data_1 = this.local.get_params(this.config.variable.credential).data;
            var uuid_1 = this.local.get_params(this.config.variable.credential).outlet_device.uuid;
            this.subscribe('app.' + uuid_1 + '.' + outlet_id + '.authority.revoke', function () {
                if (!isLogin) {
                    _this.events.publish('outlet_list.refresh');
                    return false;
                }
                _this.alert.create({
                    title: "Anda telah dikeluarkan oleh admin",
                    subTitle: "Hak akses Anda telah dicabut oleh admin dari outlet ini. Silahkan hubungi admin outlet anda untuk keterangan lebih lanjut!",
                    buttons: [{
                            text: "Tutup",
                            handler: function () {
                                _this.events.publish('outlet.signout');
                            }
                        }]
                }).present();
            });
            this.subscribe('app.' + uuid_1 + '.authority.accepted', function () {
                _this.localNotifications.schedule({
                    id: 1,
                    text: 'Perangkat anda telah diperbolehkan untuk mengakses outlet ' + data_1.outlet_name,
                    sound: 'file://assets/audio/notification.mp3',
                    data: { secret: uuid_1 }
                });
            });
            this.isListen = true;
        }
    };
    AiRemoteProvider.prototype.socket_listener_general = function () {
        var _this = this;
        var isLogin = this.local.get_params('login_outlet_device');
        if (!this.isListenGeneral) {
            var data_2 = this.local.get_params(this.config.variable.credential).data;
            var uuid_2 = this.local.get_params("uuid");
            this.subscribe('app.' + uuid_2 + '.authority.accepted', function () {
                if (isLogin) {
                    return false;
                }
                _this.localNotifications.schedule({
                    id: 1,
                    text: 'Perangkat anda telah diperbolehkan untuk mengakses outlet ' + data_2.outlet_name,
                    sound: 'file://assets/audio/notification.mp3',
                    data: { secret: uuid_2 }
                });
                _this.toast.create({
                    message: 'Perangkat anda telah diperbolehkan untuk mengakses outlet ' + data_2.outlet_name,
                    duration: 2000
                }).present();
            });
            this.isListenGeneral = true;
        }
    };
    AiRemoteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_db_local_db_local__["a" /* DbLocalProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], AiRemoteProvider);
    return AiRemoteProvider;
}());

//# sourceMappingURL=ai-remote.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DbTableProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the DbTableProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DbTableProvider = (function () {
    function DbTableProvider(http, storage, config) {
        this.http = http;
        this.storage = storage;
        this.config = config;
        console.log('Hello DbTableProvider Provider');
    }
    DbTableProvider.prototype.get_table = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        // return this.storage.get('table')
        var urlTable = this.config.base_url('admin/outlet/table/data/get');
        var dataTable = Object.assign({ status: 1 }, data);
        return __WEBPACK_IMPORTED_MODULE_4_jquery__["post"](urlTable, dataTable)
            .done(function (res) {
            res = JSON.parse(res);
            _this.storage.set('table', res)
                .then(function () {
                console.info('Data table has been updated');
            })
                .catch(function () {
                console.error('Error occured when updating data table');
            });
        });
    };
    DbTableProvider.prototype.get_table_storage = function () {
    };
    DbTableProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], DbTableProvider);
    return DbTableProvider;
}());

//# sourceMappingURL=db-table.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletListPageModule", function() { return OutletListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__outlet_list__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OutletListPageModule = (function () {
    function OutletListPageModule() {
    }
    OutletListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__outlet_list__["a" /* OutletListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__outlet_list__["a" /* OutletListPage */]),
            ],
        })
    ], OutletListPageModule);
    return OutletListPageModule;
}());

//# sourceMappingURL=outlet-list.module.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutPageModule = (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]),
            ],
        })
    ], AboutPageModule);
    return AboutPageModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_helper_helper__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(helper, navCtrl, navParams) {
        this.helper = helper;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.listAbout = [];
        this.listAbout = [{
                name: "nama",
                value: 'Folarpos Instant'
            }, {
                name: 'uuid',
                value: this.helper.local.get_params('uuid')
            }, {
                name: 'version',
                value: 'build 20180321-1-20'
            }, {
                name: 'Author',
                value: 'dhoni.p.saputra@gmail.com'
            }, {
                name: 'Company',
                value: 'Folarium Technomedia'
            }, {
                name: "Year",
                value: 2018
            }, {
                name: 'Website',
                value: "http://folarpos.co.id"
            }];
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\about\about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n	\n	<ion-toolbar color="main">\n	  <ion-navbar>\n	  	<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n	    <ion-title>about</ion-title>\n	  </ion-navbar>\n	</ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-list>\n	  <ion-item *ngFor="let item of listAbout">\n	  	<strong>{{item.name}}</strong><br>\n	  	<span>{{item.value}}</span>\n\n	  </ion-item>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_helper_helper__["a" /* HelperProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintBluetoothPanelPageModule", function() { return PrintBluetoothPanelPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__print_bluetooth_panel__ = __webpack_require__(345);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PrintBluetoothPanelPageModule = (function () {
    function PrintBluetoothPanelPageModule() {
    }
    PrintBluetoothPanelPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__print_bluetooth_panel__["a" /* PrintBluetoothPanelPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__print_bluetooth_panel__["a" /* PrintBluetoothPanelPage */]),
            ],
        })
    ], PrintBluetoothPanelPageModule);
    return PrintBluetoothPanelPageModule;
}());

//# sourceMappingURL=print-bluetooth-panel.module.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintBluetoothPanelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_printer_service_printer_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_helper_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_bluetooth_serial__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PrintBluetoothPanelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrintBluetoothPanelPage = (function () {
    function PrintBluetoothPanelPage(bluetoothSerial, navCtrl, navParams, helper, printer) {
        this.bluetoothSerial = bluetoothSerial;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.helper = helper;
        this.printer = printer;
        this.printer_connected = [];
        this.printer_unconnected = [];
        this.default_printer = [];
        this.state = 'index';
        this.search_print = false;
        this.getDefaultPrinter();
    }
    PrintBluetoothPanelPage.prototype.ionViewDidLoad = function () {
    };
    PrintBluetoothPanelPage.prototype.checking_bluetooth_connection = function () {
        var printLoading = this.helper.loadingCtrl.create({
            content: "Memeriksa printer"
        });
        printLoading.present();
        this.check_unpaired_device();
    };
    PrintBluetoothPanelPage.prototype.check_unpaired_device = function () {
        var _this = this;
        this.search_print = true;
        var printLoading = this.helper.loadingCtrl.create({
            content: "Memeriksa printer"
        });
        printLoading.present();
        this.printer.listBluetoothDevices()
            .then(function (devices) {
            console.log(devices);
            printLoading.dismiss();
            if (Array.isArray(devices)) {
                _this.printer_unconnected = devices;
            }
        }, function (err) {
            console.log(err);
            printLoading.dismiss();
            _this.helper.alertCtrl.create({
                title: "Kesalahan saat memeriksa printer",
                message: "Terjadi kesalahan ketika memeriksa ketersediaan printer.",
                buttons: ["OK"]
            }).present();
        });
    };
    PrintBluetoothPanelPage.prototype.itemSelected = function (item) {
        var _this = this;
        this.helper.local.setdb('printer_connected', item)
            .then(function () {
            _this.printer.connect(item.address)
                .then(function () {
            });
            // this.getDefaultPrinter();
            _this.default_printer = item;
            _this.helper.toast.create({
                message: item.aliasname + " telah diset default",
                duration: 2000
            }).present();
        });
    };
    PrintBluetoothPanelPage.prototype.getDefaultPrinter = function () {
        var _this = this;
        this.helper.local.opendb('printer_connected')
            .then(function (device) {
            _this.default_printer = device ? device : {};
        });
    };
    PrintBluetoothPanelPage.prototype.pairDevice = function (item) {
    };
    PrintBluetoothPanelPage.prototype.resetDevices = function () {
        this.helper.local.setdb('printer_connected', {});
    };
    PrintBluetoothPanelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-print-bluetooth-panel',template:/*ion-inline-start:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\print-bluetooth-panel\print-bluetooth-panel.html"*/'<!--\n\n  Generated template for the PrintBluetoothPanelPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n	<ion-toolbar color="main">\n\n		\n\n		<ion-navbar>\n\n			<ion-title *ngIf="state == \'index\'">Printer</ion-title>\n\n			<ion-title *ngIf="state == \'search_print\'">Cari Printer</ion-title>\n\n		\n\n			<ion-buttons end>\n\n				<button ion-button clear icon-left color="light" (click)="check_unpaired_device()">\n\n				  <ion-icon name="print"></ion-icon> Cari printer\n\n				</button>\n\n			</ion-buttons>\n\n\n\n		</ion-navbar>\n\n	</ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<ion-list>\n\n	  	<button ion-item *ngIf="default_printer && default_printer.aliasName">\n\n			<ion-icon ios="ios-bluetooth" md="md-bluetooth"></ion-icon>\n\n	    	{{ default_printer.aliasName }}\n\n	    	<span class="badge pull-right">default</span>\n\n	  	</button>  \n\n		<div class="text-align--center" *ngIf="!default_printer && !default_printer.aliasName">Tidak ditemukan printer default</div>\n\n	\n\n		<div class="text-align--center" *ngIf="search_print && printer_unconnected.length < 1">Tidak ada printer ditemukan</div>\n\n	  	<ion-item-divider color="light" *ngIf="search_print && printer_unconnected.length > 0"> {{printer_unconnected.length}} perangkat ditemukan </ion-item-divider>\n\n	  	<div *ngFor="let item of printer_unconnected">\n\n		  	<button ion-item *ngIf="item.address != default_printer.address" (click)="itemSelected(item)">\n\n				<ion-icon ios="ios-bluetooth" md="md-bluetooth"></ion-icon>\n\n		    	{{ item.aliasName }}\n\n		  	</button>  \n\n	  	</div>\n\n	</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\print-bluetooth-panel\print-bluetooth-panel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_helper_helper__["a" /* HelperProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_printer_service_printer_service__["a" /* PrinterServiceProvider */]])
    ], PrintBluetoothPanelPage);
    return PrintBluetoothPanelPage;
}());

//# sourceMappingURL=print-bluetooth-panel.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
Generated class for the ConfigProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
var ConfigProvider = (function () {
    function ConfigProvider() {
        this.variable = {
            credential: 'credential',
            settings: 'settings'
        };
        // this.host = 'http://instant.folarpos.co.id/';
        // this.host = 'http://localhost/folarpos-instant/';
        this.host = 'http://192.168.1.38/folarpos-instant/';
        // this.host = 'http://192.168.1.14/folarpos-instant/';
        // this.host = 'http://192.168.100.31/folarpos-instant/';
    }
    ConfigProvider.prototype.base_url = function (url) {
        url = url ? url + '/' : '';
        return this.host + url;
    };
    ConfigProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ConfigProvider);
    return ConfigProvider;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillSavedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BillSavedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BillSavedPage = (function () {
    function BillSavedPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    BillSavedPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    BillSavedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BillSavedPage');
    };
    BillSavedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bill-saved',template:/*ion-inline-start:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\bill-saved\bill-saved.html"*/'<!--\n\n  Generated template for the BillSavedPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Bill tersimpan</ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button (click)="closeModal()">\n\n      	Close\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\bill-saved\bill-saved.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
    ], BillSavedPage);
    return BillSavedPage;
}());

//# sourceMappingURL=bill-saved.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpendDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SpendDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SpendDetailPage = (function () {
    function SpendDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SpendDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SpendDetailPage');
    };
    SpendDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-spend-detail',template:/*ion-inline-start:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\spend-detail\spend-detail.html"*/'<!--\n\n  Generated template for the SpendDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>spend-detail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\spend-detail\spend-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], SpendDetailPage);
    return SpendDetailPage;
}());

//# sourceMappingURL=spend-detail.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(412);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_sqlite__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_screen_orientation__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_list_list__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_table_table__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_send_receipt_send_receipt__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_payment_payment__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_receipt_receipt__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_product_product__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_bill_saved_bill_saved__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_settings_settings__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_stocks_stocks__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_bill_item_editor_bill_item_editor__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_transaction_transaction__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_detail_stock_detail_stock__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_edit_receipt_item_edit_receipt_item__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_total_payment_editor_total_payment_editor__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_tooltip_product_tooltip_product__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_error_error__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_split_bill_split_bill__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_member_member__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_member_new_form_member_new_form__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_member_detail_member_detail__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_modal_modal__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_spend_spend__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_spend_detail_spend_detail__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_debt_debt__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_outlet_list_outlet_list_module__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_print_bluetooth_panel_print_bluetooth_panel_module__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_about_about_module__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_status_bar__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_splash_screen__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_receipt_data_receipt_data__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_config_config__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__providers_product_product__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_bill_bill__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_db_local_db_local__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_db_table_db_table__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__providers_helper_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__angular_platform_browser_animations__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__providers_printer_service_printer_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ionic_native_bluetooth_serial__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ionic_native_unique_device_id__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ionic_native_http__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__providers_ai_remote_ai_remote__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























































// import { AbsoluteDragDirective } from '../directives/absolute-drag/absolute-drag';  
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_table_table__["a" /* TablePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_send_receipt_send_receipt__["a" /* SendReceiptPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_receipt_receipt__["a" /* ReceiptPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_bill_saved_bill_saved__["a" /* BillSavedPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_stocks_stocks__["a" /* StocksPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_bill_item_editor_bill_item_editor__["a" /* BillItemEditorPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_transaction_transaction__["a" /* TransactionPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_detail_stock_detail_stock__["a" /* DetailStockPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_edit_receipt_item_edit_receipt_item__["a" /* EditReceiptItemPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_total_payment_editor_total_payment_editor__["a" /* TotalPaymentEditorPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_tooltip_product_tooltip_product__["a" /* TooltipProductPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_error_error__["a" /* ErrorPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_split_bill_split_bill__["a" /* SplitBillPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_member_member__["a" /* MemberPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_member_new_form_member_new_form__["a" /* MemberNewFormPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_member_detail_member_detail__["a" /* MemberDetailPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_spend_spend__["a" /* SpendPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_spend_detail_spend_detail__["a" /* SpendDetailPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_debt_debt__["a" /* DebtPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_38__pages_print_bluetooth_panel_print_bluetooth_panel_module__["PrintBluetoothPanelPageModule"],
                __WEBPACK_IMPORTED_MODULE_49__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_37__pages_outlet_list_outlet_list_module__["OutletListPageModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_39__pages_about_about_module__["AboutPageModule"],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/bill-item-editor/bill-item-editor.module#BillItemEditorPageModule', name: 'BillItemEditorPage', segment: 'bill-item-editor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bill-saved/bill-saved.module#BillSavedPageModule', name: 'BillSavedPage', segment: 'bill-saved', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/debt/debt.module#DebtPageModule', name: 'DebtPage', segment: 'debt', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail-stock/detail-stock.module#DetailStockPageModule', name: 'DetailStockPage', segment: 'detail-stock', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-receipt-item/edit-receipt-item.module#EditReceiptItemPageModule', name: 'EditReceiptItemPage', segment: 'edit-receipt-item', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/error/error.module#ErrorPageModule', name: 'ErrorPage', segment: 'error', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/member-detail/member-detail.module#MemberDetailPageModule', name: 'MemberDetailPage', segment: 'member-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/member-new-form/member-new-form.module#MemberNewFormPageModule', name: 'MemberNewFormPage', segment: 'member-new-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/member/member.module#MemberPageModule', name: 'MemberPage', segment: 'member', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/outlet-list/outlet-list.module#OutletListPageModule', name: 'OutletListPage', segment: 'outlet-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product/product.module#ProductPageModule', name: 'ProductPage', segment: 'product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/print-bluetooth-panel/print-bluetooth-panel.module#PrintBluetoothPanelPageModule', name: 'PrintBluetoothPanelPage', segment: 'print-bluetooth-panel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/send-receipt/send-receipt.module#SendReceiptPageModule', name: 'SendReceiptPage', segment: 'send-receipt', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/spend-detail/spend-detail.module#SpendDetailPageModule', name: 'SpendDetailPage', segment: 'spend-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/spend/spend.module#SpendPageModule', name: 'SpendPage', segment: 'spend', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/split-bill/split-bill.module#SplitBillPageModule', name: 'SplitBillPage', segment: 'split-bill', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stocks/stocks.module#StocksPageModule', name: 'StocksPage', segment: 'stocks', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/receipt/receipt.module#ReceiptPageModule', name: 'ReceiptPage', segment: 'receipt', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tooltip-product/tooltip-product.module#TooltipProductPageModule', name: 'TooltipProductPage', segment: 'tooltip-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/table/table.module#TablePageModule', name: 'TablePage', segment: 'table', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/total-payment-editor/total-payment-editor.module#TotalPaymentEditorPageModule', name: 'TotalPaymentEditorPage', segment: 'total-payment-editor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transaction/transaction.module#TransactionPageModule', name: 'TransactionPage', segment: 'transaction', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_table_table__["a" /* TablePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_send_receipt_send_receipt__["a" /* SendReceiptPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_receipt_receipt__["a" /* ReceiptPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_stocks_stocks__["a" /* StocksPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_bill_item_editor_bill_item_editor__["a" /* BillItemEditorPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_transaction_transaction__["a" /* TransactionPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_detail_stock_detail_stock__["a" /* DetailStockPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_edit_receipt_item_edit_receipt_item__["a" /* EditReceiptItemPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_total_payment_editor_total_payment_editor__["a" /* TotalPaymentEditorPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_tooltip_product_tooltip_product__["a" /* TooltipProductPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_error_error__["a" /* ErrorPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_split_bill_split_bill__["a" /* SplitBillPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_member_member__["a" /* MemberPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_member_new_form_member_new_form__["a" /* MemberNewFormPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_member_detail_member_detail__["a" /* MemberDetailPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_spend_spend__["a" /* SpendPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_spend_detail_spend_detail__["a" /* SpendDetailPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_debt_debt__["a" /* DebtPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_42__providers_receipt_data_receipt_data__["a" /* ReceiptDataProvider */],
                __WEBPACK_IMPORTED_MODULE_43__providers_config_config__["a" /* ConfigProvider */],
                __WEBPACK_IMPORTED_MODULE_44__providers_product_product__["a" /* ProductProvider */],
                __WEBPACK_IMPORTED_MODULE_45__providers_bill_bill__["a" /* BillProvider */],
                __WEBPACK_IMPORTED_MODULE_46__providers_db_local_db_local__["a" /* DbLocalProvider */],
                __WEBPACK_IMPORTED_MODULE_47__providers_db_table_db_table__["a" /* DbTableProvider */],
                __WEBPACK_IMPORTED_MODULE_48__providers_helper_helper__["a" /* HelperProvider */],
                __WEBPACK_IMPORTED_MODULE_50__providers_printer_service_printer_service__["a" /* PrinterServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_51__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */],
                __WEBPACK_IMPORTED_MODULE_52__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
                __WEBPACK_IMPORTED_MODULE_53__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_54__providers_ai_remote_ai_remote__["a" /* AiRemoteProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_db_local_db_local__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_product_product__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_db_table_db_table__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_helper_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_bill_bill__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the TablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TablePage = (function () {
    function TablePage(navCtrl, appCtrl, navParams, local, dbTableProvider, helper, events, billProvider) {
        this.navCtrl = navCtrl;
        this.appCtrl = appCtrl;
        this.navParams = navParams;
        this.local = local;
        this.dbTableProvider = dbTableProvider;
        this.helper = helper;
        this.events = events;
        this.billProvider = billProvider;
        this.multiple = false;
        this.tableChoosen = {};
        this.choose_type_order = 1;
        this.event_handler = {};
        // this.helstorage.set('outlet', 1)
        // this.local.setdb('outlet', 1)
        console.log(this.helper.local.get_params(this.helper.config.variable.credential));
        /*this.local.opendb('table')
        .then((res)=>{
            if(!res)
            {
                console.error('No Table defined. please do synchronize first!');
                this.tableNum = [];
            }else
            {
                
                this.tableNum = res.results;
            }
          })*/
    }
    TablePage.prototype.ionViewWillEnter = function () {
        this.detect_parameters();
        if (!this.navParams.data.trigger_event || this.navParams.data.trigger_event != 'table.change') {
            /*if(this.helper.local.get_params(this.helper.config.variable.settings) && !this.helper.local.get_params(this.helper.config.variable.settings).choose_table_first)
            {
              this.navCtrl.setRoot(ProductPage);
            }*/
        }
    };
    TablePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.outlet = this.helper.local.get_params(this.helper.config.variable.credential).data.outlet_id;
        this.dbTableProvider.get_table({ outlet: this.outlet })
            .then(function (res) {
            res = !_this.helper.isJSON(res) ? res : JSON.parse(res);
            if (res.code == 200) {
                _this.tableNum = res.results;
            }
            else {
                alert('Error on getting data');
            }
        })
            .catch(function () {
            alert('Error on getting data');
        });
        /*this.local.opendb('outlet')
        .then((val)=>{
          this.outlet = val;
        })*/
    };
    TablePage.prototype.selectTable = function (index, tab_id) {
        if (this.is_selected(index)) {
            delete this.tableChoosen[index];
        }
        else {
            if (!this.multiple) {
                this.tableChoosen = {};
            }
            this.tableChoosen[index] = this.tableNum[index];
        }
        // this.tableNum[index].status_meja = this.tableNum[index].status_meja?false:true;
    };
    TablePage.prototype.is_selected = function (index) {
        return this.tableChoosen[index] ? true : false;
    };
    TablePage.prototype.is_selection_null = function () {
        return Object.keys(this.tableChoosen).length < 1 ? true : false;
    };
    TablePage.prototype.change_order = function (number) {
        this.choose_type_order = number;
        switch (number) {
            case 1:
                // code...
                break;
            case 2:
                // code...
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_product_product__["a" /* ProductPage */]);
                break;
            default:
                // code...
                alert('undefined data');
                break;
        }
    };
    TablePage.prototype.detect_parameters = function () {
        this.event_handler[this.navParams.data.event] = this.navParams.data;
        if (this.navParams.data.trigger_event) {
            switch (this.navParams.data.trigger_event) {
                case "table.change":
                    break;
                default:
                    // code...
                    break;
            }
        }
    };
    TablePage.prototype.order = function () {
        console.log(this.navParams.data.trigger_event);
        this.local.set_params('table.selected', this.tableChoosen);
        var trigger_event = this.navParams.data.trigger_event == 'table.change' ? 'table.change' : 'order.pick';
        if (trigger_event == 'order.pick') {
            this.billProvider.reset_order_session();
            this.billProvider.set_bill_component('order_session', []);
            this.billProvider.set_bill_component('orders', []);
            this.billProvider.set_bill_component('visitor_name', '');
            this.billProvider.update_bill_component({}, true);
            this.events.publish('bill.update', {});
        }
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_product_product__["a" /* ProductPage */], { 'previous': 'table-page', event: 'table.pick', trigger_event: trigger_event, 'table': this.tableChoosen, 'multiple': this.multiple });
    };
    TablePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-table',template:/*ion-inline-start:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\table\table.html"*/'<!--\n\n  Generated template for the TablePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header class="bg-green">\n\n  <ion-toolbar color="main">\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Meja</ion-title>\n\n      \n\n    </ion-navbar>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  \n\n  <ion-row class="center-distributed">\n\n    <ion-col col-6 col-md-4 col-lg-4 col-xl-4>\n\n      \n\n      <div class="tab">\n\n        <label class="tab-item relative"  [ngClass]="{\'active\': choose_type_order == 1}" (change)="change_order(1)">\n\n          <!-- <ion-badge item-start class="badge badge-flying flying-left bg-danger" color="assertive">2</ion-badge> -->\n\n          <input type="radio" class="sr-only" value="1" name="type_order"> Meja\n\n        </label>\n\n        <label class="tab-item relative"  [ngClass]="{\'active\': choose_type_order == 2}" (change)="change_order(2)">\n\n          <!-- <ion-badge item-start class="badge badge-flying flying-right bg-danger" color="assertive">2</ion-badge> -->\n\n          <input type="radio" class="sr-only" value="2" name="type_order"> Bungkus\n\n        </label>\n\n      </div>\n\n      \n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <div style="margin: 10px 0px;" class="text-align--center" padding>\n\n    Silahkan Pilih Meja\n\n  </div>\n\n	\n\n	<div class="table-box">\n\n		<div class="table-item" absolute-drag *ngFor="let item of tableNum; let i = index" (click)="selectTable(i, item.tab_id)" [ngClass]="{\'table-square\':helper.local.get_params(\'configure_table\') && item.tab_type == 2,\'table-rectangle\':helper.local.get_params(\'configure_table\') && item.tab_type == 3, \'selected\': is_selected(i)}"> {{item.tab_name}} </div>\n\n	</div>\n\n  <div class="center">\n\n      <!-- <button ion-button >Selanjutnya >> </button> -->\n\n  </div>\n\n\n\n  <ion-fab bottom right>\n\n      <button ion-fab color="main" *ngIf="!is_selection_null()" (click)="order()"><ion-icon name="arrow-forward"></ion-icon></button>\n\n    </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\table\table.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_db_local_db_local__["a" /* DbLocalProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_db_table_db_table__["a" /* DbTableProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_helper_helper__["a" /* HelperProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_6__providers_bill_bill__["a" /* BillProvider */]])
    ], TablePage);
    return TablePage;
}());

//# sourceMappingURL=table.js.map

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 204,
	"./af.js": 204,
	"./ar": 205,
	"./ar-dz": 206,
	"./ar-dz.js": 206,
	"./ar-kw": 207,
	"./ar-kw.js": 207,
	"./ar-ly": 208,
	"./ar-ly.js": 208,
	"./ar-ma": 209,
	"./ar-ma.js": 209,
	"./ar-sa": 210,
	"./ar-sa.js": 210,
	"./ar-tn": 211,
	"./ar-tn.js": 211,
	"./ar.js": 205,
	"./az": 212,
	"./az.js": 212,
	"./be": 213,
	"./be.js": 213,
	"./bg": 214,
	"./bg.js": 214,
	"./bm": 215,
	"./bm.js": 215,
	"./bn": 216,
	"./bn.js": 216,
	"./bo": 217,
	"./bo.js": 217,
	"./br": 218,
	"./br.js": 218,
	"./bs": 219,
	"./bs.js": 219,
	"./ca": 220,
	"./ca.js": 220,
	"./cs": 221,
	"./cs.js": 221,
	"./cv": 222,
	"./cv.js": 222,
	"./cy": 223,
	"./cy.js": 223,
	"./da": 224,
	"./da.js": 224,
	"./de": 225,
	"./de-at": 226,
	"./de-at.js": 226,
	"./de-ch": 227,
	"./de-ch.js": 227,
	"./de.js": 225,
	"./dv": 228,
	"./dv.js": 228,
	"./el": 229,
	"./el.js": 229,
	"./en-au": 230,
	"./en-au.js": 230,
	"./en-ca": 231,
	"./en-ca.js": 231,
	"./en-gb": 232,
	"./en-gb.js": 232,
	"./en-ie": 233,
	"./en-ie.js": 233,
	"./en-il": 234,
	"./en-il.js": 234,
	"./en-nz": 235,
	"./en-nz.js": 235,
	"./eo": 236,
	"./eo.js": 236,
	"./es": 237,
	"./es-do": 238,
	"./es-do.js": 238,
	"./es-us": 239,
	"./es-us.js": 239,
	"./es.js": 237,
	"./et": 240,
	"./et.js": 240,
	"./eu": 241,
	"./eu.js": 241,
	"./fa": 242,
	"./fa.js": 242,
	"./fi": 243,
	"./fi.js": 243,
	"./fo": 244,
	"./fo.js": 244,
	"./fr": 245,
	"./fr-ca": 246,
	"./fr-ca.js": 246,
	"./fr-ch": 247,
	"./fr-ch.js": 247,
	"./fr.js": 245,
	"./fy": 248,
	"./fy.js": 248,
	"./gd": 249,
	"./gd.js": 249,
	"./gl": 250,
	"./gl.js": 250,
	"./gom-latn": 251,
	"./gom-latn.js": 251,
	"./gu": 252,
	"./gu.js": 252,
	"./he": 253,
	"./he.js": 253,
	"./hi": 254,
	"./hi.js": 254,
	"./hr": 255,
	"./hr.js": 255,
	"./hu": 256,
	"./hu.js": 256,
	"./hy-am": 257,
	"./hy-am.js": 257,
	"./id": 258,
	"./id.js": 258,
	"./is": 259,
	"./is.js": 259,
	"./it": 260,
	"./it.js": 260,
	"./ja": 261,
	"./ja.js": 261,
	"./jv": 262,
	"./jv.js": 262,
	"./ka": 263,
	"./ka.js": 263,
	"./kk": 264,
	"./kk.js": 264,
	"./km": 265,
	"./km.js": 265,
	"./kn": 266,
	"./kn.js": 266,
	"./ko": 267,
	"./ko.js": 267,
	"./ky": 268,
	"./ky.js": 268,
	"./lb": 269,
	"./lb.js": 269,
	"./lo": 270,
	"./lo.js": 270,
	"./lt": 271,
	"./lt.js": 271,
	"./lv": 272,
	"./lv.js": 272,
	"./me": 273,
	"./me.js": 273,
	"./mi": 274,
	"./mi.js": 274,
	"./mk": 275,
	"./mk.js": 275,
	"./ml": 276,
	"./ml.js": 276,
	"./mr": 277,
	"./mr.js": 277,
	"./ms": 278,
	"./ms-my": 279,
	"./ms-my.js": 279,
	"./ms.js": 278,
	"./mt": 280,
	"./mt.js": 280,
	"./my": 281,
	"./my.js": 281,
	"./nb": 282,
	"./nb.js": 282,
	"./ne": 283,
	"./ne.js": 283,
	"./nl": 284,
	"./nl-be": 285,
	"./nl-be.js": 285,
	"./nl.js": 284,
	"./nn": 286,
	"./nn.js": 286,
	"./pa-in": 287,
	"./pa-in.js": 287,
	"./pl": 288,
	"./pl.js": 288,
	"./pt": 289,
	"./pt-br": 290,
	"./pt-br.js": 290,
	"./pt.js": 289,
	"./ro": 291,
	"./ro.js": 291,
	"./ru": 292,
	"./ru.js": 292,
	"./sd": 293,
	"./sd.js": 293,
	"./se": 294,
	"./se.js": 294,
	"./si": 295,
	"./si.js": 295,
	"./sk": 296,
	"./sk.js": 296,
	"./sl": 297,
	"./sl.js": 297,
	"./sq": 298,
	"./sq.js": 298,
	"./sr": 299,
	"./sr-cyrl": 300,
	"./sr-cyrl.js": 300,
	"./sr.js": 299,
	"./ss": 301,
	"./ss.js": 301,
	"./sv": 302,
	"./sv.js": 302,
	"./sw": 303,
	"./sw.js": 303,
	"./ta": 304,
	"./ta.js": 304,
	"./te": 305,
	"./te.js": 305,
	"./tet": 306,
	"./tet.js": 306,
	"./tg": 307,
	"./tg.js": 307,
	"./th": 308,
	"./th.js": 308,
	"./tl-ph": 309,
	"./tl-ph.js": 309,
	"./tlh": 310,
	"./tlh.js": 310,
	"./tr": 311,
	"./tr.js": 311,
	"./tzl": 312,
	"./tzl.js": 312,
	"./tzm": 313,
	"./tzm-latn": 314,
	"./tzm-latn.js": 314,
	"./tzm.js": 313,
	"./ug-cn": 315,
	"./ug-cn.js": 315,
	"./uk": 316,
	"./uk.js": 316,
	"./ur": 317,
	"./ur.js": 317,
	"./uz": 318,
	"./uz-latn": 319,
	"./uz-latn.js": 319,
	"./uz.js": 318,
	"./vi": 320,
	"./vi.js": 320,
	"./x-pseudo": 321,
	"./x-pseudo.js": 321,
	"./yo": 322,
	"./yo.js": 322,
	"./zh-cn": 323,
	"./zh-cn.js": 323,
	"./zh-hk": 324,
	"./zh-hk.js": 324,
	"./zh-tw": 325,
	"./zh-tw.js": 325
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 453;

/***/ }),

/***/ 472:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_table_table__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_outlet_list_outlet_list__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_product_product__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_stocks_stocks__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_transaction_transaction__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_member_member__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_spend_spend__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_debt_debt__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_modal_modal__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_about_about__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_screen_orientation__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_helper_helper__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';



// import { SendReceiptPage } from '../pages/send-receipt/send-receipt';
// import { PaymentPage } from '../pages/payment/payment';
// import { ReceiptPage } from '../pages/receipt/receipt';











var MyApp = (function () {
    function MyApp(toastCtrl, platform, statusBar, splashScreen, helper, screenOrientation) {
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.helper = helper;
        this.screenOrientation = screenOrientation;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.tablePage = __WEBPACK_IMPORTED_MODULE_4__pages_table_table__["a" /* TablePage */];
        this.productPage = __WEBPACK_IMPORTED_MODULE_7__pages_product_product__["a" /* ProductPage */];
        this.stocksPage = __WEBPACK_IMPORTED_MODULE_9__pages_stocks_stocks__["a" /* StocksPage */];
        this.transactionPage = __WEBPACK_IMPORTED_MODULE_10__pages_transaction_transaction__["a" /* TransactionPage */];
        this.memberPage = __WEBPACK_IMPORTED_MODULE_11__pages_member_member__["a" /* MemberPage */];
        this.modalPage = __WEBPACK_IMPORTED_MODULE_14__pages_modal_modal__["a" /* ModalPage */];
        this.spendPage = __WEBPACK_IMPORTED_MODULE_12__pages_spend_spend__["a" /* SpendPage */];
        this.debtPage = __WEBPACK_IMPORTED_MODULE_13__pages_debt_debt__["a" /* DebtPage */];
        this.settingsPage = __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */];
        this.outletListPage = __WEBPACK_IMPORTED_MODULE_6__pages_outlet_list_outlet_list__["a" /* OutletListPage */];
        this.aboutPage = __WEBPACK_IMPORTED_MODULE_15__pages_about_about__["a" /* AboutPage */];
        this.lastTimeBackPress = 0;
        this.timePeriodToExit = 2000;
        this.users = {};
        this.splashScreen.show();
        this.initializeApp();
        // console.log(helper.local.get_params(this.helper.config.variable.settings))
        // let default_page = !this.helper.local.get_params(this.helper.config.variable.settings) || this.helper.local.get_params(this.helper.config.variable.settings).choose_table_first?  TablePage : ProductPage ;
        // used for an example of ngFor and navigation
        this.pages = [];
        // this.storage.set('outlet', 1)
        this.routeHistory = [];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            if (_this.platform.is('android')) {
                _this.screenOrientation.lock(_this.screenOrientation.ORIENTATIONS.LANDSCAPE)
                    .catch(function () {
                });
            }
            _this.platform.registerBackButtonAction(function () { return _this.preventClose(); }, 10);
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.helper.events.subscribe('outlet.signout', function () {
                // user and time are the same arguments passed in `events.publish(user, time)`
                _this.signOutOutlet();
            });
            // this.users = this.helper.local.get_params(this.helper.config.variable.credential).users;
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.setRoot = function (page, params) {
        if (params === void 0) { params = {}; }
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page, params);
    };
    MyApp.prototype.preventClose = function () {
        var toast = this.toastCtrl.create({
            message: "Silahkan tutup aplikasi melalui sidebar menu!",
            duration: 3000
        });
        toast.present();
    };
    MyApp.prototype.logout = function () {
        this.helper.local.reset_params('is_login');
        this.helper.storage.remove(this.helper.config.variable.credential);
        this.helper.storage.remove('pinned_product');
        this.helper.local.set_params(this.helper.config.variable.credential, { users: {}, data: {}, outlet: {}, type_product: [] });
        this.helper.local.set_params('pinned_params', []);
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.closeApp = function () {
        var _this = this;
        this.helper.alertCtrl.create({
            title: "Tutup aplikasi",
            message: "Apakah anda yakin ingin menutup aplikasi?",
            buttons: ["Tidak", {
                    text: "Tutup",
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }]
        }).present();
    };
    MyApp.prototype.signOutOutlet = function () {
        this.helper.local.reset_params('login_outlet_device');
        this.helper.local.set_params('login_outlet_device', false);
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_outlet_list_outlet_list__["a" /* OutletListPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\wamp64\www\mobile\folarpos_outlet\src\app\app.html"*/'<ion-menu [content]="content">\n\n    <ion-header color="main">\n\n      <ion-toolbar color="main">\n\n          <ion-title>Menu</ion-title>\n\n      </ion-toolbar>\n\n    </ion-header>\n\n\n\n  <ion-content>\n\n    <!-- {{helper.local.get_params(helper.config.variable.credential).users}} -->\n\n    <ion-list>\n\n      <ion-item *ngIf="helper.local.get_params(\'is_login\') && helper.local.get_params(helper.config.variable.credential).users">\n\n        <ion-avatar item-start>\n\n          <img src="{{helper.config.base_url( )+helper.local.get_params(helper.config.variable.credential).users.users_photo}}">\n\n        </ion-avatar>\n\n        <h2>{{helper.local.get_params(helper.config.variable.credential).users.users_fullname}}</h2>\n\n        <p>Cashier</p>\n\n        <p>\n\n          <button ion-button small color="main" menuClose (click)="logout()"> <ion-icon ios="ios-log-out" md="md-log-out"></ion-icon> &nbsp; Log Out</button>\n\n        </p>\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list id="menu-list">\n\n       <!-- <ion-item-divider>Menu</ion-item-divider> -->\n\n       <button menuClose ion-item *ngIf="!helper.local.get_params(\'login_outlet_device\')" (click)="setRoot(outletListPage)">\n\n        <img src="assets/imgs/icons/outlet.png" style="width:25px; height: 25px;"> Pilih outlet \n\n      </button>\n\n      <div *ngIf="helper.local.get_params(\'login_outlet_device\')">\n\n        <button menuClose ion-item (click)="setRoot(tablePage)" *ngIf="!helper.local.get_params(helper.config.variable.settings) || helper.local.get_params(helper.config.variable.settings).choose_table_first"> \n\n          <img src="assets/imgs/icons/cashier.png" style="width:25px; height: 25px;"> Kasir \n\n        </button>\n\n        <button menuClose ion-item (click)="setRoot(productPage)" *ngIf="helper.local.get_params(helper.config.variable.settings) && !helper.local.get_params(helper.config.variable.settings).choose_table_first"> \n\n          <img src="assets/imgs/icons/cashier.png" style="width:25px; height: 25px;"> Kasir \n\n        </button>\n\n        <button menuClose ion-item (click)="setRoot(stocksPage)">\n\n          <img src="assets/imgs/icons/product.png" style="width:25px; height: 25px;"> Stok\n\n        </button>\n\n        <button menuClose ion-item (click)="setRoot(transactionPage)">\n\n          <img src="assets/imgs/icons/transaction.png" style="width:25px; height: 25px;"> Transaksi\n\n        </button>\n\n        <button menuClose ion-item (click)="setRoot(memberPage)">\n\n          <img src="assets/imgs/icons/member.png" style="width:25px; height: 25px;"> Member\n\n        </button>\n\n        <button menuClose ion-item (click)="setRoot(modalPage)">\n\n          <img src="assets/imgs/icons/modal.png" style="width:25px; height: 25px;"> Modal\n\n        </button>\n\n        <button menuClose ion-item (click)="setRoot(spendPage,{sp_type:0})">\n\n          <img src="assets/imgs/icons/stock_out.png" style="width:25px; height: 25px;"> Pengeluaran\n\n        </button>\n\n        <button menuClose ion-item (click)="setRoot(spendPage,{sp_type:1})">\n\n          <img src="assets/imgs/icons/stock_in.png" style="width:25px; height: 25px;"> Pengadaan\n\n        </button>\n\n        <button menuClose ion-item (click)="setRoot(debtPage)" *ngIf="helper.local.get_params(helper.config.variable.settings) && helper.local.get_params(helper.config.variable.settings).debt_mode">\n\n          <img src="assets/imgs/icons/debt.png" style="width:25px; height: 25px;"> Hutang\n\n        </button>\n\n        <button menuClose ion-item (click)="setRoot(settingsPage)">\n\n          <img src="assets/imgs/icons/settings.png" style="width:25px; height: 25px;"> Settings\n\n        </button>\n\n      </div>\n\n\n\n      <button menuClose ion-item (click)="setRoot(aboutPage)">\n\n          <img src="assets/imgs/icons/about.png" style="width:25px; height: 25px;"> Tentang System\n\n      </button>\n\n      <button menuClose ion-item *ngIf="helper.local.get_params(\'login_outlet_device\')" (click)="signOutOutlet()">\n\n        <img src="assets/imgs/icons/out.png" style="width:25px; height: 25px;"> keluar outlet\n\n      </button>\n\n      <button menuClose ion-item (click)="closeApp()">\n\n        <img src="assets/imgs/icons/close.png" style="width:25px; height: 25px;"> Tutup Aplikasi\n\n      </button>\n\n      <!-- <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" [ngClass]="{\'sr-only\': !helper.local.get_params(helper.config.variable.settings)[p.options.setting_name]}" >\n\n        {{p.title}}\n\n      </button> -->\n\n      <!-- <button menuClose ion-item (click)="logout()">\n\n        Logout\n\n      </button> -->\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\wamp64\www\mobile\folarpos_outlet\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_17__providers_helper_helper__["a" /* HelperProvider */], __WEBPACK_IMPORTED_MODULE_16__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.storage.set('outlet', 1);
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h3>Ionic Menu Starter</h3>\n\n\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n\n  </p>\n\n\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceiptDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the ReceiptDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ReceiptDataProvider = (function () {
    function ReceiptDataProvider() {
        console.log('Hello ReceiptDataProvider Provider');
    }
    ReceiptDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ReceiptDataProvider);
    return ReceiptDataProvider;
}());

//# sourceMappingURL=receipt-data.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_helper_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__table_table__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_product__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__outlet_list_outlet_list__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
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
                    var default_page = resSettings && !resSettings.choose_table_first ? __WEBPACK_IMPORTED_MODULE_4__product_product__["a" /* ProductPage */] : __WEBPACK_IMPORTED_MODULE_3__table_table__["a" /* TablePage */];
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__outlet_list_outlet_list__["a" /* OutletListPage */]);
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
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__outlet_list_outlet_list__["a" /* OutletListPage */]);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n	<ion-toolbar color="main">\n\n		<ion-navbar>\n\n			<ion-title>Login</ion-title>\n\n		</ion-navbar> \n\n	</ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding >\n\n	<div class="center distributed" style="flex-direction: column;">\n\n		\n\n		<div class="col-md-6 col-lg-6 col-sm-8 col-xs-12">\n\n			<div style="text-align: center;">\n\n				<img src="assets/imgs/folarpos_logo.png" style="width: auto; height: 150px;">\n\n				<h3>Log into Folarpos Instan</h3>\n\n			</div>\n\n\n\n			<div *ngIf="!helper.local.get_params(\'is_login\')">\n\n				<form (ngSubmit)="signIn($event)">\n\n					<ion-list >\n\n						<ion-item>\n\n							<ion-label floating>Email</ion-label>\n\n							<ion-input name="email" type="text" required [(ngModel)]="user.user_email_or_phone"></ion-input>\n\n						</ion-item>\n\n\n\n						<ion-item>\n\n							<ion-label floating>Password</ion-label>\n\n							<ion-input name="password" type="password" required [(ngModel)]="user.user_password"></ion-input>\n\n						</ion-item>\n\n						<ion-item style="display: none;">\n\n						</ion-item>\n\n\n\n					</ion-list>\n\n\n\n					<div padding style="padding-right: 0px;">\n\n						<button ion-button block color="main" large type="submit">Sign In</button>\n\n					</div>\n\n				</form>\n\n			</div>\n\n\n\n		</div>\n\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_helper_helper__["a" /* HelperProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_helper_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__member_new_form_member_new_form__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__member_detail_member_detail__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MemberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MemberPage = (function () {
    function MemberPage(navCtrl, navParams, helper, modalCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.helper = helper;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.segment_member = 'member_list';
        this.member = [];
        this.page_params = {
            toggleSearchInput: false
        };
        this.segment_member = 'member_list';
        this.outlet = this.helper.local.get_params(this.helper.config.variable.credential).data.outlet_id;
    }
    MemberPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MemberPage');
    };
    MemberPage.prototype.filter_member = function ($event) {
        var _this = this;
        var val = $event.target.value;
        if (val && val.length < 3) {
            return false;
        }
        var load = this.helper.loadingCtrl.create({
            content: "Memeriksa data"
        });
        load.present();
        this.helper.$.ajax({
            type: "POST",
            url: this.helper.config.base_url('admin/outlet/member/get'),
            data: {
                fields: "last_transaction,member_id,outlet_id,member_name,member_code,member_phone,member_mail,member_registered",
                outlet_id: this.outlet,
                like: [['member_name', val]]
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
    MemberPage.prototype.fetching_member = function ($event) {
        var _this = this;
        if ($event === void 0) { $event = {}; }
        var load = this.helper.loadingCtrl.create({
            content: "Memeriksa data"
        });
        load.present();
        this.helper.$.ajax({
            type: "POST",
            url: this.helper.config.base_url('admin/outlet/member/get'),
            data: {
                fields: "last_transaction,member_id,outlet_id,member_name,member_code,member_phone,member_mail,member_registered",
                outlet_id: this.outlet
            },
            dataType: 'json'
        })
            .done(function (res) {
            _this.member = res.data;
            if (typeof $event.complete == 'function') {
                $event.complete();
            }
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
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__member_new_form_member_new_form__["a" /* MemberNewFormPage */], data);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__member_detail_member_detail__["a" /* MemberDetailPage */], { index: index, data: item });
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
                    text: 'Kirimkan email kartu member',
                    handler: function () {
                        _this.openTheCard(index, item, 'email');
                    }
                }, {
                    text: 'Download PDF Kartu Email',
                    handler: function () {
                        _this.openTheCard(index, item, 'pdf');
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
    MemberPage.prototype.openTheCard = function (index, item, type) {
        var _this = this;
        var url = this.helper.config.base_url('admin/outlet/member/card/' + this.outlet + '/' + item.member_id + '/' + type);
        switch (type) {
            case "email":
                // code...
                var loading_1 = this.helper.loadingCtrl.create({
                    content: "Mengirimkan email"
                });
                loading_1.present();
                this.helper.$.ajax({
                    url: url,
                    type: "POST",
                })
                    .done(function (res) {
                    _this.helper.alertCtrl.create({
                        title: "Kartu member terkirim",
                        message: "Kartu member berhasil dikirim",
                        buttons: ["OK"]
                    }).present();
                })
                    .fail(function () {
                    _this.helper.alertCtrl.create({
                        title: "Kesalahan code : 500",
                        message: "Terjadi kesalahan saat mengirimkan email. Silahkan laporkan kepada pengembang aplikasi",
                        buttons: ["OK"]
                    }).present();
                })
                    .always(function () {
                    loading_1.dismiss();
                });
                break;
            default:
                // code...
                window.open(url, '_blank');
                break;
        }
    };
    MemberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-member',template:/*ion-inline-start:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\member\member.html"*/'<!--\n\n  Generated template for the MemberPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n	<ion-toolbar color="main">\n\n		<ion-navbar>\n\n			<button ion-button menuToggle>\n\n	        <ion-icon name="menu"></ion-icon>\n\n	     </button>\n\n			<ion-title>Member</ion-title>\n\n      <ion-searchbar class="searchbar-toolbar" *ngIf="page_params.toggleSearchInput" (ionInput)="filter_member($event)" style="width: 35%;"></ion-searchbar>\n\n      <ion-buttons class="center distributed">\n\n          <button ion-button icon-only color="light" (click)="page_params.toggleSearchInput=!page_params.toggleSearchInput">\n\n              <ion-icon name="search" *ngIf="!page_params.toggleSearchInput"></ion-icon>\n\n              <ion-icon name="close" *ngIf="page_params.toggleSearchInput"></ion-icon>\n\n          </button>\n\n      </ion-buttons>\n\n		</ion-navbar>\n\n	</ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)="fetching_member($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n	<ion-row>\n\n        <ion-col col-4 *ngFor="let item of member; let i = index;" (press)="advanceOptions(i, item)" (click)="pickMember(i, item)">\n\n          <ion-card padding>\n\n          	<h2 class="text-main">{{item.member_name}}</h2>\n\n          	<div style="margin-top: 15px;" class="text-muted">\n\n          		<div style="font-size: .7em;"> <ion-icon ios="ios-time" md="md-time"></ion-icon> <span *ngIf="item.member_registered">{{helper.moment(item.member_registered).format(\'YYYY MMM DD\')}}</span> <span *ngIf="!item.member_registered">Tanggal pendaftaran tidak ditemukan</span>   </div>\n\n          		<div style="font-size: .7em;"> <ion-icon ios="ios-pricetag" md="md-pricetag"></ion-icon> {{helper.get_initial_outlet_name(helper.local.get_params(helper.config.variable.credential).outlet.outlet_name,\'.\')}}/000-{{item.member_id}} </div>\n\n          		<div style="font-size: .7em;"> <ion-icon ios="ios-call" md="md-call"></ion-icon> {{item.member_phone}}</div>\n\n          		<div style="font-size: .7em;"> <ion-icon ios="logo-usd" md="logo-usd"></ion-icon> <span *ngIf="item.last_transaction"> {{helper.moment(item.last_transaction).format(\'YYYY MMM DD HH:mm\')}} </span> <span *ngIf="!item.last_transaction">Tidak ada transaksi</span> </div>\n\n          	</div>\n\n          </ion-card>\n\n        </ion-col>\n\n    </ion-row>\n\n    <div *ngIf="!member || member.length < 1" class="text-align--center">\n\n		Anda belum memiliki member\n\n	</div>\n\n	\n\n\n\n	<ion-fab bottom right>\n\n		<button ion-fab color="main" (tap)="openFormPopover()"><ion-icon name="add"></ion-icon></button>\n\n	</ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\member\member.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_helper_helper__["a" /* HelperProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
    ], MemberPage);
    return MemberPage;
}());

//# sourceMappingURL=member.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_config_config__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_helper_helper__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
Generated class for the ProductProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
var ProductProvider = (function () {
    function ProductProvider(config, storage, helper) {
        this.config = config;
        this.storage = storage;
        this.helper = helper;
        this.data = { products: {} };
        console.log('Hello ProductProvider Provider');
    }
    ProductProvider.prototype.get_product = function (options) {
        var _this = this;
        if (options.online == true) {
            options.data = Object.assign({
                fields: 'id,outlet,type,price,name,unit,stock,image,charge_nominal,charge_percent,status,discount_nominal,discount_percent,status_text,can_be_removed,favorite,prod_description,ingredients',
                limit: 25,
                page: 1,
            }, options.data);
            this.last_options = options;
            this.last_request = options.data;
            var http = __WEBPACK_IMPORTED_MODULE_2_jquery__["post"](this.config.base_url('admin/outlet/product/get'), options.data);
            http.then(function (res) {
                res = !_this.helper.isJSON(res) ? res : JSON.parse(res);
                _this.data.temp_product = res;
            });
            return http;
        }
        else {
            return this.storage.get('product');
        }
    };
    ProductProvider.prototype.get_data = function (name) {
        return this.data[name];
    };
    ProductProvider.prototype.get_temporary = function () {
        return this.data.temp_product;
    };
    ProductProvider.prototype.set_data = function (name, value) {
        this.data[name] = value;
    };
    ProductProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_helper_helper__["a" /* HelperProvider */]])
    ], ProductProvider);
    return ProductProvider;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailStockPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_helper_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DetailStockPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailStockPage = (function () {
    function DetailStockPage(navCtrl, viewCtrl, navParams, helper) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.helper = helper;
        this.tab = 'detail_product';
        this.product = {};
        this.page_params = {
            action: 'default',
            view_type: 'page',
            show_history_stock: true,
            show_segment: true,
            show_detail_product: true,
        };
        this.outlet = this.helper.local.get_params(this.helper.config.variable.credential).data.outlet_id;
        if (!this.navParams.data) {
            this.navCtrl.pop({});
        }
        console.log(this.navParams.data);
        this.product = this.navParams.data;
        this.product.price_idr = this.helper.intToIDR(this.product.price);
        if (this.product.ingd_id) {
            this.process_get_linked_product();
            this.process_get_stock(this.product.ingd_id);
        }
        else {
            this.process_get_stock(this.product.id);
        }
        if (this.navParams.data.page_params) {
            this.update_page_parameters(this.navParams.data.page_params);
        }
    }
    DetailStockPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailStockPage');
    };
    DetailStockPage.prototype.update_page_parameters = function (data) {
        if (data === void 0) { data = {}; }
        this.page_params = Object.assign(this.page_params, data);
    };
    DetailStockPage.prototype.process_get_stock = function (idproduct) {
        var _this = this;
        var url = this.helper.config.base_url('admin/outlet/stock/log/get');
        var data_request = { outlet: this.outlet, limit: 10, page: 1, order_by: 'stock_date DESC' };
        if (this.product.id) {
            data_request.product = this.product.id;
        }
        else {
            data_request.ingd = this.product.ingd_id;
        }
        __WEBPACK_IMPORTED_MODULE_3_jquery__["post"](url, data_request)
            .then(function (res) {
            res = _this.helper.isJSON(res) ? JSON.parse(res) : res;
            _this.log_stock = res.data;
            var stock = _this.log_stock[0] ? _this.log_stock[0].stock_rest : 0;
            _this.product.stock_opname = _this.product.stock < 1 ? _this.product.stock - _this.log_stock[0].stock_rest : stock;
        });
    };
    DetailStockPage.prototype.process_get_linked_product = function () {
        var _this = this;
        var url = this.helper.config.base_url('admin/outlet/ingredient/related_product');
        __WEBPACK_IMPORTED_MODULE_3_jquery__["post"](url, { outlet_id: this.outlet, ingredients: [this.product.ingd_id] })
            .then(function (res) {
            res = _this.helper.isJSON(res) ? JSON.parse(res) : res;
            console.log(res);
        });
    };
    DetailStockPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    DetailStockPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail-stock',template:/*ion-inline-start:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\detail-stock\detail-stock.html"*/'<!--\n\n  Generated template for the DetailStockPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n	<ion-toolbar  color="main">\n\n		<ion-navbar>\n\n			<ion-title>{{product.name}}</ion-title>\n\n			\n\n		    <ion-buttons end *ngIf="page_params.show_history_stock == true">\n\n		      <a ion-button target="_blank" href="{{helper.config.base_url(\'admin/outlet/stock/export/download\')}}{{product.outlet||product.outlet_id}}/{{product.id||product.ingd_id}}">\n\n		      	Download kartu stok\n\n		      </a>\n\n		    </ion-buttons>\n\n		    \n\n			<ion-buttons end>\n\n		      <button ion-button icon-only (click)="closeModal()" *ngIf="page_params.view_type == \'modal\' ">\n\n		      	<ion-icon name="close-circle"></ion-icon>\n\n		      </button>\n\n		    </ion-buttons>\n\n\n\n\n\n		</ion-navbar>\n\n	</ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<div padding>\n\n		<ion-segment [(ngModel)]="tab">\n\n			<ion-segment-button value="detail_product">\n\n				Detail\n\n			</ion-segment-button>\n\n			<ion-segment-button value="ingredients_product">\n\n				Bahan\n\n			</ion-segment-button>\n\n			<ion-segment-button value="history_stock" *ngIf="page_params.show_history_stock == true">\n\n				Stock History\n\n			</ion-segment-button>\n\n		</ion-segment>\n\n	</div>\n\n\n\n	<div [ngSwitch]="tab">\n\n		<div *ngSwitchCase="\'detail_product\'">\n\n			<div *ngIf="product.id">\n\n				\n\n				<div class="col-md-4">\n\n	    			<div style="">\n\n	    				<img src="{{helper.config.base_url(product.image.raw)}}">\n\n	    			</div>\n\n	    			<div style="" [innerHTML]="product.prod_description">\n\n	    			</div>\n\n				</div>\n\n				<div class="col-md-8">\n\n					<ion-list inset>\n\n						<ion-item>\n\n							<h2>Nama</h2>\n\n			    			<p>{{product.name}}</p>\n\n						</ion-item>\n\n						<ion-item>\n\n							<h2>Harga</h2>\n\n			    			<p>Rp. {{product.price_idr}}</p>\n\n						</ion-item>\n\n						<ion-item>\n\n							<h2>Stok</h2>\n\n			    			<p>{{product.stock}} {{product.unit}}</p>\n\n						</ion-item>\n\n\n\n						<ion-item>\n\n							<h2>Stok Opname</h2>\n\n			    			<p>{{product.stock_opname}} {{product.unit}}</p>\n\n						</ion-item>\n\n					</ion-list>\n\n					\n\n				</div>\n\n			</div>\n\n			<div *ngIf="product.ingd_id">\n\n				<div class="col-md-6">\n\n	    			<div style="">\n\n	    			</div>\n\n	    			\n\n				</div>\n\n				<div class="col-md-6">\n\n					<ion-list inset>\n\n						<ion-item>\n\n							<h2>Nama</h2>\n\n			    			<p>{{product.ingd_name}}</p>\n\n						</ion-item>\n\n						<ion-item>\n\n							<h2>Harga</h2>\n\n			    			<p>Rp. {{product.ingd_price}}</p>\n\n						</ion-item>\n\n						<ion-item>\n\n							<h2>Unit</h2>\n\n			    			<p>{{product.stock}} {{product.ingd_unit}}</p>\n\n						</ion-item>\n\n\n\n						<ion-item>\n\n							<h2>Stok</h2>\n\n			    			<p>{{product.ingd_stock}} {{product.ingd_unit}}</p>\n\n						</ion-item>\n\n					</ion-list>\n\n					\n\n				</div>\n\n			</div>\n\n		</div>\n\n\n\n		<div *ngSwitchCase="\'ingredients_product\'">\n\n\n\n				<ion-list inset>\n\n					\n\n					<ion-item *ngIf="!product.ingredients || product.ingredients.length < 1" class="text-align--center">\n\n						Tidak ada bahan\n\n					</ion-item>\n\n					<ion-item *ngFor="let ingd of product.ingredients">\n\n						<h2>{{ingd.ingd_name}}</h2>\n\n		    			<p>{{ingd.prod_ingd_qty}} {{ingd.ingd_unit}}</p>\n\n					</ion-item>\n\n				</ion-list>\n\n				\n\n		</div>\n\n\n\n		<ion-list *ngSwitchCase="\'history_stock\'">\n\n			<div class="table-responsive">\n\n				<table class="table table-bordered table-hover table-striped">\n\n					<thead>\n\n						<tr>\n\n							<th>No</th>\n\n							<th>Tanggal</th>\n\n							<th>Stok masuk</th>\n\n							<th>Stok keluar</th>\n\n							<th>Stok Sisa</th>\n\n							<th>Catatan</th>\n\n						</tr>\n\n					</thead>\n\n					<tbody>\n\n						<tr *ngFor="let item of log_stock; let i = index;">\n\n							<td>{{i+1}}</td>\n\n							<td>{{item.stock_date}}</td>\n\n							<td>{{item.stock_in}}</td>\n\n							<td>{{item.stock_out}}</td>\n\n							<td>{{item.stock_rest}}</td>\n\n							<td>{{item.stock_note}}</td>\n\n						</tr>\n\n					</tbody>\n\n				</table>\n\n			</div>\n\n		</ion-list>\n\n	</div>	\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\detail-stock\detail-stock.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_helper_helper__["a" /* HelperProvider */]])
    ], DetailStockPage);
    return DetailStockPage;
}());

//# sourceMappingURL=detail-stock.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberNewFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_helper_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__member_member__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MemberNewFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MemberNewFormPage = (function () {
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
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__member_member__["a" /* MemberPage */]);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-member-new-form',template:/*ion-inline-start:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\member-new-form\member-new-form.html"*/'<!--\n\n  Generated template for the MemberPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n	<ion-toolbar color="main">\n\n		<ion-navbar>\n\n			<ion-title>Member</ion-title>\n\n			<ion-buttons end>\n\n				<button ion-button icon-only (click)="closeModal()">\n\n					<ion-icon name="close-circle"></ion-icon>\n\n				</button>\n\n			</ion-buttons>\n\n\n\n		</ion-navbar>\n\n	</ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<ion-list>\n\n						\n\n		<ion-item>\n\n			<ion-label floating>Username</ion-label>\n\n			<ion-input type="text" [(ngModel)]="member.member_name"></ion-input>\n\n		</ion-item>\n\n\n\n		<ion-item>\n\n			<ion-label floating>Email</ion-label>\n\n			<ion-input type="email" [(ngModel)]="member.member_mail"></ion-input>\n\n		</ion-item>\n\n\n\n		<ion-item>\n\n			<ion-label floating>Telephone</ion-label>\n\n			<ion-input type="tel" [(ngModel)]="member.member_phone"></ion-input>\n\n		</ion-item>\n\n			\n\n		<ion-item *ngIf="!member.state || member.state==\'new\'">\n\n			<button ion-button block large (click)="create_new_member()"> Tambahkan member baru </button>\n\n		</ion-item>\n\n\n\n		<ion-item *ngIf="member.state==\'update\'">\n\n			<button ion-button block large (click)="update_new_member()"> Perbarui data member </button>\n\n		</ion-item>\n\n\n\n		<ion-item class="sr-only">\n\n		</ion-item>\n\n\n\n	</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\member-new-form\member-new-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_helper_helper__["a" /* HelperProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
    ], MemberNewFormPage);
    return MemberNewFormPage;
}());

//# sourceMappingURL=member-new-form.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_db_local_db_local__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_helper_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_bill_bill__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_product__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__send_receipt_send_receipt__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentPage = (function () {
    function PaymentPage(navCtrl, navParams, dbLocalProvider, events, helper, billProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbLocalProvider = dbLocalProvider;
        this.events = events;
        this.helper = helper;
        this.billProvider = billProvider;
        this.bill = { payment_total: 0, returnMoney: 0, payment_nominal: '', payment_rest: 0 };
        this.payment_method = 1;
        this.users_outlet = 1;
        this.bank_id = 1;
        this.state = 'payment';
        this.numpad_type = 'numpad';
        this.numpad_type = 'numpad';
    }
    PaymentPage.prototype.ionViewDidEnter = function () {
        console.log(this.navParams.data);
        if (this.navParams.data.event) {
            switch (this.navParams.data.event) {
                case "transaction.edit":
                    // code...
                    this.edit_payment_method(this.navParams.data.bill);
                    break;
                default:
                    this.get_temporary_data();
                    break;
            }
        }
        else {
            this.get_temporary_data();
        }
    };
    PaymentPage.prototype.sumReturn = function (isInput) {
        if (isInput === void 0) { isInput = false; }
        var payment_nominal = this.helper.IDRtoInt(this.bill.payment_nominal);
        payment_nominal = isNaN(payment_nominal) ? 0 : payment_nominal;
        var payment_total = this.helper.IDRtoInt(this.billProvider.get_bill_component('payment_total'));
        var payment_rest = payment_nominal < payment_total ? 0 : payment_nominal - payment_total;
        var paid_with_bank_nominal = payment_total - payment_nominal;
        this.bill.paid_with_bank_nominal = this.helper.intToIDR(paid_with_bank_nominal);
        this.bill.payment_rest = this.helper.intToIDR(payment_rest);
        this.bill.payment_nominal = this.helper.intToIDR(payment_nominal);
        console.log(this.bill);
        if (!isInput) {
            // $('#payment_nominal').focus();	
        }
    };
    PaymentPage.prototype.is_not_enough_money = function () {
        var payment_nominal = this.helper.IDRtoInt(this.bill.payment_nominal);
        var paid_with_bank = this.helper.IDRtoInt(this.bill.paid_with_bank_nominal);
        payment_nominal = this.payment_method == 3 || this.payment_method == 2 ? paid_with_bank + payment_nominal : payment_nominal;
        var total = this.helper.IDRtoInt(this.bill.payment_total);
        return payment_nominal < total;
    };
    PaymentPage.prototype.payBill = function () {
        var _this = this;
        if (this.is_not_enough_money()) {
            if (this.billProvider.bill.member_id && this.helper.local.get_params(this.helper.config.variable.settings).choose_table_first) {
                this.helper.alertCtrl.create({
                    title: "Uang tidak cukup",
                    "message": "Apakah anda ingin menambahkan hutang kepada pelanggan ini?",
                    buttons: [{
                            text: "Ya, Tambahkan hutang",
                            handler: function () {
                                _this.addPaymentToDebt();
                            }
                        }, "Batal"]
                }).present();
            }
            else {
                this.helper.alertCtrl.create({
                    title: "Kesalahan",
                    "message": "Uang tidak cukup untuk melakukan pembayaran.",
                    buttons: ["OK"]
                }).present();
                return false;
            }
        }
        else {
            this.billProvider.save({
                users_outlet: this.users_outlet,
                outlet: this.outlet,
                bank_id: this.bank_id,
                event: 'make_a_payment',
                payment_nominal: this.helper.IDRtoInt(this.bill.payment_nominal),
                payment_rest: this.helper.IDRtoInt(this.bill.payment_rest),
                paid_with_bank_nominal: (this.payment_method == 3 || this.payment_method == 2) && this.helper.IDRtoInt(this.bill.paid_with_bank_nominal) > 0 ? this.helper.IDRtoInt(this.bill.paid_with_bank_nominal) : 0,
                payment_bank_charge_nominal: (this.payment_method == 3 || this.payment_method == 2) && this.helper.IDRtoInt(this.bill.payment_bank_charge_nominal) > 0 ? this.helper.IDRtoInt(this.bill.payment_bank_charge_nominal) : 0,
                payment_bank_charge_percent: (this.payment_method == 3 || this.payment_method == 2) && this.helper.IDRtoInt(this.bill.payment_bank_charge_percent) > 0 ? this.helper.IDRtoInt(this.bill.payment_bank_charge_percent) : 0,
                payment_method: this.payment_method,
            })
                .done(function (res) {
                res = !_this.helper.isJSON(res) ? res : JSON.parse(res);
                if (res.code == 200) {
                    _this.latest_bill_id = res.data.pay_id;
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__send_receipt_send_receipt__["a" /* SendReceiptPage */], { data: _this.latest_bill_id });
                    // this.state = 'afterPayment';
                }
                else {
                    console.error('Error when saving the bill');
                }
            });
        }
    };
    PaymentPage.prototype.print_nota = function () {
        var loadingPrint = this.helper.loadingCtrl.create({
            content: "Mencetak nota",
        });
        loadingPrint.present();
        this.process_print_nota(this.latest_bill_id)
            .then(function () {
            loadingPrint.dismiss();
        }, function () {
            loadingPrint.dismiss();
        });
    };
    PaymentPage.prototype.back_to_cashier = function () {
        this.bill = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__product_product__["a" /* ProductPage */], {
            previous: 'payment-page',
            event: 'payment.cashier',
            trigger_event: "order.new",
            message: "Nota telah dibayarkan"
        });
    };
    PaymentPage.prototype.email_panel = function () {
        var bill = Object.assign({}, this.bill);
        this.navCtrl.push('SendReceiptPage', { bill: bill });
        this.bill = {};
    };
    PaymentPage.prototype.process_print_nota = function (nota) {
        var _this = this;
        if (nota === void 0) { nota = null; }
        return new Promise(function (resolve, reject) {
            if (!_this.helper.printer.isAvailable()) {
                _this.helper.alertCtrl.create({
                    title: "Kesalahan",
                    message: "Layanan printer tidak tersedia untuk perangkat ini",
                    buttons: ["OK"]
                }).present();
                return false;
            }
            _this.helper.local.opendb('printer_connected')
                .then(function (device) {
                console.log(device);
                if (!device || !device.address) {
                    _this.helper.alertCtrl.create({
                        title: "Printer tidak ditemukan",
                        message: "Silahkan menuju settings dan pilih menu printer.",
                        buttons: ["OK"]
                    }).present();
                    return false;
                }
                _this.helper.printer.connect(device.address)
                    .then(function () {
                    setTimeout(function () {
                        var t = _this.billProvider.print_nota(nota);
                        _this.helper.printer.printText(t)
                            .then(function () {
                            resolve();
                        }, function () {
                            reject();
                        });
                    }, 2000); // set timeout
                });
            });
        }); // end of promise
    };
    PaymentPage.prototype.addPaymentToDebt = function () {
        var _this = this;
        this.billProvider.save({
            users_outlet: this.users_outlet,
            outlet: this.outlet,
            bank_id: this.bank_id,
            event: 'make_a_payment',
            payment_nominal: this.helper.IDRtoInt(this.bill.payment_nominal),
            payment_rest: this.helper.IDRtoInt(this.bill.payment_rest),
            paid_with_bank_nominal: (this.payment_method == 3 || this.payment_method == 2) && this.helper.IDRtoInt(this.bill.paid_with_bank_nominal) > 0 ? this.helper.IDRtoInt(this.bill.paid_with_bank_nominal) : 0,
            payment_bank_charge_nominal: (this.payment_method == 3 || this.payment_method == 2) && this.helper.IDRtoInt(this.bill.payment_bank_charge_nominal) > 0 ? this.helper.IDRtoInt(this.bill.payment_bank_charge_nominal) : 0,
            payment_bank_charge_percent: (this.payment_method == 3 || this.payment_method == 2) && this.helper.IDRtoInt(this.bill.payment_bank_charge_percent) > 0 ? this.helper.IDRtoInt(this.bill.payment_bank_charge_percent) : 0,
            payment_method: this.payment_method,
        })
            .done(function (res) {
            res = !_this.helper.isJSON(res) ? res : JSON.parse(res);
            console.log(res);
            if (res.code == 200) {
                _this.bill = {};
                _this.helper.$.ajax({
                    data: {
                        member_id: _this.billProvider.bill.member_id,
                        debt_date: _this.helper.moment().format('YYYY-MM-DD HH:mm:ss'),
                        debt_in: _this.billProvider.bill.payment_total,
                        debt_out: 0,
                        pay_id: res.data.pay_id
                    },
                    type: "POST",
                    url: _this.helper.config.base_url('admin/outlet/debt/save')
                })
                    .done(function (res) {
                    _this.helper.alertCtrl.create({
                        title: "Proses sukses",
                        message: "Hutang telah ditambahkan",
                        buttons: [{
                                text: "OK",
                                handler: function () {
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__product_product__["a" /* ProductPage */], {
                                        previous: 'payment-page',
                                        event: 'payment.cashier',
                                        trigger_event: "order.new",
                                        message: "Nota telah dibayarkan"
                                    });
                                }
                            }]
                    }).present();
                });
            }
            else {
                console.error('Error when saving the bill');
            }
        });
    };
    PaymentPage.prototype.ionViewDidLoad = function () {
        this.outlet = this.helper.local.get_params(this.helper.config.variable.credential).data.outlet_id;
        this.users_outlet = this.helper.local.get_params(this.helper.config.variable.credential).data.users_outlet_id;
        /*this.dbLocalProvider.opendb('outlet')
        .then((val)=>{
            
        })*/
    };
    PaymentPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // screenshot the bills
        this.helper.html2canvas(__WEBPACK_IMPORTED_MODULE_7_jquery__('.receipt-product')[0])
            .then(function (canvas) {
            var img = canvas.toDataURL();
            // img = this.helper.html_encode(img);
            img = img.split(',')[1];
            _this.billProvider.set_bill_component('nota_screenshot', img);
        })
            .catch(function (err) {
            console.log("error canvas", err);
        });
    };
    PaymentPage.prototype.resetBillCounted = function () {
        this.bill = {};
        this.get_temporary_data();
        this.bill.paid_with_bank_nominal = this.helper.IDRtoInt(this.bill.payment_total);
    };
    PaymentPage.prototype.priceToRupiah = function (number) {
        var idr = this.helper.intToIDR(number);
        return idr;
    };
    PaymentPage.prototype.calculate = function (event, type, value) {
        var payment_nominal = !this.bill.payment_nominal ? this.billProvider.get_bill_component('payment_nominal') : this.helper.IDRtoInt(this.bill.payment_nominal);
        payment_nominal = payment_nominal.toString();
        switch (type) {
            case "numeric":
                value = parseInt(value).toString();
                payment_nominal += value;
                this.bill.payment_nominal = this.helper.intToIDR(parseInt(payment_nominal));
                this.sumReturn();
                break;
            case "value":
                this.bill.payment_nominal = this.helper.intToIDR(parseInt(value));
                this.sumReturn();
                break;
            case "sum":
                payment_nominal = this.helper.IDRtoInt(this.bill.payment_nominal);
                value = parseInt(value);
                payment_nominal = payment_nominal + value;
                console.log(value, payment_nominal);
                this.bill.payment_nominal = this.helper.intToIDR(parseInt(payment_nominal));
                this.sumReturn();
                break;
            case "substract":
                payment_nominal = this.helper.IDRtoInt(this.bill.payment_nominal);
                value = parseInt(value);
                payment_nominal = payment_nominal - value;
                console.log(value, payment_nominal);
                this.bill.payment_nominal = this.helper.intToIDR(parseInt(payment_nominal));
                this.sumReturn();
                break;
            case "action":
                switch (value) {
                    case "pas":
                        this.bill.payment_nominal = this.helper.intToIDR(this.billProvider.get_bill_component('payment_total'));
                        this.sumReturn();
                        break;
                    case "clear":
                        this.bill.payment_nominal = 0;
                        // this.sumReturn();
                        break;
                    case "rm":
                        var payment_nominal_1 = this.helper.IDRtoInt(this.bill.payment_nominal).toString();
                        if (payment_nominal_1.length > 0) {
                            var a = payment_nominal_1.split('');
                            a.pop();
                            payment_nominal_1 = a.join('');
                            this.bill.payment_nominal = this.helper.intToIDR(parseInt(payment_nominal_1));
                        }
                        else {
                            this.bill.payment_nominal = 0;
                        }
                        this.sumReturn();
                        break;
                    case 'simpan':
                        this.payBill();
                        break;
                    default:
                        // code...
                        break;
                }
                break;
        }
    };
    PaymentPage.prototype.edit_payment_method = function (data) {
        console.log(data);
        var item = {
            payment_total: data.payment_total,
            sumPrice: data.payment_bills,
            update_db: false,
            tax: data.tax_percent,
            receipts: [],
            visitor: data.visitor_name,
            visitor_name: data.visitor_name,
            table: data.table_id,
            visitor_table: data.table_id,
            taxAmount: data.tax_percent,
        };
        data.bills.forEach(function (val, index) {
            var d = {
                amount: val.qty,
                id: val.product,
                price: val.price,
                totalPrice: val.total,
                type: val.type,
                name: val.name
            };
            item.receipts.push(d);
        });
        this.billProvider.set_data_bill(item, false);
        this.events.publish('bill.update', item);
        this.get_temporary_data();
    };
    PaymentPage.prototype.get_temporary_data = function () {
        var data = this.billProvider.data_bill();
        data = Object.assign({}, data);
        this.events.publish('bill.update', {});
        this.bill = data;
        /*
                if(data.orders.length < 1)
                {
                    this.dbLocalProvider.opendb('bill.data')
                    .then( (res) =>{
                        if(res.orders.length < 1)
                        {
                            this.navCtrl.setRoot(ProductPage, {
                                previous: 'payment-page',
                                event: 'payment.cashier'
                            })
                        }else
                        {
                            this.bill = res;
                        }
        
                    } )
                    
                }else
                {
                    this.events.publish('bill.update', {})
        
                }*/
        // this.sumReturn();
    };
    PaymentPage.prototype.countChargePercent = function () {
        var val = this.helper.IDRtoInt(this.bill.payment_bank_charge_percent);
        var grandTotal = this.helper.IDRtoInt(this.bill.payment_total);
        var payment_nominal = this.helper.IDRtoInt(this.bill.payment_nominal);
        var chargeNominal = grandTotal * (val / 100);
        if (payment_nominal > 0) {
            grandTotal = grandTotal - payment_nominal;
        }
        this.bill.paid_with_bank_nominal = this.helper.intToIDR(grandTotal + chargeNominal);
        this.bill.payment_bank_charge_nominal = this.helper.intToIDR(chargeNominal);
    };
    PaymentPage.prototype.countChargeNominal = function () {
        var val = this.helper.IDRtoInt(this.bill.payment_bank_charge_nominal);
        var grandTotal = this.helper.IDRtoInt(this.bill.payment_total);
        this.bill.payment_bank_charge_percent = ((val / grandTotal) * 100).toFixed(1); // to make 1 digit after comma
        this.bill.paid_with_bank_nominal = this.helper.intToIDR(grandTotal + val);
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment',template:/*ion-inline-start:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\payment\payment.html"*/'<!--\n\n  Generated template for the PaymentPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n	<ion-toolbar color="main">\n\n	  <ion-navbar>\n\n	    <button ion-button menuToggle *ngIf="state == \'payment\'">\n\n	      <ion-icon name="menu"></ion-icon>\n\n	    </button>\n\n	    <ion-title>Pembayaran</ion-title>\n\n	    <ion-buttons class="center distributed">\n\n			<button ion-button clear icon-right color="light" *ngIf="state == \'payment\'" (click)="payBill()">\n\n			  Bayar pesanan\n\n			</button>\n\n		</ion-buttons>\n\n	  </ion-navbar>\n\n	</ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content id="payment-box" >\n\n\n\n	<ion-grid *ngIf="state == \'payment\'">\n\n		<ion-row class="relative">\n\n			<div  col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 id="section-left">\n\n				<div class="receipt-product">\n\n					<page-receipt></page-receipt> \n\n				</div>\n\n			</div>\n\n\n\n			<ion-col col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 id="section-right" class="column">\n\n				<div class="payment-method ">\n\n						\n\n					<ion-row padding class="center-distributed">\n\n						<ion-col col-7 col-xs-12 col-sm-12 col-md-8 class="tab">\n\n							<label class="tab-item relative" [ngClass]="{\'active\': payment_method == 1}" col--33>\n\n								<input type="radio" class="sr-only" name="" [(ngModel)]="payment_method" value="1" (change)="resetBillCounted()"> Tunai\n\n							</label>\n\n							<label class="tab-item relative" [ngClass]="{\'active\': payment_method == 2}" col--33>\n\n								<input type="radio" class="sr-only" name="" [(ngModel)]="payment_method" value="2" (change)="resetBillCounted()"> kartu\n\n							</label>\n\n							<label class="tab-item relative" [ngClass]="{\'active\': payment_method == 3}" col--33>\n\n								<input type="radio" class="sr-only" name="" [(ngModel)]="payment_method" value="3" (change)="resetBillCounted()"> Campuran\n\n							</label>\n\n						</ion-col>\n\n					</ion-row>\n\n					\n\n						\n\n					<ion-row class="center" *ngIf="payment_method == 1">\n\n						<ion-col col-12 col-xs-12 col-sm-12 col-md-4>\n\n							<input type="text" class="form-control--lg" id="paid" name="" [(ngModel)]="bill.payment_nominal" (input)="sumReturn(true)" placeholder="Uang dibayarkan">				\n\n						</ion-col>\n\n						<ion-col col-12 col-xs-12 col-sm-12 col-md-4>\n\n							<input type="text" class="form-control--lg" disabled name="" [(ngModel)]="bill.payment_rest" value="0" placeholder="Kembalian">				\n\n						</ion-col>\n\n					</ion-row>\n\n\n\n					<ion-row class="center">\n\n						<ion-col col-12 col-xs-12 col-sm-12 col-md-12 *ngIf="payment_method == 1">\n\n							<div class="row center" style="margin-bottom: 10px;">\n\n								<div class="col-xs-7">\n\n									  <ion-segment color="main">\n\n									    <ion-segment-button color="main" value="numpad" [ngClass]="{\'segment-activated\':numpad_type == \'numpad\'}" (click)="numpad_type = \'numpad\' ">\n\n									      Manual\n\n									    </ion-segment-button>\n\n									    <ion-segment-button color="main" value="suggest" [ngClass]="{\'segment-activated\':numpad_type == \'suggest\'}" (click)="numpad_type = \'suggest\' ">\n\n									      Suggest bayar\n\n									    </ion-segment-button>\n\n									  </ion-segment>\n\n								</div>\n\n							</div>\n\n\n\n							<div>\n\n								<div class="row center" *ngIf="numpad_type == \'numpad\'">\n\n									<div id="container" class="center">\n\n									    <div class="numpad">\n\n									    	<div class="numpad-col numpad-number">\n\n												<div class="numpad-key bg-main" color="main" value="1" (click)="calculate($event, \'numeric\', \'1\')" rel="1">1</div>\n\n												<div class="numpad-key bg-main" color="main" value="2" (click)="calculate($event, \'numeric\', \'2\')" rel="2">2</div>\n\n												<div class="numpad-key bg-main" color="main" value="3" (click)="calculate($event, \'numeric\', \'3\')" rel="3">3</div>\n\n									    		<div class="numpad-key bg-main" color="main" value="4" (click)="calculate($event, \'numeric\', \'4\')" rel="4">4</div>\n\n											    <div class="numpad-key bg-main" color="main" value="5" (click)="calculate($event, \'numeric\', \'5\')" rel="5">5</div>\n\n											    <div class="numpad-key bg-main" color="main" value="6" (click)="calculate($event, \'numeric\', \'6\')" rel="6">6</div>\n\n											    <div class="numpad-key bg-main" color="main" value="7" (click)="calculate($event, \'numeric\', \'7\')" rel="7">7</div>\n\n												<div class="numpad-key bg-main" color="main" value="8" (click)="calculate($event, \'numeric\', \'8\')" rel="8">8</div>\n\n												<div class="numpad-key bg-main" color="main" value="9" (click)="calculate($event, \'numeric\', \'9\')" rel="9">9</div>\n\n												<div class="numpad-key bg-main" color="main" value="," (click)="calculate($event, \'numeric\', \',\')" rel=",">,</div>\n\n												<div class="numpad-key bg-main" color="main" value="0" (click)="calculate($event, \'numeric\', \'0\')" rel="0">0</div>\n\n									      		<div class="numpad-key bg-main" color="main" value="C" (click)="calculate($event, \'action\', \'clear\')" rel="0">C</div>\n\n									    	</div>\n\n									    	<div class="numpad-col numpad-action">\n\n										      <div class="numpad-key bg-main" color="main" value="rm" (click)="calculate($event, \'action\', \'rm\')" rel="rm" style="font-size: 1.7em;"> <ion-icon name="backspace"></ion-icon> </div>\n\n										      <div class="numpad-key bg-main" color="main" value="pas" (click)="calculate($event, \'action\', \'pas\')" rel="pas" style="font-size: 1.3em;"> uang Pas </div>\n\n										      <div class="numpad-key bg-main" color="main" value="simpan" (click)="calculate($event, \'action\', \'simpan\')" rel="pas" style="font-size: 1.3em; flex-grow: 1;"> Bayar </div>\n\n										      \n\n									    		\n\n									    	</div>\n\n									      \n\n									    </div>\n\n									</div>\n\n								</div>\n\n									\n\n								<div class="row center" *ngIf="numpad_type == \'suggest\'">\n\n									<div class="col-md-8">\n\n										\n\n										<div class="center" style="flex-wrap: wrap;">\n\n											<button color="main" class="btn-numpad-suggest" ion-button (click)="calculate($event, \'value\', \'10000\')"> 10.000</button>\n\n											<button color="main" class="btn-numpad-suggest" ion-button (click)="calculate($event, \'value\', \'20000\')"> 20.000</button>\n\n											<button color="main" class="btn-numpad-suggest" ion-button (click)="calculate($event, \'value\', \'30000\')"> 30.000</button>\n\n											<button color="main" class="btn-numpad-suggest" ion-button (click)="calculate($event, \'value\', \'50000\')"> 50.000</button>\n\n											<button color="main" class="btn-numpad-suggest" ion-button (click)="calculate($event, \'value\', \'70000\')"> 70.000</button>\n\n											<button color="main" class="btn-numpad-suggest" ion-button (click)="calculate($event, \'value\', \'100000\')"> 100.000</button>\n\n											<button color="main" class="btn-numpad-suggest" ion-button (click)="calculate($event, \'value\', \'150000\')"> 150.000</button>\n\n											<button color="main" class="btn-numpad-suggest" ion-button (click)="calculate($event, \'value\', \'200000\')"> 200.000</button>\n\n											<button color="main" class="btn-numpad-suggest" ion-button (click)="calculate($event, \'value\', \'500000\')"> 500.000</button>\n\n										</div>\n\n										<div class="center" style="flex-wrap: wrap;">\n\n											<button color="main" class="btn-numpad-suggest" ion-button (click)="calculate($event, \'substract\', \'10000\')"> -10.000</button>\n\n											<button color="main" class="btn-numpad-suggest" ion-button (click)="calculate($event, \'sum\', \'10000\')"> +10.000</button>\n\n										</div>\n\n										\n\n									</div>\n\n								</div>\n\n							</div>\n\n						</ion-col>\n\n						<ion-col col-8 col-xs-12 col-sm-12 col-md-8 *ngIf="payment_method == 3">\n\n							\n\n						\n\n							<ion-row class="row form-group">\n\n								<ion-col col-3 class="">Total Belanja</ion-col>\n\n								<ion-col col-9 class=" input-box">\n\n									<input type="text" class="form-control--lg" name="" [(ngModel)]="bill.payment_total">\n\n								</ion-col>\n\n							</ion-row>\n\n							<ion-row class="form-group">\n\n								<ion-col col-3 class="">Tunai</ion-col>\n\n								<ion-col col-9 class=" input-box">\n\n									<input type="text" class="form-control--lg" name="" [(ngModel)]="bill.payment_nominal" (input)="sumReturn()">\n\n								</ion-col>\n\n							</ion-row>\n\n\n\n							<ion-row class="form-group">\n\n								<ion-col col-3 class="">Kartu (Masuk ke)</ion-col>\n\n								<ion-col col-9 class=" input-box input-group">\n\n									<input type="text" class="form-control--lg" name="" >\n\n									<span class="input-group-addon" id="basic-addon1"> Edit </span>\n\n								</ion-col>\n\n							</ion-row>\n\n							\n\n							<ion-row class="row form-group">\n\n								<ion-col col-3 class="">Charge</ion-col>\n\n								<ion-col col-9 class=" input-box input-group">\n\n									<input type="" class="form-control--lg form-control" name="" style="width: 18%;" [(ngModel)]="bill.payment_bank_charge_percent" (input)="countChargePercent($event)">\n\n									<span class="input-group-addon" id="basic-addon1"> % </span>\n\n									<input type="" class="form-control--lg form-control" name="" [(ngModel)]="bill.payment_bank_charge_nominal" (input)="countChargeNominal()">\n\n								</ion-col>\n\n							</ion-row>\n\n							\n\n							<ion-row class="form-group">\n\n								<ion-col col-3 class="">Kartu</ion-col>\n\n								<ion-col col-9 class=" input-box">\n\n									<input type="text" class="form-control--lg" name="" readonly [(ngModel)]="bill.paid_with_bank_nominal">\n\n								</ion-col>\n\n							</ion-row>\n\n							\n\n\n\n							<ion-row class="row form-group center">\n\n									<button ion-button block end color="main" (click)="payBill()">Bayar</button>\n\n\n\n							</ion-row>\n\n						\n\n						</ion-col>\n\n\n\n						<ion-col col-8 col-xs-12 col-sm-12 col-md-8 *ngIf="payment_method == 2">\n\n							<ion-row class="row form-group">\n\n								<ion-col col-3 class="">Total Belanja</ion-col>\n\n								<ion-col col-9 class=" input-box input-group">\n\n									<span class="input-group-addon" id="basic-addon1">@</span>\n\n									<input type="text" class="form-control form-control--lg" name="" [(ngModel)]="bill.payment_total">\n\n								</ion-col>\n\n							</ion-row>\n\n							<ion-row class="form-group">\n\n								<ion-col col-3 class="">Masuk ke</ion-col>\n\n								<ion-col col-9 class=" input-box input-group">\n\n									<input type="text" class="form-control--lg" name="" >\n\n									<span class="input-group-addon" id="basic-addon1"> Edit </span>\n\n								</ion-col>\n\n							</ion-row>\n\n							\n\n							<ion-row class="row form-group">\n\n								<ion-col col-3 class="">Charge</ion-col>\n\n								<ion-col col-9 class=" input-box input-group">\n\n									<input type="" class="form-control--lg form-control" name="" style="width: 18%;" [(ngModel)]="bill.payment_bank_charge_percent" (input)="countChargePercent($event)">\n\n									<span class="input-group-addon" id="basic-addon1"> % </span>\n\n									<input type="" class="form-control--lg form-control" name="" [(ngModel)]="bill.payment_bank_charge_nominal" (input)="countChargeNominal()">\n\n								</ion-col>\n\n							</ion-row>\n\n\n\n							<ion-row class="form-group">\n\n								<ion-col col-3 class="">Total</ion-col>\n\n								<ion-col col-9 class=" input-box">\n\n									<input type="text" readonly class="form-control--lg" name="" [(ngModel)]="bill.paid_with_bank_nominal">\n\n								</ion-col>\n\n							</ion-row>\n\n\n\n							<ion-row class="row form-group center">\n\n									<button ion-button block end color="main" (click)="payBill()">Bayar</button>\n\n\n\n							</ion-row>\n\n						</ion-col>\n\n\n\n					</ion-row>\n\n\n\n				\n\n				</div> <!--  End of payment method -->\n\n			</ion-col>\n\n		</ion-row>\n\n	</ion-grid>\n\n	<div class="r" *ngIf="state == \'afterPayment\'">\n\n		<div class="text-align--center">\n\n			<ion-icon ios="ios-print" md="ios-print" color="main" style="font-size: 10.5em;"></ion-icon>\n\n		</div>\n\n		<div class="text-align--center row" style="margin-top: 25px; ">\n\n				\n\n			<div class="text-align--center col-xs-7" style="display: flex; flex-direction: column; justify-content: space-around; align-items: center; margin:auto;">\n\n				<button ion-button block color="main" (click)="print_nota()">Cetak nota</button>\n\n				<button ion-button block color="secondary" (click)="email_panel()">Kirimkan nota ke email</button>\n\n				<button ion-button block (click)="back_to_cashier()">Kembali ke kasir</button>\n\n			</div>\n\n\n\n		</div>\n\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\payment\payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_db_local_db_local__["a" /* DbLocalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_3__providers_helper_helper__["a" /* HelperProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_bill_bill__["a" /* BillProvider */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_db_local_db_local__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__payment_payment__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_product__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__split_bill_split_bill__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_bill_bill__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bill_item_editor_bill_item_editor__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_helper_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jquery__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/*
* Generated class for the TransactionPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var TransactionPage = (function () {
    function TransactionPage(billProvider, actionSheetCtrl, alertCtrl, navCtrl, navParams, dbLocalProvider, helper, config, loadingCtrl) {
        this.billProvider = billProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbLocalProvider = dbLocalProvider;
        this.helper = helper;
        this.config = config;
        this.loadingCtrl = loadingCtrl;
        this.items = [];
        this.original_items = [];
        this.filter_by = "visitor_name";
        this.order_by = 'payment_date DESC';
        this.filter_input = '';
        this.payment_status = -1;
        this.filter_date_start = __WEBPACK_IMPORTED_MODULE_11_moment__().format('MM/DD/YYYY');
        this.filter_date_end = __WEBPACK_IMPORTED_MODULE_11_moment__().format('MM/DD/YYYY');
        this.edit_transaction_status = false;
        this.page_params = {
            action: 'default',
            toggleSearchInput: false,
            toggleFilter: false
        };
        this.transaction_params = { data: { limit: 20, page: 1 } };
        this.outlet = this.helper.local.get_params(this.helper.config.variable.credential).data.outlet_id;
        var dataFetch = {
            online: true,
            infinite: false,
            data: {
                limit: 20,
                outlet: this.outlet,
                page: 1,
                join: ['table', 'discount'],
                fields: "pay_id,users_outlet,table_id,bank_id,discount_id,payment_method,outlet,payment_nominal,payment_date,visitor_name,payment_date_only,payment_bills,tax_percent,tax_nominal,paid_date,payment_total,paid_nominal,paid_with_bank_nominal,payment_complement_status,payment_complement_note,orders,table_name,payment_rest,discount_name,discount_percent,discount_nominal,payment_cancel_status,payment_cancel_note,reference_counter"
            }
        };
        if (this.navParams.data.body) {
            if (this.navParams.data.today == true) {
                this.navParams.data.body.where['payment_date_only'] = __WEBPACK_IMPORTED_MODULE_11_moment__().format('YYYY-MM-DD');
                this.payment_status = 0;
                this.filter_by = 'payment_date';
            }
            dataFetch.data = Object.assign(dataFetch.data, this.navParams.data.body);
            // this.get_transaction(dataFetch);
        }
        this.transaction_params = dataFetch;
        this.filter_transaction();
        if (this.navParams.data.page_params) {
            this.update_page_parameters(this.navParams.data.page_params);
        }
    }
    TransactionPage.prototype.ionViewDidLoad = function () {
    };
    TransactionPage.prototype.update_page_parameters = function (data) {
        if (data === void 0) { data = {}; }
        this.page_params = Object.assign(this.page_params, data);
    };
    TransactionPage.prototype.get_transaction = function (data) {
        var _this = this;
        if (data === void 0) { data = { data: {} }; }
        var loadingData = this.loadingCtrl.create({
            content: "Silahkan tunggu"
        });
        loadingData.present();
        this.transaction_params = data;
        var url = this.config.base_url('admin/outlet/transaction/get');
        return __WEBPACK_IMPORTED_MODULE_10_jquery__["post"](url, data.data)
            .done(function (res) {
            res = !_this.helper.isJSON(res) ? res : JSON.parse(res);
            if (res.code == 200) {
                if (data.infinite == true) {
                    _this.items = _this.items.concat(res.data);
                    _this.original_items = _this.original_items.concat(res.data);
                }
                else {
                    _this.items = res.data;
                    _this.original_items = res.data;
                }
            }
            else {
                alert('Error occured while fetching data transaction!');
            }
        })
            .always(function () {
            loadingData.dismiss();
        });
    };
    TransactionPage.prototype.product_sort = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Urutkan berdasarkan',
            buttons: [
                {
                    text: 'Nama costumer',
                    handler: function () {
                        _this.filter_by = "visitor_name";
                        _this.filter_transaction();
                    }
                }, {
                    text: 'Nomor nota',
                    handler: function () {
                        _this.filter_by = "pay_id";
                        _this.filter_transaction();
                    }
                }, {
                    text: 'Tanggal pembelian',
                    handler: function () {
                        _this.filter_by = "payment_date";
                        _this.filter_transaction();
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        // actionSheet.dismiss();
                    }
                }
            ]
        });
        actionSheet.present();
    };
    TransactionPage.prototype.infinite_scroll = function (ev) {
        var _this = this;
        if (ev === void 0) { ev = {}; }
        this.transaction_params.data.page += 1;
        this.transaction_params.infinite = true;
        this.get_transaction(this.transaction_params)
            .then(function () {
            if (_this.transaction_params.infinite == true && ev.complete) {
                ev.complete();
            }
        });
    };
    TransactionPage.prototype.search_transaction = function (ev) {
        if (ev === void 0) { ev = {}; }
        var val = this.filter_input;
        var character_length = 4;
        if (val && val.length < character_length) {
            return false;
        }
        this.filter_transaction();
    };
    TransactionPage.prototype.filter_transaction = function (ev) {
        if (ev === void 0) { ev = {}; }
        var exclude_to_filter_input = ['table_name', 'visitor_name', 'pay_id'];
        var val = this.filter_input;
        if (val && exclude_to_filter_input.indexOf('this.filter_by') > -1) {
            return false;
        }
        this.transaction_params.data.where = {};
        this.transaction_params.data.like = [];
        this.transaction_params.infinite = false;
        this.transaction_params.data.page = 1;
        if (val && val.trim() != '') {
            if (this.filter_by == 'visitor_name') {
                this.transaction_params.data.like = [[this.filter_by, val]];
                delete this.transaction_params.data.where[this.filter_by];
            }
            else {
                this.transaction_params.data.where[this.filter_by] = val;
                delete this.transaction_params.data.like;
            }
        }
        if (this.filter_by == 'payment_date') {
            this.transaction_params.data.like = [[this.filter_by, __WEBPACK_IMPORTED_MODULE_11_moment__().format("YYYY-MM-DD")]];
        }
        this.transaction_params.data.where['payment_complement_status'] = this.payment_status;
        if (this.payment_status < 0) {
            delete this.transaction_params.data.where['payment_complement_status'];
        }
        this.transaction_params.data.order_by = this.order_by;
        this.get_transaction(this.transaction_params)
            .then(function () {
        });
    };
    TransactionPage.prototype.edit_transaction = function (i, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__payment_payment__["a" /* PaymentPage */], {
            previous: 'transaction-page',
            event: 'transaction.edit',
            trigger_event: 'transaction.edit',
            bill: item,
            receipt_page_params: {
                can_edit_slide_item: false
            }
        });
    };
    TransactionPage.prototype.pay_transaction = function (i, item) {
        item = Object.assign({}, item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__product_product__["a" /* ProductPage */], {
            previous: 'transaction-page',
            event: 'transaction.edit',
            trigger_event: 'product.pay',
            bill: item,
            receipt_page_params: {
                can_edit_slide_item: true
            }
        });
    };
    TransactionPage.prototype.info_transaction = function (index, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__bill_item_editor_bill_item_editor__["a" /* BillItemEditorPage */], {
            bill: item, index: index,
            receipt_page_params: {
                can_edit_slide_item: false,
                can_edit_bill_total: false,
                can_edit_table: true, can_edit_visitor_name: true
            }
        });
    };
    TransactionPage.prototype.default_click_transaction = function (index, item) {
        if (!this.navParams.data.event) {
            this.info_transaction(index, item);
        }
        else {
            this.pay_transaction(index, item);
        }
    };
    TransactionPage.prototype.transform_date = function (date) {
        return __WEBPACK_IMPORTED_MODULE_11_moment__(date).format('HH:mm - YYYY MMM DD');
    };
    TransactionPage.prototype.cancel_transaction = function (index, item) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Success',
            subTitle: 'Orderan telah dibatalkan',
            buttons: ['OK']
        });
        var alertGagal = this.alertCtrl.create({
            title: 'Kesalahan',
            subTitle: 'Terdapat kesalahan saat membatalkan order. Silahkan dicoba kembali!',
            buttons: ['OK']
        });
        var prompt = this.alertCtrl.create({
            title: 'Batalkan pesanan',
            message: "Silahkan isikan alasan",
            inputs: [
                {
                    name: 'cancel_note',
                    placeholder: 'Alasan pembatalan'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        // console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        var loading = _this.helper.loadingCtrl.create({
                            content: 'Silahkan tunggu'
                        });
                        loading.present();
                        _this.billProvider.cancel_bill(item.pay_id, data.cancel_note)
                            .then(function (res) {
                            res = !_this.helper.isJSON(res) ? res : JSON.parse(res);
                            if (res.code == 200) {
                                alert.present();
                            }
                            else {
                                alertGagal.present();
                            }
                        })
                            .fail(function () {
                            alertGagal.present();
                        })
                            .always(function () {
                            loading.dismiss();
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    TransactionPage.prototype.advanceOptions = function (index, item) {
        var _this = this;
        if (item.payment_nominal <= 0 && item.payment_cancel_status == 0) {
            this.actionSheetCtrl.create({
                title: 'Opsi lanjutan',
                buttons: [
                    {
                        text: 'Gabungkan Nota',
                        handler: function () {
                            // this.filter_transaction()
                        }
                    }, {
                        text: 'Pisahkan Nota',
                        handler: function () {
                            _this.splitBill(index, item);
                        }
                    }, {
                        text: 'Lihat Detail Transaksi',
                        handler: function () {
                            _this.info_transaction(index, item);
                        }
                    }
                ]
            }).present();
        }
        else if (item.payment_nominal > 0 && item.payment_cancel_status == 0) {
            this.actionSheetCtrl.create({
                title: 'Opsi lanjutan',
                buttons: [
                    {
                        text: 'Lihat Detail Transaksi',
                        handler: function () {
                            _this.info_transaction(index, item);
                        }
                    }
                ]
            }).present();
        }
    };
    TransactionPage.prototype.splitBill = function (index, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__split_bill_split_bill__["a" /* SplitBillPage */], {
            index: index, bill: item,
            receipt_page_params: {
                can_edit_slide_item: false,
                can_edit_bill_total: false,
                can_edit_table: false, can_edit_visitor_name: false,
                show_footer: false,
                show_split_arrow: true
            }
        });
    };
    TransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transaction',template:/*ion-inline-start:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\transaction\transaction.html"*/'<!--\n\n  Generated template for the StocksPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  	<ion-toolbar color="main">\n\n	  	<ion-navbar>\n\n	  		<ion-title>Transaksi</ion-title>\n\n	  		<button ion-button menuToggle>\n\n	  			<ion-icon name="menu"></ion-icon>\n\n	  		</button>\n\n			<ion-searchbar *ngIf="page_params.toggleSearchInput" class="searchbar-toolbar" (ionInput)="filter_transaction()" [(ngModel)]="filter_input" style="padding: 0px 5px; width:40%;"></ion-searchbar>\n\n			<ion-buttons class="center distributed">\n\n				<button ion-button icon-only color="light" (click)="page_params.toggleSearchInput=!page_params.toggleSearchInput">\n\n					<ion-icon name="search" *ngIf="!page_params.toggleSearchInput"></ion-icon>\n\n					<ion-icon name="close" *ngIf="page_params.toggleSearchInput"></ion-icon>\n\n				</button>\n\n			</ion-buttons>\n\n			<ion-buttons>\n\n				<button ion-button clear icon-right color="light" (click)="page_params.toggleFilter = !page_params.toggleFilter">\n\n				  Sort <ion-icon name="funnel"></ion-icon>\n\n				</button>\n\n			</ion-buttons>\n\n		</ion-navbar>\n\n	</ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding>\n\n	<div *ngIf="!edit_transaction_status">\n\n		<div>				\n\n			<ion-row>\n\n				<ion-col col-xs-8 col-sm-8 col-md-8 col-lg-8>\n\n				</ion-col>\n\n				<!-- <ion-col col-xs-4 col-sm-4 col-md-4 col-lg-4 *ngIf="filter_by == \'payment_date\' ">\n\n					<ion-item>\n\n				    <ion-datetime displayFormat="MM/DD/YYYY"  [(ngModel)]="filter_date_start"></ion-datetime>\n\n				  </ion-item>\n\n				</ion-col>\n\n				\n\n				<ion-col col-xs-4 col-sm-4 col-md-4 col-lg-4 *ngIf="filter_by == \'payment_date\' ">\n\n					<ion-item>\n\n				    	<ion-datetime displayFormat="MM/DD/YYYY"  [(ngModel)]="filter_date_end"></ion-datetime>\n\n				  	</ion-item>\n\n				</ion-col> -->\n\n\n\n			</ion-row>\n\n\n\n			<ion-row *ngIf="page_params.toggleFilter">\n\n				\n\n				<ion-col col-xs-3 col-sm-3 col-md-3 col-lg-3>\n\n					<ion-item>\n\n						<ion-label>Cari berdasarkan</ion-label>\n\n						<ion-select [(ngModel)]="filter_by" (ionChange)="filter_transaction()" interface="action-sheet">\n\n							<ion-option value="visitor_name">Nama</ion-option>\n\n							<ion-option value="pay_id">No Nota</ion-option>\n\n							<ion-option value="table_name">Nama Meja</ion-option>\n\n							<ion-option value="payment_date">Hari ini</ion-option>\n\n						</ion-select>\n\n					</ion-item>\n\n				</ion-col>\n\n				<ion-col col-xs-3 col-sm-3 col-md-3 col-lg-3>\n\n					<ion-item>\n\n						<ion-label>Urutkan</ion-label>\n\n						<ion-select [(ngModel)]="order_by" (ionChange)="filter_transaction()" interface="action-sheet">\n\n							<ion-option value="pay_id DESC">No Nota</ion-option>\n\n							<ion-option value="visitor_name DESC">Nama (Z-A) </ion-option>\n\n							<ion-option value="visitor_name ASC">Nama (A-Z) </ion-option>\n\n							<ion-option value="payment_date DESC">Tanggal</ion-option>\n\n						</ion-select>\n\n					</ion-item>\n\n				</ion-col>\n\n				<ion-col col-xs-3 col-sm-3 col-md-3 col-lg-3>\n\n					<ion-item>\n\n						<ion-label>Status</ion-label>\n\n						<ion-select [(ngModel)]="payment_status" (ionChange)="filter_transaction()" interface="action-sheet">\n\n							<ion-option value="-1">Semua</ion-option>\n\n							<ion-option value="0">Belum Dibayar</ion-option>\n\n							<ion-option value="1">Dibayar</ion-option>\n\n						</ion-select>\n\n					</ion-item>\n\n				</ion-col>\n\n\n\n\n\n				\n\n\n\n			</ion-row>\n\n\n\n		</div>\n\n		<ion-list>\n\n			<ion-item-sliding *ngFor="let item of items; let i = index">\n\n\n\n				<ion-item (click)="default_click_transaction(i, item)" (press)="advanceOptions(i, item)">\n\n						<span>{{transform_date(item.payment_date)}}</span> &middot;\n\n					<span style="font-weight:700; ">\n\n						{{item.visitor_name}}\n\n					</span>\n\n					<p style="margin-top: 10px;">\n\n						<span> Nota {{item.pay_id}} &middot;</span>\n\n						<span *ngIf="!item.table_name"> Tidak memilih meja &middot;</span> \n\n						<span *ngIf="item.table_name"> {{item.table_name}} &middot;</span> \n\n						<span> Rp.{{helper.intToIDR(item.payment_total)}} &middot;</span>\n\n						<span *ngIf="item.payment_nominal > 0 && item.payment_cancel_status == 0" class="bs-label label-success"> Terbayar </span>\n\n						<span *ngIf="item.payment_nominal < 1 && item.payment_cancel_status == 0" class="bs-label label-warning"> Belum Dibayar </span>\n\n						<span *ngIf="item.payment_cancel_status == 1" class="bs-label label-danger"> Pembayaran Dibatalkan </span>\n\n			      	<!-- {{item.payment_nominal + item.paid_with_bank_nominal}} -->\n\n					</p>\n\n					<p>\n\n						\n\n					</p>\n\n					<ion-icon name="done-all" *ngIf="item.payment_nominal > 0 && item.payment_cancel_status == 0" color="primary" item-end></ion-icon>\n\n					<ion-icon name="alert" *ngIf="item.payment_nominal < 1 && item.payment_cancel_status == 0" color="warning" item-end></ion-icon>\n\n					<ion-icon name="trash" *ngIf="item.payment_cancel_status == 1" color="danger" item-end></ion-icon>\n\n				</ion-item>\n\n				\n\n				<ion-item-options side="right">\n\n			      	\n\n					<button ion-button color="primary" class="center distributed" *ngIf=" helper.IDRtoInt(item.payment_nominal) + helper.IDRtoInt(item.paid_with_bank_nominal) < helper.IDRtoInt(item.payment_total) && item.payment_cancel_status == 0" (click)="pay_transaction(i, item)"> \n\n						<ion-icon name="logo-usd" style="padding:0px 10px; font-size:1.2em;"></ion-icon>\n\n					</button>\n\n					<button ion-button color="secondary" class="center distributed" *ngIf="page_params.action==\'edit\' || item.payment_nominal + item.paid_with_bank_nominal >= item.payment_total" (click)="edit_transaction(i, item)">\n\n						<ion-icon name="create" style="padding:0px 10px; font-size:1.2em;"></ion-icon>\n\n					</button>\n\n					<button ion-button color="danger" class="center distributed" (click)="cancel_transaction(i, item)" *ngIf="item.payment_cancel_status == 0">\n\n						<ion-icon name="trash" style="padding:0px 10px; font-size:1.2em;"></ion-icon>\n\n					</button>\n\n			    </ion-item-options>\n\n			</ion-item-sliding>\n\n			<ion-item *ngIf="items.length < 1" class="text-align--center">\n\n				Tidak ditemukan transaksi\n\n			</ion-item>\n\n\n\n		</ion-list>\n\n		<ion-infinite-scroll (ionInfinite)="infinite_scroll($event)">\n\n		   <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n		</ion-infinite-scroll>\n\n	</div>\n\n	<div *ngIf="edit_transaction_status">\n\n\n\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\mobile\folarpos_outlet\src\pages\transaction\transaction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_bill_bill__["a" /* BillProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_db_local_db_local__["a" /* DbLocalProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_helper_helper__["a" /* HelperProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], TransactionPage);
    return TransactionPage;
}());

//# sourceMappingURL=transaction.js.map

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelperProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_db_local_db_local__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_printer_service_printer_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_http__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_ai_remote_ai_remote__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_html2canvas__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_html2canvas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_html2canvas__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/*
  Generated class for the HelperProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HelperProvider = (function () {
    function HelperProvider(http, config, toast, alertCtrl, loadingCtrl, local, storage, actionSheet, events, popoverCtrl, platform, printer, ajax, airemote) {
        var _this = this;
        this.http = http;
        this.config = config;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.local = local;
        this.storage = storage;
        this.actionSheet = actionSheet;
        this.events = events;
        this.popoverCtrl = popoverCtrl;
        this.platform = platform;
        this.printer = printer;
        this.ajax = ajax;
        this.airemote = airemote;
        this.$ = __WEBPACK_IMPORTED_MODULE_9_jquery__;
        this.moment = __WEBPACK_IMPORTED_MODULE_10_moment__;
        this.html2canvas = __WEBPACK_IMPORTED_MODULE_11_html2canvas__;
        this.defaultTimeout = 100;
        this.win = window;
        console.log('Hello HelperProvider Provider');
        this.platform.ready().then(function () {
            if (_this.win.cordova && !_this.win.DatecsPrinter) {
                console.warn("DatecsPrinter plugin is missing. Have you installed the plugin? \nRun 'cordova plugin add cordova-plugin-datecs-printer'");
            }
        });
    }
    /*
      Source
      - https://faisalman.com/2012/02/27/konversi-angka-ke-format-rupiah-di-javascript/
    */
    HelperProvider.prototype.intToIDR = function (angka) {
        var rev = parseInt(angka, 10).toString().split('').reverse().join('');
        var rev2 = '';
        for (var i = 0; i < rev.length; i++) {
            rev2 += rev[i];
            if ((i + 1) % 3 === 0 && i !== (rev.length - 1)) {
                rev2 += '.';
            }
        }
        return rev2.split('').reverse().join('');
    };
    HelperProvider.prototype.nativeWindow = function () {
        return window;
    };
    HelperProvider.prototype.IDRtoInt = function (angka) {
        angka = angka ? angka.toString() : '0';
        return parseInt(angka.replace(/,.*|\D/g, ''), 10);
    };
    HelperProvider.prototype.isJSON = function (str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return { status: true, result: JSON.parse(str) };
    };
    HelperProvider.prototype.nominalToPercent = function (nominal, total) {
        return ((nominal / total) * 100).toFixed(1);
    };
    HelperProvider.prototype.percentToNominal = function (percent, total) {
        return total * (percent / 100);
    };
    HelperProvider.prototype.toInt = function (text) {
        return parseInt(text);
    };
    HelperProvider.prototype.clone_object = function (data) {
        return Object.assign({}, data);
    };
    HelperProvider.prototype.html_encode = function (value) {
        return __WEBPACK_IMPORTED_MODULE_9_jquery__('<div/>').text(value).html();
    };
    HelperProvider.prototype.html_decode = function (value) {
        return __WEBPACK_IMPORTED_MODULE_9_jquery__('<div/>').html(value).text();
    };
    HelperProvider.prototype.get_initial_outlet_name = function (name, join) {
        if (join === void 0) { join = null; }
        var nameArr = name.replace(/[^A-Za-z0-9]/g, ' ').split(' ');
        var initialName = [];
        __WEBPACK_IMPORTED_MODULE_9_jquery__["each"](nameArr, function (i, val) {
            initialName.push(val[0]);
        });
        if (join) {
            return initialName.join(join);
        }
        return initialName;
    };
    HelperProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_db_local_db_local__["a" /* DbLocalProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__providers_printer_service_printer_service__["a" /* PrinterServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_8__providers_ai_remote_ai_remote__["a" /* AiRemoteProvider */]])
    ], HelperProvider);
    return HelperProvider;
}());

//# sourceMappingURL=helper.js.map

/***/ })

},[390]);
//# sourceMappingURL=main.js.map