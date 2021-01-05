 import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faShower } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin: UserLogin = new UserLogin()
  
  

  constructor(
    private alerta : AlertasService,
    private authService: AuthService,
    private router: Router
  ) { }
  
  ngOnInit() {
  }

  entrar() {
    
    this.authService.logar(this.userLogin).subscribe((resp: UserLogin ) => {
      this.userLogin = resp
      environment.token = this.userLogin.token
      environment.nome = this.userLogin.nome
      environment.imagem = this.userLogin.imagem
      environment.email = this.userLogin.email
      environment.bio = this.userLogin.bio
      environment.id = this.userLogin.id
      console.log(environment.id)
      console.log(environment.token)
      console.log(environment.nome)
      console.log(environment.email)
      console.log(environment.imagem)
   
    
     console.log(environment.bio)
    
     
     
      this.router.navigate(['/feed'])
    }, erro =>{
      if(erro.status == 500){
        this.alerta.showAlertDanger('Usuario ou senha incorretos!')
        
      }
    })
  }

  
}
