import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { CondominosPage } from '../pages/condominos/condominos';
import { CondominoPage } from '../pages/condomino/condomino';
import { AreaComumPage } from '../pages/area-comum/area-comum';

import { CondominosServiceProvider } from '../providers/condominos-service/condominos-service';
import { AreasComunsServiceProvider } from '../providers/areas-comuns-service/areas-comuns-service';
import { AptosServiceProvider } from '../providers/aptos-service/aptos-service';
import { AreasComunsPage } from '../pages/areas-comuns/areas-comuns';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {HttpModule} from '@angular/http'; 
import {HttpClientModule} from '@angular/common/http';
import { CondominioServiceProvider } from '../providers/condominio-service/condominio-service';
import { CondominioPage } from '../pages/condominio/condominio';
import { ConsumosPage } from '../pages/consumos/consumos';
import { ConsumoAptoServiceProvider } from '../providers/consumo-apto-service/consumo-apto-service';
import { ApartamentosPage } from '../pages/apartamentos/apartamentos';
import { ApartamentoPage } from '../pages/apartamento/apartamento';
import { ConsumoAreaServiceProvider } from '../providers/consumo-area-service/consumo-area-service';
import { CareasComunsPage } from '../pages/careas-comuns/careas-comuns';
import { CareaComunPage } from '../pages/carea-comun/carea-comun';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroPage,
    CondominosPage,
    CondominoPage,
    AreasComunsPage,
    AreaComumPage,
    CondominioPage,
    ConsumosPage,
    ApartamentosPage,
    ApartamentoPage,
    CareasComunsPage,
    CareaComunPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroPage,
    CondominosPage,
    CondominoPage,
    AreasComunsPage,
    AreaComumPage,
    CondominioPage,
    ConsumosPage,
    ApartamentosPage,
    ApartamentoPage,
    CareasComunsPage,
    CareaComunPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CondominosServiceProvider,
    AreasComunsServiceProvider,
    AptosServiceProvider,
    CondominioServiceProvider,
    ConsumoAptoServiceProvider,
    ConsumoAreaServiceProvider
  ]
})
export class AppModule {}
