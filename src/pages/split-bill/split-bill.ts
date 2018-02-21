import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelperProvider } from '../../providers/helper/helper'; 
import { BillProvider } from '../../providers/bill/bill'; 
import { ProductPage } from '../product/product'; 

/**
 * Generated class for the SplitBillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-split-bill',
 	templateUrl: 'split-bill.html',
 })
 export class SplitBillPage {
 	bill_index: number;
 	constructor(public navCtrl: NavController, public navParams: NavParams, private helper: HelperProvider, private billProvider:BillProvider) {

 		this.helper.events.subscribe('bill.item.clicked',(data) => {
 			let item = Object.assign(data.item,{});

 			let qty = this.billProvider.get_order_item(data.index, 'qty');
 			if(qty > 0)
 			{
 				qty = qty - 1;
 				this.billProvider.set_order_item(data.index, 'qty', qty);

 				if(!this.billProvider.get_nota_order(this.bill_index, data.index))
 				{
 					let ndata = Object.assign({}, data.item);
 					ndata.qty = 1;
					delete ndata.pay_id;
					delete ndata.detail_id;
 					this.billProvider.set_nota_order(this.bill_index, data.index, null, ndata);
 				}else
 				{
 					let nqty = this.billProvider.get_nota_order(this.bill_index, data.index, 'qty') + 1;
					this.billProvider.set_nota_order(this.bill_index, data.index, 'qty', nqty);
 				}

 				if(qty <=0)
 				{
 					this.billProvider.remove_order(data.index);
 				}
 			}
		
			this.billProvider.count_pricing();
			this.helper.events.publish('bill.update', {})

			console.log(this.billProvider.get_nota(this.bill_index))

		});


 	}


 	ionViewDidLoad() {
 		console.log('ionViewDidLoad SplitBillPage');
 	}


 	ionViewWillEnter() {
 		this.billProvider.update_bill_component(this.navParams.data.bill,false)
		this.billProvider.count_pricing();
		this.helper.events.publish('bill.update', {})

		let cBill = Object.assign(this.navParams.data.bill,{})
		cBill.orders = [];
		cBill.ref_bill = cBill.pay_id;
		delete cBill.pay_id;
		cBill.visitor_name = "tester split";
		this.bill_index = this.billProvider.new_nota(cBill)

		/*
		this.billProvider.set_header();
		this.billProvider.insert_item();
		this.billProvider.insert_item();
		this.billProvider.insert_item();
		
		*/

 	}

 	ionViewWillUnload()
 	{
 		this.helper.events.unsubscribe('bill.item.clicked')
 	}

 	pay_transaction()
    {
    	console.log(this.billProvider.get_nota(this.bill_index))

        this.navCtrl.push(ProductPage, {
            previous: 'transaction-page',
            event: 'transaction.edit',
            trigger_event: 'product.pay',
            bill: this.billProvider.get_nota(this.bill_index),
            receipt_page_params:
            {
                can_edit_slide_item: true
            }
        })
    }



 }
