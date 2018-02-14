import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelperProvider } from '../../providers/helper/helper'; 
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
		
	}

	signIn()
	{
		let url = this.helper.config.base_url('signin-process')+'?mobile';
		let data = this.user;
		console.log(data)
		this.helper.$.post(url, {
			user_email_or_phone: data.user_email_or_phone,
			user_password: data.user_password
		})
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad LoginPage');
	}

}
