import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendReceiptPage } from './send-receipt';

@NgModule({
  declarations: [
    SendReceiptPage,
  ],
  imports: [
    IonicPageModule.forChild(SendReceiptPage),
  ],
})
export class SendReceiptPageModule {}
