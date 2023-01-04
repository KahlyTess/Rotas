//import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { AnimatronicComponent } from './animatronic/animatronic.component';
import { RoboDetalheComponent } from './robo-detalhe/robo-detalhe.component';
import { AnimatronicNaoEncontradoComponent } from './animatronic-nao-encontrado/animatronic-nao-encontrado.component';
import { AnimatronicService } from './animatronic/animatronic.service';
import { ElementosRoutingModule } from "./elementos.routing.module";
import { LoginComponent } from '../login/login.component';


@NgModule({
    imports:[
      CommonModule,
      ElementosRoutingModule,
      

    ],
    exports:[],
    declarations:[
      AnimatronicComponent,
      RoboDetalheComponent,
      AnimatronicNaoEncontradoComponent,
      LoginComponent,
    ],
    providers:[AnimatronicService],
})
export class ElementosRoboModule { }
