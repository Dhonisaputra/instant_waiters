import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrintBluetoothPanelPage } from './print-bluetooth-panel';

@NgModule({
  declarations: [
    PrintBluetoothPanelPage,
  ],
  imports: [
    IonicPageModule.forChild(PrintBluetoothPanelPage),
  ],
})
export class PrintBluetoothPanelPageModule {}
