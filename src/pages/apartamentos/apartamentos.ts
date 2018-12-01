import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AptosServiceProvider } from '../../providers/aptos-service/aptos-service';
import { ApartamentoPage } from '../apartamento/apartamento';
import { ConsumoAptoServiceProvider } from '../../providers/consumo-apto-service/consumo-apto-service';



@Component({
  selector: 'page-apartamentos',
  templateUrl: 'apartamentos.html',
})
export class ApartamentosPage {

  aptos: any[] = [];
  consumosApto: any[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public aptosService: AptosServiceProvider,
              public consumoAptoService: ConsumoAptoServiceProvider) {  }

  ionViewWillEnter() {
    this.consumoAptoService.getConsumosApto().then(dados=>{this.consumosApto=dados});
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

  selecionaConsumo (c) {
    let cn = parseInt(c);
    this.navCtrl.push(ApartamentoPage, {
      codigo: cn,
      novo: false
    });
  }

  novoConsumo() {
    this.navCtrl.push(ApartamentoPage, {
      codigo: 0,
      novo: true
    });
  }

}
