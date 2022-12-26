
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
//import { AnimatronicComponent } from './elementos-robo/animatronic/animatronic.component';
//import { routing } from "./app.routing";
//import {AnimatronicService} from "./elementos-robo/animatronic/animatronic.service";
//import { RoboDetalheComponent } from './elementos-robo/robo-detalhe/robo-detalhe.component';
//import { AnimatronicNaoEncontradoComponent } from './elementos-robo/animatronic-nao-encontrado/animatronic-nao-encontrado.component';
import { AppRoutingModule } from './app.routing.module';
import { ElementosRoboModule } from './elementos-robo/elementos.module';
import { ClientesModule } from './clientes/clientes.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,

    // AnimatronicComponent,
    // RoboDetalheComponent,
    // AnimatronicNaoEncontradoComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ElementosRoboModule,
    AppRoutingModule,
    ClientesModule
    //routing
  ],
 // providers: [AnimatronicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
