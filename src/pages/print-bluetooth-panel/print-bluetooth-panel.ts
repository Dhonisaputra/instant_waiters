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

  constructor(private bluetoothSerial: BluetoothSerial, public navCtrl: NavController, public navParams: NavParams, private helper: HelperProvider, private printer:PrinterServiceProvider ) {
  	
  	this.search_printer_page()
  	this.getDefaultPrinter();
  	console.log(this.printer)
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
  	/*this.bluetoothSerial.list()
  	.then((devices)=>{
  		console.log(JSON.stringify(devices))
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
  	})*/

  	this.printer.listBluetoothDevices()
  	.then((res)=>{
  		console.log(res)
  		printLoading.dismiss()
  		if(Array.isArray(res) )
  		{
  			this.printer_connected = res;
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
  	let printLoading = this.helper.loadingCtrl.create({
  		content: "Memeriksa printer"
  	})
  	printLoading.present();
  	this.bluetoothSerial.discoverUnpaired()
  	.then((devices)=>{
  		console.log(JSON.stringify(devices))
  		this.printer_unconnected = devices;
  		printLoading.dismiss()
  	})
  }

  itemSelected(item)
  {

  	this.helper.local.setdb('printer_connected', item)
  	.then(()=>{
  		console.log(this.helper.nativeWindow())
  		/*this.printer.connect(item.address)
  		.then(()=>{
  			this.printer.printText("Print Test!", 'ISO-8859-1')
  			.then(()=>{
  				console.log("print success")
  			})
  		});*/
  		console.log(this.printer)


  		this.bluetoothSerial.connect(item.address)
  		.subscribe(()=>{
	  		this.bluetoothSerial.write('hello world').then(()=>{
	  			console.log('printing')
	  		}, ()=>{

	  			console.log('not printing')
	  		});
  		})
  		// this.getDefaultPrinter();
  		this.default_printer = item;
  		this.helper.toast.create({
  			message: "Printer telah diset default",
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
