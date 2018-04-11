var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { ConfigProvider } from '../../providers/config/config';
import { AlertController, Events, LoadingController } from 'ionic-angular';
import * as $ from "jquery";
import { DbLocalProvider } from '../../providers/db-local/db-local';
import * as moment from 'moment';
import { HelperProvider } from '../../providers/helper/helper';
/*
Generated class for the BillProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
var BillProvider = /** @class */ (function () {
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
        var item = this.helper.local.get_params(this.helper.config.variable.credential).outlet;
        var loader = this.loadingCtrl.create({
            content: "Memproses permintaan...",
        });
        loader.present();
        var alertData = this.alertCont.create({
            title: "Process gagal",
            message: "Terdapat kesalahan ketika menyimpan nota. Silahkan laporkan pengembang sistem.",
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
        return $.post(url, billdata)
            .done(function (res) {
            res = !_this.helper.isJSON(res) ? res : JSON.parse(res);
            if (res.code == 200) {
                _this.helper.airemote.send(item.outlet_id + '.app.cashier:new-order', '', { title: "Terdapat pesanan baru" }, function () { });
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
        return $.post(url, data)
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
            $('#receipt-product-' + item.id + '-' + event + ' .product-amount').addClass('pulse');
            setTimeout(function () {
                $('#receipt-product-' + item.id + '-' + event + ' .product-amount').removeClass('pulse');
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
            $('.receipt-product-' + item.product + '-' + event + ' .product-amount').addClass('pulse');
            setTimeout(function () {
                $('.receipt-product-' + item.product + '-' + event + ' .product-amount').removeClass('pulse');
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
        tax_nominal = tax_nominal ? parseInt(tax_nominal) : 0;
        discount_nominal = discount_nominal ? parseInt(discount_nominal) : 0;
        var order = this.get_bill_component('orders');
        console.log(this.bill);
        $.each(order, function (i, val) {
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
        // this.set_bill_component('orders', data.data);
        var orders = data.data || data.orders;
        this.set_bill_component('orders', orders);
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
        $.each(order_array, function (i, val) {
            _this.add_order_session(val);
        });
        if (create_new) {
            // create new session
            this.add_order_session();
        }
    };
    BillProvider.prototype.get_order_session_item = function (session) {
        if (session === void 0) { session = 0; }
        var a = this.get_bill_component('orders');
        return a.filter(function (res) {
            return res.order_session == session;
        });
    };
    BillProvider.prototype.add_order_session = function (data) {
        if (data === void 0) { data = {}; }
        this.bill.order_session = this.bill.order_session ? this.bill.order_session : [];
        data = Object.assign({ count: 0, timestamp: moment().unix() }, data);
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
        return $.post(url, billdata);
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
    BillProvider.prototype.nota_count_pricing = function (nota, reset) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        nota = Object.assign({}, nota);
        var discount_nominal = nota['discount_nominal'];
        var discount_percent = nota['discount_percent'];
        var discount_id = nota['discount_id'];
        var payment_total = 0;
        var payment_bills = 0;
        var tax_nominal = 0;
        if (!reset) {
            var payment_total_1 = nota['payment_total'];
            var payment_bills_1 = nota['payment_bills'];
            var tax_nominal_1 = nota['tax_nominal'];
        }
        tax_nominal = tax_nominal ? parseInt(tax_nominal) : 0;
        discount_nominal = discount_nominal ? parseInt(discount_nominal) : 0;
        var order = nota['orders'];
        $.each(order, function (i, val) {
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
        return nota;
    };
    BillProvider.prototype.nota_bill_session = function (session) {
        if (session === void 0) { session = 0; }
        var bill = this.get_order_session_item(session);
        bill = this.nota_count_pricing({ orders: bill });
        bill = Object.assign(this.get_bill(), bill);
        return bill;
    };
    BillProvider.prototype.nota_order_session = function (data) {
        return data.map(function (res) {
            // return
        });
    };
    BillProvider.prototype.print_bill_wifi = function (data_print, nota) {
        var _this = this;
        if (data_print === void 0) { data_print = {}; }
        if (nota === void 0) { nota = ''; }
        data_print.print_type = parseInt(data_print.print_type);
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
        var textPrintHeader = outletName + "\n" + outletAddress + "\n" + outletPhone + '' + divider + "" + visitor;
        var textPrint = textPrintHeader;
        if (b.member_id) {
            textPrint += "Member : " + initialName + '/000' + b.member_id + "\n";
        }
        textPrint += "" + divider;
        var conf_print = this.helper.printer.countConfiguration(this.helper.printer.print_type(data_print.print_type), 0);
        var data_item = [];
        $.each(orders, function (i, item) {
            var ditem = {
                qty: item.qty,
                name: item.name,
                price: _this.helper.intToIDR(item.price),
                totalPrice: _this.helper.intToIDR(item.price * item.qty)
            };
            textPrint += _this.helper.printer.convert(ditem, conf_print);
            /* if(item.complement_status > 0)
            {
                let kompl_item = item.complement_status > 0 && item.complement_item < item.qty? item.complement_item : '';
                textPrint += kompl_item+" komplimen\n";
            }
            if(this.helper.IDRtoInt(item.discount_nominal) > 0 && (this.helper.toInt(item.complement_status) != 1 || this.helper.toInt(item.complement_item) < this.helper.toInt(item.qty) ) )
            {
                textPrint += "Diskon "+ this.helper.toInt(item.discount_percent)+"% (-"+this.helper.intToIDR(item.discount_nominal)+") \n";
            }*/
        });
        textPrint += "________________\n";
        textPrint += "Total :      " + this.helper.intToIDR(this.get_bill_component('payment_total')) + "\n";
        textPrint += "\n\n Bila ada pelayanan/produk yang kurang \nberkenan, Hub. 0857 1272 2217 \nTerima Kasih\nPowered by folarpos.co.id\n";
        return textPrint;
    };
    BillProvider.prototype.print_bill = function (nota, data_print) {
        var _this = this;
        if (nota === void 0) { nota = ''; }
        if (data_print === void 0) { data_print = {}; }
        data_print.print_type = parseInt(data_print.print_type);
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
        var textPrintHeader = "{center}" + outletName + "\n{s}" + outletAddress + "\n" + outletPhone + "{s}" + divider + "{left}" + visitor;
        var textPrint = textPrintHeader;
        if (b.member_id) {
            textPrint += "Member : " + initialName + '/000' + b.member_id + "\n";
        }
        textPrint += "{left}" + divider;
        var conf_print = this.helper.printer.countConfiguration(this.helper.printer.print_type(data_print.print_type), 0);
        $.each(orders, function (i, item) {
            // textPrint += "{s}{left}"+item.qty+" "+item.name+" x "+this.helper.intToIDR(item.price)+"{/s}  {s}{b}"+this.helper.intToIDR(item.price * item.qty)+"{/b} {/s}{reset}\n";
            var ditem = {
                qty: item.qty,
                name: item.name,
                price: _this.helper.intToIDR(item.price),
                totalPrice: _this.helper.intToIDR(item.price * item.qty)
            };
            textPrint += "{s}" + _this.helper.printer.convert(ditem, conf_print);
            if (item.complement_status > 0) {
                var kompl_item = item.complement_status > 0 && item.complement_item < item.qty ? item.complement_item : '';
                textPrint += "{left} {s}{i}" + kompl_item + "{i} komplimen{s}\n";
            }
            if (_this.helper.IDRtoInt(item.discount_nominal) > 0 && (_this.helper.toInt(item.complement_status) != 1 || _this.helper.toInt(item.complement_item) < _this.helper.toInt(item.qty))) {
                textPrint += "{left} {s}Diskon " + _this.helper.toInt(item.discount_percent) + "% {b}(-" + _this.helper.intToIDR(item.discount_nominal) + "){/b} \n\n";
            }
        });
        textPrint += "________________\n{right}";
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
        textPrint += "{s}Total :      " + this.helper.intToIDR(this.get_bill_component('payment_total')) + "{/s}\n";
        textPrint += "\n{center}{s}Bila ada pelayanan/produk yang kurang \nberkenan, Hub. 0857 1272 2217 \nTerima Kasih\nPowered by folarpos.co.id{/s}\n\n\n";
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
        $.each(orders, function (i, item) {
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
        Injectable(),
        __metadata("design:paramtypes", [LoadingController, ConfigProvider, AlertController, DbLocalProvider, Events, HelperProvider])
    ], BillProvider);
    return BillProvider;
}());
export { BillProvider };
//# sourceMappingURL=bill.js.map