import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	users:any;

  constructor(public navCtrl: NavController, public service:ServiceProvider) {
  		this.getDados();
  }
  	getDados(){
  		this.service.getData().subscribe(
  			data => this.users = data,
  			err => console.log(err)
  			);

  			
  	}
}
