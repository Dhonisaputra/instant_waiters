import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelperProvider } from "../../providers/helper/helper";
/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  listAbout:any = [];
  appName:any = 'loading..';
  versionCode:any = 'loading..';
	versionNumber:any = 'loading..';
  constructor(private helper: HelperProvider, public navCtrl: NavController, public navParams: NavParams) {

   this.listAbout = [{
      name: "nama",
      value: this.helper.appName
    },{
      name: 'uuid',
      value: this.helper.local.get_params('uuid')
    },{
      name: 'version number',
      value: this.helper.versionNumber
    },{
      name: 'version Code',
      value: this.helper.versionCode
    },{
      name: 'Author',
      value: 'dhoni.p.saputra@gmail.com'
    },{
      name: 'Company',
      value: 'Folarium Technomedia'
    },{
      name: "Year",
      value: 2018
    }, {
      name: 'Website',
      value: "http://folarpos.co.id"
    }]

  }

  ionViewDidLoad() {
  }

}
