import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as $ from "jquery"

/*
  Generated class for the DbTableProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DbTableProvider {

  constructor(public http: HttpClient, public storage: Storage) {
    console.log('Hello DbTableProvider Provider');
  }

  get_table()
  {
  	return this.storage.get('table')
  }
  get_table_storage()
  {

  }

}
