import { Injectable } from '@angular/core';
import { ConfigProvider } from '../../providers/config/config';
import { AlertController, Events } from 'ionic-angular';
import * as $ from "jquery"
import { DbLocalProvider } from '../../providers/db-local/db-local';

/*
Generated class for the BillProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class BillProvider {
    data_bill:any;
    receipts:any = [];
    sumPrice:number;
    GrandTotalPrice:number;
    tax:number;
    taxAmount:number;
    visitor_name:string;
    visitor_table:number;

    constructor(public config: ConfigProvider, public alertCont: AlertController, public dbLocalProvider: DbLocalProvider, private events: Events) {
        this.taxAmount = 0;
        console.log('Hello BillProvider Provider');

        this.dbLocalProvider.opendb('bill.data')
          .then( (res) =>{
              if(res)
              {
                  res = Object.assign(res, {data: res.receipts, latest: {}})
                  this.set_receipts(res)
                  this.events.publish('bill.update')
              }

          })
    }

    save(data:any={})
    {

        let alertData = this.alertCont.create({
            title: "Error occured when inserting the data. "
        })
        var url = this.config.base_url('admin/outlet/transaction/add')
        let billdata = this.data_receipts(data)
        billdata = {
            users_outlet     : billdata.users_outlet,
            table_id         : billdata.table,
            outlet           : billdata.outlet,
            visitor_name     : billdata.visitor,
            bank_id          : billdata.bank_id,
            payment_method   : billdata.payment_method,
            payment_nominal  : billdata.payment_nominal,
            payment_bills    : billdata.sumPrice,
            payment_total    : billdata.GrandTotalPrice,
            bill_item        : billdata.receipts
        }

        billdata = Object.assign(billdata, data)
        return $.post(url, billdata)
        .done((res) => {
            res = JSON.parse(res)
            if(res.code == 500)
            {


            }
        })
    }

    get(data:any)
    {

        var url = this.config.base_url('admin/outlet/transaction/get')
        data = data
        return $.post(url, data)
        .done((res) => {
            res = JSON.parse(res)
            if(res.code == 500)
            {


            }
        })
    }

    set_data_bill(data)
    {
        this.data_bill = data;
    }

    get_data_bill()
    {
        return this.data_bill;
    }

    get_unpaid_bill(data:any)
    {
        return this.get(data)
    }

    // METHOD
    insert_item(item)
    {
        let existence = this.check_existences_receipt(item.id)
        if(existence.exist)
        {
            this.receipts[existence.index].amount = this.receipts[existence.index].amount + 1;
            this.receipts[existence.index].totalPrice = this.receipts[existence.index].amount * this.receipts[existence.index].price;
            // this.events.publish('bill.insert_item', {data: this.receipts, latest: item})

            $('#receipt-product-'+item.id+' .product-amount').addClass('pulse')
            setTimeout(function(){
                $('#receipt-product-'+item.id+' .product-amount').removeClass('pulse')
            },800)
        }else{
            item.amount = 1;
            item.totalPrice = item.price * item.amount;
            this.receipts.push(item)
        }
        this.count_pricing()
        this.update_receipt();

    }

    count_pricing()
    {

        this.sumPrice = 0;
        this.GrandTotalPrice = 0;
        this.tax = 0;
        let RestotalPrice = this.receipts.map((res) => {
            return res.totalPrice
        })

        for (var i = 0; i < RestotalPrice.length; ++i) {
            this.sumPrice = this.sumPrice + parseInt(RestotalPrice[i]);
        }
        this.tax = (this.taxAmount/100) * this.sumPrice;
        this.GrandTotalPrice = this.sumPrice + this.tax;
    }

    set_receipts(data)
    {
        this.receipts = data.data;
        this.count_pricing()
        this.visitor_name = data.visitor? data.visitor : this.visitor_name
        this.visitor_table = data.table? data.table : this.visitor_table
        this.update_receipt();
    }

    update_receipt()
    {
        this.dbLocalProvider.setdb('bill.data', this.data_receipts({}))
    }

    reset_receipt()
    {
        this.GrandTotalPrice = 0
        this.tax = 0
        this.taxAmount = 0
        this.visitor_name = ''
        this.visitor_table = 0
        this.sumPrice = 0
        this.receipts = []
        this.dbLocalProvider.removedb('bill.data')
    }
    data_receipts(data:any={})
    {
        let receipt = {
            GrandTotalPrice  : this.GrandTotalPrice,
            sumPrice         : this.sumPrice,
            tax              : this.tax,
            receipts         : this.receipts,
            visitor          : this.visitor_name,
            visitor_name     : this.visitor_name,
            table            : this.visitor_table,
            table_id         : this.visitor_table,
            visitor_table    : this.visitor_table,
        }
        return Object.assign(receipt, data)
    }

    set_data_receipts(data:any={})
    {
        this.GrandTotalPrice = data.GrandTotalPrice
        this.sumPrice = data.sumPrice
        this.tax = data.tax
        this.receipts = data.receipts
        this.visitor_name = data.visitor_name
        this.visitor_table = data.visitor_table

        this.update_receipt();
    }

    check_existences_receipt(id)
    {
        var result = this.receipts.map(function(res){
            return res.id
        }).indexOf(id);
        return {index: result, exist: result < 0? false : true}
    }

}
