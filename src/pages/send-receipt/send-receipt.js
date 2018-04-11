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
import { ProductPage } from "../product/product";
import { HelperProvider } from "../../providers/helper/helper";
import { BillProvider } from "../../providers/bill/bill";
/**
 * Generated class for the SendReceiptPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SendReceiptPage = /** @class */ (function () {
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
        this.navCtrl.setRoot(ProductPage, {
            previous: 'payment-page',
            event: 'payment.cashier',
            trigger_event: "order.new",
            message: "Nota telah dibayarkan"
        });
    };
    SendReceiptPage.prototype.process_print_nota = function (nota) {
        var _this = this;
        if (nota === void 0) { nota = null; }
        var printer = this.helper.local.get_params(this.helper.config.variable.credential).outlet.printer;
        var printer_rule = this.helper.local.get_params(this.helper.config.variable.credential).outlet.printer_rule;
        var nota_printer = printer_rule.filter(function (res) {
            return res.printer_page_id == 5; //--> 5 is constanta from database;
        });
        return new Promise(function (resolve, reject) {
            /*if( !this.helper.printer.isAvailable() )
            {
                this.helper.alertCtrl.create({
                    title: "Kesalahan",
                    message: "Layanan printer tidak tersedia untuk perangkat ini",
                    buttons:["OK"]
                }).present();
                reject();
                return false;
            }*/
            var group_printer = nota_printer[0].group_outlet_printer_id.split(',');
            _this.helper.$.each(group_printer, function (i, val) {
                var printer_filter = printer.filter(function (res) {
                    return res.outlet_printer_id == val;
                });
                // var t = this.billProvider.print_bill_wifi(printer_filter[0],'');
                if (printer_filter.length > 0) {
                    switch (printer_filter[0].outlet_printer_connect_with) {
                        case "wifi":
                            var t = _this.billProvider.print_bill_wifi(printer_filter[0], '');
                            _this.helper.printer.connectWifi(printer_filter[0].outlet_printer_address);
                            _this.helper.printer.printWifi(t);
                            _this.helper.printer.cutpaper();
                            resolve();
                            break;
                        case "bluetooth":
                            var t = _this.billProvider.print_bill('', printer_filter[0]);
                            _this.helper.printer.connect(printer_filter[0].outlet_printer_address)
                                .then(function () {
                                var el = _this.helper.$('.receipt');
                                setTimeout(function () {
                                    // let t = this.billProvider.print_bill(printer_filter[0]);
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
                            resolve();
                            break;
                        default:
                            // code...
                            reject();
                            break;
                    }
                }
                else {
                    reject();
                }
                /*this.helper.printer.connect(device.address)
                .then(()=>{

                    let el = this.helper.$('.receipt');
                    console.log(this.billProvider)
                    setTimeout( ()=>{
                        let t = this.billProvider.print_bill();
                        this.helper.printer.printText(t)
                        .then(()=>{
                            resolve()
                        }, ()=>{
                            reject();
                        })
                    }, 2000 ) // set timeout
                }, (err)=>{
                        reject()
                })*/
            });
            /*this.helper.local.opendb('printer_connected')
            .then((device)=>{
                console.log(device)
                if(!device || !device.address)
                {
                    this.helper.alertCtrl.create({
                        title: "Printer tidak ditemukan",
                        message: "Silahkan menuju settings dan pilih menu printer.",
                        buttons: ["OK"]
                    }).present();

                    return false;
                }
                this.helper.printer.connect(device.address)
                .then(()=>{

                    setTimeout( ()=>{
                        let t = this.billProvider.print_nota(nota);
                        this.helper.printer.printText(t)
                        .then(()=>{
                            resolve()
                        }, ()=>{
                            reject();
                        })
                    }, 2000 ) // set timeout
                })
            })*/
        }); // end of promise
    };
    SendReceiptPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-send-receipt',
            templateUrl: 'send-receipt.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, HelperProvider, BillProvider])
    ], SendReceiptPage);
    return SendReceiptPage;
}());
export { SendReceiptPage };
//# sourceMappingURL=send-receipt.js.map