var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TablePage } from '../pages/table/table';
import { LoginPage } from '../pages/login/login';
import { OutletListPage } from '../pages/outlet-list/outlet-list';
import { ProductPage } from '../pages/product/product';
import { SettingsPage } from '../pages/settings/settings';
import { StocksPage } from '../pages/stocks/stocks';
import { TransactionPage } from '../pages/transaction/transaction';
import { MemberPage } from '../pages/member/member';
import { SpendPage } from '../pages/spend/spend';
import { DebtPage } from '../pages/debt/debt';
import { ModalPage } from '../pages/modal/modal';
import { AboutPage } from '../pages/about/about';
import { WaitersPage } from '../pages/waiters/waiters';
import { PrintBluetoothPanelPage } from '../pages/print-bluetooth-panel/print-bluetooth-panel';
import { KitchenbarPage } from '../pages/kitchenbar/kitchenbar';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { HelperProvider } from '../providers/helper/helper';
var MyApp = /** @class */ (function () {
    function MyApp(toastCtrl, platform, statusBar, splashScreen, helper, screenOrientation) {
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.helper = helper;
        this.screenOrientation = screenOrientation;
        this.rootPage = LoginPage;
        this.tablePage = TablePage;
        this.productPage = ProductPage;
        this.kitchenbarPage = KitchenbarPage;
        this.waitersPage = WaitersPage;
        this.stocksPage = StocksPage;
        this.transactionPage = TransactionPage;
        this.memberPage = MemberPage;
        this.modalPage = ModalPage;
        this.spendPage = SpendPage;
        this.debtPage = DebtPage;
        this.settingsPage = SettingsPage;
        this.outletListPage = OutletListPage;
        this.aboutPage = AboutPage;
        this.printerPage = PrintBluetoothPanelPage;
        this.lastTimeBackPress = 0;
        this.timePeriodToExit = 2000;
        this.users = {};
        this.splashScreen.show();
        this.initializeApp();
        // console.log(helper.local.get_params(this.helper.config.variable.settings))
        // let default_page = !this.helper.local.get_params(this.helper.config.variable.settings) || this.helper.local.get_params(this.helper.config.variable.settings).choose_table_first?  TablePage : ProductPage ;
        // used for an example of ngFor and navigation
        this.pages = [];
        // this.storage.set('outlet', 1)
        this.routeHistory = [];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.platform.registerBackButtonAction(function () { return _this.preventClose(); }, 10);
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.helper.preload('audio', 'assets/audio/intuition.mp3');
            _this.helper.events.subscribe('outlet.signout', function () {
                // user and time are the same arguments passed in `events.publish(user, time)`
                _this.signOutOutlet();
            });
            // this.users = this.helper.local.get_params(this.helper.config.variable.credential).users;
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.setRoot = function (page, params) {
        if (params === void 0) { params = {}; }
        this.helper.play('audio');
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page, params);
    };
    MyApp.prototype.preventClose = function () {
        var toast = this.toastCtrl.create({
            message: "Silahkan tutup aplikasi melalui sidebar menu!",
            duration: 3000
        });
        toast.present();
    };
    MyApp.prototype.logout = function () {
        this.helper.local.reset_params('is_login');
        this.helper.storage.remove(this.helper.config.variable.credential);
        this.helper.storage.remove('pinned_product');
        this.helper.local.set_params(this.helper.config.variable.credential, { users: {}, data: {}, outlet: {}, type_product: [] });
        this.helper.local.set_params('pinned_params', []);
        this.nav.setRoot(LoginPage);
    };
    MyApp.prototype.closeApp = function () {
        var _this = this;
        this.helper.alertCtrl.create({
            title: "Tutup aplikasi",
            message: "Apakah anda yakin ingin menutup aplikasi?",
            buttons: ["Tidak", {
                    text: "Tutup",
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }]
        }).present();
    };
    MyApp.prototype.signOutOutlet = function () {
        this.helper.local.reset_params('login_outlet_device');
        this.helper.local.set_params('login_outlet_device', false);
        this.nav.setRoot(OutletListPage);
    };
    MyApp.prototype.filteringTypeCategories = function (item) {
        var selectedType = this.helper.$('.typeCategories:checked').serializeArray().map(function (res) { return res.value; });
        this.helper.events.publish('product:filter-type', { item: selectedType });
    };
    __decorate([
        ViewChild(Nav),
        __metadata("design:type", Nav)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Component({
            templateUrl: 'app.html'
        }),
        __metadata("design:paramtypes", [ToastController, Platform, StatusBar, SplashScreen, HelperProvider, ScreenOrientation])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map