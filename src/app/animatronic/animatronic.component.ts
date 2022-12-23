import {Component, OnInit} from '@angular/core';
import {AnimatronicService} from "./animatronic.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-animatronic',
  templateUrl: './animatronic.component.html',
  styleUrls: ['./animatronic.component.css']
})
export class AnimatronicComponent implements OnInit{

  animatronics!: any[];
  pagina!: number;
  inscricao!: Subscription;

  constructor(
    private animatronicService: AnimatronicService,
    private roteador: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.animatronics = this.animatronicService.getAnimatronics();

      this.inscricao = this.roteador.queryParams.subscribe(
        (queryParams: any) => {
          this.pagina = queryParams['pagina']
        });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  proximaPagina(){
    this.pagina++;
    this.router.navigate(['/animatronics']);
  }

}
