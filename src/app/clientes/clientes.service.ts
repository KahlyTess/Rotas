import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private cliente: any[] = [
    {id: 1, nome: 'Fred Bear Family Diner', email: 'fredbearfamilydiner@gmail.com'},
    {id: 2, nome: 'Freddy Fazbear Pizza', email: 'fredddyfazbearpizzaria@gmail.com'},
    {id: 3, nome: 'Freddy Fazbear Pizza 2', email: 'fredddyfazbearpizzaria2000@gmail.com'},
    {id: 4, nome: 'Freddy Fazbear Pizza 3', email: 'fredddyfazbearpizzaria3000@gmail.com'},
    {id: 5, nome: 'Freddy Fazbear Pizza 4', email: 'fredddyfazbearpizzaria4000@gmail.com'},
    {id: 6, nome: 'Circus Baby Pizza World', email: 'circusbabypizza@gmail.com'},
    {id: 7, nome: 'PizzaPlex', email: 'pizzaplex@gmail.com'}

  ];

  getCliente(){
    return this.cliente;
  }

  getClientes(id: number){
    for (let i=0; i<this.cliente.length; ++i){
      let clientes = this.cliente[1];
      if(clientes.id === id){
        return clientes;
      }
    }
    return null;
  }

  constructor() { }
}
