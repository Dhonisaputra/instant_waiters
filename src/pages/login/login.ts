import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { HelperProvider } from '../../providers/helper/helper'; 
import { TablePage } from '../table/table'; 
import { ProductPage } from '../product/product'; 
import { OutletListPage } from '../outlet-list/outlet-list'; 
import * as $ from "jquery"
import { Market } from '@ionic-native/market';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	user:any={}
	win:any=window
	constructor(public navCtrl: NavController, public navParams: NavParams, private helper: HelperProvider, private platform:Platform, public market:Market) {
			this.check_credential()
		

	}

	check_credential()
	{
			
			let deff = this.helper.$.Deferred();

			let url = this.helper.config.base_url('apps/apk/version/latest')+'?mobile';
			this.helper.loading_countdown({url: url, data:{type:'waiters'}})
			.then((res:any)=>{
				res = this.helper.isJSON(res)? JSON.parse(res) : res;
				if(res.code == 200)
				{
					if(res.data.apk_version_build != this.helper.config.build_number)
					{
						if(res.data.force_update == 1)
						{
							deff.reject(true)
							this.helper.alertCtrl.create({
								title: "Versi aplikasi terbaru ditemukan",
								message: "Silahkan update folarpos instant anda",
								enableBackdropDismiss: false,
								buttons:[{
									text: "tutup",
									handler: ()=>{
										this.helper.closeApp();
									}
								}, {
									text: "Perbarui aplikasi",
									handler: ()=>{
										this.market.open('id.co.folarpos.instant.cashier.waiters')
									}
								}]
							}).present()
						}else
						{
							this.helper.alertCtrl.create({
								title: "Versi aplikasi terbaru ditemukan",
								message: "Apakah anda ingin memperbarui aplikasi",
								enableBackdropDismiss: false,
								buttons:[{
									text: "Tidak",
									handler: ()=>{
										deff.resolve(true)
									}
								}, {
									text: "Ya, Perbarui aplikasi",
									handler: ()=>{
										deff.reject(true)
										window.open(res.data.url_download, '_blank')
									}
								}]
							}).present()
						}
					}else
					{
						deff.resolve(true)
					}
				}
			})

			this.helper.$.when(deff.promise())
			.then(()=>{

				this.helper.storage.get(this.helper.config.variable.credential)
				.then((val) => {
					if(!val || !val.outlet)
					{
						this.helper.local.set_params('is_login', false);

					}else
					{

						this.helper.storage.get(this.helper.config.variable.settings)
						.then( (resSettings)=>{
							val.outlet_device = {};
							this.helper.local.set_params(this.helper.config.variable.credential, val);
							this.helper.local.set_params('is_login', true);
							this.helper.local.set_params(this.helper.config.variable.settings, resSettings);
							let default_page = resSettings && !resSettings.choose_table_first?  ProductPage : TablePage ;
							this.navCtrl.setRoot(OutletListPage);
						})


					}
				})
			})
	}

	signIn()
	{

		let loader = this.helper.loadingCtrl.create({
			content: 'Silahkan tunggu..'
		})
		let alert = this.helper.alertCtrl.create({
	      	title: 'Gagal login',
	      	message: 'Terjadi kesalahan saat melakukan login! silahkan ulangi kembali!',
	      	buttons: ['OK']
	    });

	    let alertSuccess = this.helper.alertCtrl.create({
	      	title: 'Login diterima',
	      	subTitle: 'Memindahkan menuju kehalaman utama!',
	      	buttons: ['OK']
	    });

		let url = this.helper.config.base_url('signin-process')+'?mobile';
		let data = this.user;
		if(!data.user_email_or_phone || !data.user_password)
		{
			alert.setMessage('Email dan Password tidak boleh kosong!');
			alert.present();
			return false;
		}
		loader.present();
		this.helper.$.post(url, {
			user_email_or_phone: data.user_email_or_phone,
			user_password: data.user_password
		})
		.then( (res) => {
			res = !this.helper.isJSON(res)? res : JSON.parse(res);
			if(res.status == 1)
			{
	        	this.helper.local.set_params('is_login', true);
				this.helper.local.set_params(this.helper.config.variable.credential, res);
				this.helper.storage.set(this.helper.config.variable.credential, res);
	        	// alertSuccess.present();
				this.navCtrl.setRoot(OutletListPage);
			}else
			{
	        	this.helper.local.set_params('is_login', false);
	        	if(res.msg)
	        	{
	        		alert.setMessage(res.msg);
	        	}
	        	alert.present();
			}

		}, (err)=>{
			this.helper.alertCtrl.create({
				title: "Login gagal",
				message: "SIlahkan check data login anda",
				buttons: ["OK"]
			}).present();
		})	
		.always( ()=>{
			loader.dismiss();
		}) 
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad LoginPage');
	}

}
