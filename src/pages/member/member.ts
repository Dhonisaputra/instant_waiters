import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { HelperProvider } from '../../providers/helper/helper'; 
import { MemberNewFormPage } from '../member-new-form/member-new-form'; 
import { MemberDetailPage } from '../member-detail/member-detail'; 

/**
 * Generated class for the MemberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-member',
  templateUrl: 'member.html',
})
export class MemberPage {
	
	segment_member:string='member_list'	
	member:any = []
	outlet: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public helper:HelperProvider, public modalCtrl:ModalController, public viewCtrl:ViewController) {
		this.segment_member='member_list';
		this.outlet = this.helper.local.get_params(this.helper.config.variable.credential).data.outlet_id;
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad MemberPage');
	}

	fetching_member()
	{
		let load = this.helper.loadingCtrl.create({
			content: "Memeriksa data"
		})
		load.present();
		this.helper.$.ajax({
			type: "POST",
			url: this.helper.config.base_url('admin/outlet/member/get'),
			data: {
				outlet_id: this.outlet
			},
			dataType: 'json'
		})
		.done((res)=>{

			this.member = res.data
		})
		.always( ()=>{
			load.dismiss();
		} )
	}

	ionViewWillEnter()
	{
		this.fetching_member();

	}

	hapus_member(item)
	{
		let load = this.helper.loadingCtrl.create({
			content: "menghapus member"
		})
		load.present();
		this.helper.$.ajax({
			type: "POST",
			url: this.helper.config.base_url('admin/outlet/member/delete'),
			data: {
				outlet_id: this.outlet,
				member_id: item.member_id
			},
			dataType: 'json'
		})
		.done((res)=>{

			// this.member = res.data
			if(res.code == 200)
			{
				this.helper.alertCtrl.create({
					title: "Member berhasil dihapus",
					message: "Member telah berhasil dihapus",
					buttons:["OK"]
				}).present();
				this.fetching_member();
			}else
			{
				this.helper.alertCtrl.create({
					title: "Terdapat kesalah",
					message: "Member gagal dihapus",
					buttons:["OK", {
						text: 'Ulangi',
				        handler: () => {
				        	this.hapus_member(item)
				        }
					}]
				}).present();
			}

		})
		.fail(()=>{
			this.helper.alertCtrl.create({
				title: "Terdapat kesalah",
				message: "Member gagal dihapus",
				buttons:["OK", {
					text: 'Ulangi',
			        handler: () => {
			        	this.hapus_member(item)
			        }
				}]
			}).present();
		})
		.always( ()=>{
			load.dismiss();
		} )
	}
	update_new_member()
	{

	}
	openFormPopover(data:any={})
	{
		let modal = this.modalCtrl.create(MemberNewFormPage, data)
		modal.onDidDismiss(data => {
			this.fetching_member();
	   	});
		modal.present();
	}

	pickMember(index, item)
	{
		switch (this.navParams.data.event) {
			case "pick.member":
				this.viewCtrl.dismiss({data:item})
				break;
			
			default:
				// code...
				this.openDetailPage(index, item)
				break;
		}
		// this.navCtrl.push(MemberNewFormPage);
	}

	openDetailPage(index, item)
	{
		console.log(index, item)
		this.navCtrl.push(MemberDetailPage, {index:index, data:item})
	}

	advanceOptions(index, item)
	{
		this.helper.actionSheet.create({
			title: 'Opsi lanjutan',
			buttons: [
				{
					text: 'Edit Member',
					handler: () => {
						this.openFormPopover({index:index, member:item, event:'edit'})
					}
				},{
					text: 'Buka Detail Member',
					handler: () => {
						this.openDetailPage(index, item)
					}
				},{
					text: 'Hapus Member',
					handler: () => {
						this.helper.alertCtrl.create({
							title: "Peringatan",
							message: "Apakah anda akan menghapus member ini?",
							buttons:["Batal", {
								text: 'Hapus',
						        handler: () => {
						        	this.hapus_member(item)
						        }
							}]
						}).present();
					}
				}
			]
		}).present()
	}
}
