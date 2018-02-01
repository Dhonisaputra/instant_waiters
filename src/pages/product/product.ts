import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { ReceiptPage } from '../receipt/receipt';
import { ConfigProvider } from '../../providers/config/config';
import * as $ from "jquery"
/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-product',
 	templateUrl: 'product.html',
 })
 export class ProductPage {
 	receipt: any;
 	items: Array<{id: number, name: string, price: number }>;
 	lists: Array<{id: number, name: string, price: number, amount: number, totalPrice: number }>;

 	outlet: number;

 	constructor(public navCtrl: NavController, public navParams: NavParams,private events: Events, config: ConfigProvider) {
 		this.outlet = 1;
 		this.receipt = ReceiptPage;
 		this.items = [];
 		this.lists = [];
 		for (var i = 0; i < 20; ++i) {
 			this.items.push({id:i, name: 'Makanan '+i, price: 35000})
 		}

 		/*$.post( config.base_url('admin/outlet/product/get'), {outlet:this.outlet},{} )
 		.done((res) => {
 			res = JSON.parse(res)
 			console.log(res)
 			// this.items = res.data;
 		})*/
 		/*.then()*/
 	}

 	addToList(item)
 	{
 		let existence = this.check_existences_receipt(item.id)
 		if(existence.exist)
 		{
 			this.lists[existence.index].amount = this.lists[existence.index].amount + 1;
 			this.lists[existence.index].totalPrice = this.lists[existence.index].amount * this.lists[existence.index].price;
 			this.events.publish('receipt-data', this.lists)
 		}else{
 			item.amount = 1;
 			item.totalPrice = item.price * item.amount;
 			this.lists.push(item)
 			this.events.publish('receipt-data', this.lists)
 			console.log(existence, item, this.lists)
 		}
 	}

 	check_existences_receipt(id)
 	{
 		var result = this.lists.map(function(res){
 			return res.id
 		}).indexOf(id);
 		return {index: result, exist: result < 0? false : true}
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad ProductPage');
 	}

 }
