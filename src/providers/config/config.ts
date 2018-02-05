import { Injectable } from '@angular/core';

/*
Generated class for the ConfigProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class ConfigProvider {

	host: string;
	constructor() {
		console.log('Hello ConfigProvider Provider');
		// this.host = 'http://localhost/folarpos-instant/';
		this.host = 'http://192.168.137.178/folarpos-instant/';
	}

	base_url(url:any)
	{
		url = url?url+'/' : '';
		return this.host + url;
	}

}
