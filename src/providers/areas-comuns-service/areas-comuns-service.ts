import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/topromise';

@Injectable()
export class AreasComunsServiceProvider {

  url = 'http://localhost:8100/api';

  constructor(public http: Http) { }

  getAreasComuns(): Promise<any[]> {
    return new Promise(resolve => {
      this.http.get(this.url+'/areas_comuns')
      .toPromise()
      .then( res=> {
        let dados = res.json();
        let areas = [];
        for(let i=0; i<dados.length; i++)
          areas.push( {
            codigo: parseInt(dados[i].codigo),
            nome: dados[i].nome
          });
        resolve(areas);
      });
    });
  }

  getAreaComum(p:number): Promise<any> {
    return new Promise(resolve => {
      this.http.get(this.url+'/areas_comuns/'+p)
      .toPromise()
      .then(res => {
        let dados = res.json();
        let area = {
          codigo: parseInt(dados.codigo),
          nome: dados.nome
        };
        resolve(area);
      });
    });
  }

  editArea(p:number, n:string ): Promise<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let area = {
      nome: n
    };
    let body = JSON.stringify(area);
    return new Promise(resolve => {
      this.http.put(this.url+'/areas_comuns/'+p, body, {headers: headers})
      .toPromise()
      .then(res=>{
        resolve(res.json());
      });
    });
  }

  deleteArea(p:number): Promise<any> {
    return new Promise(resolve => {
      this.http.delete(this.url+'/areas_comuns/'+p)
      .toPromise()
      .then(res=> {
        resolve(res.json());
      });
    });
  }

  addArea(n:string): Promise<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let area = {
      nome: n
    };
    let body = JSON.stringify(area);
    return new Promise(resolve => {
      this.http.post(this.url+'/areas_comuns', body, {headers: headers})
      .toPromise()
      .then(res=>{
        resolve(res.json());
      });
    });
  }

}
