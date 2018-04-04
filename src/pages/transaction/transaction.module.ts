import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransactionPage } from './transaction';

@NgModule({
  
  imports: [
    IonicPageModule.forChild(TransactionPage),
  ],
})
export class TransactionPageModule {}
