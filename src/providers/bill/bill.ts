import { Injectable } from '@angular/core';
import { ConfigProvider } from '../../providers/config/config';
import { AlertController, Events, LoadingController  } from 'ionic-angular';
import * as $ from "jquery"
import { DbLocalProvider } from '../../providers/db-local/db-local';
import * as moment from 'moment';
import { HelperProvider } from '../../providers/helper/helper'; 

/*
Generated class for the BillProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class BillProvider {
    bill            :any = this.default_bill_value()
    temp_bill       :any = this.default_bill_value() // it will be temporary variable
    

    constructor(public loadingCtrl: LoadingController, public config: ConfigProvider, public alertCont: AlertController, public dbLocalProvider: DbLocalProvider, private events: Events, private helper: HelperProvider) {

        this.pull_data_bill();
    }

    default_bill_value()
    {
        return {
            order_session: [],
            orders: [],
            payment_bills:0,
            payment_total:0,
            payment_nominal:0,
            outlet:undefined,
            visitor_name:'',
            table_id:undefined,
            discount_id:undefined,
            payment_method:undefined,
            paid_nominal:undefined,
            paid_with_bank_nominal:undefined,
            table:{}

        };
    }

    save(data:any={})
    {
        let loader = this.loadingCtrl.create({
          content: "Memproses permintaan...",
        });
        loader.present();

        let alertData = this.alertCont.create({
            title: "Process gagal",
            message: "Terdapat galat ketika menyimpan nota. Silahkan laporkan pengembang sistem.",
            buttons : ["Ok"]
        })

        let successData = this.alertCont.create({
            title: "Process selesai",
            message: "Nota telah disimpan",
            buttons : ["Ok"]
        })

        var url = this.config.base_url('admin/outlet/transaction/add')
        let billdata = this.data_bill(data)
        return $.post(url, billdata)
        .done((res) => {
            res = !this.helper.isJSON(res)? res : JSON.parse(res);
            if(res.code == 200)
            {
                successData.present();
                this.set_bill_component('pay_id', res.data.pay_id); // new method.
                this.update_bill_component({},true);

            }else
            {
                alertData.present();
            }
        })
        .fail(()=>{
            alertData.present();
        })
        .always(()=>{
            loader.dismiss();
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
    
    get_unpaid_bill(data:any)
    {
        return this.get(data)
    }

    set_bill_component(name:string, value:any, value_default:any='', also_save_temp:boolean=false)
    {
        this.bill[name] = this.bill[name]?this.bill[name]:value_default
        this.bill[name] = value;
        if(also_save_temp)
        {
            this.temp_bill[name] = this.temp_bill[name]?this.temp_bill[name]:value_default
            this.temp_bill[name] = value;
        }
    }

    public get_bill_component(name:any=undefined, get_temp:boolean=false)
    {
        if(!name)
        {
            return this.bill;
        }
        return get_temp? this.temp_bill[name] : this.bill[name];
    }
    update_bill_component(data:object={}, update_db:boolean=false)
    {
        this.bill = Object.assign(this.bill, data)
        this.temp_bill = this.bill

        this.detection_order_session_from_orders(this.bill.orders, true)
        

        if(update_db)
        {
            this.update_bill();
        }
    }

    put_bill_component(data:object={})
    {
        this.bill = data
        this.temp_bill = this.bill
    }

    // O R D E R
    public get_order(index:number)
    {
        return this.get_bill_component('orders')[index];
    }

    set_order(index:number, content:any={})
    {
        return this.get_bill_component('orders')[index];
    }
    insert_order(data:any)
    {
        this.get_bill_component('orders').push(data);
    }

    remove_order(index)
    {
        this.get_bill_component('orders').splice(index, 1);
    }
    
    update_order_item(index, name, value)
    {
        let order = this.get_order(index);
        if(order)
        {
            order[name] = value;
        }

    }

    public get_order_item(index:number, name:string='')
    {
        let order = this.get_bill_component('orders');
        return name.length < 1? undefined : this.get_order(index)[name];
    }

    delete_order_item(index:number, name:string='')
    {
        let order = this.get_bill_component('orders');
        if(name.length)
        {
            delete this.get_order(index)[name];
        }
    }

    // E N D  O F  O R D E R



    public check_existences_order(id, event:string='add')
    {
        if(!id)
        {
            return {exist: false, index:-1}
        }
        let order = this.get_bill_component('orders');
        

        // search object array that contain event == event[add||reduce]
        var result = order.map(function(res){
            if(res.event && res.event == event)
            {
                return res.id
            }
        }).indexOf(id);
        return {index: result, exist: result < 0? false : true}
    }


    // METHOD
    insert_item(item, event:string='add')
    {

        let existence = this.check_existences_order(item.id, event)
        
        item.event = event;

        if(existence.exist && existence.index && existence.index > -1)
        {
            let order = this.get_bill_component('orders');
            order[existence.index].qty     = parseInt(order[existence.index].qty) + 1;
            order[existence.index].total = parseInt(order[existence.index].qty) * parseInt(order[existence.index].price);
            
            // this.events.publish('bill.insert_item', {data: this.receipts, latest: item})

            $('#receipt-product-'+item.id+'-'+event+' .product-amount').addClass('pulse')
            setTimeout(function(){
                $('#receipt-product-'+item.id+'-'+event+' .product-amount').removeClass('pulse')
            },800)
        }else{
            item.qty = item.qty && event != 'add' ?item.qty:1;
            item.total = item.price * item.qty;
            this.insert_order(item)
        }
        this.count_pricing()
        this.update_bill();

    }

    count_pricing()
    {

        this.set_bill_component('payment_bills',0);
        this.set_bill_component('payment_total',0);

        let payment_total = this.get_bill_component('payment_total');
        let payment_bills = this.get_bill_component('payment_bills');
        let tax_nominal = this.get_bill_component('tax_nominal');
        let discount_nominal = this.get_bill_component('discount_nominal');

        tax_nominal = tax_nominal?parseInt(tax_nominal):0;
        discount_nominal = discount_nominal?parseInt(discount_nominal):0;

        let order = this.get_bill_component('orders');

        $.each(order, (i, val)=>{
            order[i].total = order[i].qty * order[i].price

        })

        let RestotalPrice = order.map((res) => {
            return res.total
        })

        for (var i = 0; i < RestotalPrice.length; ++i) {
            payment_bills = payment_bills + parseInt(RestotalPrice[i]);
        }

       
        payment_total = payment_bills - discount_nominal + tax_nominal;

        this.set_bill_component('payment_bills', payment_bills, true);
        this.set_bill_component('payment_total', payment_total, true);

    }

    set_bill(data)
    {
        this.set_bill_component('orders', data.data);
        this.count_pricing()
        this.set_bill_component('visitor_name', data.visitor_name);
        this.set_bill_component('table_id', data.visitor_table);
        this.update_bill();
    }

    update_bill()
    {
        this.dbLocalProvider.setdb('bill.data', this.data_bill())
    }

    reset_bill()
    {
        
        this.bill = this.default_bill_value();
        this.dbLocalProvider.removedb('bill.data')
        this.reset_order_session();

    }
    data_bill(data:any={})
    {
        let receipt = this.get_bill_component()
        return Object.assign(receipt, data)
    }

    set_data_bill(data:any={}, update_db:boolean=true)
    {
        
    }

    pull_data_bill()
    {
        return this.dbLocalProvider.opendb('bill.data')
        .then( (res) =>{
            
          if(res)
          {
              this.put_bill_component(res)
              this.detection_order_session_from_orders(res.orders)
              this.events.publish('bill.update')
          }

        })
    }

    

    /*
    // fungsi ini sebagai penanda tentang jumlah save dari suatu bill
    */

    // set order session from local-storage 
    reset_order_session()
    {

        this.bill.order_session = [];
        this.dbLocalProvider.setdb('bill.order_session', this.bill.order_session)

    }

    set_order_session(data:object=[])
    {
        this.bill.order_session = data;
    }

    // create new order session

    detection_order_session_from_orders(orders:any=[], create_new:boolean=false)
    {
        this.reset_order_session();
        let order_array = {}
        orders.forEach((value, index)=>{
            if(!order_array[value.order_session])
            {
                console.log(order_array, order_array[value.order_session])
                order_array[value.order_session] = {count:1, first: value.id};
                this.update_order_item(index, 'first_session_order', true)
            }else
            {
                order_array[value.order_session].count = order_array[value.order_session].count + 1;
            }
        })

        // recreate previous session
        $.each(order_array, (i, val)=>{
            this.add_order_session(val)
        })
        if(create_new)
        {
            // create new session
            this.add_order_session();
        }





    }
    add_order_session(data:object={})
    {
        this.bill.order_session = this.bill.order_session? this.bill.order_session : []
        data = Object.assign({count:0, timestamp:moment().unix()}, data)
        this.bill.order_session.push(data)
        this.dbLocalProvider.setdb('bill.order_session', this.bill.order_session)
    }

    get_order_session()
    {
        return this.bill.order_session? this.bill.order_session.length : 0;
    }

    set_order_session_item_counter(session:number)
    {
        this.bill.order_session[session].count = parseInt(this.bill.order_session[session].count) + 1;
    }
    get_order_session_item_counter(session:number)
    {
        return this.bill.order_session[session].length;
    }
    get_active_order_session()
    {
        if(!this.bill.order_session)
        {
            this.bill.order_session = [];
        }

        return this.bill.order_session.length - 1;
    }
    isset_order_session()
    {
        let order = this.get_bill_component('orders');
        if(order && order.length < 1)
        {
            return false;
        }
        order = order.filter((res)=>{
            return !res.detail_id;
        })
        return  order.length > 0? true : false;
    }


}
