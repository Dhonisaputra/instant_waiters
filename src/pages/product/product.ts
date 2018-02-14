import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, Events , ModalController, LoadingController, AlertController, ActionSheetController, FabContainer, PopoverController  } from 'ionic-angular';
import { ReceiptPage } from '../receipt/receipt';
import { PaymentPage } from '../payment/payment';
import { TransactionPage } from '../transaction/transaction';
import { DetailStockPage } from '../detail-stock/detail-stock';
import { TablePage } from '../table/table';
import { TooltipProductPage } from '../tooltip-product/tooltip-product';

import { ProductProvider } from '../../providers/product/product';
import { BillProvider } from '../../providers/bill/bill';
import { DbLocalProvider } from '../../providers/db-local/db-local';
import { HelperProvider } from '../../providers/helper/helper'; 

import { LocalNotifications } from '@ionic-native/local-notifications';

import {BillSavedPage} from '../bill-saved/bill-saved'
import * as $ from "jquery"
import * as moment from 'moment';
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
export class ProductPage 
{
	receipt: any;
	searchinput:boolean=false;
	items: Array<{id: number, name: string, price: number }>;
	lists: Array<{id: number, name: string, price: number, amount: number, totalPrice: number }>;
	original_items: Array<{id: number, name: string, price: number, amount: number, totalPrice: number }>;
	outlet: number;
	unpaid_bill_length: number = 0;
	filter_type_selected: number = 0;
	filter_product_name: string = '';
	filter_sort_product: string = '';
	page_params:any={
		use_temporary_data:false,
		product_width: {
			default: 6,
			xs: 6,
			sm: 4,
			md: 3

		}
	}
	public paymentPage:any=PaymentPage;


	constructor(
		public appCtrl 				: App, 
		public navCtrl 				: NavController, 
		public navParams 			: NavParams,
		private events 				: Events, 
		public productProvider 		: ProductProvider, 
		public billProvider 		: BillProvider, 
		public modalCtrl			: ModalController,
		private localNotifications	: LocalNotifications, 
		private dbLocalProvider		: DbLocalProvider, 
		public helper				: HelperProvider, 
		private loadingCtrl		 	: LoadingController, 
		private alertCtrl			: AlertController,
		private actionSheetCtrl		: ActionSheetController,
		private popoverController 	: PopoverController
	) {
		

		
		this.receipt = ReceiptPage;
		this.items = [];
		this.lists = [];

		events.subscribe('zoom.controller', (res) => {
			this.product_zoom(res.event)
		});
		events.subscribe('receive.data.receipt', (res) => {
			var data = {
				table_id: res.table,
				outlet: this.outlet,
				visitor_name: res.visitor,
				users_outlet: 1,
				bank_id: 1,
				payment_method: 1,
				payment_nominal: 0,
				payment_bills: res.sumPrice,
				payment_total: res.GrandTotalPrice,
				receipt: {}
			}

			data.receipt = res;
			if(!res.visitor_name || !res.visitor_table || res.receipts.length < 1)
			{
				console.error('Please fill table and name');
				alert('Please make sure table number, visitor name and product is filled');
				return false;
			}
			if(res._passed_data.pay == false)
			{
				
				billProvider.save(data)
				.then((res)=>{

					res = !this.helper.isJSON(res)? res : JSON.parse(res);
					if(res.code == 500)
					{
						console.error('Need visitor and table number!');
						return false;
					}else
					{					

						this.events.publish('reset.data.receipt',{})
						this.get_unpaid_bill();
						
					}
				})
			}else
			{
				this.appCtrl.getRootNav().push(PaymentPage)
			}
		});

		if(this.navParams.data.page_params)
        {
            this.update_page_parameters(this.navParams.data.page_params);
        }

		/*this.localNotifications.schedule({
		  id: 1,
		  text: 'Single ILocalNotification',
		});*/
	}

	ionViewDidLoad() {
		this.outlet = this.helper.local.get_params(this.helper.config.variable.credential).data.outlet_id;
	
		this.refresh_data({});
		this.billProvider.count_pricing();
		this.get_unpaid_bill();
		
		/*this.dbLocalProvider.opendb('outlet')
		.then((val)=>{
			
		})*/

	}
	update_page_parameters(data:any={})
    {
        this.page_params = Object.assign(this.page_params, data)
    }

	ionViewWillEnter()
    {
    	var index;
		this.billProvider.pull_data_bill()
		.then( ()=>{

			switch (this.navParams.data.event) {

				case "transaction.edit":
					this.billProvider.update_bill_component(this.navParams.data.bill,true)
					this.billProvider.count_pricing();
					this.events.publish('bill.update', {})

					this.navParams.data = {} // this code use to reset navParams. bcause, whenever a page pushed from this page and popped back, this data bill item always from the previous event. 
					break;
				
				default:
					// code...
					break;
			}

			// console.log(this.navParams.data.trigger_event)
			switch (this.navParams.data.trigger_event) {
				case "new.order":
				case "order.new":
					this.billProvider.reset_bill();
	                this.billProvider.update_bill_component({},true);
					this.events.publish('reset.data.receipt',{})
					break;

				case "order.reset":
					this.billProvider.reset_order_session();
					this.billProvider.set_bill_component('orders',[]);
					this.billProvider.set_bill_component('visitor_name','');
	                this.billProvider.update_bill_component({},true);
					this.events.publish('bill.update', {})
					break;

				case "order.pick":
					index = Object.keys(this.navParams.data.table).shift();
				    this.billProvider.set_bill_component('table_id', this.navParams.data.table[index].tab_id)
				    this.billProvider.set_bill_component('table_name', this.navParams.data.table[index].tab_name)
				    this.billProvider.set_bill_component('table', this.navParams.data.table[index])
		            this.billProvider.update_bill_component({},true);
					this.events.publish('bill.update', {})

					break;
					
				case "table.change":
					index = Object.keys(this.navParams.data.table).shift();
					this.billProvider.set_bill_component('table_id', this.navParams.data.table[index].tab_id)
					this.billProvider.set_bill_component('table_name', this.navParams.data.table[index].tab_name)
					this.billProvider.set_bill_component('table', this.navParams.data.table[index])
	                this.billProvider.update_bill_component({},true);
	                // this.billProvider.pull_data_bill();
					this.events.publish('bill.update', {})
					break;
				
				default:
					// code...
					break;
			}

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
		}).always( ()=>{
		} )
	}

	refresh_data(refresher:any={})
	{
		let loader = this.loadingCtrl.create({
	      content: "Please wait...",
	    });
	    loader.present();
	    
		let data:any = {outlet:this.outlet}
		if(this.filter_sort_product != '')
		{
			data.order_by = this.filter_sort_product;
		}

		if(this.filter_type_selected > 0)
		{	
			data.where = data.where? data.where : {}
			data.where.type = this.filter_type_selected;
		}else
		{
			if(data.where && data.where.type)
			{
				delete data.where.type;
			}
		}

		if(this.filter_product_name.length > 0)
		{
			data.like = data.like? data.like : []
			data.like.push(['name', this.filter_product_name])
		}else{
			delete data.like
		}

		data.page = 1;

		this.get_product({data: data, online:true})
		.then(()=>{
			if(refresher.complete)
			{
				refresher.complete();
			}
		})
		.always(()=>{
    		loader.dismiss();
		})
	}

	infinite_product(ev:any={})
	{
		/*var load = this.loadingCtrl.create({
	      content: "Silahkan tunggu",
	    });*/
		// load.present()
		this.productProvider.last_options.data.page += 1;
		this.productProvider.last_options.infinite = true;
		this.get_product(this.productProvider.last_options)
		.then( ()=>{
			if(ev.complete)
			{
				ev.complete()
			}
			// load.dismiss();
		})

	}
	add_to_bill(item)
	{
		// check is this bill have been saved before.
		item = Object.assign({},item)
		
		if(!this.billProvider.isset_order_session())
		{
			this.billProvider.add_order_session();
		}

		item.order_session = this.billProvider.get_active_order_session();
		this.billProvider.insert_item(item)
		this.billProvider.set_order_session_item_counter(item.order_session);
		this.events.publish('bill.update', item)
	}

	reset_receipts()
	{
		this.billProvider.reset_bill();
        this.billProvider.update_bill_component({},true);
		this.events.publish('bill.update', {})
		this.items = this.original_items;

		// this.events.publish('reset.data.receipt',{})
	}

	
	openSavedBill()
	{
		this.navCtrl.push(TransactionPage, {
				body:{
					where: {payment_nominal:0}
				},
				today:true,
				page_params:{
					action:'pay'
				},
				previous: 'product-page',
				event: 'transaction.uncomplete'
			}
		)
	}

	saveBill()
	{
		let alertVisitor = this.alertCtrl.create({
			title: 'Nama pembeli',
			inputs: [
				{
					name: 'alert_visitor_name',
					placeholder: 'Nama pengunjung'
				},
			],
			buttons: [
		      {
		        text: 'Cancel',
		        role: 'cancel',
		        handler: data => {
		        }
		      },
		      {
		        text: 'Selesai',
		        handler: data => {
		          	this.billProvider.set_bill_component('visitor_name', data.alert_visitor_name)
		          	this.billProvider.update_bill_component({},true)
					this.events.publish('bill.update', {})
					setTimeout(() => {
						this.process_save_bill()
						.then( () =>{
							alertVisitor.dismiss();
						} )
					},300)
		        }
		      }
		    ]
		})


			if(!this.billProvider.get_bill_component('visitor_name') || this.billProvider.get_bill_component('visitor_name').length < 1)
			{
				alertVisitor.present();
			}else
			{
				this.process_save_bill()
			}

		// this.events.publish('get.data.receipt', {pay:false})
		
	}

	get_unpaid_bill()
	{
		return this.billProvider.get_unpaid_bill({
			outlet: this.outlet,
			fields: 'payment_nominal,outlet,pay_id,payment_date_only',
			where: {
				payment_date_only: moment().format('YYYY-MM-DD'),
				payment_nominal: 0,
			}
		})
		.then((res) => {
			res = !this.helper.isJSON(res)? res : JSON.parse(res);
			this.unpaid_bill_length = res.data.length
		})
	}

	pay_bill()
	{

		let alertVisitor = this.alertCtrl.create({
			title: 'Nama pembeli',
			inputs: [
				{
					name: 'visitor_name',
					placeholder: 'Nama pembeli'
				},
			],
			buttons: [
		      {
		        text: 'Cancel',
		        role: 'cancel',
		        handler: data => {
		        }
		      },
		      {
		        text: 'Selesai',
		        handler: data => {
		        	if(data.visitor_name == '' || !data.visitor_name)
		        	{
		        		alert("Nama pembeli tidak boleh kosong!");
		        		return false;
		        	}
		          	this.billProvider.set_bill_component('visitor_name', data.visitor_name)
					this.events.publish('bill.update', {})
					setTimeout(() => {
						alertVisitor.dismiss();
						this.appCtrl.getRootNav().push(PaymentPage)
					},300)
		        }
		      }
		    ]
		})
		
		this.error_product();
		
		/*LINE FOR REQUIRED TABLE ID
		=========================================================================
		*/
		/*if(!this.billProvider.get_bill_component('table_id') )
		{
			this.navCtrl.setRoot(TablePage, {
				previous: 'product-page',
				event: 'bill.changeTable',
				trigger_event: 'table.change',
			})
			return false;
		}*/
		/*
		===========================================================================
		END OF LINE FOR REQUIRED TABLE ID*/

		if(!this.billProvider.get_bill_component('visitor_name') || this.billProvider.get_bill_component('visitor_name').length < 1)
		{
			alertVisitor.present();
		}else
		{
			this.appCtrl.getRootNav().push(PaymentPage)
		}
		// this.events.publish('get.data.receipt', {pay:true})

	}


	private process_save_bill()
	{
		return this.billProvider.save({
			users_outlet: 1,
			outlet: this.outlet,
			bank_id: 1,
			payment_method: 1,
			payment_nominal: 0,
		})
		.done((res)=>{
			res = !this.helper.isJSON(res)? res : JSON.parse(res);
			if(res.code == 200)
			{
				this.events.publish('reset.data.receipt',{})
				this.get_unpaid_bill();
			}else
			{
			}
		})
	}

	print_bill()
	{
	}

	filter_product()
	{
		this.items = this.original_items;
		if(this.filter_type_selected > 0)
		{	
			this.items = this.original_items.filter((res:any) => {
				return res.type == this.filter_type_selected
			});
		}

		if(this.filter_product_name.length > 0)
		{
			this.items = this.original_items.filter((res:any) => {
				return res.name.indexOf(this.filter_product_name) > -1
			});
		}

		return this.items;

	}

	priceToRupiah(number:any) 
	{ 
		let idr = this.helper.intToIDR(number)
		return idr;
	}

	private error_product()
	{
		let alertErrorProduct = this.alertCtrl.create({
		    title: 'Kesalahan',
		    subTitle: 'Silahkan pilih salah satu produk',
		});

		if(this.billProvider.get_bill_component('orders').length < 1)
		{
			alertErrorProduct.present();
			return false;
		}
	}

	openDetailProduct(item, index)
	{
		item.page_params = {view_type:'modal', show_history_stock:false};
		item.index = index;
		let modal = this.modalCtrl.create(DetailStockPage, item)
		modal.present();
	}

	product_sort() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Favorit',
          handler: () => {
            this.filter_sort_product = "favorite DESC";
            this.refresh_data()
          }
        },{
          text: 'Termahal',
          handler: () => {
          	this.filter_sort_product = "price DESC";
            this.refresh_data()
          }
        },{
          text: 'Termurah',
          handler: () => {
          	this.filter_sort_product = "price ASC";
            this.refresh_data()
          }
        },{
          text: 'Stok',
          handler: () => {
          	this.filter_sort_product = "stock DESC";
            this.refresh_data()
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          	// actionSheet.dismiss();
          }
        }
      ]
    });
    actionSheet.present();
  }

  toggleSearchInput()
  {
  	this.searchinput = !this.searchinput;
  }

  product_zoom_controller(value:number, type:string)
  {
  	let ruleLen = [2,3,4,6];
  	let index = ruleLen.indexOf(value);
  	/*if(index<0)
  	{
  		return value;
  	}*/
  	switch (type) {
  		case "in":
  			value = index+1 > ruleLen.length -1 ? ruleLen[ruleLen.length -1] : ruleLen[index+1];
  			break;

  		case "out":
  			value = index-1 < 0? ruleLen[0] : ruleLen[index-1];
  			break;
  	}

  	return value;

  }
  product_zoom(type:string='in')
  {

	this.page_params.product_width.xs = this.product_zoom_controller(this.page_params.product_width.xs, type)
	this.page_params.product_width.sm = this.product_zoom_controller(this.page_params.product_width.sm, type)
	this.page_params.product_width.md = this.product_zoom_controller(this.page_params.product_width.md, type)

  	/*switch (type) {
  		case "in":
  			this.page_params.product_width.xs = this.page_params.product_width.xs < 6?  : this.page_params.product_width.xs;
  			this.page_params.product_width.sm = this.page_params.product_width.sm < 6?  : this.page_params.product_width.sm;
  			this.page_params.product_width.md = this.page_params.product_width.md < 6?  : this.page_params.product_width.md;
  			break;

  		case "out":
  			this.page_params.product_width.xs = this.page_params.product_width.xs > 2? this.page_params.product_width.xs - 1 : this.page_params.product_width.xs;
  			this.page_params.product_width.sm = this.page_params.product_width.sm > 2? this.page_params.product_width.sm - 1 : this.page_params.product_width.sm;
  			this.page_params.product_width.md = this.page_params.product_width.md > 2? this.page_params.product_width.md - 1 : this.page_params.product_width.md;
  			break;
  		
  		default:
  			// code...
  			break;
  	}*/
  }
  tooltip_present(ev:any)
  {
  	let popover = this.popoverController.create(TooltipProductPage, {
  		zoom: this.product_zoom
  	});
  	popover.present({
  		ev: ev,
  		
  	});
  }

}
