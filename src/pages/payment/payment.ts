import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { DbLocalProvider } from '../../providers/db-local/db-local';
import { HelperProvider } from '../../providers/helper/helper'; 
import { BillProvider } from '../../providers/bill/bill';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
	bill:any = {GrandTotalPrice:0, returnMoney: 0, paid:0}
	outlet: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private dbLocalProvider: DbLocalProvider, private events: Events, private helper: HelperProvider, private billProvider: BillProvider) {
  	this.dbLocalProvider.opendb('outlet')
	.then((val)=>{
		this.outlet = val;
		
	})
  	this.dbLocalProvider.opendb('bill.data')
  	.then( (res) =>{
  		this.bill = res;
  		console.log(res)
		this.events.publish('receipt-data', {data: res.receipts, latest: {}})

  	} )
  }

  sumReturn()
  {
  	this.bill.returnMoney =  parseInt(this.bill.paid) < parseInt(this.bill.GrandTotalPrice)? 0 : parseInt(this.bill.paid) - parseInt(this.bill.GrandTotalPrice) 
  }

  payBill()
  {
  	this.billProvider.save({
		users_outlet: 1,
		outlet: this.outlet,
		bank_id: 1,
		payment_method: 1,
		payment_nominal: parseInt(this.bill.paid),
		payment_complete_status: 1
	})
	.done((res)=>{
		res = !this.helper.isJSON(res)? res : JSON.parse(res);
		if(res.code == 200)
		{
			this.events.publish('reset.data.receipt',{})
		}else
		{
			console.error('Error when saving the bill')	
		}

	})
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

}
