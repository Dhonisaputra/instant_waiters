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
		// this.host = 'http://localhost/folarpos-instant/';
		// this.host = 'http://192.168.1.13/folarpos-instant/';
		this.host = 'http://192.168.100.31/folarpos-instant/';
	}

	base_url(url:any)
	{
		url = url?url+'/' : '';
		return this.host + url;
	}

}
