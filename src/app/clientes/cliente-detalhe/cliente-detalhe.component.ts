
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from './../clientes.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cliente-detalhe',
  templateUrl: './cliente-detalhe.component.html',
  styleUrls: ['./cliente-detalhe.component.css']
})
export class ClienteDetalheComponent implements OnInit, OnDestroy {

cliente: any;
inscricao!: Subscription;

constructor(
  private roteador: ActivatedRoute,
  private clientesService: ClientesService
) {}

ngOnInit(){
  this.inscricao = this.roteador.params.subscribe();
    (params: any) => {
      let id = params['id'];
      this.cliente = this.clientesService.getClientes(id);
    }
}

ngOnDestroy(){
  this.inscricao.unsubscribe();
}

}
