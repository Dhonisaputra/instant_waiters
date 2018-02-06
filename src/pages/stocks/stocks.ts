import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';
import { DbLocalProvider } from '../../providers/db-local/db-local';
import { DetailStockPage } from '../detail-stock/detail-stock';

import { HelperProvider } from '../../providers/helper/helper'; 

import * as $ from "jquery"

/**
 * Generated class for the StocksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stocks',
  templateUrl: 'stocks.html',
})
export class StocksPage {

	items:any=[]
	original_items:any=[]
  outlet:number;
  detailStockPage:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private productProvider : ProductProvider, private helper:HelperProvider, private dbLocalProvider: DbLocalProvider) {
    this.detailStockPage = DetailStockPage;

    this.dbLocalProvider.opendb('outlet')
    .then((val)=>{
      this.outlet = val;
      
    	this.get_product({
        online:true,
        data: { 
          limit:0,
          outlet: this.outlet,
          fields: 'id,outlet,type,price,name,unit,stock,image,stock_latest_update',
          order_by: 'stock_latest_update DESC'
        }
    	})
    })
  }

  get_product(data:any)
  {
  	return this.productProvider.get_product(data)
  	.then((res) => {

  		res = !this.helper.isJSON(res)? res : JSON.parse(res); 
  		if(data.infinite == true)
  		{
  			this.items = this.items.concat(res.data);
  			this.original_items = this.original_items.concat(res.data);
  		}else
  		{
  			this.items = res.data;
  			this.original_items = res.data;
  		}
// this.filter_product()
	})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StocksPage');
  }

  filter_stock(ev:any)
  {

    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.original_items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }else
    {
      this.items = this.original_items;
    }

  }
  openDetailStock(item:any)
  {
    this.navCtrl.push(DetailStockPage, item)
  }
}
