import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HelperProvider } from '../../providers/helper/helper'; 
import { BillProvider } from '../../providers/bill/bill';


import * as $ from "jquery"
import * as moment from 'moment';
/**
 * Generated class for the TotalPaymentEditorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-total-payment-editor',
  templateUrl: 'total-payment-editor.html',
})
export class TotalPaymentEditorPage {

	bill:any={};
   page_params  :object={
        action:'default', // [default, edit, pay]
        view_type: 'modal', // [page, modal],
        show_history_stock: true, // boolean [true-false]
        show_segment: true, // boolean [true-false]
        show_detail_product: true, // boolean [true-false]
    }
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, public billProvider:BillProvider, public helper:HelperProvider) {
  	this.bill = this.billProvider.get_bill_component()
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
    closeModal()
    {
        this.viewCtrl.dismiss();
    }

  countTaxNominal()
  {
    let val = this.helper.IDRtoInt( this.bill.tax_percent )
    let total = this.billProvider.get_bill_component('payment_bills');
    
    let tax_nominal = total * (val/100);
    
    this.billProvider.set_bill_component('tax_nominal', tax_nominal)
    this.billProvider.set_bill_component('tax_percent', val)

    this.billProvider.count_pricing()
  }

  countTaxPercent()
  {
    let val = this.helper.IDRtoInt( this.bill.tax_nominal )

    let total = this.billProvider.get_bill_component('payment_bills');
    
    let tax_percent = ((val/total)*100).toFixed(1); // to make 1 digit after comma

    this.billProvider.set_bill_component('tax_percent', tax_percent)
    this.billProvider.set_bill_component('tax_nominal', val)
    
    this.bill.tax_percent = tax_percent;
    this.billProvider.count_pricing()
  }

  countDiscountNominal()
  {
    let val = this.helper.IDRtoInt( this.bill.discount_percent )
    let total = this.billProvider.get_bill_component('payment_bills');
    
    let discount_nominal = total * (val/100);
    
    this.billProvider.set_bill_component('discount_nominal', discount_nominal)
    this.billProvider.set_bill_component('discount_percent', val)

    this.billProvider.count_pricing()
  }

  countDiscountPercent()
  {
    let val = this.helper.IDRtoInt( this.bill.discount_nominal )
    let total = this.billProvider.get_bill_component('payment_bills');
    let discount_percent = ((val/total)*100).toFixed(1); // to make 1 digit after comma
    
    this.billProvider.set_bill_component('discount_percent', discount_percent)
    this.billProvider.set_bill_component('discount_nominal', val)

    this.bill.discount_percent = discount_percent;
    this.billProvider.count_pricing()

  }

  updateItem()
  {
      this.billProvider.update_bill()
      this.billProvider.count_pricing()
      this.closeModal();
  }
}
