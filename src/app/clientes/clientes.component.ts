
import { Component, OnInit } from '@angular/core';
import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-clientes',
  moduleId: module.id,
  templateUrl: 'clientes.component.html',
  styleUrls: ['clientes.component.css']
})
export class ClientesComponent  implements OnInit{

      cliente: any[] = []

  constructor(private clientesService: ClientesService) {}


  ngOnInit() {
    this.cliente = this.clientesService.getCliente();
    
  }

}
