import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AreasComunsServiceProvider } from '../../providers/areas-comuns-service/areas-comuns-service';

@Component({
  selector: 'page-area-comum',
  templateUrl: 'area-comum.html',
})
export class AreaComumPage {

  codigoArea: number;
  nomeArea: string = "";
  novo: boolean;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public areasService: AreasComunsServiceProvider) {
    this.codigoArea = navParams.get('codigo');
    this.novo = navParams.get('novo');
    if(!this.novo) {
      areasService.getAreaComum(this.codigoArea)
      .then(dados=>{
          this.nomeArea = dados.nome;
      });
    }
  }

  alterar() {
    this.areasService.editArea(this.codigoArea, this.nomeArea)
    .then(res=>{
      this.navCtrl.pop();
    });
  }

  excluir() {
    this.areasService.deleteArea(this.codigoArea)
    .then(res=>{
      this.navCtrl.pop();
    });
  }

  incluir() {
    this.areasService.addArea(this.nomeArea)
    .then(res=>{
      this.navCtrl.pop();
    });
  }

}
