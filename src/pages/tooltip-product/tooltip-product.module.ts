import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TooltipProductPage } from './tooltip-product';

@NgModule({
  declarations: [
    TooltipProductPage,
  ],
  imports: [
    IonicPageModule.forChild(TooltipProductPage),
  ],
})
export class TooltipProductPageModule {}
