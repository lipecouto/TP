import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CondominioServiceProvider } from '../../providers/condominio-service/condominio-service';

@Component({
  selector: 'page-condominio',
  templateUrl: 'condominio.html',
})
export class CondominioPage {

  condominio: any[] = [];
  abas;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public condominioService: CondominioServiceProvider) {
    this.abas = 'condominio';
  }

  ionViewWillEnter() {
    this.condominioService.getCondominio().then(dados=>{this.condominio=dados});
  }



}
