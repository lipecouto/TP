import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AreasComunsServiceProvider } from '../../providers/areas-comuns-service/areas-comuns-service';
import { ConsumoAreaServiceProvider } from '../../providers/consumo-area-service/consumo-area-service';
import { CareaComunPage } from '../carea-comun/carea-comun';

@Component({
  selector: 'page-careas-comuns',
  templateUrl: 'careas-comuns.html',
})
export class CareasComunsPage {

  areas: any[] = [];
  consumosArea: any[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public areasService: AreasComunsServiceProvider,
              public consumoAreaService: ConsumoAreaServiceProvider) { }

  ionViewWillEnter() {
    this.consumoAreaService.getConsumosArea().then(dados=>{this.consumosArea=dados});
    this.areasService.getAreasComuns().then(dados=>{this.areas=dados});
  }
  nomeArea(c):string {
    for(let i=0; i<this.areas.length; i++)
    {
      if(this.areas[i].codigo == c)
      {
        return this.areas[i].nome;
      }
    }
    return "Projeto não encontrado";
  }

  selecionaConsumo (c) {
    let cn = parseInt(c);
    this.navCtrl.push(CareaComunPage, {
      codigo: cn,
      novo: false
    });
  }

  novoConsumo() {
    this.navCtrl.push(CareaComunPage, {
      codigo: 0,
      novo: true
    });
  }

}
