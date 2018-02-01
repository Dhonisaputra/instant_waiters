import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductPage } from './product';
import { ReceiptPage } from '../receipt/receipt';

@NgModule({
  declarations: [
    ProductPage,
    ReceiptPage,
  ],
  entryComponents: [
    ReceiptPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductPage),
  ],
})
export class ProductPageModule {}
