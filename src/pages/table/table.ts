import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, App } from 'ionic-angular';
import { DbLocalProvider } from "../../providers/db-local/db-local";
import { ProductPage } from "../../pages/product/product";
import { DbTableProvider } from "../../providers/db-table/db-table";
import { HelperProvider } from '../../providers/helper/helper'; 

/**
 * Generated class for the TablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-table',
  templateUrl: 'table.html',
})
export class TablePage {

  tableNum : any;
  outlet : number;
  tableSelect : any;
  multiple:boolean = false;
  tableChoosen:any = {};
  choose_type_order:number = 1;
  event_handler:any={};
  constructor(public navCtrl: NavController, private appCtrl: App, public navParams: NavParams, private local : DbLocalProvider, private dbTableProvider: DbTableProvider, private helper: HelperProvider) {
    // this.helstorage.set('outlet', 1)
    this.local.setdb('outlet', 1)
  	/*this.local.opendb('table')
  	.then((res)=>{
  		if(!res)
  		{
  			console.error('No Table defined. please do synchronize first!');
	  		this.tableNum = [];
  		}else
  		{
  			
	  		this.tableNum = res.results;
  		}
	  })*/
}	

  ionViewWillEnter()
  {
    this.detect_parameters();

  }


  ionViewDidLoad() {
    this.local.opendb('outlet')
    .then((val)=>{
      this.outlet = val;
      this.dbTableProvider.get_table({outlet: val})
      .then( (res)=>{
        res = !this.helper.isJSON(res)? res : JSON.parse(res);
        if(res.code == 200)
        {
          this.tableNum = res.results;
        }else
        {
          alert('Error on getting data')
        }
      })
      .catch(()=>{
          alert('Error on getting data')
      })
    })
      
  }

  selectTable(index:number, tab_id:number)
  {
    if(this.is_selected(index))
    {
      delete this.tableChoosen[index];
    }else
    {
      if(!this.multiple)
      {
        this.tableChoosen = {}
      }
      this.tableChoosen[index] = this.tableNum[index];
    }
    // this.tableNum[index].status_meja = this.tableNum[index].status_meja?false:true;
  }

  is_selected(index:number)
  {
    return this.tableChoosen[index]? true : false;
  }
  is_selection_null()
  {
    return Object.keys(this.tableChoosen).length < 1? true : false;
  }

  change_order(number:number)
  {
    this.choose_type_order = number;
    switch (number) {
      case 1:
        // code...
        break;
      case 2:
        // code...
        this.navCtrl.setRoot(ProductPage)
        break;
      
      default:
        // code...
        alert('undefined data')
        break;
    }
  }

  detect_parameters()
  {
    this.event_handler[this.navParams.data.event] = this.navParams.data;
    if(this.navParams.data.trigger_event)
    {
      switch (this.navParams.data.trigger_event) {
        case "table.change":
          console.log()
          break;
        
        default:
          // code...
          break;
      }
    }
  }

  order()
  {
    this.local.set_params('table.selected', this.tableChoosen);
    // this.appCtrl.getRootNav().push(ProductPage)
    this.navCtrl.setRoot(ProductPage, {'previous': 'table-page', event:'table.pick', trigger_event:'order.pick', 'table': this.tableChoosen, 'multiple': this.multiple})
  }
}
