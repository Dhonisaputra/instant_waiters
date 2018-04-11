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
import { Events, AlertController, ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { DbLocalProvider } from '../../providers/db-local/db-local';
import { ConfigProvider } from '../../providers/config/config';
import * as io from 'socket.io-client';
import { LocalNotifications } from '@ionic-native/local-notifications';
/*
  Generated class for the AiRemoteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AiRemoteProvider = /** @class */ (function () {
    function AiRemoteProvider(http, toast, localNotifications, alert, local, config, events) {
        this.http = http;
        this.toast = toast;
        this.localNotifications = localNotifications;
        this.alert = alert;
        this.local = local;
        this.config = config;
        this.events = events;
        this.io = io;
        this.options = {};
        this.isInitialize = false;
        this.isListen = false;
        this.isListenGeneral = false;
        this.options = this.default_params();
    }
    AiRemoteProvider.prototype.initialize = function (params, connect) {
        if (!this.isInitialize) {
            this.options = Object.assign(this.options, params);
            this.options.url = this.options.host + '?cluster=' + this.options.apiKey;
            this.socket = this.io(this.options.url);
            this.isInitialize = true;
            this.socket.on('connect', function () {
                if (typeof connect == 'function') {
                    connect();
                }
            });
        }
    };
    AiRemoteProvider.prototype.default_params = function () {
        return {
            host: 'https://remotep2p.herokuapp.com/',
            apiKey: 'Folarium3838',
            id: undefined
        };
    };
    AiRemoteProvider.prototype.subscribe = function (event, fn) {
        event = this.options.apiKey + "_" + event;
        this.socket.on(event, fn);
    };
    AiRemoteProvider.prototype.send = function (event, target, data, fn) {
        fn = typeof fn == 'undefined' ? function () { } : fn;
        data = {
            target: target,
            data: data,
            _props: {
                apiKey: this.options.apiKey
            }
        };
        this.socket.emit(event, data, fn);
    };
    AiRemoteProvider.prototype.socket_listener = function () {
        var _this = this;
        var isLogin = this.local.get_params('login_outlet_device');
        if (!this.isListen) {
            var outlet_id = this.local.get_params(this.config.variable.credential).data.outlet_id;
            var data_1 = this.local.get_params(this.config.variable.credential).data;
            var uuid_1 = this.local.get_params(this.config.variable.credential).outlet_device.uuid;
            if (this.local.get_params(this.config.variable.credential).outlet.outlet_roles_id != 3) {
                this.subscribe(outlet_id + '.app.cashier:new-order', function (res) {
                    _this.events.publish('transaction:refresh');
                    _this.localNotifications.schedule({
                        id: 1,
                        text: res.title,
                        sound: 'file://assets/audio/notification.mp3',
                        data: { secret: uuid_1 }
                    });
                });
            }
            this.subscribe('app.' + uuid_1 + '.' + outlet_id + '.authority.revoke', function () {
                if (!isLogin) {
                    _this.events.publish('outlet_list.refresh');
                    return false;
                }
                _this.alert.create({
                    title: "Anda telah dikeluarkan oleh admin",
                    subTitle: "Hak akses Anda telah dicabut oleh admin dari outlet ini. Silahkan hubungi admin outlet anda untuk keterangan lebih lanjut!",
                    buttons: [{
                            text: "Tutup",
                            handler: function () {
                                _this.events.publish('outlet.signout');
                            }
                        }]
                }).present();
            });
            this.subscribe('app.' + uuid_1 + '.authority.accepted', function () {
                _this.localNotifications.schedule({
                    id: 1,
                    text: 'Perangkat anda telah diperbolehkan untuk mengakses outlet ' + data_1.outlet_name,
                    sound: 'file://assets/audio/notification.mp3',
                    data: { secret: uuid_1 }
                });
            });
            this.subscribe('app.' + uuid_1 + '.monitoring_request:refresh', function (res) {
                _this.localNotifications.schedule({
                    id: res.id || 1,
                    text: 'Terdapat permintaan baru ',
                    sound: 'file://assets/audio/notification.mp3',
                    data: { secret: uuid_1 }
                });
                _this.events.publish('monitoring_request:refresh');
            });
            this.isListen = true;
        }
    };
    AiRemoteProvider.prototype.socket_listener_general = function () {
        var _this = this;
        var isLogin = this.local.get_params('login_outlet_device');
        if (!this.isListenGeneral) {
            var vari = this.local.get_params(this.config.variable.credential);
            var data_2 = vari;
            var uuid_2 = this.local.get_params("uuid");
            this.subscribe('app.' + uuid_2 + '.authority.accepted', function () {
                if (isLogin) {
                    return false;
                }
                _this.localNotifications.schedule({
                    id: 1,
                    text: 'Perangkat anda telah diperbolehkan untuk mengakses outlet ' + data_2.outlet_name,
                    sound: 'file://assets/audio/notification.mp3',
                    data: { secret: uuid_2 }
                });
                _this.toast.create({
                    message: 'Perangkat anda telah diperbolehkan untuk mengakses outlet ' + data_2.outlet_name,
                    duration: 2000
                }).present();
            });
            this.isListenGeneral = true;
        }
    };
    AiRemoteProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, ToastController, LocalNotifications, AlertController, DbLocalProvider, ConfigProvider, Events])
    ], AiRemoteProvider);
    return AiRemoteProvider;
}());
export { AiRemoteProvider };
//# sourceMappingURL=ai-remote.js.map