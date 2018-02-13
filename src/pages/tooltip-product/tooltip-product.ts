import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the TooltipProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tooltip-product',
  templateUrl: 'tooltip-product.html',
})
export class TooltipProductPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TooltipProductPage');
  }

  zoom(type:string="in")
  {
  	// this.navParams.data.zoom('out')
  	this.events.publish('zoom.controller', {event: type})
  }

}
