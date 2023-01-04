//import { ClientesModule } from '../clientes.module';
import { ClientesService } from './../clientes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
//import { Cliente } from './../cliente';

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
  private router: Router,
  private clientesService: ClientesService
) {}

ngOnInit(){
  this.inscricao = this.roteador.params.subscribe();
    (params: any) => {
      let id = params['id'];
      this.cliente = this.clientesService.getClientes(id);
    }

// console.log('ngOnInit: ClienteDetalheComponent');
//   this.inscricao = this.roteador.params.subscribe(
//     (info: {cliente: Cliente}) => {
//       console.log('Recebendo o obj Cliente do resolve');
//       this.cliente = info.cliente;
//       }
//     );
  }

editarContato(){
  this.router.navigate(['/cliente', this.cliente.id, 'editar'])
}

ngOnDestroy(){
  this.inscricao.unsubscribe();
}

}
