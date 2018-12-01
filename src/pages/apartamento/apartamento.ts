import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AptosServiceProvider } from '../../providers/aptos-service/aptos-service';
import { ConsumoAptoServiceProvider } from '../../providers/consumo-apto-service/consumo-apto-service';

@Component({
  selector: 'page-apartamento',
  templateUrl: 'apartamento.html',
})
export class ApartamentoPage {
  
  novo: boolean;
  codigo: number = 0;
  apto: number = 0;
  mes_ano: string = '';
  meta: number = 0;
  aptos: any[] = [];
  media: number = 0;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public aptosService: AptosServiceProvider,
              public consumoAptoService: ConsumoAptoServiceProvider) {
    this.novo = navParams.get('novo');
    
    if(!this.novo) {
      consumoAptoService.getConsumoApto(navParams.get('codigo'))
      .then(dados=>{
          this.codigo = dados.codigo;
          this.apto = dados.apto;
          this.mes_ano = dados.mes_ano;
          this.meta = dados.meta;
          consumoAptoService.getMedia(dados.apto).then(dados=>{
            this.media = dados.media;
          });
      });

      consumoAptoService.getMedia(this.apto).then
    }

    aptosService.getAptos().then(dados => {
      this.aptos = dados;
    })

  }

  alterar() {
    this.consumoAptoService.editConsumoApto(this.codigo, this.apto, this.mes_ano, this.meta)
    .then(res=>{
      this.navCtrl.pop();
    });
  }

  excluir() {
    this.consumoAptoService.deleteConsumoApto(this.codigo)
    .then(res=>{
      this.navCtrl.pop();
    });
  }

  incluir() {
    this.consumoAptoService.addConsumoApto(this.apto, this.mes_ano, this.meta)
    .then(res=>{
      this.navCtrl.pop();
    });
  }

}
