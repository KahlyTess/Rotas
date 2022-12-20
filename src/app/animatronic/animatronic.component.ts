import {Component, OnInit} from '@angular/core';
import {AnimatronicService} from "./animatronic.service";

@Component({
  selector: 'app-animatronic',
  templateUrl: './animatronic.component.html',
  styleUrls: ['./animatronic.component.css']
})
export class AnimatronicComponent implements OnInit{

  animatronics!: any[];

  constructor(private animatronicService: AnimatronicService) {
  }

  ngOnInit() {
    this.animatronics = this.animatronicService.getAnimatronics();
  }

}
