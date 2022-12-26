import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ClientesComponent } from './clientes.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import { ClientesRoutingModule } from './clientes.routing.module';


@NgModule({
    imports:[
      CommonModule,
      ClientesRoutingModule
    ],

    exports:[],

    declarations:[
      ClientesComponent, 
      ClienteFormComponent, 
      ClienteDetalheComponent
    ],

    providers:[],
})
export class ClientesModule { }
