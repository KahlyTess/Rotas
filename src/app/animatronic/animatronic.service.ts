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

  getAnimatronic (id: any){
      let robos = this.getAnimatronics();
      for (let i=0; i<robos.length; i++){
        let robo = robos[i];
        if (robo.id == id){
          return robo;
      }else{
          return null;
      }
    }

  };


  constructor() { }
}
