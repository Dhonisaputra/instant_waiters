import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform, LoadingController, AlertController, ToastController, ActionSheetController, Events, PopoverController} from 'ionic-angular';
import { ConfigProvider } from '../../providers/config/config';
import { DbLocalProvider } from '../../providers/db-local/db-local';
import { PrinterServiceProvider } from '../../providers/printer-service/printer-service';
import { Storage } from '@ionic/storage';

import * as $ from "jquery"

import * as moment from 'moment';
import * as html2canvas from "html2canvas";



/*
  Generated class for the HelperProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HelperProvider {
  public $:any=$;
  public moment:any=moment;
  public html2canvas:any=html2canvas;
  public outlet:any;
  public users_outlet:any;
  public win: any;
  private defaultTimeout: Number = 100;
  constructor(
    public http: HttpClient, 
    public config: ConfigProvider, 
    public toast:ToastController, 
    public alertCtrl:AlertController, 
    public loadingCtrl: LoadingController, 
    public local: DbLocalProvider, 
    public storage:Storage,
    public actionSheet: ActionSheetController,
    public events:Events,
    public popoverCtrl:PopoverController,
    public platform: Platform,
    public printer: PrinterServiceProvider
    ) {
    this.win = window;
    console.log('Hello HelperProvider Provider');
    this.platform.ready().then(() => {
      if (this.win.cordova && !this.win.DatecsPrinter) {
        console.warn("DatecsPrinter plugin is missing. Have you installed the plugin? \nRun 'cordova plugin add cordova-plugin-datecs-printer'");
      }
    });
  }

  /*
	Source
	- https://faisalman.com/2012/02/27/konversi-angka-ke-format-rupiah-di-javascript/
  */
  intToIDR(angka:any)
  {
  	var rev     = parseInt(angka, 10).toString().split('').reverse().join('');
    var rev2    = '';
    for(var i = 0; i < rev.length; i++){
        rev2  += rev[i];
        if((i + 1) % 3 === 0 && i !== (rev.length - 1)){
            rev2 += '.';
        }
    }
    return rev2.split('').reverse().join('');
 
  }

  nativeWindow()
  {
    return window;
  }

  IDRtoInt(angka:any)
  {

    angka = angka? angka.toString() : '0';
  	return parseInt(angka.replace(/,.*|\D/g,''),10)

  }

  isJSON(str) 
  {
  	try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return {status:true, result: JSON.parse(str)};
  }

  nominalToPercent(nominal:number, total:number)
  {
    return ((nominal/total)*100).toFixed(1);
  }

  percentToNominal(percent:number, total:number)
  {
    return total * (percent/100);
  }

  toInt(text:any)
  {
    return parseInt(text)
  }

  clone_object(data)
  {
    return Object.assign({}, data)
  }

  html_encode(value)
  {
      return $('<div/>').text(value).html();
  }

  html_decode(value)
  {
      return $('<div/>').html(value).text();
  }

}
