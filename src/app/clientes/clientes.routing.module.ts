
import { NgModule } from '@angular/core';
import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from '@angular/router'

import { ClientesComponent } from './clientes.component';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';


const clientesRoutes:Routes =[
  {path: 'clientes', component: ClientesComponent, children:[
      {path: 'novo', component: ClienteFormComponent },
      {path: ':id', component: ClienteDetalheComponent },
      {path: ':id/editar', component: ClienteFormComponent }
  ]}
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(clientesRoutes);



@NgModule({
imports: [RouterModule.forChild(clientesRoutes)],
exports: [RouterModule]
})
export class ClientesRoutingModule {}
