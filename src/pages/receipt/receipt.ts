import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { BillProvider } from '../../providers/bill/bill';
import { DbLocalProvider } from '../../providers/db-local/db-local';
import { TablePage } from '../table/table';
import * as $ from "jquery"

/**
* Generated class for the ReceiptPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
	selector: 'page-receipt',
	templateUrl: 'receipt.html',
})
export class ReceiptPage {
	receipts:any = [];
	sumPrice:number;
	GrandTotalPrice:number;
	tax:number;
	taxAmount:number;
	visitor_name:string;
	visitor_table:number;
	event_handler:any={};
	receipt_page_params:any= {can_edit_slide_item: true}

	constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, private dbLocalProvider: DbLocalProvider, private billProvider: BillProvider) {
		this.receipts = []
		this.taxAmount = 10;

		// if(navParams)

		// update data

		// event listener to update bill
	  	events.subscribe('bill.update', (data) => {
	  		this.trigger_update_receipt();
		});

		// event listener to get data bill and passing to emiter
		events.subscribe('get.data.receipt', (data) => {
			let data_receipts = this.billProvider.data_receipts({	
				_passed_data 	: data,
			});

			events.publish('receive.data.receipt', data_receipts)
		});

		// event listener to reset data bill
		events.subscribe('reset.data.receipt', (data) => {
			this.billProvider.reset_receipt();
	  		this.trigger_update_receipt();
		});

		if(this.navParams.data.receipt_page_params)
		{
			this.update_page_parameters(this.navParams.data.receipt_page_params);
		}
	}

	// function trigger to updating data receipts
	trigger_update_receipt()
	{
		let data = this.billProvider.data_receipts();
		this.set_receipts(data);

	}	

	update_receipt()
	{
		let receipt = this.get_data_receipt();
        this.billProvider.set_data_receipts(receipt);
	}

	get_data_receipt()
	{
		let receipt = {
            GrandTotalPrice  : this.GrandTotalPrice,
            sumPrice         : this.sumPrice,
            tax              : this.tax,
            receipts         : this.receipts,
            visitor          : this.visitor_name,
            visitor_name     : this.visitor_name,
            table            : this.visitor_table,
            visitor_table    : this.visitor_table,
            taxAmount    	 : this.taxAmount,
        }
        return receipt;
	}
	set_receipts(data:any={})
    {
            this.GrandTotalPrice = data.GrandTotalPrice
            this.sumPrice = data.sumPrice
            this.tax = data.tax
            this.receipts = data.receipts
            this.visitor_name = data.visitor_name
            this.visitor_table = data.visitor_table
    }



	ionViewDidLoad() {
	}
	ionViewWillUnload()
	{

	}
	update_page_parameters(data:any={})
	{
		this.receipt_page_params = Object.assign(this.receipt_page_params, data)
	}
	ionViewWillEnter()
	{


		switch (this.navParams.data.event) {
			case "transaction.edit":
				// code...
				break;
			
			default:
  				this.trigger_update_receipt();

				break;
		}

		this.detect_parameters();

	}

	detect_parameters()
	{
		this.event_handler[this.navParams.data.events] = this.navParams.data;
		
	}

	change_table()
	{
		console.log(this.navCtrl)
		let index:number=-1;
		let isFound:boolean= false;
		let navCtrlLen:number=this.navCtrl.length();

		for ( let i=0; i < this.navCtrl.length(); i++ )
		{
			if(index<1)
			{

				let v = this.navCtrl.getViews()[i];
				if(v.component.name == 'TablePage')
				{
					index = i;
					isFound = true;
					this.navCtrl.popTo(TablePage)
				}
			}

			if(index < 0 && isFound == false)
			{
				console.log('force back', index, i, navCtrlLen)
				this.navCtrl.push(TablePage, {
					previous: 'product-page',
					event: 'bill.changeTable',
					trigger_event: 'table.change',
					data: this.event_handler['table.pick']
				})
			}
		}

	}


	removeReceipt(ev, item)
	{
		// alert('removed')
		console.log(ev, item)
	}

	removeItem(index, item)
	{
		this.billProvider.remove_bill_item(index)
		this.billProvider.count_pricing()
		this.billProvider.update_receipt()
		this.trigger_update_receipt();
	}
	reduceItem(index, item)
	{
		var dataitem = this.billProvider.get_bill_item(index);
		if(dataitem.amount <= 1)
		{
			return false;
		}else
		{
			this.billProvider.update_bill_item(index, 'amount', item.amount - 1)
			this.billProvider.count_pricing()
			this.billProvider.update_receipt()
			this.trigger_update_receipt();
		}

	}
	addItem(index, item)
	{
		var dataitem = this.billProvider.get_bill_item(index);
		if(dataitem.amount >= parseInt(dataitem.stock))
		{
			return false;
		}else
		{
			this.billProvider.update_bill_item(index, 'amount', item.amount + 1)
			this.billProvider.count_pricing()
			this.billProvider.update_receipt()
			this.trigger_update_receipt();
		}
	}

}
