import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BillItemEditorPage } from './bill-item-editor';

@NgModule({
  declarations: [
    BillItemEditorPage,
  ],
  imports: [
    IonicPageModule.forChild(BillItemEditorPage),
  ],
})
export class BillItemEditorPageModule {}
