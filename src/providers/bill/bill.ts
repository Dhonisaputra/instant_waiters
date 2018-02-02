import { Injectable } from '@angular/core';
import { ConfigProvider } from '../../providers/config/config';
import * as $ from "jquery"

/*
  Generated class for the BillProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()
  export class BillProvider {

  	constructor(public config: ConfigProvider) {
  		console.log('Hello BillProvider Provider');
  	}

  	save(data:any)
  	{
  		var url = this.config.base_url('admin/outlet/transaction/add')
  		data = data
  		return $.post(url, data)
  	}

  }
