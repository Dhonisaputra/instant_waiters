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
import { Events } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ConfigProvider } from "../config/config";
import * as $ from "jquery";
import { LocalNotifications } from '@ionic-native/local-notifications';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
/*
Generated class for the DbLocalProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
var DbLocalProvider = /** @class */ (function () {
    function DbLocalProvider(http, config, storage, events, localNotifications, transfer, file) {
        this.http = http;
        this.config = config;
        this.storage = storage;
        this.events = events;
        this.localNotifications = localNotifications;
        this.transfer = transfer;
        this.file = file;
        this.fileTransfer = this.transfer.create();
        this.params = {
            is_login: false,
            settings: {
                choose_table_first: true
            }
        }; // variable to store temporary params || karena saya belum bisa ngirim / ganti page menggunakan parameters.
        this.credential = {
            users: {}
        };
    }
    DbLocalProvider.prototype.set_params = function (name, value) {
        if (value === void 0) { value = {}; }
        this.params[name] = value;
    };
    DbLocalProvider.prototype.get_params = function (name) {
        return this.params[name];
    };
    DbLocalProvider.prototype.reset_params = function (name) {
        delete this.params[name];
    };
    DbLocalProvider.prototype.create_database = function () {
        this.sync_table();
    };
    DbLocalProvider.prototype.sync_table = function () {
        var _this = this;
        var urlTable = this.config.base_url('admin/outlet/table/data/get');
        this.storage.get('outlet')
            .then(function (val) {
            var dataTable = { outlet: val, status: 1 };
            $.post(urlTable, dataTable)
                .done(function (res) {
                res = JSON.parse(res);
                _this.storage.set('table', res)
                    .then(function () {
                    _this.events.publish('dt.table.done', {});
                    console.info('Data table has been updated');
                })
                    .catch(function () {
                    console.error('Error occured when updating data table');
                });
            });
        });
    };
    DbLocalProvider.prototype.sync_product = function () {
        var _this = this;
        var urlProduct = this.config.base_url('admin/outlet/product/get');
        this.storage.get('outlet')
            .then(function (val) {
            var dataTable = { outlet: val, status: 1, fields: 'id,outlet,type,price,name,unit,stock,image,charge_nominal,charge_percent,status,discount_nominal,discount_percent,status_text,can_be_removed,favorite' };
            $.post(urlProduct, dataTable)
                .done(function (res) {
                res = JSON.parse(res);
                if (res.code == 500) {
                    console.error(res.message);
                    return false;
                }
                for (var i = 0; i < res.data.length; i++) {
                    if (res.data[i].image) {
                        var filename = res.data[i].image.thumb ? res.data[i].image.thumb.split('/') : res.data[i].image.url.split('/');
                        res.data[i].image.image_local = _this.file.dataDirectory + 'product/' + filename[filename.length - 2] + '/' + filename[filename.length - 1];
                        _this.fileTransfer.download(res.data[i].image.thumb, _this.file.dataDirectory + 'product/' + filename[filename.length - 2] + '/' + filename[filename.length - 1], true);
                    }
                }
                _this.storage.set('product', res)
                    .then(function () {
                    _this.events.publish('dt.last_sync.done', {});
                    console.info('Data product has been updated');
                })
                    .catch(function () {
                    console.error('Error occured when updating data table');
                });
            });
        });
    };
    DbLocalProvider.prototype.sync = function () {
        var _this = this;
        this.sync_table();
        this.events.subscribe('dt.table.done', function () {
            _this.sync_product();
        });
        this.events.subscribe('dt.last_sync.done', function () {
            // this.sync_product();
            /*this.localNotifications.schedule({
              id: 1,
              text: 'Synchronize data is complete!',
            });*/
        });
    };
    DbLocalProvider.prototype.opendb = function (dbname) {
        return this.storage.get(dbname);
    };
    DbLocalProvider.prototype.setdb = function (dbname, value) {
        return this.storage.set(dbname, value);
    };
    DbLocalProvider.prototype.removedb = function (dbname) {
        return this.storage.remove(dbname);
    };
    DbLocalProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, ConfigProvider, Storage, Events, LocalNotifications, FileTransfer, File])
    ], DbLocalProvider);
    return DbLocalProvider;
}());
export { DbLocalProvider };
//# sourceMappingURL=db-local.js.map