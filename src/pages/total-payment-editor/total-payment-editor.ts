import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelperProvider } from '../../providers/helper/helper'; 
import { BillProvider } from '../../providers/bill/bill';


import * as $ from "jquery"
import * as moment from 'moment';
/**
 * Generated class for the TotalPaymentEditorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-total-payment-editor',
  templateUrl: 'total-payment-editor.html',
})
export class TotalPaymentEditorPage {

	bill:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams, public billProvider:BillProvider, public helper:HelperProvider) {
  	this.bill = this.billProvider.get_bill_component()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TotalPaymentEditorPage');
  }

  countChargeNominal()
  {

  }

}
