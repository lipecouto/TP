import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AreasComunsServiceProvider } from '../../providers/areas-comuns-service/areas-comuns-service';
import { AreaComumPage } from '../area-comum/area-comum';

@Component({
  selector: 'page-areas-comuns',
  templateUrl: 'areas-comuns.html',
})
export class AreasComunsPage {

  areas: any[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public areasService: AreasComunsServiceProvider) {
  }

  ionViewWillEnter() {
    this.areasService.getAreasComuns().then(dados=>{this.areas=dados});
  }

  selecionaArea (c) {
    let cn = parseInt(c);
    this.navCtrl.push(AreaComumPage, {
      codigo: cn,
      novo: false
    });
  }

  novoArea() {
    this.navCtrl.push(AreaComumPage, {
      codigo: 0,
      novo: true
    });
  }

}
