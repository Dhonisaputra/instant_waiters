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
        console.log(billdata);
        return $.post(url, billdata)
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
        console.log(discount_id, discount_percent, discount_nominal, payment_total);
        tax_nominal = tax_nominal ? parseInt(tax_nominal) : 0;
        discount_nominal = discount_nominal ? parseInt(discount_nominal) : 0;
        var order = this.get_bill_component('orders');
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
        $.each(order_array, function (i, val) {
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
        console.log(nota);
        return nota;
    };
    BillProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [LoadingController, ConfigProvider, AlertController, DbLocalProvider, Events, HelperProvider])
    ], BillProvider);
    return BillProvider;
}());
export { BillProvider };
//# sourceMappingURL=bill.js.map