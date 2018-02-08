import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ActionSheetController } from 'ionic-angular';
import { DbLocalProvider } from '../../providers/db-local/db-local';
import { ConfigProvider } from '../../providers/config/config';
import { PaymentPage } from "../payment/payment"
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
    filter_input  :any;
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


    constructor(private actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, private dbLocalProvider:DbLocalProvider, private helper: HelperProvider, private config: ConfigProvider, private loadingCtrl: LoadingController) {
        console.log(this.filter_date_end, this.filter_date_end)
        this.dbLocalProvider.opendb('outlet')
        .then((val)=>{
            this.outlet = val;

            let dataFetch = {
                online:true,
                infinite: false,
                data: { 
                    limit:20,
                    outlet: this.outlet,
                    page: 1,
                    join:['table'],
                    fields: `pay_id,users_outlet,table_id,bank_id,discount_id,payment_method,outlet,payment_nominal,payment_date,visitor_name,payment_date_only,payment_bills,tax_percent,tax_nominal,paid_date,payment_total,paid_nominal,paid_with_bank_nominal,payment_complete_status,payment_complete_note,bills.outlet.pay_id.type.name.price.total.qty.product.detail_id,table_name`
                }
            }

            if(this.navParams.data.body)
            {
                if(this.navParams.data.today == true)
                {
                    this.navParams.data.body.where['payment_date_only'] = moment().format('YYYY-MM-DD')
                }
                dataFetch.data = Object.assign(dataFetch.data, this.navParams.data.body)
            }

            this.transaction_params = dataFetch;
            this.filter_transaction()
        })


      console.log(this.navParams.data)

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


    filter_transaction(ev:any={})
    {

        let val = this.filter_input;

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

        this.transaction_params.data.where['payment_complete_status'] = this.payment_status;
        if(this.payment_status < 0)
        {
            delete this.transaction_params.data.where['payment_complete_status'];
        }

        this.transaction_params.data.order_by = this.order_by;
        console.log(this.transaction_params.data)

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
        this.navCtrl.push(PaymentPage, {
            previous: 'transaction-page',
            event: 'transaction.edit',
            trigger_event: 'transaction.edit',
            bill: item,
            receipt_page_params:
            {
                can_edit_slide_item: true
            }
        })
    }

}
