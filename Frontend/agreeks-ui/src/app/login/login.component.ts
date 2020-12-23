import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin: UserLogin = new UserLogin()
  
  

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }


  entrar() {
    //console.log(this.userLogin)
    this.authService.logar(this.userLogin).subscribe((resp: UserLogin ) => {
      this.userLogin = resp
      environment.token = this.userLogin.token
      environment.nome = this.userLogin.nome
      environment.imagem = this.userLogin.imagem
      environment.bio = this.userLogin.bio
      environment.id = this.userLogin.id
      // environment.usuario = this.userLogin.postagem
      
      //console.log(environment.token)
      this.router.navigate(['/feed'])
    })
  }

  
  ngOnInit() {
  }
}
