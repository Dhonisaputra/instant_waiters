import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OutletListPage } from './outlet-list';

@NgModule({
  declarations: [
    OutletListPage,
  ],
  imports: [
    IonicPageModule.forChild(OutletListPage),
  ],
})
export class OutletListPageModule {}
