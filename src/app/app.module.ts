import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { IonicStorageModule } from '@ionic/storage';
import { SQLite } from '@ionic-native/sqlite';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TablePage } from '../pages/table/table';
import { LoginPage } from '../pages/login/login';
import { SendReceiptPage } from '../pages/send-receipt/send-receipt';
import { PaymentPage } from '../pages/payment/payment';
import { ReceiptPage } from '../pages/receipt/receipt';
import { ProductPage } from '../pages/product/product';
import { BillSavedPage } from '../pages/bill-saved/bill-saved';
import { SettingsPage } from '../pages/settings/settings';
import { StocksPage } from '../pages/stocks/stocks';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ReceiptDataProvider } from '../providers/receipt-data/receipt-data';
import { ConfigProvider } from '../providers/config/config';
import { ProductProvider } from '../providers/product/product';
import { BillProvider } from '../providers/bill/bill';
import { DbLocalProvider } from '../providers/db-local/db-local';
import { DbTableProvider } from '../providers/db-table/db-table';
import { HelperProvider } from '../providers/helper/helper';  

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TablePage,
    LoginPage,
    SendReceiptPage,
    PaymentPage,
    ReceiptPage,
    ProductPage,
    BillSavedPage,
    SettingsPage,
    StocksPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    TablePage,
    SendReceiptPage,
    PaymentPage,
    ReceiptPage,
    ProductPage,
    SettingsPage,
    StocksPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalNotifications,
    SQLite,
    File,
    FileTransfer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ReceiptDataProvider,
    ConfigProvider,
    ProductProvider,
    BillProvider,
    DbLocalProvider,
    DbTableProvider,
    HelperProvider
  ]
})
export class AppModule {}
