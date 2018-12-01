import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CondominosServiceProvider } from '../../providers/condominos-service/condominos-service';
import { AptosServiceProvider } from '../../providers/aptos-service/aptos-service';
import { Condomino } from '../../models/condomino.model/condomino.model';

@Component({
  selector: 'page-condomino',
  templateUrl: 'condomino.html',
})
export class CondominoPage {

  condomino: Condomino = new Condomino(0, '','', '', '', '', '', 0, 0, 1);
  novo: boolean;
  aptos: any[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public condominosService: CondominosServiceProvider,
              public aptosService: AptosServiceProvider) {
    this.novo = navParams.get('novo');

    if(!this.novo) {
      condominosService.getCondomino(navParams.get('codigo'))
      .then(dados=>{
          this.condomino = dados;
      });
    }

    aptosService.getAptos().then(dados => {
      this.aptos = dados;
    })
  }

  alterar() {
    this.condominosService.editCondomino(this.condomino)
    .then(res=>{
      this.navCtrl.pop();
    });
  }

  excluir() {
    this.condominosService.deleteCondomino(this.condomino)
    .then(res=>{
      this.navCtrl.pop();
    });
  }

  incluir() {
    this.condominosService.addCondomino(this.condomino)
    .then(res=>{
      this.navCtrl.pop();
    });
  }

}
