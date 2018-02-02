import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TablePage } from '../pages/table/table';
import { LoginPage } from '../pages/login/login';
import { SendReceiptPage } from '../pages/send-receipt/send-receipt';
import { PaymentPage } from '../pages/payment/payment';
import { ReceiptPage } from '../pages/receipt/receipt';
import { ProductPage } from '../pages/product/product';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ReceiptDataProvider } from '../providers/receipt-data/receipt-data';
import { ConfigProvider } from '../providers/config/config';
import { ProductProvider } from '../providers/product/product';
import { BillProvider } from '../providers/bill/bill';

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
    ProductPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
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
    ProductPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ReceiptDataProvider,
    ConfigProvider,
    ProductProvider,
    BillProvider
  ]
})
export class AppModule {}
