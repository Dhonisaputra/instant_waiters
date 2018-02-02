import { Injectable } from '@angular/core';
import { ConfigProvider } from '../../providers/config/config';
import * as $ from "jquery"

/*
Generated class for the ProductProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class ProductProvider {

	constructor(public config: ConfigProvider) {
		console.log('Hello ProductProvider Provider');
	}

	get_product(options:any)
	{
		return $.post( this.config.base_url('admin/outlet/product/get'), options.data )
	}

}
