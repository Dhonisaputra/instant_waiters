import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DbLocalProvider } from '../../providers/db-local/db-local';
import { ConfigProvider } from '../../providers/config/config';

import { HelperProvider } from '../../providers/helper/helper'; 

import * as $ from "jquery"

/**
 * Generated class for the TransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction',
  templateUrl: 'transaction.html',
})
export class TransactionPage {
	items:any=[]
	original_items:any=[]
	outlet:number;
	filter_by:string;
	filter_input:any;
	edit_transaction_status:boolean=true;


  transaction_params:any = {data:{limit: 20, page: 1}};
  constructor(public navCtrl: NavController, public navParams: NavParams, private dbLocalProvider:DbLocalProvider, private helper: HelperProvider, private config: ConfigProvider) {
  	this.dbLocalProvider.opendb('outlet')
    .then((val)=>{
      this.outlet = val;
      
    	this.get_transaction({
	        online:true,
	        infinite: false,
	        data: { 
	          limit:20,
	          outlet: this.outlet,
	          page: 1,
	          fields: 'pay_id,users_outlet,table_id,bank_id,discount_id,payment_method,outlet,payment_nominal,payment_date,visitor_name,payment_bills,tax_percent,tax_nominal,paid_date,payment_total,paid_nominal,paid_with_bank_nominal,payment_complete_status,payment_complete_note,payment_cancel_status,payment_cancel_note,bills'
	        }
    	})
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionPage');
  }

  get_transaction(data:any={data:{}})
  {
  	this.transaction_params = data;

  	let url = this.config.base_url('admin/outlet/transaction/get')
  	return $.post(url, data.data)
  	.done((res) => {

  		res = !this.helper.isJSON(res)? res : JSON.parse(res); 
  		if(res.code == 200)
  		{

	  		if(data.infinite == true)
	  		{
	  			this.items = this.items.concat(res.data);
	  			this.original_items = this.original_items.concat(res.data);
	  		}else
	  		{
	  			this.items = res.data;
	  			this.original_items = res.data;
	  		}
  		}else
  		{
  			alert('Error occured while fetching data transaction!')
  		}
// this.filter_transaction()
	  })
  }

  infinite_scroll(ev:any={})
  {
  	this.transaction_params.data.page += 1;
  	this.transaction_params.infinite = true;
  	this.get_transaction(this.transaction_params)
  	.then( ()=>{
  		if(this.transaction_params.infinite == true && ev.complete)
  		{
  			ev.complete()
  		}
  	} )
  }


  filter_transaction(ev:any={})
  {

  	let val = this.filter_input;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {

    	this.transaction_params.infinite = false;
    	this.transaction_params.data.page = 1;

      	if(this.filter_by == 'visitor_name')
      	{
	      	this.transaction_params.data.like = this.transaction_params.data.like? this.transaction_params.data.like : []
	  		this.transaction_params.data.like = [[this.filter_by, val]]; 
	  		delete this.transaction_params.data.where; 
      	}else
      	{
	      	this.transaction_params.data.where = this.transaction_params.data.where? this.transaction_params.data.where : {}
	  		this.transaction_params.data.where[this.filter_by] = val;
	  		delete this.transaction_params.data.like; 
      	}
	    this.get_transaction(this.transaction_params)
    }else
    {
      this.items = this.original_items;
    }
  	

  }

  edit_transaction(i, item)
  {
  	console.log(i, item)
  }

}
