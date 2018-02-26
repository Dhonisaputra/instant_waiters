var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelperProvider } from '../../providers/helper/helper';
/**
 * Generated class for the DebtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DebtPage = /** @class */ (function () {
    function DebtPage(navCtrl, navParams, helper) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.helper = helper;
        this.debts = [];
    }
    DebtPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DebtPage');
        this.outlet = this.helper.local.get_params(this.helper.config.variable.credential).data.outlet_id;
        this.get_data_debt();
        /*this.dbLocalProvider.opendb('outlet')
        .then((val)=>{
            
        })*/
    };
    DebtPage.prototype.get_data_debt = function () {
        var _this = this;
        var url = this.helper.config.base_url('admin/outlet/debt/get');
        var data = {
            outlet_id: this.outlet,
        };
        this.helper.$.ajax({
            url: url,
            type: 'POST',
            data: data,
            dataType: "json"
        })
            .done(function (res) {
            if (res.code == 200) {
                _this.debts = res.data;
            }
            console.log(res);
        });
    };
    DebtPage.prototype.cicilHutang = function (item) {
        this.helper.alertCtrl.create({
            title: "Isikan jumlah cicilan",
            inputs: [
                {
                    name: 'cicilan',
                    placeholder: 'jumlah cicilan',
                },
            ],
        });
    };
    DebtPage.prototype.advanceOptions = function (index, item) {
        var _this = this;
        this.helper.actionSheet.create({
            title: 'Opsi lanjutan',
            buttons: [
                {
                    text: "Lihat data hutang",
                    handler: function () {
                    }
                }, {
                    text: "Cicil hutang",
                    handler: function () {
                        _this.cicilHutang(item);
                    }
                },
            ]
        });
    };
    DebtPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-debt',
            templateUrl: 'debt.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, HelperProvider])
    ], DebtPage);
    return DebtPage;
}());
export { DebtPage };
//# sourceMappingURL=debt.js.map