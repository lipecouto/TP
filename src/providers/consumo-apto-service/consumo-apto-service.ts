import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/topromise';

@Injectable()
export class ConsumoAptoServiceProvider {

  url = 'http://localhost:8100/api';

  constructor(public http: Http) { }

  getConsumosApto(): Promise<any[]> {
    return new Promise(resolve => {
      this.http.get(this.url+'/consumo_apto')
      .toPromise()
      .then( res=> {
        let dados = res.json();
        let consumosApto = [];
        for(let i=0; i<dados.length; i++)

          consumosApto.push({
            codigo: parseInt(dados[i].codigo),
            apto: dados[i].apto,
            mes_ano: dados[i].mes_ano,
            meta: dados[i].meta
          });
        resolve(consumosApto);
      });
    });
  }

  getConsumoApto(t:number): Promise<any> {
    return new Promise(resolve => {
      this.http.get(this.url+'/consumo_apto/'+t)
      .toPromise()
      .then(res => {
        let dados = res.json();
        let consumoApto = {
          codigo: parseInt(dados.codigo),
          apto: dados.apto,
          mes_ano: dados.mes_ano,
          meta: dados.meta
        };
        resolve(consumoApto); 
      });
    }); 
  }

  editConsumoApto(t:number, a:number, m:string, me:number): Promise<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let consumoApto =  {
      apto: a,
      mes_ano: m+'-01',
      meta: me
    };
    let body = JSON.stringify(consumoApto);

    return new Promise(resolve => {
      this.http.put(this.url+'/consumo_apto/'+t, body, {headers: headers})
      .toPromise()
      .then(res=>{
        resolve(res.json());
      });
    });
  }

  addConsumoApto(a:number, m:string, me:number): Promise<any> {
    
    let consumoApto =  {
      apto: a,
      mes_ano: m+'-01',
      meta: me
    };
    let body = JSON.stringify(consumoApto);
    return new Promise(resolve => {
      this.http.post(this.url+'/consumo_apto', body)
      .toPromise()
      .then(res=>{
        resolve(res.json());
      });
    });
  }

  deleteConsumoApto(t:number): Promise<any> {
    return new Promise(resolve => {
      this.http.delete(this.url+'/consumo_apto/'+t)
      .toPromise()
      .then(res=> {
        resolve(res.json());
      });
    });
  }

  getMedia(t:number): Promise<any> {
    return new Promise(resolve => {
      this.http.get(this.url+'/media_apto/'+t)
      .toPromise()
      .then(res => {
        let dados = res.json();
        let mediaApto = {
         media: parseInt(dados.soma)/parseInt(dados.rows)
        };
        resolve(mediaApto); 
      });
    }); 
  }
}
