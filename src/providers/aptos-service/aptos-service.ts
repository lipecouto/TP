import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/topromise';

@Injectable()
export class AptosServiceProvider {

  url = 'http://localhost:8100/api';

  constructor(public http: Http) { }

  getAptos(): Promise<any[]> {
    return new Promise(resolve => {
      this.http.get(this.url+'/aptos')
      .toPromise()
      .then( res=> {
        let dados = res.json();
        let aptos = [];
        for(let i=0; i<dados.length; i++)
          aptos.push( {
            codigo: parseInt(dados[i].codigo),
            apto: dados[i].apto
          });
        resolve(aptos);
      });
    });
  }

  getApto(p:number): Promise<any> {
    return new Promise(resolve => {
      this.http.get(this.url+'/aptos/'+p)
      .toPromise()
      .then(res => {
        let dados = res.json();
        let apto = {
          codigo: parseInt(dados.codigo),
          apto: dados.apto
        };
        resolve(apto);
      });
    });
  }

}
