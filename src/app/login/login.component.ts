import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { IUsuario } from '../interface/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // private usuario: IUsuario;

  private user = {
    'nome': '',
    'senha': ''
  };

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmitted(form) {
    // console.log('form: ', form);
    // console.log(this.user);
    this.auth.fazerLogin(this.user)
      .then(success => {
        console.log(success);
        this.router.navigate(['/home'], { queryParams: { 'saiodajaula': 'omonstroporrah' } });
      })
      .catch(error => {
        console.log(error);
        this.router.navigate(['/home']);
      });
    console.log('this.auth.fazerLogin(this.user): ', this.auth.fazerLogin(this.user));
  }


}
