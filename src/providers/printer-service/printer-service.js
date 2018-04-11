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
import { Platform } from 'ionic-angular';
/*
  Generated class for the PrinterServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PrinterServiceProvider = /** @class */ (function () {
    function PrinterServiceProvider(platform) {
        this.platform = platform;
        this.defaultTimeout = 100;
        this.win = window;
        if (!this.win.cordova) {
            console.log("Cordova not available");
        }
        if (this.win.cordova && !this.win.Thermalprint) {
            console.log("Thermalprint plugin is missing. Have you installed the plugin? \nRun 'cordova plugin add cordova-plugin-datecs-printer'");
        }
    }
    PrinterServiceProvider.prototype.isAvailable = function () {
        return !this.platform.is('mobileweb') && this.win.Thermalprint;
    };
    PrinterServiceProvider.prototype.print_type = function (type) {
        type = type.toString();
        var val = 0;
        switch (type) {
            default:
            case "30":
                val = 40;
                break;
            case "42":
                val = 47;
                break;
            case "80":
                val = 47;
                break;
        }
        return val;
    };
    PrinterServiceProvider.prototype.listBluetoothDevices = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.Thermalprint.listBluetoothDevices(function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.connect = function (address) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.Thermalprint.connect(address, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.connectWifi = function (address) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.Thermalprint.connectWifi(address, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.printWifi = function (content) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.Thermalprint.printWifi(content, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.cutpaper = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.Thermalprint.cutpaper(function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.disconnect = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.Thermalprint.disconnect(function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.feedPaper = function (lines) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.Thermalprint.feedPaper(lines, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.printText = function (text, charset) {
        var _this = this;
        if (charset === void 0) { charset = 'UTF-8'; }
        // ISO-8859-1
        return new Promise(function (resolve, reject) {
            _this.win.Thermalprint.printText(text, charset, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.printSelfTest = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.Thermalprint.printSelfTest(function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.getStatus = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.Thermalprint.getStatus(function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.getTemperature = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.Thermalprint.getTemperature(function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.setBarcode = function (align, small, scale, hri, height) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.Thermalprint.setBarcode(align, small, scale, hri, height, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.printBarcode = function (data, type) {
        var _this = this;
        if (type === void 0) { type = 73; }
        return new Promise(function (resolve, reject) {
            _this.win.Thermalprint.printBarcode(type, data, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.printImage = function (image, width, height, align) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.Thermalprint.printImage(image, width, height, align, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.drawPageRectangle = function (x, y, width, height, fillMode) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.Thermalprint.drawPageRectangle(x, y, width, height, fillMode, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.drawPageFrame = function (x, y, width, height, fillMode, thickness) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.Thermalprint.drawPageFrame(x, y, width, height, fillMode, thickness, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.selectPageMode = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.Thermalprint.selectPageMode(function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.selectStandardMode = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.Thermalprint.selectStandardMode(function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.setPageRegion = function (x, y, width, height, direction) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.Thermalprint.setPageRegion(x, y, width, height, direction, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.printPage = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.Thermalprint.printPage(function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.write = function (bytes) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.Thermalprint.write(bytes, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.writeHex = function (hex) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.Thermalprint.writeHex(hex, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.padStart = function (text, targetLength, padString) {
        if (padString === void 0) { padString = ' '; }
        targetLength = targetLength >> 0; //truncate if number or convert non-number to 0;
        padString = String((typeof padString !== 'undefined' ? padString : ' '));
        if (text.length > targetLength) {
            return String(text);
        }
        else {
            targetLength = targetLength - text.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
            }
            return padString.slice(0, targetLength) + String(text);
        }
    };
    ;
    PrinterServiceProvider.prototype.padEnd = function (text, targetLength, padString) {
        if (padString === void 0) { padString = ' '; }
        targetLength = targetLength >> 0; //floor if number or convert non-number to 0;
        padString = String((typeof padString !== 'undefined' ? padString : ' '));
        if (text.length > targetLength) {
            return String(text);
        }
        else {
            targetLength = targetLength - text.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
            }
            return String(text) + padString.slice(0, targetLength);
        }
    };
    ;
    PrinterServiceProvider.prototype.countConfiguration = function (len, gutter) {
        var conf = {};
        gutter = gutter == undefined ? 4 : gutter;
        conf.numSection = Math.round((10 / 100) * len);
        conf.menuSection = Math.round((38 / 100) * len);
        conf.qtySection = Math.round((22 / 100) * len);
        conf.gap = Math.round((7 / 100) * len);
        conf.totalSection = Math.round((30 / 100) * len) - gutter;
        return { format: conf, gutter: gutter };
    };
    PrinterServiceProvider.prototype.repeat = function (text, count) {
        'use strict';
        if (text == null) {
            throw new TypeError('can\'t convert ' + text + ' to object');
        }
        var str = '' + text;
        count = +count;
        if (count != count) {
            count = 0;
        }
        if (count < 0) {
            console.error('repeat count must be non-negative');
        }
        if (count == Infinity) {
            console.error('repeat count must be less than infinity');
        }
        count = Math.floor(count);
        if (str.length == 0 || count == 0) {
            return '';
        }
        // Ensuring count is a 31-bit integer allows us to heavily optimize the
        // main part. But anyway, most current (August 2014) browsers can't handle
        // strings 1 << 28 chars or longer, so:
        if (str.length * count >= 1 << 28) {
            console.error('repeat count must not overflow maximum string size');
        }
        var rpt = '';
        for (var i = 0; i < count; i++) {
            rpt += str;
        }
        return rpt;
    };
    PrinterServiceProvider.prototype.convert = function (data, conf) {
        var _this = this;
        var content = this.truncateEachLength(data.name, (conf.format.menuSection < data.name.length ? conf.format.menuSection : data.name.length));
        var ntext = "\n";
        content.forEach(function (val, i) {
            var gutter = " ".repeat(conf.gutter);
            var num = _this.padEnd(data.qty.toString(), conf.format.numSection);
            var a = _this.padStart(data.price.toString(), conf.format.qtySection - 1);
            var b = _this.padEnd(val.toString(), conf.format.menuSection);
            var c = _this.padStart((data.totalPrice).toString(), conf.format.totalSection);
            if (i == 0) {
                ntext += gutter + num + b + ' ' + a + c + gutter + "\n";
            }
            else {
                var rmSpace = b[0] == ' ' ? true : false;
                b = b[0] == ' ' ? b.substr(1) : b;
                var e = _this.repeat(" ", conf.format.qtySection + conf.format.totalSection + 1);
                var f = _this.repeat(" ", conf.format.numSection);
                b = f + b + e;
                ntext += gutter + b + gutter + (rmSpace ? ' ' : '') + "\n";
            }
        });
        ntext += "\n";
        return ntext;
    };
    PrinterServiceProvider.prototype.truncateEachLength = function (content, every) {
        var len = content.toString().length;
        var calc = Math.floor(len / every);
        var rec = [];
        for (var i = 0; i < calc; i++) {
            var nchar = content.substr(i * every, every);
            rec.push(nchar);
        }
        return rec;
    };
    PrinterServiceProvider.prototype.padCenter = function (data, pad) {
        pad = pad / 2;
        data = data.toString();
        var text = this.padStart(data, pad, ' ');
        text = this.padEnd(text, (pad * 2) - data.length);
        return text;
    };
    PrinterServiceProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Platform])
    ], PrinterServiceProvider);
    return PrinterServiceProvider;
}());
export { PrinterServiceProvider };
//# sourceMappingURL=printer-service.js.map