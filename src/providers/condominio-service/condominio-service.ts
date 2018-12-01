import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/topromise';

@Injectable()
export class CondominioServiceProvider {

  url = 'http://localhost:8100/api';

  constructor(public http: Http) { }  

  getCondominio(): Promise<any> {
    return new Promise(resolve => {
      this.http.get(this.url+'/condominio/1')
      .toPromise()
      .then(res => {
        let dados = res.json();
        let condominio = {
          codigo: parseInt(dados.codigo),
          nome: dados.nome,
          nm_edificios: parseInt(dados.nm_edificios),
          endereco: dados.endereco,
          bairro: dados.bairro,
          cidade: dados.cidade,
          estado: dados.estado,
          sindico: dados.sindico,
          subsindico: dados.subsindico,
        };
        resolve(condominio);
      });
    });
  }

}
