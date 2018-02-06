import { Injectable } from '@angular/core';
import { ConfigProvider } from '../../providers/config/config';
import * as $ from "jquery"
import { Storage } from '@ionic/storage';

/*
Generated class for the ProductProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class ProductProvider {
	public last_request: any;
	public last_options: any;
	constructor(public config: ConfigProvider, private storage: Storage) {
		console.log('Hello ProductProvider Provider');
	}

	get_product(options:any)
	{
		if(options.online == true)
		{
			options.data = Object.assign(
				{
					fields: 'id,outlet,type,price,name,unit,stock,image,charge_nominal,charge_percent,status,discount_nominal,discount_percent,status_text,can_be_removed,favorite'	,
					limit: 8,
					page: 1,				
				}, options.data)

			this.last_options = options;
			this.last_request = options.data;

			return $.post( this.config.base_url('admin/outlet/product/get'), options.data )
		}else
		{
			return this.storage.get('product')
		}
	}

}
