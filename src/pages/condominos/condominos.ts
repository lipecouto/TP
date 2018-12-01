import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CondominosServiceProvider } from '../../providers/condominos-service/condominos-service';
import { AptosServiceProvider } from '../../providers/aptos-service/aptos-service';
import { Condomino } from '../../models/condomino.model/condomino.model';
import { CondominoPage } from '../condomino/condomino';

@Component({
  selector: 'page-condominos',
  templateUrl: 'condominos.html',
})
export class CondominosPage {

  condominos: Condomino[] = [];
  aptos: any[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public condominosService: CondominosServiceProvider,
              public aptosService: AptosServiceProvider) { }

  ionViewWillEnter() {
    this.condominosService.getCondominos().then(dados=>{this.condominos=dados});
    this.aptosService.getAptos().then(dados=>{this.aptos=dados});
  }

  nomeApto(c):string {
    for(let i=0; i<this.aptos.length; i++)
    {
      if(this.aptos[i].codigo == c)
      {
        return this.aptos[i].apto;
      }
    }
    return "Projeto não encontrado";
  }

  selecionaCondomino (c) {
    let cn = parseInt(c);
    this.navCtrl.push(CondominoPage, {
      codigo: cn,
      novo: false
    });
  }

  novoCondomino() {
    this.navCtrl.push(CondominoPage, {
      codigo: 0,
      novo: true
    });
  }

}
