import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { HelperProvider } from '../../providers/helper/helper';
import { LoginPage } from '../login/login';
import { TablePage } from '../table/table'; 
import { ProductPage } from '../product/product'; 



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
	  	this.get_outlet()
  	});

  }

  get_outlet_refresh($event)
  {
  	this.get_outlet()
  	.done(()=>{
  		if(typeof $event.complete == 'function')
		{
			$event.complete();
		}
  	})

  }

  get_outlet()
  {
  	if(!this.helper.local.get_params(this.helper.config.variable.credential))
  	{
  		this.navCtrl.setRoot(LoginPage)
  		return false;
  	}
	let users_id = this.helper.local.get_params(this.helper.config.variable.credential).users.users_id;
  	let url = this.helper.config.base_url('admin/outlet/employee');
  	return this.helper.$.post(url, {users_id:users_id, smartphone:true, uuid:this.uid})
  	.then((res)=>{
  		res = JSON.parse(res)
  		this.outlets = res
  	})
  }

  selectOutlet(item)
  {
  	if(item.device_status_confirmation && item.device_status_confirmation == 1)
  	{
  		this.helper.alertCtrl.create({
			title: "Menunggu konfirmasi",
			message: "Anda telah melakukan permintaan hak akses, silahkan menunggu konfirmasi dari outlet",
			buttons: ["OK"]
		}).present();
  		return false;
  	}else if(!item.device_status_confirmation)
  	{
  		this.helper.alertCtrl.create({
  			title: "",
  			message: "Device anda belum terdaftar dalam outlet "+item.outlet_name+' pilih "Kirim permintaan akses" untuk mengirimkan permintaan akses kepada outlet.',
  			buttons: [{
  				text: "Kirim permintaan akses",
  				handler: ()=>{
  					let loading = this.helper.loadingCtrl.create({
  						content: "Mengirimkan permintaan. Silahkan tunggu!"
  					});

  					loading.present();

					let users_id = this.helper.local.get_params(this.helper.config.variable.credential).users.users_id;
		  			let url = this.helper.config.base_url('admin/device/authority/request');
		  			let data = {
		  				users_id: users_id,
		  				outlet_id: item.outlet_id,
		  				uuid: this.uid
		  			}
  					this.helper.$.post(url, data)
  					.then((res)=>{
  						res = JSON.parse(res);
  						switch (res.code) {
  							case 200:
  								this.helper.alertCtrl.create({
	  								title: "Permintaan hak akses sukses",
	  								message: "Menunggu konfirmasi dari admin outlet",
	  								buttons: ["OK"]
	  							}).present();
  								break;

  							case 304:
  								this.helper.alertCtrl.create({
	  								title: "Permintaan hak akses outlet",
	  								message: "Permintaan telah dikirimkan. Menunggu konfirmasi outlet",
	  								buttons: ["OK"]
	  							}).present();
  								break;
  							
  							default:
  								this.helper.alertCtrl.create({
	  								title: "Permintaan hak akses Gagal",
	  								message: "Terdapat kesalahan saat melakukan pengiriman hak akses ke outlet. Silahkan ulangi kembali!",
	  								buttons: ["OK"]
	  							}).present();
  								break;
  						}
  					})
  					.fail(()=>{
  						this.helper.alertCtrl.create({
							title: "Permintaan hak akses Gagal",
							message: "Terdapat kesalahan saat melakukan pengiriman hak akses ke outlet. Silahkan ulangi kembali!",
							buttons: ["OK"]
						}).present();
  					})
  					.always(()=>{
  						loading.dismiss();
  					})
  				}
  			}, "Tutup"]
  		}).present();
  	}else
  	{
  		let data = this.helper.local.get_params(this.helper.config.variable.credential);
		this.helper.storage.set(this.helper.config.variable.credential, data);
		this.helper.storage.get(this.helper.config.variable.settings)
		.then( (resSettings)=>{
			let default_page = resSettings && !resSettings.choose_table_first?  ProductPage : TablePage ;
			this.navCtrl.setRoot(default_page);
		})

  	}
  }

  ionViewDidLoad() {
  	
    // console.log('ionViewDidLoad OutletListPage');
  }

}
