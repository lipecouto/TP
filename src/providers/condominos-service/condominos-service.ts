import { Condomino } from '../../models/condomino.model/condomino.model';
import { Http, Headers } from '@angular/http';

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/topromise';


@Injectable()
export class CondominosServiceProvider {

  url = 'http://localhost:8100/api';

  constructor(public http: Http) { }

  getCondominos(): Promise<any[]> {
    return new Promise(resolve => {
      this.http.get(this.url+'/condominos')
      .toPromise()
      .then( res=> {
        let dados = res.json();
        let condominos = [];
        for(let i=0; i<dados.length; i++)

          condominos.push(new Condomino(
            parseInt(dados[i].codigo),
            dados[i].nome,
            dados[i].cpf,
            dados[i].nascimento,
            dados[i].email,
            dados[i].endereco,
            dados[i].telefone,
            parseInt(dados[i].qtdade_pessoas),
            parseInt(dados[i].tempo_permanencia),
            parseInt(dados[i].apto))
            );
        resolve(condominos);
      });
    });
  }

  getCondomino(t:number): Promise<any> {
    return new Promise(resolve => {
      this.http.get(this.url+'/condominos/'+t)
      .toPromise()
      .then(res => {
        let dados = res.json();
        let condomino = new Condomino(
          parseInt(dados.codigo),
          dados.nome,
          dados.cpf,
          dados.nascimento,
          dados.email,
          dados.endereco,
          dados.telefone,
          parseInt(dados.qtdade_pessoas),
          parseInt(dados.tempo_permanencia),
          parseInt(dados.apto)
        );
        resolve(condomino); 
      });
    }); 
  }

 editCondomino(cond: Condomino): Promise<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let condomino = {
      codigo: cond.codigo,
      nome: cond.nome,
      cpf: cond.cpf,
      nascimento: cond.nascimento,
      email: cond.email,
      endereco: cond.endereco,
      telefone: cond.telefone,
      qtdade_pessoas: cond.qtdade_pessoas,
      tempo_permanencia: cond.tempo_permanencia,
      apto: cond.apto
    };
    let body = JSON.stringify(condomino);

    return new Promise(resolve => {
      this.http.put(this.url+'/condominos/'+cond.codigo, body, {headers: headers})
      .toPromise()
      .then(res=>{
        resolve(res.json());
      });
    });
  }

  addCondomino(cond: Condomino): Promise<any> {
    
    let condomino = {
      
      nome: cond.nome,
      cpf: cond.cpf,
      nascimento: cond.nascimento,
      email: cond.email,
      endereco: cond.endereco,
      telefone: cond.telefone,
      qtdade_pessoas: cond.qtdade_pessoas,
      tempo_permanencia: cond.tempo_permanencia,
      apto: cond.apto
    };
    let body = JSON.stringify(condomino);
    return new Promise(resolve => {
      this.http.post(this.url+'/condominos', body)
      .toPromise()
      .then(res=>{
        resolve(res.json());
      });
    });
  }

  deleteCondomino(cond: Condomino): Promise<any> {
    return new Promise(resolve => {
      this.http.delete(this.url+'/condominos/'+cond.codigo)
      .toPromise()
      .then(res=> {
        resolve(res.json());
      });
    });
  }
}
