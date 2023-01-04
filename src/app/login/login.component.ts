
import { Component, OnInit } from '@angular/core';
import { User } from './user'
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  private user: User = new User();

constructor(private authService: AuthService){

}

ngOnInit() {
console.log(this.authService)

}

fazerLogin() {
console.log(this.user);

}

}
