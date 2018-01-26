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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
	this.tableNum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TablePage');
  }

}
