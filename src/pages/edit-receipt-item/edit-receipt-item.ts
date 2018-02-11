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
    this.item = {}
    // this.billProvider.update_data_bill()
    console.log(this.navParams.data.index)
    let item = this.billProvider.get_order(this.navParams.data.index);
    this.item = item?item:{}
  }

  closeModal()
  {
  	this.viewCtrl.dismiss();
  }

  countChargePercent()
  {
    let val = this.helper.IDRtoInt( this.item.discount_percent )
    let price = this.helper.IDRtoInt(this.item.price)
    let chargeNominal = price * (val/100);
    this.item.totalWithCharge = this.helper.intToIDR( price + chargeNominal );
    this.item.discount_nominal = this.helper.intToIDR( chargeNominal )
  }

  countChargeNominal()
  {
    let val = this.helper.IDRtoInt( this.item.discount_nominal )
    let price = this.helper.IDRtoInt(this.item.price)
    this.item.discount_percent = ((val/price)*100).toFixed(1); // to make 1 digit after comma
    this.item.totalWithCharge = this.helper.intToIDR( price + val );
  }

  changeNotes()
  {
    this.item.note = this.item.note?this.item.note:'';
    this.billProvider.update_order_item(this.item.index, 'notes', this.item.note)
    // this.ionViewWillEnter()
  }



  reduceItem()
  {
    var dataitem = this.billProvider.get_order(this.item.index);
    if(dataitem.qty <= 1)
    {
      return false;
    }else
    {
      this.billProvider.update_order_item(this.item.index, 'qty', parseInt(this.item.qty) - 1)
      this.billProvider.count_pricing()
      this.ionViewWillEnter()
      // this.trigger_update_receipt();
    }

  }
  addItem()
  {
    var dataitem = this.billProvider.get_order(this.item.index);
    
      this.billProvider.update_order_item(this.item.index, 'qty', parseInt(this.item.qty) + 1)
      this.billProvider.count_pricing()
      this.ionViewWillEnter()
      // this.trigger_update_receipt();
    
  }

  updateItem()
  {
      this.billProvider.update_bill()
      // this.closeModal();
      this.navCtrl.pop({})
  }

  

}
