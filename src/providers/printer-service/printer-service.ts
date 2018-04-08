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

    padStart(text, targetLength,padString:any='') {
        targetLength = targetLength>>0; //truncate if number or convert non-number to 0;
        padString = String((typeof padString !== 'undefined' ? padString : ' '));
        if (text.length > targetLength) {
            return String(text);
        }
        else {
            targetLength = targetLength-text.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
            }
            return padString.slice(0,targetLength) + String(text);
        }
    };
     
    padEnd(text, targetLength, padString:any='') {
        targetLength = targetLength>>0; //floor if number or convert non-number to 0;
        padString = String((typeof padString !== 'undefined' ? padString : ' '));
        if (text.length > targetLength) {
            return String(text);
        }
        else {
            targetLength = targetLength-text.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
            }
            return String(text) + padString.slice(0,targetLength);
        }
    };


    countConfiguration(len, gutter)
    {
        var conf:any = {}
        gutter = gutter == undefined? 4 : gutter
        conf.numSection = Math.round((20/100)*len)
        conf.menuSection = Math.round((30/100)*len)
        conf.qtySection = Math.round((20/100)*len)
        conf.gap = Math.round((7/100)*len)
        conf.totalSection = Math.round((30/100)*len) - gutter
        return {format: conf, gutter: gutter};
    }
     
    convert(data,conf)
    {
        let content = this.truncateEachLength(data.name, (conf.format.menuSection < data.name.length ? conf.format.menuSection : data.name.length));
        let ntext = '';
     
        content.forEach((val, i)=>{
            let gutter = " ".repeat(conf.gutter)
            let num = this.padEnd(data.qty.toString(), conf.format.numSection);
            let a = this.padStart(data.price.toString(), conf.format.qtySection - 1);
            let b = this.padEnd(val.toString(), conf.format.menuSection);
            let c = this.padStart((data.price * data.qty).toString(), conf.format.totalSection);
            if(i == 0)
            {
                ntext +=gutter+num+b+' '+a+c+gutter+"\n";
            }else
            {
                let rmSpace = b[0] == ' '? true : false;
                b = b[0] == ' '? b.substr(1) : b;
                let e = " ".repeat(conf.format.qtySection+conf.format.totalSection+1);
                let f = " ".repeat(conf.format.numSection);
                b = f+b+e;
                ntext += gutter+b+gutter+(rmSpace?' ':'')+"\n";
            }
        })
        ntext += "\n"
        return ntext;
    }

    truncateEachLength(content, every)
    {
        let len = content.toString().length
        let calc = Math.floor(len / every);
        let rec = [];
        for (var i = 0; i < calc; i++) {
            let nchar = content.substr(i*every, every)
            rec.push(nchar);
        }
        return rec;
     
    }
     
    padCenter(data, pad)
    {
        pad = pad/2;
        data = data.toString()
        return data.padStart(pad).padEnd((pad*2)-data.length);
    }

}
