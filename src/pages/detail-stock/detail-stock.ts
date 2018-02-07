import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
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
     log_stock:any;
     page_params  :object={
        action:'default', // [default, edit, pay]
        view_type: 'page', // [page, modal]
    }
    constructor(public navCtrl: NavController, private viewCtrl: ViewController, public navParams: NavParams, private helper:HelperProvider) {
        if(!this.navParams.data)
        {
            this.navCtrl.pop({});
        }
        console.log(this.navParams.data)
        this.product = this.navParams.data
        this.product.price_idr = this.helper.intToIDR(this.product.price)

        this.process_get_stock(this.product.id);

        if(this.navParams.data.page_params)
        {
            this.update_page_parameters(this.navParams.data.page_params);
        }
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad DetailStockPage');
    }
    update_page_parameters(data:any={})
    {
        this.page_params = Object.assign(this.page_params, data)
    }

    process_get_stock(idproduct:number)
    {
        let url = this.helper.config.base_url('admin/outlet/stock/log/get')
        $.post(url, {product: this.product.id, outlet:1, limit:10, page:1, order_by:'stock_date DESC'})
        .then((res)=>{
            res = this.helper.isJSON(res)? JSON.parse(res):res;
            console.log(res)
            this.log_stock = res.data;
            let stock = this.log_stock[0]?this.log_stock[0].stock_rest : 0;
            this.product.stock_opname = this.product.stock < 1? this.product.stock - this.log_stock[0].stock_rest : stock;
        })
    }
    closeModal()
    {
        this.viewCtrl.dismiss();
    }
}
