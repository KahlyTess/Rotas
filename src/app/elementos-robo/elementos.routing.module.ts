import { NgModule } from '@angular/core';
import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from '@angular/router'

import {AnimatronicComponent} from "./animatronic/animatronic.component";
import {RoboDetalheComponent} from "./robo-detalhe/robo-detalhe.component";
import { AnimatronicNaoEncontradoComponent } from './animatronic-nao-encontrado/animatronic-nao-encontrado.component';

const elementosRoutes:Routes =[
  {path: '', component: AnimatronicComponent },
  {path: '**', component: AnimatronicNaoEncontradoComponent  },
  {path: ':id', component: RoboDetalheComponent },

];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(elementosRoutes);



@NgModule({
imports: [RouterModule.forChild(elementosRoutes)],
exports: [RouterModule]
})
export class ElementosRoutingModule {}
