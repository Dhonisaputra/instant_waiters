import { HttpClient } from '@angular/common/http';
import { Events, AlertController} from 'ionic-angular';
import { Injectable } from '@angular/core';
import { DbLocalProvider } from '../../providers/db-local/db-local';
import { ConfigProvider } from '../../providers/config/config';
import * as io from 'socket.io-client';
import { LocalNotifications } from '@ionic-native/local-notifications';
/*
  Generated class for the AiRemoteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AiRemoteProvider {
	io:any = io;
	options:any={}
	socket:any;
	isInitialize:boolean=false;
  isListen:boolean=false;
	isListenGeneral:boolean=false;
  constructor(public http: HttpClient, public localNotifications: LocalNotifications, private alert: AlertController, private local: DbLocalProvider, private config: ConfigProvider, private events: Events) {
  	console.log(io)
  	this.options = this.default_params();
  }

  initialize(params)
  {
  	if(!this.isInitialize)
  	{
	  	this.options = Object.assign(this.options, params);
	  	this.options.url = this.options.host+'?cluster='+this.options.apiKey;
	  	this.socket = this.io(this.options.url)
	  	this.isInitialize = true;
	  	this.socket.on('connect', ()=>{
	  	})
  	}
  }
  default_params()
  {
  	return {
  		host:'https://remotep2p.herokuapp.com/',
  		apiKey:'Folarium3838' ,
  		id:undefined
  	}
  }
  subscribe(event, fn)
  {	
  	event = this.options.apiKey+"_"+event;
  	this.socket.on(event, fn)
  }

  send(event, target, data, fn)
  {
  	fn = typeof fn == 'undefined'? function(){} : fn;

  	data = {
		target: target,
		data: data,
		_props: {
			apiKey: this.options.apiKey
		}
	};
	this.socket.emit(event, data, fn);
  }

  socket_listener()
  {
    let isLogin = this.local.get_params('login_outlet_device')
    
    if(!this.isListen)
    {

      let outlet_id = this.local.get_params(this.config.variable.credential).data.outlet_id;
      let data = this.local.get_params(this.config.variable.credential).data;
      let uuid = this.local.get_params(this.config.variable.credential).outlet_device.uuid;
      
      this.subscribe('app.'+uuid+'.'+outlet_id+'.authority.revoke', ()=>{
        if(!isLogin)
        {
          return false;
        }
        this.alert.create({
          title: "Anda telah dikeluarkan oleh admin",
          subTitle: "Hak akses Anda telah dicabut oleh admin dari outlet ini. Silahkan hubungi admin outlet anda untuk keterangan lebih lanjut!",
          buttons: [{
            text: "Tutup",
            handler: ()=>{
              this.events.publish('outlet.signout')
            }
          }]
        }).present();
      })

      this.subscribe('app.'+uuid+'.authority.accepted', ()=>{
        console.log('trigger', uuid, data, this.localNotifications)
        this.localNotifications.schedule({
          id: 1,
          text: 'Perangkat anda telah diperbolehkan untuk mengakses outlet '+data.outlet_name,
          sound: 'file://assets/audio/notification.mp3',
          data: { secret: uuid }
        });
      })

      this.isListen = true;
    }
  }  

  socket_listener_general()
  {
    let isLogin = this.local.get_params('login_outlet_device')
    
  	if(!this.isListenGeneral)
  	{

	    let data = this.local.get_params(this.config.variable.credential).data;
	    let uuid = this.local.get_params("uuid");

      console.log(data, uuid)
      this.subscribe('app.'+uuid+'.authority.accepted', ()=>{
        console.log('trigger', uuid, data, this.localNotifications)
	    	this.localNotifications.schedule({
          id: 1,
          text: 'Perangkat anda telah diperbolehkan untuk mengakses outlet '+data.outlet_name,
          sound: 'file://assets/audio/notification.mp3',
          data: { secret: uuid }
        });
        this.events.publish('outlet_list.refresh')
	    })

	    this.isListenGeneral = true;
  	}
  }
}
