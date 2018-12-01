import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApartamentosPage } from '../apartamentos/apartamentos';
import { CareasComunsPage } from '../careas-comuns/careas-comuns';
import { ApartamentoPage } from '../apartamento/apartamento';
import { CareaComunPage } from '../carea-comun/carea-comun';

@Component({
  selector: 'page-consumos',
  templateUrl: 'consumos.html',
})
export class ConsumosPage {

  items: Array<{title: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.items = [];
    this.items.push(
      { title: 'Apartamentos', icon: 'people' },
      { title: 'Áreas Comuns', icon: 'football' }
      );
  }

  seleciona (item) {
    switch(item) { 
      case 'Apartamentos': { 
        this.navCtrl.push(ApartamentosPage);
        break; 
      } 
      case 'Áreas Comuns': { 
        this.navCtrl.push(CareasComunsPage);
        break; 
      } 
      default: { 
        this.navCtrl.push(ApartamentosPage);
        break; 
      } 
   }
  }

  adicionarConsumoApartamento() {
    this.navCtrl.push(ApartamentoPage, {
      codigo: 0,
      novo: true
    });
  }

  adicionarConsumoArea() {
    this.navCtrl.push(CareaComunPage, {
      codigo: 0,
      novo: true
    });
  }

  

}
