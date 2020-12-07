import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService : AuthService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  entrar(){
  this.authService.logar(this.userLogin).subscribe((resp: any = UserLogin) => {
    this.userLogin = resp
    localStorage.setItem('token',this.userLogin.token)
    this.router.navigate(['/feed'])})
  }

}
