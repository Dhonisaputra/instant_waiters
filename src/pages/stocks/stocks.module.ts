import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StocksPage } from './stocks';

@NgModule({
 
  imports: [
    IonicPageModule.forChild(StocksPage),
  ],
})
export class StocksPageModule {}
