import { NgModule } from '@angular/core';

import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from '@angular/router'

import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {AnimatronicComponent} from "./animatronic/animatronic.component";
import {RoboDetalheComponent} from "./robo-detalhe/robo-detalhe.component";
import { AnimatronicNaoEncontradoComponent } from './animatronic-nao-encontrado/animatronic-nao-encontrado.component';

const APP_ROUTES:Routes =[
  {path: '', component: HomeComponent },
  {path: 'login', component: LoginComponent },
  {path: 'robo/:id', component: RoboDetalheComponent },
  {path: 'animatronic', component: AnimatronicComponent },
  {path: 'naoEncontrado', component: AnimatronicNaoEncontradoComponent  }
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);



@NgModule({
imports: [RouterModule.forRoot(APP_ROUTES)],
exports: [RouterModule]
})
export class AppRoutingModule {}
