import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AnimatronicComponent } from './animatronic/animatronic.component';
import { routing } from "./app.routing";
import {AnimatronicService} from "./animatronic/animatronic.service";
import { RoboDetalheComponent } from './robo-detalhe/robo-detalhe.component';
import { AnimatronicNaoEncontradoComponent } from './animatronic-nao-encontrado/animatronic-nao-encontrado.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AnimatronicComponent,
    RoboDetalheComponent,
    AnimatronicNaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [AnimatronicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
