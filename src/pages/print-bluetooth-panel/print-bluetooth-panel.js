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
import { PrinterServiceProvider } from "../../providers/printer-service/printer-service";
import { HelperProvider } from "../../providers/helper/helper";
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
/**
 * Generated class for the PrintBluetoothPanelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrintBluetoothPanelPage = /** @class */ (function () {
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
        IonicPage(),
        Component({
            selector: 'page-print-bluetooth-panel',
            templateUrl: 'print-bluetooth-panel.html',
        }),
        __metadata("design:paramtypes", [BluetoothSerial, NavController, NavParams, HelperProvider, PrinterServiceProvider])
    ], PrintBluetoothPanelPage);
    return PrintBluetoothPanelPage;
}());
export { PrintBluetoothPanelPage };
//# sourceMappingURL=print-bluetooth-panel.js.map