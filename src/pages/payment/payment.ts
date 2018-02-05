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
	bill:any = {GrandTotalPrice:0, returnMoney: 0, paid:''}
	outlet: number;
	paymentMethod:number= 1;
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
  	this.bill.paid = this.helper.IDRtoInt(this.bill.paid)
  	this.bill.GrandTotalPrice = this.helper.IDRtoInt(this.bill.GrandTotalPrice)
  	this.bill.returnMoney =  parseInt(this.bill.paid) < parseInt(this.bill.GrandTotalPrice)? 0 : parseInt(this.bill.paid) - parseInt(this.bill.GrandTotalPrice) 
  	
  	this.bill.returnMoney = 'Rp.' + this.helper.intToIDR(this.bill.returnMoney)
  	this.bill.GrandTotalPrice = this.helper.intToIDR(this.bill.GrandTotalPrice)
  	this.bill.paid = 'Rp.' + this.helper.intToIDR(this.bill.paid)
  	
  }

  is_not_enough_money()
  {
  	let paid = this.helper.IDRtoInt(this.bill.paid)
  	let total = this.helper.IDRtoInt(this.bill.GrandTotalPrice)
  	return paid < total
  }

  payBill()
  {
  	if(this.is_not_enough_money())
  	{
  		alert("Not Enough Money!");
  		return false;
  	}
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

  priceToRupiah(number:any) 
	{ 
		let idr = this.helper.intToIDR(number)
		return idr;
	}

	calculate(event, type:string, value:any) 
	{
		this.bill.paid = !this.bill.paid?'' : this.helper.IDRtoInt(this.bill.paid);
		this.bill.paid = this.bill.paid.toString();
		switch (type) {
			case "numeric":
				value = parseInt(value);
				this.bill.paid += value
				this.sumReturn();
				break;
			
			case "action":
				switch (value) {
					case "pas":
						this.bill.paid = this.bill.GrandTotalPrice
						this.sumReturn();
						break;

					case "clear":
						this.bill.paid = 0
						this.sumReturn();
						break;

					case "rm":
						if(this.bill.paid.length > 0)
						{
							var a = this.bill.paid.split('')
							a.pop();
							this.bill.paid = a.join('');
						}else
						{
							this.bill.paid = 0;
						}
						this.sumReturn();
						break;
					
					case 'simpan':
						this.payBill()
						break;
					default:
						// code...
						break;
				}
				break;
		}

	}
}
