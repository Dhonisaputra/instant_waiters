import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrinterServiceProvider } from "../../providers/printer-service/printer-service"
import { HelperProvider } from "../../providers/helper/helper";
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

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
	printer_unconnected:any=[];
	default_printer:any=[];
	state: any='index';
	search_print: boolean;
  constructor(private bluetoothSerial: BluetoothSerial, public navCtrl: NavController, public navParams: NavParams, private helper: HelperProvider, private printer:PrinterServiceProvider ) {
  	this.search_print = false	
  	this.getDefaultPrinter();
  }

  ionViewDidLoad() {
  }

  checking_bluetooth_connection()
  {
  	let printLoading = this.helper.loadingCtrl.create({
  		content: "Memeriksa printer"
  	})
  	printLoading.present();
  	this.check_unpaired_device();
  	
  }

  check_unpaired_device()
  {
  	this.search_print = true;
  	let printLoading = this.helper.loadingCtrl.create({
  		content: "Memeriksa printer"
  	})
  	printLoading.present();
  

  	this.printer.listBluetoothDevices()
  	.then((devices)=>{
  		printLoading.dismiss()
  		if(Array.isArray(devices) )
  		{
  			this.printer_unconnected = devices;
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

  itemSelected(item)
  {

  	this.helper.local.setdb('printer_connected', item)
  	.then(()=>{

  		this.printer.connect(item.address)
  		.then(()=>{


  		})
  		// this.getDefaultPrinter();
  		this.default_printer = item;
  		this.helper.toast.create({
  			message: item.aliasname+" telah diset default",
  			duration: 2000
  		}).present();
  	})


  }

  getDefaultPrinter()
  {
  	this.helper.local.opendb('printer_connected')
  	.then((device)=>{
  		this.default_printer = device;
  	})
  }

  pairDevice(item)
  {

  }

}
