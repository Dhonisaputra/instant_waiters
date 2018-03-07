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
import { Platform, LoadingController, AlertController, ToastController, ActionSheetController, Events, PopoverController } from 'ionic-angular';
import { ConfigProvider } from '../../providers/config/config';
import { DbLocalProvider } from '../../providers/db-local/db-local';
import { PrinterServiceProvider } from '../../providers/printer-service/printer-service';
import { Storage } from '@ionic/storage';
import * as $ from "jquery";
import * as moment from 'moment';
import * as html2canvas from "html2canvas";
/*
  Generated class for the HelperProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HelperProvider = /** @class */ (function () {
    function HelperProvider(http, config, toast, alertCtrl, loadingCtrl, local, storage, actionSheet, events, popoverCtrl, platform, printer) {
        var _this = this;
        this.http = http;
        this.config = config;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.local = local;
        this.storage = storage;
        this.actionSheet = actionSheet;
        this.events = events;
        this.popoverCtrl = popoverCtrl;
        this.platform = platform;
        this.printer = printer;
        this.$ = $;
        this.moment = moment;
        this.html2canvas = html2canvas;
        this.defaultTimeout = 100;
        this.win = window;
        console.log('Hello HelperProvider Provider');
        this.platform.ready().then(function () {
            if (_this.win.cordova && !_this.win.DatecsPrinter) {
                console.warn("DatecsPrinter plugin is missing. Have you installed the plugin? \nRun 'cordova plugin add cordova-plugin-datecs-printer'");
            }
        });
    }
    /*
      Source
      - https://faisalman.com/2012/02/27/konversi-angka-ke-format-rupiah-di-javascript/
    */
    HelperProvider.prototype.intToIDR = function (angka) {
        var rev = parseInt(angka, 10).toString().split('').reverse().join('');
        var rev2 = '';
        for (var i = 0; i < rev.length; i++) {
            rev2 += rev[i];
            if ((i + 1) % 3 === 0 && i !== (rev.length - 1)) {
                rev2 += '.';
            }
        }
        return rev2.split('').reverse().join('');
    };
    HelperProvider.prototype.nativeWindow = function () {
        return window;
    };
    HelperProvider.prototype.IDRtoInt = function (angka) {
        angka = angka ? angka.toString() : '0';
        return parseInt(angka.replace(/,.*|\D/g, ''), 10);
    };
    HelperProvider.prototype.isJSON = function (str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return { status: true, result: JSON.parse(str) };
    };
    HelperProvider.prototype.nominalToPercent = function (nominal, total) {
        return ((nominal / total) * 100).toFixed(1);
    };
    HelperProvider.prototype.percentToNominal = function (percent, total) {
        return total * (percent / 100);
    };
    HelperProvider.prototype.toInt = function (text) {
        return parseInt(text);
    };
    HelperProvider.prototype.clone_object = function (data) {
        return Object.assign({}, data);
    };
    HelperProvider.prototype.html_encode = function (value) {
        return $('<div/>').text(value).html();
    };
    HelperProvider.prototype.html_decode = function (value) {
        return $('<div/>').html(value).text();
    };
    HelperProvider.prototype.get_initial_outlet_name = function (name) {
        var nameArr = name.replace(/[^A-Za-z0-9]/g, ' ').split(' ');
        var initialName = [];
        $.each(nameArr, function (i, val) {
            initialName.push(val[0]);
        });
        return initialName;
    };
    HelperProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient,
            ConfigProvider,
            ToastController,
            AlertController,
            LoadingController,
            DbLocalProvider,
            Storage,
            ActionSheetController,
            Events,
            PopoverController,
            Platform,
            PrinterServiceProvider])
    ], HelperProvider);
    return HelperProvider;
}());
export { HelperProvider };
//# sourceMappingURL=helper.js.map