import { Injectable } from '@angular/core';

/*
Generated class for the ConfigProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class ConfigProvider {

	host: string;
	variable:any = {
		credential: 'credential',
		settings: 'settings'
	} 
	constructor() {
		this.host = 'http://instant.folarpos.co.id/';
		// this.host = 'http://localhost/folarpos-instant/';
		// this.host = 'http://192.168.1.38/folarpos-instant/';
		// this.host = 'http://192.168.1.14/folarpos-instant/';
		// this.host = 'http://192.168.100.31/folarpos-instant/';
	}

	base_url(url:any)
	{
		url = url?url+'/' : '';
		return this.host + url;
	}

}
