import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

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
	receipts:any;
	sumPrice:number;
	GrandTotalPrice:number;
	tax:number;
	taxAmount:number;

	constructor(public navCtrl: NavController, public navParams: NavParams, events: Events) {
		this.receipts = []
		this.taxAmount = 10;

		events.subscribe('receipt-data', (data) => {
			console.log('event', data)
			this.receipts = data;
			this.sumPrice = 0;
			this.GrandTotalPrice = 0;
			this.tax = 0;
			let RestotalPrice = data.map((res) => {
				return res.totalPrice
			})

			console.log(RestotalPrice)
			for (var i = 0; i < RestotalPrice.length; ++i) {
				this.sumPrice = this.sumPrice + parseInt(RestotalPrice[i]);
			}
			this.tax = (this.taxAmount/100) * this.sumPrice;
			this.GrandTotalPrice = this.sumPrice + this.tax;
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ReceiptPage');
	}

}
