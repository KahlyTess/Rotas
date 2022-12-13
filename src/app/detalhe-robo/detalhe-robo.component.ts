import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detalhe-robo',
  templateUrl: './detalhe-robo.component.html',
  styleUrls: ['./detalhe-robo.component.css']
})
export class DetalheRoboComponent {

  id: string;

  constructor(private roteador: ActivatedRoute) {
    this.id = this.roteador.snapshot.params['id'];
  }

  ngOnInit(){

  }

}
