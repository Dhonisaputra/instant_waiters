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
import { IonicPage, NavController, NavParams, Events, App } from 'ionic-angular';
import { DbLocalProvider } from "../../providers/db-local/db-local";
import { ProductPage } from "../../pages/product/product";
import { DbTableProvider } from "../../providers/db-table/db-table";
import { HelperProvider } from '../../providers/helper/helper';
import { BillProvider } from '../../providers/bill/bill';
/**
 * Generated class for the TablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TablePage = /** @class */ (function () {
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
                this.navCtrl.setRoot(ProductPage);
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
        this.navCtrl.setRoot(ProductPage, { 'previous': 'table-page', event: 'table.pick', trigger_event: trigger_event, 'table': this.tableChoosen, 'multiple': this.multiple });
    };
    TablePage = __decorate([
        IonicPage({
            priority: 'high'
        }),
        Component({
            selector: 'page-table',
            templateUrl: 'table.html',
        }),
        __metadata("design:paramtypes", [NavController, App, NavParams, DbLocalProvider, DbTableProvider, HelperProvider, Events, BillProvider])
    ], TablePage);
    return TablePage;
}());
export { TablePage };
//# sourceMappingURL=table.js.map