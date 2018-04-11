var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ConfigProvider } from '../../providers/config/config';
import { MenuController } from 'ionic-angular';
import * as $ from "jquery";
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { HelperProvider } from '../../providers/helper/helper';
/*
  Generated class for the DbTableProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DbTableProvider = /** @class */ (function () {
    function DbTableProvider(helper, http, storage, config, menuController, screenOrientation) {
        this.helper = helper;
        this.http = http;
        this.storage = storage;
        this.config = config;
        this.menuController = menuController;
        this.screenOrientation = screenOrientation;
        console.log('Hello DbTableProvider Provider');
    }
    DbTableProvider.prototype.get_table = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        // return this.storage.get('table')
        var urlTable = this.config.base_url('admin/outlet/table/data/get');
        var dataTable = Object.assign({ status: 1 }, data);
        return $.post(urlTable, dataTable)
            .done(function (res) {
            res = JSON.parse(res);
            _this.storage.set('table', res)
                .then(function () {
                console.info('Data table has been updated');
            })
                .catch(function () {
                console.error('Error occured when updating data table');
            });
        });
    };
    DbTableProvider.prototype.get_table_storage = function () {
    };
    DbTableProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HelperProvider, HttpClient, Storage, ConfigProvider, MenuController, ScreenOrientation])
    ], DbTableProvider);
    return DbTableProvider;
}());
export { DbTableProvider };
//# sourceMappingURL=db-table.js.map