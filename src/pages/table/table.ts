import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
	this.tableNum = [
		{number:1, status:false},
		{number:2, status:false},
		{number:3, status:false},
		{number:4, status:false},
		{number:5, status:false},
		{number:6, status:false},
		{number:7, status:false},
		{number:8, status:false},
		{number:9, status:false},
		{number:10, status:false},
		{number:11, status:false},
		{number:12, status:false},
		{number:13, status:false},
		{number:14, status:false},
		{number:15, status:false},
		{number:16, status:false},
	];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TablePage');
  }

  selectTable(event, item)
  {
  	this.tableNum[item-1].status = this.tableNum[item-1].status?false:true;
  }

}
