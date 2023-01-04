import { NgModule } from '@angular/core';
import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from '@angular/router'

import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
//import {AnimatronicComponent} from "./elementos-robo/animatronic/animatronic.component";
//import {RoboDetalheComponent} from "./elementos-robo/robo-detalhe/robo-detalhe.component";
//import { AnimatronicNaoEncontradoComponent } from './elementos-robo/animatronic-nao-encontrado/animatronic-nao-encontrado.component';

const APP_ROUTES:Routes =[
  {path: 'Home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'login', component: LoginComponent },
  {path: 'animatronic', loadChildren: () => import('./elementos-robo/elementos.module').then(m => m.ElementosRoboModule)},
  {path: 'clientes', loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule)},
  {path: 'elementos-robo', loadChildren: () => import('./elementos-robo/elementos.module').then(m => m.ElementosRoboModule)},
  //   path: 'home', loadChildren: () => import().then(m => m.)
  // }

  //{path: 'robo/:id', component: RoboDetalheComponent }, 
  //{path: 'animatronic', component: AnimatronicComponent },
  //{path: '**', component: AnimatronicNaoEncontradoComponent }

];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);

@NgModule({
imports: [RouterModule.forRoot(APP_ROUTES)],
exports: [RouterModule]
})
export class AppRoutingModule {}
