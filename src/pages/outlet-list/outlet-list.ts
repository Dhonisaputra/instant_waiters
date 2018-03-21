import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { HelperProvider } from '../../providers/helper/helper';
import { LoginPage } from '../login/login';

/**
 * Generated class for the OutletListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-outlet-list',
  templateUrl: 'outlet-list.html',
})
export class OutletListPage {
	uid:any='';
	outlets:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public device_id: UniqueDeviceID, private helper:HelperProvider, public platform: Platform) {
  	this.device_id.get()
  	.then((uuid: any)=>{
  		this.uid = uuid;
	  	this.platform.ready().then(() => {
	      // Okay, so the platform is ready and our plugins are available.
	      // Here you can do any higher level native things you might need.
	      	console.log(this.helper.local.get_params(this.helper.config.variable.credential))
		  	if(!this.helper.local.get_params(this.helper.config.variable.credential))
		  	{
		  		this.navCtrl.setRoot(LoginPage)
		  		return false;
		  	}
			let users_id = this.helper.local.get_params(this.helper.config.variable.credential).users.users_id;
		  	let url = this.helper.config.base_url('admin/outlet/employee');
		  	console.log(this.uid)
		  	this.helper.$.post(url, {users_id:users_id, smartphone:true, uuid:this.uid})
		  	.then((res)=>{
		  		res = JSON.parse(res)
		  		this.outlets = res
		  	})

	    });
  	});

  }

  selectOutlet(item)
  {
  	if(item.counter_uuid == 0)
  	{
  		this.helper.alertCtrl.create({
  			title: "",
  			message: "Device anda belum terdaftar dalam outlet "+item.outlet_name+' pilih "Kirim permintaan akses" untuk mengirimkan permintaan akses kepada outlet.',
  			buttons: [{
  				text: "Kirim permintaan akses",
  				handler: ()=>{

  				}
  			}, "Tutup"]
  		}).present();
  	}
  }

  ionViewDidLoad() {
  	
    // console.log('ionViewDidLoad OutletListPage');
  }

}
