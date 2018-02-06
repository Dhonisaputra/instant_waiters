import { Component, ViewChild, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { DbLocalProvider } from '../../providers/db-local/db-local';
import { HelperProvider } from '../../providers/helper/helper'; 
import { BillProvider } from '../../providers/bill/bill';
import { ProductPage } from '../product/product';
import * as $ from "jquery"

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
	users_outlet:number=1;
	bank_id:number=1;
  constructor(public navCtrl: NavController, public navParams: NavParams, private dbLocalProvider: DbLocalProvider, private events: Events, private helper: HelperProvider, private billProvider: BillProvider) {
  	
  	console.log(this.navParams.data)
  }

  ionViewDidEnter()
    {
		this.get_temporary_data();		
    	if(this.navParams.data.event)
    	{

	        switch (this.navParams.data.event) {
	            case "transaction.edit":
	                // code...
					this.edit_payment_method(this.navParams.data.bill)
	                break;
	            
	            default:
					this.get_temporary_data();
	                break;
	        }
    	}else
    	{
    	}

    }

  sumReturn(isInput:boolean=false)
  {
  	this.bill.paid = this.helper.IDRtoInt(this.bill.paid)
  	this.bill.paid = isNaN(this.bill.paid)? 0 : this.bill.paid;
  	this.bill.GrandTotalPrice = this.helper.IDRtoInt(this.bill.GrandTotalPrice)

  	this.bill.returnMoney =  parseInt(this.bill.paid) < parseInt(this.bill.GrandTotalPrice)? 0 : parseInt(this.bill.paid) - parseInt(this.bill.GrandTotalPrice) 
  	
  	this.bill.returnMoney = 'Rp.' + this.helper.intToIDR(this.bill.returnMoney)
  	this.bill.GrandTotalPrice = this.helper.intToIDR(this.bill.GrandTotalPrice)
  	this.bill.paid = 'Rp.' + this.helper.intToIDR(this.bill.paid)

  	console.log(this.bill.paid)
  	if(!isInput)
  	{
  		// $('#paid').focus();	
  	}
  	
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
		users_outlet: this.users_outlet,
		outlet: this.outlet,
		bank_id: this.bank_id,
		payment_method: this.paymentMethod,
		payment_nominal: parseInt(this.bill.paid),
		payment_complete_status: 1,
		pay_id: this.navParams.data.bill && this.navParams.data.bill.pay_id? this.navParams.data.bill.pay_id : null
	})
	.done((res)=>{
		res = !this.helper.isJSON(res)? res : JSON.parse(res);
		if(res.code == 200 && (res.action && res.action == 'insert'))
		{
			this.events.publish('reset.data.receipt',{})
		}else
		{
			console.error('Error when saving the bill')	
		}

	})
  }
  ionViewDidLoad() {
    this.dbLocalProvider.opendb('outlet')
	.then((val)=>{
		this.outlet = val;
		
	})
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
						this.bill.paid = this.billProvider.get_component('GrandTotalPrice');
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

	edit_payment_method(data:any)
	{

		let item = {
			GrandTotalPrice  : data.payment_total,
            sumPrice         : data.payment_bills,
            tax              : data.tax_percent,
            receipts         : [],
            visitor          : data.visitor_name,
            visitor_name     : data.visitor_name,
            table            : data.table_id,
            visitor_table    : data.table_id,
            taxAmount    	 : data.tax_percent,
            no_update 		 : true,
		}

		data.bills.forEach((val, index) => {
			
			let d = {
				amount: val.qty,
				id: val.product,
				price: val.price,
				totalPrice: val.total,
				type: val.type,
				name: val.name
			}
			item.receipts.push(d);
		})

		this.billProvider.set_data_receipts(item);
		this.events.publish('bill.update', item)

	}

	get_temporary_data()
	{
		let data = this.billProvider.data_receipts();

	    this.bill = data;
	    if(data.receipts.length < 1)
	    {
		  	this.dbLocalProvider.opendb('bill.data')
		  	.then( (res) =>{
	        console.log
		  		if(res.receipts.length < 1)
		  		{
		  			this.navCtrl.setRoot(ProductPage, {
		  				previous: 'payment-page',
		  				event: 'payment.cashier'
		  			})
		  		}else
		  		{
		  			this.bill = res;
					this.billProvider.set_data_receipts(res);
					this.events.publish('bill.update', {})
		  		}

		  	} )
	    	
	    }else
	    {
			this.billProvider.set_data_receipts(data);
			this.events.publish('bill.update', {})

	    }
	}
}
