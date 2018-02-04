import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';

/**
 * Generated class for the BillSavedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-bill-saved',
 	templateUrl: 'bill-saved.html',
 })
 export class BillSavedPage {

 	constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController ) {
 	}

 	closeModal()
 	{
 		this.viewCtrl.dismiss();
 	}
 	ionViewDidLoad() {
 		console.log('ionViewDidLoad BillSavedPage');
 	}
 }
