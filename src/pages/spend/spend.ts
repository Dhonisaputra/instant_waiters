import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelperProvider } from '../../providers/helper/helper'; 
import { ProductProvider } from '../../providers/product/product'; 
import { transition, trigger, animate,state,style } from '@angular/animations';

/**
* Generated class for the SpendPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
    selector: 'page-spend',
    templateUrl: 'spend.html',
    animations: [
    trigger('pageTransition', [
        transition('*=>list', [ style({
            transform: 'translateX(100%)'
        }),animate(200) ]),
        transition('*=>new_spend',  [ style({
            transform: 'translateX(-100%)'
        }),animate(200) ]),
        transition('new_spend=>spend_item',  [ style({
            transform: 'translateX(100%)'
        }),animate(200) ]),
        transition('spend_item=>*',  [ style({
            transform: 'translateX(-100%)'
        }),animate(200) ]),

        ])
    ]
})
export class SpendPage {
    state:any;
    
    spend:any={}
    spend_item_form:any={};

    spend_item:any=[];
    products:any=[]
    ingredients:any=[]
    data_spend:any=[];
    outlet:number;
    spend_item_form_state:string='new';
    spend_item_form_index:number;
    view_state:any;
    constructor(public navCtrl: NavController, public navParams: NavParams, public helper:HelperProvider, public product:ProductProvider) {
        this.state = 'list';
        console.log(this.helper.moment())
        this.spend = {
            sp_date: this.helper.moment().add(7,'hour').toISOString(),
            sp_paid: this.helper.moment().add(7,'hour').toISOString(),
        }
        this.outlet = this.helper.local.get_params(this.helper.config.variable.credential).data.outlet_id;

        if(helper.local.get_params(helper.config.variable.credential).outlet.serv_id != 1 || helper.local.get_params(helper.config.variable.credential).outlet.serv_id != 2)
        {
            this.get_ingredient_data()
        }else
        {
            this.product.get_product({data:{
                outlet: this.outlet,
                limit:1000,
                page:1
            }, online:true})
            .then((res)=>{
                res = JSON.parse(res)
                if(res.code == 200)
                {
                    this.products = res.data
                }
            })
        }
    }



    ionViewDidLoad() {
    }
    ionViewWillEnter()
    {
        this.get_data_spend();
    }

    openSpendItem()
    {
        if(!this.spend.sp_bill || this.spend.sp_bill > 1)
        {
            this.helper.alertCtrl.create({
                title: "Data kurang lengkap",
                "message": "Mohon untuk mengisi uang yang dibayarkan",
                buttons: ["OK"]
            }).present();
            return false;
        }
        this.state='spend_item';
    }

    get_ingredient_data()
    {
        // serv_id
        let loading = this.helper.loadingCtrl.create({
            content: "Memeriksa data"
        })
        loading.present();
        let url = this.helper.config.base_url('admin/outlet/ingredient/get');
        this.helper.$.ajax({
            url: url,
            type: 'POST',
            data: { 
                limit:1000,
                page:1,
                outlet_id: this.helper.local.get_params(this.helper.config.variable.credential).data.outlet_id,

                where:{
                    outlet_id: this.helper.local.get_params(this.helper.config.variable.credential).data.outlet_id
                }

            },
            dataType: 'json'
        })
        .done((res)=>{
            if(res.code == 200)
            {
                this.ingredients = res.data;
            }
        })
        .always(()=>{
            loading.dismiss();
        })
    }

    get_data_spend()
    {
        let loading = this.helper.loadingCtrl.create({
            content: "Memeriksa data"
        })
        loading.present();
        let url = this.helper.config.base_url('admin/outlet/spend/get');
        this.helper.$.ajax({
            url: url,
            type: 'POST',
            data: { 
                outlet_id: this.helper.local.get_params(this.helper.config.variable.credential).data.outlet_id,

                where:{
                    spend_date_only: this.helper.moment().format('YYYY-MM-DD')
                }

            },
            dataType: 'json'
        })
        .done((res)=>{
            if(res.code == 200)
            {
                this.data_spend = res.data;
            }
        })
        .always(()=>{
            loading.dismiss();
        })
    }

    create_new_spend_data()
    {
        let loading = this.helper.loadingCtrl.create({
            content: "Menambahkan data"
        })
        loading.present();
        let data = this.spend;
        data.outlet_id= this.helper.local.get_params(this.helper.config.variable.credential).data.outlet_id;
        data.users_outlet_id = this.helper.local.get_params(this.helper.config.variable.credential).data.users_outlet_id;
        data.items = this.spend_item;

        let url:any;
        if(!this.spend.sp_id)
        {
            url = this.helper.config.base_url('admin/outlet/spend/add');
        }else
        {
            url = this.helper.config.base_url('admin/outlet/spend/update');
        }
        this.helper.$.ajax({
            url: url,
            type: 'POST',
            data: data,
            dataType: 'json'
        })
        .done((res)=>{
            if(res.code == 200)
            {
                this.ResetItem()
                this.reset_spend_item();
                this.state = 'list'
                this.get_data_spend();
            }
        })
        .always(()=>{
            loading.dismiss();
        })
    }

    countChargeNominal(ev:any)
    {
        let value = ev.target.value;
        this.spend.sp_disc_percent = value;
        // ev.target.value = this.helper.percentToNominal(value);
        
    }

    countChargePercent(ev:any)
    {
        this.spend.sp_disc_nominal
    }

    countTotal($ev:any)
    {
        let value = this.spend_item_form.sp_dt_price ? this.helper.IDRtoInt(this.spend_item_form.sp_dt_price) : 0;
        let qty = this.spend_item_form.sp_dt_qty?this.spend_item_form.sp_dt_qty : 0;
        let total = value * qty;
        this.spend_item_form.sp_dt_total = this.helper.intToIDR(total);
        this.spend_item_form.sp_dt_price = this.helper.intToIDR(value);
    }

    SaveItem()
    {
        if(this.spend.sp_type)
        {

            let index = this.products.map(function(res){ return res.id }).indexOf(this.spend_item_form.prod_id);
            this.spend_item_form['product_item'] =  this.products[index];
        }
        if(!this.spend_item_form.sp_dt_desc || this.spend_item_form.sp_dt_desc == '')
        {
            this.helper.alertCtrl.create({
                message: "Deskripsi tidak boleh kosong!",
                buttons: ["OK"]
            }).present();
            return false;
        }
        if(Object.keys(this.spend_item_form).length > 0)
        {
            this.spend_item.push(this.spend_item_form)
        }
        
        this.countTotalSpend();
        this.ResetItem();

    }

    reset_spend_item()
    {
        this.spend_item = [];
    }
 
    ResetItem()
    {
        this.spend_item_form_state = 'new';
        this.spend_item_form_index = undefined;
        this.spend_item_form = {
            prod_id:'',
            sp_dt_qty:'',
            sp_dt_total:'',
            sp_dt_desc:'',
            sp_dt_note:'',
        };
        if(!this.spend.sp_type)
        {
            this.spend_item_form.sp_dt_price = '';
        }
    }

    RemoveItem(index)
    {
        this.spend_item.splice(index, 1)
    }

    EditItem(index, item)
    {
        this.spend_item_form_state = 'edit';
        this.spend_item_form_index = index;
        this.spend_item_form = item;
        
    }

    UpdateItem(index, item)
    {
        this.spend_item[this.spend_item_form_index] = this.spend_item_form;
        this.countTotalSpend();
        this.ResetItem();
    }

    countTotalSpend()
    {
        let sp_dt_total = this.spend_item.map((res)=>{
            return this.helper.IDRtoInt(res.sp_dt_total);
        });

        let total = 0;
        this.helper.$.each(sp_dt_total, (i, val)=>{
            total = total + val;
        });

        // discount
        let disc_nominal = this.helper.IDRtoInt(this.spend.sp_disc_nominal) > 0? this.spend.sp_disc_nominal : 0;
        if(this.spend.sp_disc_percent)
        {
            disc_nominal = this.helper.percentToNominal(this.spend.sp_disc_percent, total);
            this.spend.sp_disc_nominal = disc_nominal
        }

        // tax
        let tax_nominal = this.helper.IDRtoInt(this.spend.sp_tax_nominal) > 0? this.spend.sp_tax_nominal : 0;
        if(this.spend.sp_tax_percent)
        {
            tax_nominal = this.helper.percentToNominal(this.spend.sp_tax_percent, total);
            this.spend.sp_tax_nominal = tax_nominal
        }

        total = total - disc_nominal + tax_nominal;

        this.spend.sp_total = total;

    }

    advanceOptions(index, item)
    {
        this.helper.actionSheet.create({
            title: 'Opsi Lanjutan',
            buttons: [
            {
                  text: 'Edit item',
                  handler: () => {
                      item = Object.assign({}, item);
                      this.EditItem(index, item)
                  }
            },
            {
                  text: 'Hapus item',
                  handler: () => {
                      this.RemoveItem(index)
                  }
            }
            ]
        }).present();
    }

    changeToIDR($event)
    {
        var value_number = this.helper.IDRtoInt($event.target.value);
        var value = this.helper.intToIDR(value_number);
        this.spend.sp_bill = value;
    }

    close_preview()
    {
        this.view_state = 'form';
        this.state = 'list';
        this.spend = {};
        this.spend_item = [];
    }

    openSpendPreview()
    {
        this.state = 'spend_preview';
        this.countTotalSpend();
    }

    opsiLanjutanSpendItem(index, item)
    {
        this.helper.actionSheet.create({
            title: 'Opsi Lanjutan',
            buttons: [
            {
                  text: 'Lihat data',
                  handler: () => {
                      item = Object.assign({}, item);
                      this.spend = item;
                      this.spend_item = item.items;
                      this.state = 'spend_preview'
                      this.view_state = 'view'
                  }
            },{
                  text: 'Edit data',
                  handler: () => {
                      console.log(item)
                      // this.EditItem(index, item)
                      item = Object.assign({}, item);
                      item.sp_type = item.sp_type == 1? false : true;
                      this.spend = item;
                      this.spend_item = item.items;
                      this.state = 'new_spend'
                  }
            },
            {
                  text: 'Hapus data',
                  handler: () => {
                      this.RemoveDataSpend(item)
                  }
            }
            ]
        }).present();
    }

    RemoveDataSpend(item)
    {
        let loading = this.helper.loadingCtrl.create({
            content: "Menghapus data"
        })
        let url = this.helper.config.base_url('admin/outlet/spend/delete');
        this.helper.$.ajax({
            url: url,
            type: 'POST',
            data: item,
            dataType: 'json'
        })
        .done((res)=>{
            if(res.code == 200)
            {
                this.data_spend = res.data;
                this.reset_spend_item();
                this.state = 'list'
                this.get_data_spend();
            }
        })
        .always(()=>{
            loading.dismiss();
        })
    }
}
