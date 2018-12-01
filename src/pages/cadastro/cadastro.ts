import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CondominosPage } from '../condominos/condominos';
import { AreasComunsPage } from '../areas-comuns/areas-comuns';
import { CondominoPage } from '../condomino/condomino';
import { AreaComumPage } from '../area-comum/area-comum';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  
  items: Array<{title: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.items = [];
    this.items.push(
      { title: 'Condominos', icon: 'people' },
      { title: 'Áreas Comuns', icon: 'football' }
      );
  }

  seleciona (item) {
    switch(item) { 
      case 'Condominos': { 
        this.navCtrl.push(CondominosPage);
        break; 
      } 
      case 'Áreas Comuns': { 
        this.navCtrl.push(AreasComunsPage);
        break; 
      } 
      default: { 
        this.navCtrl.push(CondominosPage);
        break; 
      } 
   }
  }

  adicionarCondomino() {
    this.navCtrl.push(CondominoPage, {
      codigo: 0,
      novo: true
    });
  }

  adicionarArea() {
    this.navCtrl.push(AreaComumPage, {
      codigo: 0,
      novo: true
    });
  }
}
