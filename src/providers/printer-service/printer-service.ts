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
    console.log( (window) , typeof DatecsPrinter)
    this.platform.ready().then(() => {
    	if(!this.win.cordova )
    	{
        	console.log("Cordova not available");
    		
    	}
      if (this.win.cordova && !this.win.DatecsPrinter) {
        console.log("DatecsPrinter plugin is missing. Have you installed the plugin? \nRun 'cordova plugin add cordova-plugin-datecs-printer'");
      }
    });
  }

  listBluetoothDevices() {
    return new Promise<any>((resolve, reject) => {
      this.win.DatecsPrinter.listBluetoothDevices((success) => resolve(success), (error) => reject(error));
    });
  }

  connect(deviceAddress: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => this.win.DatecsPrinter.connect(deviceAddress, (success) => resolve(success), (error) => reject(error)), this.defaultTimeout);
    });
  }

  disconnect(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.win.DatecsPrinter.disconnect((success) => resolve(success), (error) => reject(error))
    });
  }

  feedPaper(lines: Number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.win.DatecsPrinter.feedPaper(lines, (success) => resolve(success), (error) => reject(error));
    });
  }

  printText(text: string, charset: string = 'ISO-8859-1'): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.win.DatecsPrinter.printText(text, charset, (success) => resolve(success), (error) => reject(error));
    });
  }
}
