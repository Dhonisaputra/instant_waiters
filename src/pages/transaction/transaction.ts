import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ActionSheetController, AlertController } from 'ionic-angular';
import { DbLocalProvider } from '../../providers/db-local/db-local';
import { ConfigProvider } from '../../providers/config/config';
import { PaymentPage } from "../payment/payment"
import { ProductPage } from "../product/product"
import { SplitBillPage } from "../split-bill/split-bill"
import { BillProvider } from "../../providers/bill/bill"
import { BillItemEditorPage } from "../bill-item-editor/bill-item-editor"
import { HelperProvider } from '../../providers/helper/helper'; 

import * as $ from "jquery"
import * as moment from 'moment';

/*
* Generated class for the TransactionPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
    selector: 'page-transaction',
    templateUrl: 'transaction.html',
})
export class TransactionPage {
    items         :any=[]
    original_items:any=[]
    outlet        :number;
    filter_by     :string="visitor_name";
    order_by      :string='payment_date DESC';
    filter_input  :string='';
    payment_status:number=-1;
    filter_date_start   :string=moment().format('MM/DD/YYYY');
    filter_date_end     :string=moment().format('MM/DD/YYYY');
    edit_transaction_status  :boolean=false;
    page_params  :object={
      action:'default', // [default, edit, pay],
      toggleSearchInput: false,
      toggleFilter: false
    }
    transaction_params:any = {data:{limit: 20, page: 1}};


    constructor(private billProvider: BillProvider, private actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, private dbLocalProvider:DbLocalProvider, private helper: HelperProvider, private config: ConfigProvider, private loadingCtrl: LoadingController) {
        this.outlet = this.helper.local.get_params(this.helper.config.variable.credential).data.outlet_id;
        let dataFetch = {
            online:true,
            infinite: false,
            data: { 
                limit:20,
                outlet: this.outlet,
                page: 1,
                join:['table','discount'],
                fields: `pay_id,users_outlet,table_id,bank_id,discount_id,payment_method,outlet,payment_nominal,payment_date,visitor_name,payment_date_only,payment_bills,tax_percent,tax_nominal,paid_date,payment_total,paid_nominal,paid_with_bank_nominal,payment_complement_status,payment_complement_note,orders,table_name,payment_rest,discount_name,discount_percent,discount_nominal,payment_cancel_status,payment_cancel_note`
            }
        }

        if(this.navParams.data.body)
        {
            if(this.navParams.data.today == true)
            {
                this.navParams.data.body.where['payment_date_only'] = moment().format('YYYY-MM-DD')
                this.payment_status = 0;
                this.filter_by = 'payment_date';
            }
            dataFetch.data = Object.assign(dataFetch.data, this.navParams.data.body)
            // this.get_transaction(dataFetch);

        }

        this.transaction_params = dataFetch;
        this.filter_transaction()

        



      if(this.navParams.data.page_params)
      {
        this.update_page_parameters(this.navParams.data.page_params);
      }
    }

    ionViewDidLoad() {

    }

    update_page_parameters(data:any={})
    {
      this.page_params = Object.assign(this.page_params, data)
    }

    get_transaction(data:any={data:{}})
    {
        let loadingData = this.loadingCtrl.create({
          content: "Silahkan tunggu"
        });

        loadingData.present();
        this.transaction_params = data;

        let url = this.config.base_url('admin/outlet/transaction/get')
        return $.post(url, data.data)
        .done((res) => {

            res = !this.helper.isJSON(res)? res : JSON.parse(res); 
            if(res.code == 200)
            {

                if(data.infinite == true)
                {
                    this.items = this.items.concat(res.data);
                    this.original_items = this.original_items.concat(res.data);
                }else
                {
                    this.items = res.data;
                    this.original_items = res.data;
                }
            }else
            {
                alert('Error occured while fetching data transaction!')
            }
        })
        .always( ()=>{
            loadingData.dismiss();
        } )
    }

    product_sort() {
        let actionSheet = this.actionSheetCtrl.create({
          title: 'Urutkan berdasarkan',
          buttons: [
            {
              text: 'Nama costumer',
              handler: () => {
                this.filter_by = "visitor_name";
                this.filter_transaction()
              }
            },{
              text: 'Nomor nota',
              handler: () => {
                  this.filter_by = "pay_id";
                this.filter_transaction()
              }
            },{
              text: 'Tanggal pembelian',
              handler: () => {
                  this.filter_by = "payment_date";
                this.filter_transaction()
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

    infinite_scroll(ev:any={})
    {
        this.transaction_params.data.page += 1;
        this.transaction_params.infinite = true;
        this.get_transaction(this.transaction_params)
        .then( ()=>{
            if(this.transaction_params.infinite == true && ev.complete)
            {
                ev.complete()
            }
        } )
    }


    search_transaction(ev:any={})
    {
        let val = this.filter_input;
        let character_length = 4;
        if(val && val.length < character_length)
        {
            return false;
        }
        this.filter_transaction();

    }
    filter_transaction(ev:any={})
    {
        let exclude_to_filter_input = ['table_name','visitor_name', 'pay_id']

        let val = this.filter_input;
        if(val && exclude_to_filter_input.indexOf('this.filter_by') > -1)
        {
            return false;
        }

        this.transaction_params.data.where = {}
        this.transaction_params.data.like =  []
        this.transaction_params.infinite = false;
        this.transaction_params.data.page = 1;

        if (val && val.trim() != '') {


            if(this.filter_by == 'visitor_name')
            {
                this.transaction_params.data.like = [[this.filter_by, val]]; 
                delete this.transaction_params.data.where[this.filter_by] 
            }else
            {
                this.transaction_params.data.where[this.filter_by] = val;
                delete this.transaction_params.data.like; 
            }
        }

        if(this.filter_by == 'payment_date')
        {
          this.transaction_params.data.like = [[this.filter_by, moment().format("YYYY-MM-DD")]]; 
        }

        this.transaction_params.data.where['payment_complement_status'] = this.payment_status;
        if(this.payment_status < 0)
        {
            delete this.transaction_params.data.where['payment_complement_status'];
        }

        this.transaction_params.data.order_by = this.order_by;

        this.get_transaction(this.transaction_params)
        .then(()=>{
        })


    }

    edit_transaction(i, item)
    {
        this.navCtrl.push(PaymentPage, {
            previous: 'transaction-page',
            event: 'transaction.edit',
            trigger_event: 'transaction.edit',
            bill: item,
            receipt_page_params:
            {
                can_edit_slide_item: false
            }
        })
    }
    pay_transaction(i, item)
    {
        item = Object.assign({}, item)
        this.navCtrl.push(ProductPage, {
            previous: 'transaction-page',
            event: 'transaction.edit',
            trigger_event: 'product.pay',
            bill: item,
            receipt_page_params:
            {
                can_edit_slide_item: true
            }
        })
    }

    info_transaction(index, item)
    {
        this.navCtrl.push(BillItemEditorPage, {
                bill:item, index:index,
                receipt_page_params:
                {
                    can_edit_slide_item: false,
                    can_edit_bill_total: false,
                    can_edit_table:true, can_edit_visitor_name:true
                }
            })
    }

    default_click_transaction(index, item)
    {
        if(!this.navParams.data.event)
        {
            this.info_transaction(index, item)
        }else
        {
            this.pay_transaction(index, item)
        }
    }

    transform_date(date)
    {
        return moment(date).format('HH:mm - YYYY MMM DD')
    }

    cancel_transaction(index, item)
    {
        let alert = this.alertCtrl.create({
            title: 'Success',
            subTitle: 'Orderan telah dibatalkan',
            buttons: ['OK']
        });

        let alertGagal = this.alertCtrl.create({
            title: 'Kesalahan',
            subTitle: 'Terdapat kesalahan saat membatalkan order. Silahkan dicoba kembali!',
            buttons: ['OK']
        });

        let prompt = this.alertCtrl.create({
          title: 'Batalkan pesanan',
          message: "Silahkan isikan alasan",
          inputs: [
            {
              name: 'cancel_note',
              placeholder: 'Alasan pembatalan'
            },
          ],
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: data => {
                // console.log('Cancel clicked');
              }
            },
            {
              text: 'Save',
              handler: data => {
                  let loading = this.helper.loadingCtrl.create({
                      content: 'Silahkan tunggu'
                  })
                  loading.present();
                this.billProvider.cancel_bill(item.pay_id, data.cancel_note)
                .then( (res) =>{
                    res = !this.helper.isJSON(res)? res : JSON.parse(res); 
                    if(res.code == 200)
                    {
                        alert.present();
                    }else
                    {
                        alertGagal.present()
                    }

                } )
                .fail( ()=>{
                    alertGagal.present();
                } )
                .always(() => {
                    loading.dismiss();
                })

              }
            }
          ]
        });
        prompt.present();
    }

    advanceOptions(index, item)
    {

        if(item.payment_nominal <= 0 && item.payment_cancel_status == 0)
        {
            this.actionSheetCtrl.create({
              title: 'Opsi lanjutan',
              buttons: [
                {
                  text: 'Gabungkan Nota',
                  handler: () => {
                    // this.filter_transaction()
                  }
                },{
                  text: 'Pisahkan Nota',
                  handler: () => {
                    this.splitBill(index, item)
                  }
                },{
                  text: 'Lihat Detail Transaksi',
                  handler: () => {
                      this.info_transaction(index, item)
                  }
                }
              ]
            }).present();  
        }else if(item.payment_nominal > 0 && item.payment_cancel_status == 0)
        {
            this.actionSheetCtrl.create({
              title: 'Opsi lanjutan',
              buttons: [
                {
                  text: 'Lihat Detail Transaksi',
                  handler: () => {
                      this.info_transaction(index, item)
                  }
                }
              ]
            }).present();
        }
    }

    splitBill(index, item)
    {
        this.navCtrl.push(SplitBillPage,{
            index:index, bill:item,
            receipt_page_params:
            {
                can_edit_slide_item: false,
                can_edit_bill_total: false,
                can_edit_table:false, can_edit_visitor_name:false,
                show_footer:false
            }
        })
    }
}
