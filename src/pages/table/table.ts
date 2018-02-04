import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { DbLocalProvider } from "../../providers/db-local/db-local";

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
  constructor(public navCtrl: NavController, public navParams: NavParams, private local : DbLocalProvider) {

  	this.local.opendb('table')
  	.then((res)=>{
  		console.log(res)
  		if(!res)
  		{
  			console.error('No Table defined. please do synchronize first!');
	  		this.tableNum = [];
  		}else
  		{
  			
	  		console.log(res)
	  		this.tableNum = res.results;
  		}
	  })
}	

  ionViewDidLoad() {
    console.log('ionViewDidLoad TablePage');
  }

  selectTable(event, tab_id)
  {
  	var index = this.tableNum.map(function(res){ return res.tab_id }).indexOf(tab_id);
  	this.tableNum[index].status_meja = this.tableNum[index].status_meja?false:true;
  }

}
