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
import { ProductProvider } from '../../providers/product/product';
import { DetailStockPage } from '../detail-stock/detail-stock';
import { HelperProvider } from '../../providers/helper/helper';
/**
 * Generated class for the StocksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StocksPage = /** @class */ (function () {
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
        this.detailStockPage = DetailStockPage;
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
        this.navCtrl.push(DetailStockPage, item);
    };
    StocksPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-stocks',
            templateUrl: 'stocks.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ProductProvider, HelperProvider])
    ], StocksPage);
    return StocksPage;
}());
export { StocksPage };
//# sourceMappingURL=stocks.js.map