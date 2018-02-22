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
 	receipts:any = [];
	sumPrice:number;
	GrandTotalPrice:number;
	tax:number;
	taxqty:number;
	visitor_name:string;
	visitor_table:number;
	event_handler:any={};
	bill:any=this.billProvider.default_bill_value();
	receipt_page_params:any= {
		can_edit_slide_item: true,
		can_edit_bill_total:true, 
		can_edit_table:false, 
		can_edit_visitor_name:false,
		show_footer:true,
		show_header:true,
		show_content:true
	}
 	constructor(public navCtrl: NavController, public navParams: NavParams, private helper: HelperProvider, private billProvider:BillProvider) {

 		this.helper.events.subscribe('bill.item.clicked',(data) => {
 			let item = Object.assign(data.item,{});

 			let qty = this.billProvider.get_order_item(data.index, 'qty');
 			if(qty > 0)
 			{
 				qty = qty - 1;
 				this.billProvider.set_order_item(data.index, 'qty', qty);

				let index = this.billProvider.check_nota_order(this.bill_index, item.product, item.order_session); 
 				if(index < 0)
 				{
 					let ndata = Object.assign({}, data.item);
 					ndata.qty = 1;
 					ndata.index_ref = data.index;
					delete ndata.pay_id;
					delete ndata.detail_id;
 					this.billProvider.new_nota_order(this.bill_index, ndata);

 				}else
 				{
 					let nqty = this.billProvider.get_nota_order(this.bill_index, index, 'qty') + 1;
					this.billProvider.set_nota_order(this.bill_index, index, 'qty', nqty);
 				}

 				if(qty <=0)
 				{
 					this.billProvider.remove_order(data.index);
 				}
 			}
		
			this.billProvider.count_pricing();
			this.helper.events.publish('bill.update', {})

			this.billProvider.nota_count_pricing(this.billProvider.get_nota(this.bill_index));


		});

		if(this.navParams.data.receipt_page_params)
		{
			this.update_page_parameters(this.navParams.data.receipt_page_params);
		}


 	}




 	ionViewDidLoad() {
 		console.log('ionViewDidLoad SplitBillPage');
 	}

 	update_page_parameters(data:any={})
	{
		this.receipt_page_params = Object.assign(this.receipt_page_params, data)
	}

 	ionViewWillEnter() {
 		console.log(this.navParams.data.bill)
 		this.billProvider.update_bill_component(this.navParams.data.bill,false)
		this.billProvider.count_pricing();
		this.helper.events.publish('bill.update', {})

		let cBill = Object.assign({},this.navParams.data.bill)
		cBill.orders = [];
		cBill.ref_bill = cBill.pay_id;
		delete cBill.pay_id;
		cBill.visitor_name = "#spl-"+cBill.ref_bill;
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
    	let bill = this.billProvider.get_nota(this.bill_index);
    	bill.reference_bill = this.billProvider.get_bill();
    	if(Object.keys(bill.reference_bill.orders).length < 1 || Object.keys(bill.orders).length < 1)
    	{
    		this.helper.alertCtrl.create({
    			title: 'Kesalahan',
				subTitle: 'Data tidak boleh kosong',
				buttons: ['OK']
    		}).present();
    		return false;
    	}

        this.navCtrl.setRoot(ProductPage, {
            previous: 'transaction-page',
            event: 'transaction.split',
            trigger_event: 'product.pay',
            bill: bill,
            receipt_page_params:
            {
                can_edit_slide_item: true
            }
        })
    }

    update_receipt()
	{
		// let receipt = this.get_data_receipt();
        this.billProvider.set_nota_property(this.bill_index, 'visitor_name', this.bill.visitor_name);
        this.billProvider.update_bill_component({}, true);
	}

	editItem(item, index)
	{
		let qty = this.billProvider.get_nota_order(this.bill_index, index, 'qty');
		if(qty > 0)
		{
			qty = qty - 1;
			this.billProvider.set_nota_order(this.bill_index, index, 'qty', qty);
			
			item.id = item.product;
			this.billProvider.insert_product(item)

			if(qty > 0)
			{

			}else
			{
				this.billProvider.remove_nota_order(this.bill_index, index);
			}
		}

		this.billProvider.count_pricing();
		this.helper.events.publish('bill.update', {})

		this.billProvider.nota_count_pricing(this.billProvider.get_nota(this.bill_index));

	}

 }
