import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelperProvider } from '../../providers/helper/helper'; 
import * as $ from "jquery"


/**
 * Generated class for the DetailStockPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-stock',
  templateUrl: 'detail-stock.html',
})
export class DetailStockPage {
	tab:string = 'detail_product';
	product:any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, private helper:HelperProvider) {
  	if(!this.navParams.data)
  	{
  		this.navCtrl.pop({});
  	}
  	console.log(this.navParams.data)
  	this.product = this.navParams.data
  	this.product.price_idr = this.helper.intToIDR(this.product.price)

  	this.process_get_stock(this.product.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailStockPage');
  }

  process_get_stock(idproduct:number)
  {
  	let url = this.helper.config.base_url('admin/outlet/stock/log/get')
  	$.post(url, {product:1, limit:10, page:1})
  	.then((res)=>{
  		res = this.helper.isJSON(res)? JSON.parse(res):res;
  		console.log(res)
  	})
  }
}
