import { HttpClient } from '@angular/common/http';
import { Events } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ConfigProvider } from "../config/config";
import * as $ from "jquery"
import { LocalNotifications } from '@ionic-native/local-notifications';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
/*
Generated class for the DbLocalProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class DbLocalProvider {
    fileTransfer: FileTransferObject = this.transfer.create();
    params: any= {is_login:false} // variable to store temporary params || karena saya belum bisa ngirim / ganti page menggunakan parameters.
    credential:any={
        users:{}
    }
    constructor(public http: HttpClient, public config: ConfigProvider, public storage: Storage, private events: Events, private localNotifications: LocalNotifications, private transfer: FileTransfer, private file: File) {
    }

    set_params(name:string, value:any={})
    {
        this.params[name] = value;
    }

    get_params(name:string)
    {
        return this.params[name];
    }

    reset_params(name:string)
    {
        delete this.params[name];
    }

    create_database()
    {
        this.sync_table();
    }

    sync_table()
    {
        let urlTable = this.config.base_url('admin/outlet/table/data/get')

        this.storage.get('outlet')
        .then((val) => {
            let dataTable = {outlet: val, status: 1}
            $.post(urlTable, dataTable)
            .done((res)=>{
                res = JSON.parse(res);
                this.storage.set('table', res)
                .then(()=>{
                    this.events.publish('dt.table.done',{})
                    console.info('Data table has been updated')
                })
                .catch(()=>{
                    console.error('Error occured when updating data table')
                })
            })

        })

    }

    sync_product()
    {
        let urlProduct = this.config.base_url('admin/outlet/product/get')

        this.storage.get('outlet')
        .then((val) => {
            let dataTable = {outlet: val, status: 1, fields: 'id,outlet,type,price,name,unit,stock,image,charge_nominal,charge_percent,status,discount_nominal,discount_percent,status_text,can_be_removed,favorite'}
            $.post(urlProduct, dataTable)
            .done((res)=>{
                res = JSON.parse(res);
                if(res.code == 500)
                {
                    console.error(res.message);
                    return false;
                }
                for (var i = 0; i < res.data.length; i++) {
                    if(res.data[i].image)
                    {
                        let filename = res.data[i].image.thumb? res.data[i].image.thumb.split('/') : res.data[i].image.url.split('/');
                        res.data[i].image.image_local = this.file.dataDirectory+'product/'+filename[filename.length - 2]+'/'+filename[filename.length - 1];

                        this.fileTransfer.download(res.data[i].image.thumb, this.file.dataDirectory+'product/'+filename[filename.length - 2]+'/'+filename[filename.length - 1], true)
                    }
                }

                this.storage.set('product', res)
                .then(()=>{
                    this.events.publish('dt.last_sync.done',{})
                    console.info('Data product has been updated')
                })
                .catch(()=>{
                    console.error('Error occured when updating data table')
                })
            })

        })

    }

    sync()
    {
        this.sync_table();
        this.events.subscribe('dt.table.done', () =>{
            this.sync_product();
        })

        this.events.subscribe('dt.last_sync.done', () =>{
            // this.sync_product();
            /*this.localNotifications.schedule({
              id: 1,
              text: 'Synchronize data is complete!',
            });*/
        })
    }

    opendb(dbname:string)
    {
        return this.storage.get(dbname);
    }
 
    setdb(dbname:string, value:any)
    {
        return this.storage.set(dbname, value);
    }

    removedb(dbname:string)
    {
        return this.storage.remove(dbname);
    }
}
