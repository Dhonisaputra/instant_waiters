import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DbLocalProvider } from '../../providers/db-local/db-local';
import { HelperProvider } from '../../providers/helper/helper';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { ErrorPage } from '../../pages/error/error';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  segment:string='menu';
  settings:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams, private db: DbLocalProvider, public helper: HelperProvider) {
    this.settings = Object.assign(this.settings, this.helper.local.get_params(this.helper.config.variable.settings) )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  update_settings()
  {
    this.helper.local.set_params(this.helper.config.variable.settings, this.settings);
    this.helper.storage.set(this.helper.config.variable.settings, this.settings);
    this.helper.toast.create({
      message: "Settings telah diperbarui",
      duration: 1500
    }).present();
  }

  to_error_page()
  {
    this.navCtrl.push(ErrorPage, {code:404, message:'Page not found!'});
  }
  sync()
  {
  	this.db.sync();
  }

}
