import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AnimatronicComponent } from './animatronic/animatronic.component';
import { routing } from "./app.routing";
import { DetalheRoboComponent } from './detalhe-robo/detalhe-robo.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AnimatronicComponent,
    DetalheRoboComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
