import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import * as $ from "jquery"
import { BillProvider } from '../../providers/bill/bill';
import { DbLocalProvider } from '../../providers/db-local/db-local';

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

	}



}
