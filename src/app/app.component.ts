import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
import { TablePage } from '../pages/table/table';
import { LoginPage } from '../pages/login/login';
import { OutletListPage } from '../pages/outlet-list/outlet-list';
// import { SendReceiptPage } from '../pages/send-receipt/send-receipt';
// import { PaymentPage } from '../pages/payment/payment';
// import { ReceiptPage } from '../pages/receipt/receipt';
import { ProductPage } from '../pages/product/product';
import { SettingsPage } from '../pages/settings/settings';
import { StocksPage } from '../pages/stocks/stocks';
import { TransactionPage } from '../pages/transaction/transaction';
import { MemberPage } from '../pages/member/member';
import { SpendPage } from '../pages/spend/spend';
import { DebtPage } from '../pages/debt/debt';
import { ModalPage } from '../pages/modal/modal';


import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { HelperProvider } from '../providers/helper/helper'; 
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage         : any = LoginPage;
  tablePage        : any = TablePage;
  productPage      : any = ProductPage;
  
  stocksPage       :any=StocksPage;
  transactionPage  :any=TransactionPage;
  memberPage       :any=MemberPage;
  modalPage        :any=ModalPage;
  spendPage        :any=SpendPage;
  debtPage         :any=DebtPage;
  settingsPage     :any=SettingsPage;
  outletListPage   :any=OutletListPage;
  pages            : any; //Array<{title: string, component: any, options:any}>
  lastTimeBackPress:number=0;
  timePeriodToExit :number=2000;
  users            : any={}
  public routeHistory: Array<any>;


  constructor(public toastCtrl: ToastController, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public helper:HelperProvider, private screenOrientation: ScreenOrientation) {
    this.splashScreen.show();

    this.initializeApp();
    // console.log(helper.local.get_params(this.helper.config.variable.settings))
    // let default_page = !this.helper.local.get_params(this.helper.config.variable.settings) || this.helper.local.get_params(this.helper.config.variable.settings).choose_table_first?  TablePage : ProductPage ;
    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'Home', component: HomePage },
      // { title: 'Kasir', component: TablePage }, 
      // { title: 'Kasir', component: ProductPage },
      // { title: 'Send Receipt', component: SendReceiptPage },
      // { title: 'Payment', component: PaymentPage },
      { title: 'Stok', component: StocksPage, options:{type:'setting', setting_name: 'stok', status:true} },
      { title: 'Transaksi', component: TransactionPage, options:{type:'setting', setting_name: 'transaksi', status:true} },
      { title: 'Member', component: MemberPage, options:{type:'setting', setting_name: 'member', status:true} },
      { title: 'Modal', component: ModalPage, options:{type:'setting', setting_name: 'modal', status:true} },
      { title: 'Pengeluaran', component: SpendPage, options:{type:'setting', setting_name: 'pengeluaran', status:true} },
      { title: 'Hutang', component: DebtPage, options:{type:'setting', setting_name: 'debt_mode', status:true} },
      { title: 'Settings', component: SettingsPage, options:{type:'setting', setting_name: 'settings', status:true} },
    ];
    // this.storage.set('outlet', 1)
    this.routeHistory = [];
    

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if( this.platform.is('android') )
      {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE)
        .catch(()=>{
        })
      }

      this.platform.registerBackButtonAction(()=>this.preventClose(),10);
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // this.users = this.helper.local.get_params(this.helper.config.variable.credential).users;
    });
  } 

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  setRoot(page, params:any={}) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page, params);
  }

  preventClose()
  {
    let toast = this.toastCtrl.create({
      message: "Silahkan tutup aplikasi melalui sidebar menu!",
      duration: 3000
    });
    toast.present(); 
  }

  logout()
  {
    this.helper.local.reset_params('is_login');
    this.helper.storage.remove(this.helper.config.variable.credential)
    this.helper.storage.remove('pinned_product')
    this.helper.local.set_params(this.helper.config.variable.credential,{users:{}, data:{}, outlet:{}, type_product:[]});
    this.helper.local.set_params('pinned_params',[]);
    this.nav.setRoot(LoginPage);
  }

  closeApp()
  {
    this.helper.alertCtrl.create({
      title: "Tutup aplikasi",
      message: "Apakah anda yakin ingin menutup aplikasi?",
      buttons: ["Tidak", {
        text: "Tutup",
        handler: ()=>{    
          this.platform.exitApp()
        }
      }]
    }).present();
  }

}
