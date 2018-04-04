import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ErrorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-error',
  templateUrl: 'error.html',
})
export class ErrorPage {

	page_params: any={code:500, message:"Page not found"}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.page_params = Object.assign(this.page_params, this.navParams.data)
  	console.log(this.page_params)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ErrorPage');
  }

}
