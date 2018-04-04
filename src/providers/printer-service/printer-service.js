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
        if (this.win.cordova && !this.win.DatecsPrinter) {
            console.log("DatecsPrinter plugin is missing. Have you installed the plugin? \nRun 'cordova plugin add cordova-plugin-datecs-printer'");
        }
    }
    PrinterServiceProvider.prototype.isAvailable = function () {
        return this.win.DatecsPrinter;
    };
    PrinterServiceProvider.prototype.listBluetoothDevices = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.DatecsPrinter.listBluetoothDevices(function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.connect = function (address) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.DatecsPrinter.connect(address, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.disconnect = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.DatecsPrinter.disconnect(function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.feedPaper = function (lines) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.DatecsPrinter.feedPaper(lines, function (success) {
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
            _this.win.DatecsPrinter.printText(text, charset, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.printSelfTest = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.DatecsPrinter.printSelfTest(function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.getStatus = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.DatecsPrinter.getStatus(function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.getTemperature = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.DatecsPrinter.getTemperature(function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.setBarcode = function (align, small, scale, hri, height) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.DatecsPrinter.setBarcode(align, small, scale, hri, height, function (success) {
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
            _this.win.DatecsPrinter.printBarcode(type, data, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.printImage = function (image, width, height, align) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.DatecsPrinter.printImage(image, width, height, align, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.drawPageRectangle = function (x, y, width, height, fillMode) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.DatecsPrinter.drawPageRectangle(x, y, width, height, fillMode, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.drawPageFrame = function (x, y, width, height, fillMode, thickness) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.DatecsPrinter.drawPageFrame(x, y, width, height, fillMode, thickness, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.selectPageMode = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.DatecsPrinter.selectPageMode(function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.selectStandardMode = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.DatecsPrinter.selectStandardMode(function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.setPageRegion = function (x, y, width, height, direction) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.DatecsPrinter.setPageRegion(x, y, width, height, direction, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.printPage = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.DatecsPrinter.printPage(function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.write = function (bytes) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.DatecsPrinter.write(bytes, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider.prototype.writeHex = function (hex) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.win.DatecsPrinter.writeHex(hex, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    PrinterServiceProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Platform])
    ], PrinterServiceProvider);
    return PrinterServiceProvider;
}());
export { PrinterServiceProvider };
//# sourceMappingURL=printer-service.js.map