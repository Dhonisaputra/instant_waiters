import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelperProvider } from '../../providers/helper/helper'; 

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
})
export class SpendPage {
	state:any;
	spend:any={}
	data_spend:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public helper:HelperProvider) {
  	this.state = 'list';
  }


  ionViewDidLoad() {
  }
  ionViewWillEnter()
  {
  	this.get_data_spend();
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

  	let url = this.helper.config.base_url('admin/outlet/spend/add');
  	this.helper.$.ajax({
  		url: url,
  		type: 'POST',
  		data: data,
  		dataType: 'json'
  	})
  	.done((res)=>{
  		if(res.code == 200)
  		{
  			this.data_spend = res.data;
  			this.state = 'list'
  			this.get_data_spend();
  		}
  	})
  	.always(()=>{
  		loading.dismiss();
  	})
  }
}
