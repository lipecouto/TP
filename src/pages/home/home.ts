import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({ 
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  dados: {title: string, descricao: string };

  constructor(public navCtrl: NavController) {
    this.dados = { title: 'Sistema de Recursos Hídricos - Condomínio', descricao: 'Sistema de gerenciamento de recursos hídricos para condomínio' };
  }

}
