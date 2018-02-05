import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TablePage } from '../pages/table/table';
import { LoginPage } from '../pages/login/login';
import { SendReceiptPage } from '../pages/send-receipt/send-receipt';
import { PaymentPage } from '../pages/payment/payment';
import { ReceiptPage } from '../pages/receipt/receipt';
import { ProductPage } from '../pages/product/product';
import { SettingsPage } from '../pages/settings/settings';
import { StocksPage } from '../pages/stocks/stocks';
import { TransactionPage } from '../pages/transaction/transaction';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TablePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
      

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Table', component: TablePage }, 
      { title: 'Send Receipt', component: SendReceiptPage },
      { title: 'Payment', component: PaymentPage },
      { title: 'Product', component: ProductPage },
      { title: 'Stocks', component: StocksPage },
      { title: 'Transaction', component: TransactionPage },
      { title: 'Settings', component: SettingsPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
