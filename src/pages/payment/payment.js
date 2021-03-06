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
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { DbLocalProvider } from '../../providers/db-local/db-local';
import { HelperProvider } from '../../providers/helper/helper';
import { BillProvider } from '../../providers/bill/bill';
import { ProductPage } from '../product/product';
import { SendReceiptPage } from '../send-receipt/send-receipt';
import * as $ from "jquery";
/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentPage = /** @class */ (function () {
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
                    _this.navCtrl.setRoot(SendReceiptPage, { data: _this.latest_bill_id });
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
        this.navCtrl.setRoot(ProductPage, {
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
                                    _this.navCtrl.setRoot(ProductPage, {
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
        this.helper.html2canvas($('.receipt-product')[0])
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
        IonicPage(),
        Component({
            selector: 'page-payment',
            templateUrl: 'payment.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, DbLocalProvider, Events, HelperProvider, BillProvider])
    ], PaymentPage);
    return PaymentPage;
}());
export { PaymentPage };
//# sourceMappingURL=payment.js.map