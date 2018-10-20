import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/



@Injectable()
export class ServiceProvider {

  api:string ="http://webpuc.gigaup.com.br/php/service.php";

  constructor(public http: HttpClient) {
    console.log('Hello ServiceProvider Provider');
  }

  getData(){
   	return this.http.get(this.api+'?acao=consultaCondominio').map(res=>res);
  }


}
