import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentPage } from './payment';

@NgModule({
  
  imports: [
    IonicPageModule.forChild(PaymentPage),
  ],
})
export class PaymentPageModule {
	receipt: any;
	constructor()
	{
	}
}
