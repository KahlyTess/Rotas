import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimatronicService {

  getAnimatronics(){
    return [
      {id: 1, nome: 'Bonnie'},
      {id: 2, nome: 'Chica'},
      {id: 3, nome: 'Foxy'},
      {id: 4, nome: 'Freddy'},
      {id: 5, nome: 'Golden Freddy'},
      {id: 6, nome: 'Puppet'},
      {id: 7, nome: 'Mangle'},
      {id: 8, nome: 'Springtrap'},
      {id: 9, nome: 'Baby'},
      {id: 10, nome: 'Ballora'},
      {id: 11, nome: 'Ennard'},
      {id: 12, nome: 'Music Man'},
      {id: 13, nome: 'Enzo Gabriel'},
      {id: 14, nome: 'Roxanne Wolf'},
      {id: 15, nome: 'Mont Gator'},

    ];
  }

  getAnimatronic ( id: any ){
      let pizza = this.getAnimatronics();
      for (let i=0; i<pizza.length; i++){
        let sorvete = pizza[i];
        if (sorvete.id == id){
          return sorvete;
        }
      }
      return null;
    }

    // getNomear ( nome: any ){
    //   let letra = this.getAnimatronics();
    //   for (let i=0; i<letra.length; i++){
    //     let ponto = letra[i];
    //     if (ponto.nome == nome){
    //       return ponto;
    //     }
    //   }
    //   return null;
    // }

  constructor() { }
}
