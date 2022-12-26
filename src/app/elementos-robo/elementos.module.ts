//import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { AnimatronicComponent } from './animatronic/animatronic.component';
import { RoboDetalheComponent } from './robo-detalhe/robo-detalhe.component';
import { AnimatronicNaoEncontradoComponent } from './animatronic-nao-encontrado/animatronic-nao-encontrado.component';
import { AnimatronicService } from './animatronic/animatronic.service';
import { ElementosRoutingModule } from "./elementos.routing.module";

@NgModule({
    imports:[
      CommonModule,
      ElementosRoutingModule
      //RouterModule
    ],
    exports:[],
    declarations:[
      AnimatronicComponent,
      RoboDetalheComponent,
      AnimatronicNaoEncontradoComponent,
    ],
    providers:[AnimatronicService],
})
export class ElementosRoboModule { }
