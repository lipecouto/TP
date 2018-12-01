import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AreasComunsServiceProvider } from '../../providers/areas-comuns-service/areas-comuns-service';
import { ConsumoAreaServiceProvider } from '../../providers/consumo-area-service/consumo-area-service';

@Component({
  selector: 'page-carea-comun',
  templateUrl: 'carea-comun.html',
})
export class CareaComunPage {

  novo: boolean;
  codigo: number = 0;
  area: number = 0;
  mes_ano: string = '';
  meta: number = 0;
  areas: any[] = [];
  media; number = 0;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public areasService: AreasComunsServiceProvider,
              public consumoAreaService: ConsumoAreaServiceProvider) {
                this.novo = navParams.get('novo');
    
    if(!this.novo) {
      consumoAreaService.getConsumoArea(navParams.get('codigo'))
      .then(dados=>{
          this.codigo = dados.codigo;
          this.area = dados.area;
          this.mes_ano = dados.mes_ano;
          this.meta = dados.meta;
          consumoAreaService.getMedia(dados.area).then(dados=>{
            this.media = dados.media;
          });
      });
    }
    areasService.getAreasComuns().then(dados => {
      this.areas = dados;
    })
  }

  alterar() {
    this.consumoAreaService.editConsumoArea(this.codigo, this.area, this.mes_ano, this.meta)
    .then(res=>{
      this.navCtrl.pop();
    });
  }

  excluir() {
    this.consumoAreaService.deleteConsumoArea(this.codigo)
    .then(res=>{
      this.navCtrl.pop();
    });
  }

  incluir() {
    this.consumoAreaService.addConsumoArea(this.area, this.mes_ano, this.meta)
    .then(res=>{
      this.navCtrl.pop();
    });
  }

}
