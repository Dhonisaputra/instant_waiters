import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ConfigProvider } from '../../providers/config/config';
import * as $ from "jquery"

/*
  Generated class for the DbTableProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DbTableProvider {

  constructor(public http: HttpClient, public storage: Storage, private config: ConfigProvider) {
    console.log('Hello DbTableProvider Provider');
  }

  get_table(data:any={})
  {
  	// return this.storage.get('table')
    let urlTable = this.config.base_url('admin/outlet/table/data/get')
    let dataTable = Object.assign({status: 1}, data)
    return $.post(urlTable, dataTable)
    .done((res)=>{
        res = JSON.parse(res);
        this.storage.set('table', res)
        .then(()=>{
            console.info('Data table has been updated')
        })
        .catch(()=>{
            console.error('Error occured when updating data table')
        })
    })
  }
  get_table_storage()
  {

  }

}
