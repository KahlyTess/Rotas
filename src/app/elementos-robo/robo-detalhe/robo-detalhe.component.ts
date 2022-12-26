import { Component, OnInit  } from '@angular/core';
import { Subscription } from "rxjs";
import { ActivatedRoute, Router } from '@angular/router';

import { AnimatronicService } from '../animatronic/animatronic.service';

@Component({
  selector: 'app-robo-detalhe',
  templateUrl: './robo-detalhe.component.html',
  styleUrls: ['./robo-detalhe.component.css']
})
export class RoboDetalheComponent implements OnInit{
  id: any;
  inscricao!: Subscription;
  nome: any;
  animatronic: any;

  constructor(
    private roteador: ActivatedRoute,
    private router: Router,
    private animatronicService: AnimatronicService
  ) {}

   ngOnInit(){

    this.inscricao = this.roteador.params.subscribe(
      (params: any) => {
        this.id = params['id'];

       // this.animatronic = this.animatronicService.getAnimatronic({ id: this.id });

              // if(this.id === null ){
              //   //this.router.navigate(['**']);
              //   this.animatronic = this.animatronicService.getAnimatronic({ id: this.id });
              // }



////////////////////////////////////////////////////////////////////////////////////////////////////////

        // this.inscricao = this.roteador.params.subscribe(
        //   (params: any) => {
        //     this.nome = params['nome'];

        //     this.animatronic = this.animatronicService.getNomear({ nome: this.nome });
        //   });

      });


  }

}


