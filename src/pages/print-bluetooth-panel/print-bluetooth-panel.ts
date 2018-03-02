import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrinterServiceProvider } from "../../providers/printer-service/printer-service"
import { HelperProvider } from "../../providers/helper/helper";

/**
 * Generated class for the PrintBluetoothPanelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-print-bluetooth-panel',
  templateUrl: 'print-bluetooth-panel.html',
})
export class PrintBluetoothPanelPage {
	win:any;
	printer_connected:any=[];
	state: any='index';

  constructor(public navCtrl: NavController, public navParams: NavParams, private helper: HelperProvider, private printer:PrinterServiceProvider ) {
  	this.helper.platform.ready()
  	.then(()=>{
	  	this.checking_bluetooth_connection()
  		
  	})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrintBluetoothPanelPage');
  }

  search_printer_page()
  {
  	let printLoading = this.helper.loadingCtrl.create({
  		content: "Memeriksa printer"
  	})
  	printLoading.present();
  	this.printer.listBluetoothDevices()
	.then((devices)=>{
  		printLoading.dismiss()
		console.log(JSON.stringify(devices))
	}, (err)=>{
  		printLoading.dismiss()
  		this.helper.alertCtrl.create({
  			title: "Kesalahan saat mencari printer",
  			message: "Terjadi kesalahan ketika mencari printer."
  		}).present();
  	})
  }

  checking_bluetooth_connection()
  {
  	let printLoading = this.helper.loadingCtrl.create({
  		content: "Memeriksa printer"
  	})
  	printLoading.present();
  	this.helper.local.opendb('printer_connected')
  	.then((devices)=>{
  		printLoading.dismiss()
  		if(Array.isArray(devices) )
  		{
  			this.printer_connected = devices;
  		}
  	}, (err)=>{
  		console.log(err)
  		printLoading.dismiss()
  		this.helper.alertCtrl.create({
  			title: "Kesalahan saat memeriksa printer",
  			message: "Terjadi kesalahan ketika memeriksa ketersediaan printer.",
  			buttons: ["OK"]
  		}).present();
  	})
  }

}
