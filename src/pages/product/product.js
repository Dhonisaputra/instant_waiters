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
import { App, IonicPage, NavController, NavParams, MenuController, Events, ModalController, LoadingController, AlertController, ActionSheetController, PopoverController } from 'ionic-angular';
import { ReceiptPage } from '../receipt/receipt';
import { PaymentPage } from '../payment/payment';
import { TransactionPage } from '../transaction/transaction';
import { DetailStockPage } from '../detail-stock/detail-stock';
import { TooltipProductPage } from '../tooltip-product/tooltip-product';
import { ProductProvider } from '../../providers/product/product';
import { BillProvider } from '../../providers/bill/bill';
import { DbLocalProvider } from '../../providers/db-local/db-local';
import { HelperProvider } from '../../providers/helper/helper';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import * as moment from 'moment';
/**
* Generated class for the ProductPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var ProductPage = /** @class */ (function () {
    function ProductPage(appCtrl, navCtrl, navParams, events, productProvider, billProvider, modalCtrl, localNotifications, dbLocalProvider, helper, loadingCtrl, alertCtrl, actionSheetCtrl, popoverController, screenOrientation, menuController) {
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
        this.screenOrientation = screenOrientation;
        this.menuController = menuController;
        this.searchinput = false;
        this.unpaid_bill_length = 0;
        this.filter_type_selected = 0;
        this.filter_product_name = '';
        this.filter_sort_product = '';
        this.filter_category_product = false;
        this.page_params = {
            use_temporary_data: false,
            product_width: {
                default: 6,
                xs: 6,
                sm: 4,
                md: 3
            }
        };
        this.paymentPage = PaymentPage;
        this.receipt = ReceiptPage;
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
                _this.appCtrl.getRootNav().push(PaymentPage);
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
    ProductPage.prototype.ionViewWillLeave = function () {
        this.menuController.enable(false, 'menu2');
        this.helper.events.unsubscribe('product:filter-type');
        if (this.helper.local.get_params(this.helper.config.variable.credential).outlet.outlet_roles_id == 3) {
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE)
                .catch(function () {
            });
        }
    };
    ProductPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.menuController.enable(true, 'menu2');
        var index;
        if (this.helper.local.get_params(this.helper.config.variable.credential).outlet.outlet_roles_id == 3) {
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT)
                .catch(function () {
            });
        }
        this.get_categories();
        this.helper.events.subscribe('product:filter-type', function (res) {
            _this.filter_category_product = res.item;
            _this.refresh_data();
        });
        this.helper.events.subscribe('transaction:refresh', function (res) {
            _this.get_unpaid_bill();
        });
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
                    _this.events.publish('bill.update', {});
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
        var variable = this.helper.local.get_params(this.helper.config.variable.credential);
        var loader = this.loadingCtrl.create({
            content: "Mengambil data. Silahkan tunggu",
        });
        loader.present();
        var data = { outlet: this.outlet };
        if (this.filter_sort_product != '') {
            data.order_by = this.filter_sort_product;
        }
        if (this.filter_category_product) {
            data.in = [['category_id', this.filter_category_product]];
        }
        if (this.filter_type_selected > 0) {
            var type_product = variable['type_product'];
            var indexTypeProduct = type_product.map(function (res) {
                return res.type;
            }).indexOf(this.filter_type_selected);
            var activeCategoriesProduct = type_product[indexTypeProduct];
            this.helper.local.set_params("activeCategoriesProduct", activeCategoriesProduct);
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
        this.helper.play('audio');
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
        this.navCtrl.push(TransactionPage, {
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
                payment_date_only: moment().format('YYYY-MM-DD'),
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
                                _this.appCtrl.getRootNav().push(PaymentPage);
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
                this.appCtrl.getRootNav().push(PaymentPage);
            }
        }
        // this.events.publish('get.data.receipt', {pay:true})
    };
    ProductPage.prototype.process_save_bill = function () {
        var _this = this;
        return this.billProvider.save({
            users_outlet: this.helper.local.get_params(this.helper.config.variable.credential).outlet.users_outlet_id,
            outlet: this.outlet,
            bank_id: 0,
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
                message: "Layanan printer bluetooth tidak tersedia untuk perangkat ini, sistem akan mencetak melalui printer biasa",
                buttons: ["OK"]
            }).present();
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
                                _this.billProvider.save({
                                    users_outlet: _this.helper.local.get_params(_this.helper.config.variable.credential).outlet.users_outlet_id,
                                    outlet: _this.outlet,
                                    bank_id: 0,
                                    payment_method: 1,
                                    payment_nominal: 0,
                                })
                                    .done(function (res) {
                                    res = JSON.parse(res);
                                    if (res.code == 200) {
                                        _this.process_print_bill()
                                            .then(function () {
                                            _this.events.publish('reset.data.receipt', {});
                                            _this.get_unpaid_bill();
                                            loadingPrint.dismiss();
                                        }, function () {
                                            loadingPrint.dismiss();
                                            _this.billProvider.set_bill(_this.billProvider.temp_bill);
                                        });
                                    }
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
                this.helper.local.set_params('temp_bill', this.billProvider.get_bill());
                this.process_save_bill()
                    .done(function (res) {
                    res = JSON.parse(res);
                    if (res.code == 200) {
                        _this.process_print_bill()
                            .then(function () {
                            _this.events.publish('reset.data.receipt', {});
                            _this.get_unpaid_bill();
                        }, function () {
                            _this.helper.alertCtrl.create({
                                title: "Kesalahan",
                                message: "Gagal Mencetak bill. coba lagi?",
                                buttons: [{
                                        handler: function () {
                                            _this.print_bill();
                                        },
                                        text: "Coba lagi"
                                    }, {
                                        text: "Batal",
                                        handler: function () {
                                            _this.billProvider.set_bill(_this.billProvider.temp_bill);
                                        }
                                    }]
                            }).present();
                        });
                    }
                    else {
                        _this.helper.alertCtrl.create({
                            title: "Kesalahan",
                            message: "Gagal tersambung kedalam sistem. Silahkan coba lagi!",
                            buttons: [{
                                    handler: function () {
                                        _this.print_bill();
                                    },
                                    text: "Coba lagi"
                                }, "Batal"]
                        }).present();
                    }
                });
            }
        }
    };
    ProductPage.prototype.process_print_bill = function () {
        var _this = this;
        var temp_bill_params = this.helper.local.get_params('temp_bill');
        var printer = this.helper.local.get_params(this.helper.config.variable.credential).outlet.printer;
        var printer_rule = this.helper.local.get_params(this.helper.config.variable.credential).outlet.printer_rule;
        var nota_printer = printer_rule.filter(function (res) {
            return res.printer_page_id == 5; //--> 5 is constanta from database;
        });
        var last_session = 0;
        if (temp_bill_params) {
            this.billProvider.set_bill(temp_bill_params);
            last_session = temp_bill_params.orders[temp_bill_params.orders.length - 1].order_session;
        }
        return new Promise(function (resolve, reject) {
            var temp_bill = Object.assign({}, temp_bill_params);
            _this.billProvider.temp_bill = temp_bill;
            var deff = _this.helper.$.Deferred();
            deff.resolve(last_session);
            _this.helper.$.when(deff.promise())
                .done(function (val) {
                var nbill = _this.billProvider.nota_bill_session(val);
                _this.billProvider.set_bill(nbill);
                if (nota_printer.length < 1) {
                    reject();
                    return false;
                }
                if (!_this.helper.printer.isAvailable()) {
                    _this.helper.alertCtrl.create({
                        title: "Kesalahan",
                        message: "Layanan printer tidak tersedia untuk perangkat ini",
                        buttons: ["OK"]
                    }).present();
                    reject();
                    return false;
                }
                /*if(!device || !device.address)
                {
                    this.helper.alertCtrl.create({
                        title: "Printer tidak ditemukan",
                        message: "Silahkan menuju settings dan pilih menu printer.",
                        buttons: ["OK"]
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
                _this.helper.local.opendb('printer_connected')
                    .then(function (device) {
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
        var modal = this.modalCtrl.create(DetailStockPage, item);
        modal.present();
    };
    ProductPage.prototype.product_sort = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Urutkan...',
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
        var popover = this.popoverController.create(TooltipProductPage, {
            zoom: this.product_zoom
        });
        popover.present({
            ev: ev,
        });
    };
    ProductPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-product',
            templateUrl: 'product.html',
        }),
        __metadata("design:paramtypes", [App,
            NavController,
            NavParams,
            Events,
            ProductProvider,
            BillProvider,
            ModalController,
            LocalNotifications,
            DbLocalProvider,
            HelperProvider,
            LoadingController,
            AlertController,
            ActionSheetController,
            PopoverController,
            ScreenOrientation,
            MenuController])
    ], ProductPage);
    return ProductPage;
}());
export { ProductPage };
//# sourceMappingURL=product.js.map