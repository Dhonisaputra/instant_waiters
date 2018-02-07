import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';
import { BillProvider } from '../../providers/bill/bill';
import { ReceiptPage } from '../receipt/receipt';
import { HelperProvider } from '../../providers/helper/helper'; 

/**
 * Generated class for the EditReceiptItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-receipt-item',
  templateUrl: 'edit-receipt-item.html',
})
export class EditReceiptItemPage {

  item: any={}
  constructor(private helper:HelperProvider, public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams, public billProvider:BillProvider) {

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditReceiptItemPage');
  }

  ionViewWillEnter()
  {
    // this.billProvider.update_data_bill()
    let item = this.billProvider.get_bill_item(this.navParams.data.index);
    this.item = item?item:{}
  }

  closeModal()
  {
  	this.viewCtrl.dismiss();
  }

  countChargePercent()
  {
    let val = this.helper.IDRtoInt( this.item.chargePercent )
    let price = this.helper.IDRtoInt(this.item.price)
    let chargeNominal = price * (val/100);
    this.item.totalWithCharge = this.helper.intToIDR( price + chargeNominal );
    this.item.chargeNominal = this.helper.intToIDR( chargeNominal )
  }

  countChargeNominal()
  {
    let val = this.helper.IDRtoInt( this.item.chargeNominal )
    let price = this.helper.IDRtoInt(this.item.price)
    this.item.chargePercent = ((val/price)*100).toFixed(1); // to make 1 digit after comma
    this.item.totalWithCharge = this.helper.intToIDR( price + val );
  }

  changeNotes()
  {
    this.item.note = this.item.notes?this.item.note:'';
    this.billProvider.update_bill_item(this.item.index, 'notes', this.item.note)
    // this.ionViewWillEnter()
  }



  reduceItem()
  {
    var dataitem = this.billProvider.get_bill_item(this.item.index);
    if(dataitem.amount <= 1)
    {
      return false;
    }else
    {
      this.billProvider.update_bill_item(this.item.index, 'amount', parseInt(this.item.amount) - 1)
      this.billProvider.count_pricing()
      this.ionViewWillEnter()
      // this.trigger_update_receipt();
    }

  }
  addItem()
  {
    var dataitem = this.billProvider.get_bill_item(this.item.index);
    
      this.billProvider.update_bill_item(this.item.index, 'amount', parseInt(this.item.amount) + 1)
      this.billProvider.count_pricing()
      this.ionViewWillEnter()
      // this.trigger_update_receipt();
    
  }

  updateItem()
  {
      this.billProvider.update_receipt()
      // this.closeModal();
      this.navCtrl.pop({})
  }

  

}
