import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BillSavedPage } from './bill-saved';

@NgModule({
  declarations: [
    BillSavedPage,
  ],
  imports: [
    IonicPageModule.forChild(BillSavedPage),
  ],
})
export class BillSavedPageModule {}
