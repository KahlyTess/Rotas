import { AnimatronicNaoEncontradoComponent } from './../elementos-robo/animatronic-nao-encontrado/animatronic-nao-encontrado.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  {path:'', component: AnimatronicNaoEncontradoComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})

export class HomeModule{}