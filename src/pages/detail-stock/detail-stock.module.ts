import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailStockPage } from './detail-stock';

@NgModule({
  declarations: [
    DetailStockPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailStockPage),
  ],
})
export class DetailStockPageModule {}
