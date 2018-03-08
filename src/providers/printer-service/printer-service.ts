import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
declare let DatecsPrinter:any;
/*
  Generated class for the PrinterServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PrinterServiceProvider {

  private win: any;
  private defaultTimeout: Number = 100;

  constructor(private platform: Platform) {
    this.win = window;
    if(!this.win.cordova )
		{
	    	console.log("Cordova not available");
			
		}
	  if (this.win.cordova && !this.win.DatecsPrinter) {
	    console.log("DatecsPrinter plugin is missing. Have you installed the plugin? \nRun 'cordova plugin add cordova-plugin-datecs-printer'");
	  }
  }

  public isAvailable()
  {
  	return !this.platform.is('mobileweb') && this.win.DatecsPrinter;
  }

  public listBluetoothDevices(){
        return new Promise((resolve, reject) => {
            this.win.DatecsPrinter.listBluetoothDevices( function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    }

    public connect(address){
        return new Promise((resolve, reject) => {
            this.win.DatecsPrinter.connect( address, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    }

    public disconnect(){
        return new Promise((resolve, reject) => {
            this.win.DatecsPrinter.disconnect( function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    }

    public feedPaper(lines){
        return new Promise((resolve, reject) => {
            this.win.DatecsPrinter.feedPaper( lines, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    }

    public printText(text, charset = 'UTF-8'){
        // ISO-8859-1
        return new Promise((resolve, reject) => {
            this.win.DatecsPrinter.printText( text, charset, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    }

    public printSelfTest(){
        return new Promise((resolve, reject) => {
            this.win.DatecsPrinter.printSelfTest( function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    }

    public getStatus(){
        return new Promise((resolve, reject) => {
            this.win.DatecsPrinter.getStatus( function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    }

    public getTemperature(){
        return new Promise((resolve, reject) => {
            this.win.DatecsPrinter.getTemperature( function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    }

    public setBarcode(align, small, scale, hri, height){
        return new Promise((resolve, reject) => {
            this.win.DatecsPrinter.setBarcode( align, small, scale, hri, height, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    }

    public printBarcode(data, type = 73 ){
        return new Promise((resolve, reject) => {
            this.win.DatecsPrinter.printBarcode( type, data, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    }

    public printImage(image, width, height, align){
        return new Promise((resolve, reject) => {
            this.win.DatecsPrinter.printImage( image, width, height, align, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    }

    public drawPageRectangle(x, y, width, height, fillMode){
        return new Promise((resolve, reject) => {
            this.win.DatecsPrinter.drawPageRectangle( x, y, width, height, fillMode, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    }

    public drawPageFrame(x, y, width, height, fillMode, thickness){
        return new Promise((resolve, reject) => {
            this.win.DatecsPrinter.drawPageFrame( x, y, width, height, fillMode, thickness, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    }

    public selectPageMode(){
        return new Promise((resolve, reject) => {
            this.win.DatecsPrinter.selectPageMode( function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    }

    public selectStandardMode(){
        return new Promise((resolve, reject) => {
            this.win.DatecsPrinter.selectStandardMode( function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    }

    public setPageRegion(x, y, width, height, direction){
        return new Promise((resolve, reject) => {
            this.win.DatecsPrinter.setPageRegion( x, y, width, height, direction, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    }

    public printPage(){
        return new Promise((resolve, reject) => {
            this.win.DatecsPrinter.printPage( function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    }

    public write(bytes){
        return new Promise((resolve, reject) => {
            this.win.DatecsPrinter.write( bytes, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    }

    public writeHex(hex){
        return new Promise((resolve, reject) => {
            this.win.DatecsPrinter.writeHex( hex, function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    }
}
