import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditReceiptItemPage } from './edit-receipt-item';

@NgModule({
  declarations: [
    EditReceiptItemPage,
  ],
  imports: [
    IonicPageModule.forChild(EditReceiptItemPage),
  ],
})
export class EditReceiptItemPageModule {}
