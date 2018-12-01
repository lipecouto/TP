import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/topromise';

@Injectable()
export class ConsumoAreaServiceProvider {

  url = 'http://localhost:8100/api';

  constructor(public http: Http) { }

  getConsumosArea(): Promise<any[]> {
    return new Promise(resolve => {
      this.http.get(this.url+'/consumo_area')
      .toPromise()
      .then( res=> {
        let dados = res.json();
        let consumosArea = [];
        for(let i=0; i<dados.length; i++)

          consumosArea.push({
            codigo: parseInt(dados[i].codigo),
            area: dados[i].area_comum,
            mes_ano: dados[i].mes_ano,
            meta: dados[i].meta
          });
        resolve(consumosArea);
      });
    });
  }

  getConsumoArea(t:number): Promise<any> {
    return new Promise(resolve => {
      this.http.get(this.url+'/consumo_area/'+t)
      .toPromise()
      .then(res => {
        let dados = res.json();
        let consumoArea = {
          codigo: parseInt(dados.codigo),
          area: dados.area_comum,
          mes_ano: dados.mes_ano,
          meta: dados.meta
        };
        resolve(consumoArea); 
      });
    }); 
  }

  editConsumoArea(t:number, a:number, m:string, me:number): Promise<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let consumoArea =  {
      area_comum: a,
      mes_ano: m+'01',
      meta: me
    };
    let body = JSON.stringify(consumoArea);

    return new Promise(resolve => {
      this.http.put(this.url+'/consumo_area/'+t, body, {headers: headers})
      .toPromise()
      .then(res=>{
        resolve(res.json());
      });
    });
  }

  addConsumoArea(a:number, m:string, me:number): Promise<any> {
    let consumoArea =  {
      area_comum: a,
      mes_ano: m+'-01',
      meta: me
    };
    let body = JSON.stringify(consumoArea);
    return new Promise(resolve => {
      this.http.post(this.url+'/consumo_area', body)
      .toPromise()
      .then(res=>{
        resolve(res.json());
      });
    });
  }

  deleteConsumoArea(t:number): Promise<any> {
    return new Promise(resolve => {
      this.http.delete(this.url+'/consumo_area/'+t)
      .toPromise()
      .then(res=> {
        resolve(res.json());
      });
    });
  }

  getMedia(t:number): Promise<any> {
    return new Promise(resolve => {
      this.http.get(this.url+'/media_area/'+t)
      .toPromise()
      .then(res => {
        let dados = res.json();
        let mediaArea = {
         media: parseInt(dados.soma)/parseInt(dados.rows)
        };
        resolve(mediaArea); 
      });
    }); 
  }
}
