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
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HelperProvider } from '../../providers/helper/helper';
import * as $ from "jquery";
/**
 * Generated class for the DetailStockPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailStockPage = /** @class */ (function () {
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
        if (!this.navParams.data) {
            this.navCtrl.pop({});
        }
        console.log(this.navParams.data);
        this.product = this.navParams.data;
        this.product.price_idr = this.helper.intToIDR(this.product.price);
        this.process_get_stock(this.product.id);
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
        $.post(url, { product: this.product.id, outlet: 1, limit: 10, page: 1, order_by: 'stock_date DESC' })
            .then(function (res) {
            res = _this.helper.isJSON(res) ? JSON.parse(res) : res;
            console.log(res);
            _this.log_stock = res.data;
            var stock = _this.log_stock[0] ? _this.log_stock[0].stock_rest : 0;
            _this.product.stock_opname = _this.product.stock < 1 ? _this.product.stock - _this.log_stock[0].stock_rest : stock;
        });
    };
    DetailStockPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    DetailStockPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-detail-stock',
            templateUrl: 'detail-stock.html',
        }),
        __metadata("design:paramtypes", [NavController, ViewController, NavParams, HelperProvider])
    ], DetailStockPage);
    return DetailStockPage;
}());
export { DetailStockPage };
//# sourceMappingURL=detail-stock.js.map