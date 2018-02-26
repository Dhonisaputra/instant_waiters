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
import * as $ from "jquery";
import { Storage } from '@ionic/storage';
import { HelperProvider } from '../../providers/helper/helper';
/*
Generated class for the ProductProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
var ProductProvider = /** @class */ (function () {
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
                fields: 'id,outlet,type,price,name,unit,stock,image,charge_nominal,charge_percent,status,discount_nominal,discount_percent,status_text,can_be_removed,favorite',
                limit: 25,
                page: 1,
            }, options.data);
            this.last_options = options;
            this.last_request = options.data;
            var http = $.post(this.config.base_url('admin/outlet/product/get'), options.data);
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
        Injectable(),
        __metadata("design:paramtypes", [ConfigProvider, Storage, HelperProvider])
    ], ProductProvider);
    return ProductProvider;
}());
export { ProductProvider };
//# sourceMappingURL=product.js.map