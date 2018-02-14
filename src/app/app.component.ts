import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController, Config, IonicApp, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
import { TablePage } from '../pages/table/table';
import { LoginPage } from '../pages/login/login';
// import { SendReceiptPage } from '../pages/send-receipt/send-receipt';
// import { PaymentPage } from '../pages/payment/payment';
// import { ReceiptPage } from '../pages/receipt/receipt';
import { ProductPage } from '../pages/product/product';
import { SettingsPage } from '../pages/settings/settings';
import { StocksPage } from '../pages/stocks/stocks';
import { TransactionPage } from '../pages/transaction/transaction';
import { Storage } from '@ionic/storage';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { HelperProvider } from '../providers/helper/helper'; 
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;
  lastTimeBackPress:number=0;
  timePeriodToExit:number=2000;
  public routeHistory: Array<any>;


  constructor(private screenOrientation: ScreenOrientation, private app : App, public toastCtrl: ToastController, public platform: Platform, private ionicApp: IonicApp, public statusBar: StatusBar, public splashScreen: SplashScreen, private storage:Storage, public helper:HelperProvider) {

    this.initializeApp();
    
    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'Home', component: HomePage },
      // { title: 'Table', component: TablePage }, 
      // { title: 'Send Receipt', component: SendReceiptPage },
      // { title: 'Payment', component: PaymentPage },
      { title: 'Kasir', component: ProductPage },
      { title: 'Stok', component: StocksPage },
      { title: 'Transaksi', component: TransactionPage },
      { title: 'Settings', component: SettingsPage },
    ];
    // this.storage.set('outlet', 1)
    this.routeHistory = [];
    

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
      this.platform.registerBackButtonAction(()=>this.preventClose(),10);
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  preventClose()
  {
    let toast = this.toastCtrl.create({
      message: "Press Again to Confirm Exit",
      duration: 3000
    });
    toast.present(); 
  }

  logout()
  {
    this.helper.storage.remove(this.helper.config.variable.credential)
    this.helper.local.reset_params('is_login');
    this.helper.local.reset_params(this.helper.config.variable.credential);
    this.nav.setRoot(LoginPage);
  }

}
