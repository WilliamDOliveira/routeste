import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario;

  constructor(private auth: AuthService) { this.fazerLogin() }

  ngOnInit() {
  }

  fazerLogin(){
    console.log(this.usuario);
  }

}
