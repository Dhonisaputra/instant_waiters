import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelperProvider } from '../../providers/helper/helper'; 

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

	modal:any={}
	data_modal:any=[]
	outlet: number;
	users_outlet: number;
	state: string='new';
	constructor(public navCtrl: NavController, public navParams: NavParams, public helper: HelperProvider) {
        this.outlet = parseInt(this.helper.local.get_params(this.helper.config.variable.credential).data.outlet_id);
		this.users_outlet = parseInt(this.helper.local.get_params(this.helper.config.variable.credential).data.users_outlet_id);
	}

	ionViewDidLoad() {
	}
	ionViewWillEnter() {
		this.get_modal();
	}

    reset_modal_form_data()
    {
        this.modal.modal_nominal = '';
        this.modal.modal_note = '';
    }
	create_new_modal()
	{
        let url = this.helper.config.base_url('admin/outlet/modal/add')

		let load = this.helper.loadingCtrl.create({
        	content: "Menyimpan data"
        })
        load.present();
        this.modal.users_outlet_id = this.users_outlet;
        this.modal.outlet_id = this.outlet;

        this.helper.$.ajax({
        	url: url,
        	data: this.modal,
        	type: 'POST',
        	dataType: 'json'
        })
        .done((res)=>{
        	if(res.code == 200)
        	{
        		this.get_modal();
        		this.reset_modal_form_data()
        	}
        })
        .always(()=>{
        	load.dismiss();
        })
	}	

	update_modal()
	{
        let url = this.helper.config.base_url('admin/outlet/modal/update')

		let load = this.helper.loadingCtrl.create({
        	content: "Memperbarui data"
        })

        this.modal.users_outlet_id = this.users_outlet;
        this.modal.outlet_id = this.outlet;

        load.present();
        this.helper.$.ajax({
        	url: url,
        	data: this.modal,
        	type: 'POST',
        	dataType: 'json'
        })
        .done((res)=>{
        	if(res.code == 200)
        	{
                this.reset_modal_form_data()
	        	// this.modal = {}
                this.get_modal();
        	}
        })
        .always(()=>{
        	load.dismiss();
        })
	}

	delete_modal()
	{
        let url = this.helper.config.base_url('admin/outlet/modal/delete')

		let load = this.helper.loadingCtrl.create({
        	content: "Memeriksa data"
        })
        load.present();
        this.modal.users_outlet_id = this.users_outlet;
        this.modal.outlet_id = this.outlet;

        this.helper.$.ajax({
        	url: url,
        	data: this.modal,
        	type: 'POST',
        	dataType: 'json'
        })
        .done((res)=>{
        	if(res.code == 200)
        	{
        		this.get_modal();
                this.reset_modal_form_data()
	        	// this.modal = {}
        	}
        })
        .always(()=>{
        	load.dismiss();
        })
	}

	get_modal()
	{
        let url = this.helper.config.base_url('admin/outlet/modal/get')

		let load = this.helper.loadingCtrl.create({
        	content: "Memeriksa data"
        })

        let params = {
        	outlet_id: this.outlet,
            fields:'modal_id,users_outlet_id,outlet_id,modal_date,modal_nominal,modal_note,modal_date_only,users_fullname',
        	where: {
        		'modal_date_only': this.helper.moment().format('YYYY-MM-DD'),
        		'outlet_id': this.outlet
        	},
            join:["users_outlet"]
        }
        load.present();
        this.helper.$.ajax({
        	url: url,
        	data: params,
        	type: 'POST',
        	dataType: 'json'
        })
        .done((res)=>{
        	if(res.code == 200)
        	{
        		this.data_modal = res.data
        	}
        })
        .always(()=>{
        	load.dismiss();
        })
	}

    advanceOptions(index, item)
    {
        this.helper.actionSheet.create({
            title: 'Opsi Lanjutan',
            buttons: [
            {
                text: 'Edit data modal',
                handler: () => {
                    this.state = 'update';
                    this.modal = this.helper.clone_object(item);
                }
            },{
                text: 'Hapus data modal',
                handler: () => {
                    this.helper.alertCtrl.create({
                        title: "Hapus modal awal",
                        "message": 'Aksi ini akan menghapus data modal. apakah anda akan tetap melanjutkan?',
                        buttons: [
                        {
                            text: 'Cancel',
                            handler: data => {
                            }
                        },
                        {
                            text: 'Hapus',
                            handler: data => {
                                this.modal = this.helper.clone_object(item);
                                this.delete_modal()
                            }
                        }
                        ]
                    }).present();
                }
            }
            ]
        }).present();
    }

}
