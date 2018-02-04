import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HelperProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HelperProvider {

  constructor(public http: HttpClient) {
    console.log('Hello HelperProvider Provider');
  }

  /*
	Source
	- https://faisalman.com/2012/02/27/konversi-angka-ke-format-rupiah-di-javascript/
  */
  intToIDR(angka:any)
  {
  	var rev     = parseInt(angka, 10).toString().split('').reverse().join('');
    var rev2    = '';
    for(var i = 0; i < rev.length; i++){
        rev2  += rev[i];
        if((i + 1) % 3 === 0 && i !== (rev.length - 1)){
            rev2 += '.';
        }
    }
    return rev2.split('').reverse().join('') + ',00';
 
  }

  IDRtoInt(angka:any)
  {
  	return parseInt(angka.replace(/,.*|\D/g,''),10)

  }

  isJSON(str) 
  {
  	try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return {status:true, result: JSON.parse(str)};
  }

}
