import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, App } from 'ionic-angular';
import { DbLocalProvider } from "../../providers/db-local/db-local";
import { ProductPage } from "../../pages/product/product";

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
  tableSelect : any;
  multiple:boolean = false;
  tableChoosen:any = {};
  choose_type_order:number = 1;
  constructor(public navCtrl: NavController, private appCtrl: App, public navParams: NavParams, private local : DbLocalProvider) {

  	this.local.opendb('table')
  	.then((res)=>{
  		if(!res)
  		{
  			console.error('No Table defined. please do synchronize first!');
	  		this.tableNum = [];
  		}else
  		{
  			
	  		this.tableNum = res.results;
  		}
	  })
}	

  ionViewDidLoad() {
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

  order()
  {
    this.local.set_params('table.selected', this.tableChoosen);
    // this.appCtrl.getRootNav().push(ProductPage)
    this.navCtrl.push(ProductPage, {'previous': 'table-page', 'table': this.tableChoosen, 'multiple': this.multiple})
  }
}
