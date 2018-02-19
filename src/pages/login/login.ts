import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelperProvider } from '../../providers/helper/helper'; 
import { TablePage } from '../table/table'; 
import { ProductPage } from '../product/product'; 
import * as $ from "jquery"

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
	constructor(public navCtrl: NavController, public navParams: NavParams, private helper: HelperProvider) {
		this.check_credential();
	}

	check_credential()
	{
		let loader = this.helper.loadingCtrl.create({
			content: 'Melakukan pengecheckan pengguna. Silahkan tunggu..'
		})
		loader.present();
		
		this.helper.storage.get(this.helper.config.variable.credential)
		.then((val) => {
			if(!val || !val.outlet)
			{
				this.helper.local.set_params('is_login', false);
				loader.dismiss();

			}else
			{

				this.helper.storage.get(this.helper.config.variable.settings)
				.then( (resSettings)=>{
					this.helper.local.set_params(this.helper.config.variable.credential, val);
					this.helper.local.set_params('is_login', true);
					this.helper.local.set_params(this.helper.config.variable.settings, resSettings);
					let default_page = resSettings && !resSettings.choose_table_first?  ProductPage : TablePage ;
					this.navCtrl.setRoot(default_page);
					loader.dismiss();
				})


			}
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
	        	alertSuccess.present();
				this.navCtrl.setRoot(TablePage);
			}else
			{
	        	this.helper.local.set_params('is_login', false);
	        	if(res.msg)
	        	{
	        		alert.setMessage(res.msg);
	        	}
	        	alert.present();
			}

		} )	
		.always( ()=>{
			loader.dismiss();
		}) 
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad LoginPage');
	}

}
