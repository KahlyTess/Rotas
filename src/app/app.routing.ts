import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from '@angular/router'

import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {AnimatronicComponent} from "./animatronic/animatronic.component";
import {RoboDetalheComponent} from "./robo-detalhe/robo-detalhe.component";

const APP_ROUTES:Routes =[
  {path: '', component: HomeComponent },
  {path: 'login', component: LoginComponent },
  {path: 'robo/:id', component: RoboDetalheComponent },
  {path: 'animatronic', component: AnimatronicComponent }
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);


