import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

  usuario : Usuario = new Usuario()
  id = environment.id
  nome  = environment.nome
  bio = environment.bio
  imagem = environment.imagem
  email = environment.email
  senha = environment.senha
  constructor(
    private  authService : AuthService,
    private route : ActivatedRoute,
    private router : Router,
    private alerta : AlertasService


  ) { }

  ngOnInit(){
     window.scroll(0,0)
    if (environment.token == '') {
     
      this.router.navigate(['/login'])
      this.alerta.showAlertInfo('Necessário fazer login')

    }
    this.id = this.route.snapshot.params['id']
    this.findByIdUser(this.id)
        
  }
  findByIdUser(id : number){
    this.authService.getByIdUsuario(id).subscribe((resp : Usuario)=>{
      this.usuario = resp
    })
  }
  conferirSenha(event : any) {
    this.senha = event.target.value
  }

  cadastrar() {
  
    if(this.senha === this.usuario.senha){
      this.authService.cadastrar(this.usuario).subscribe((resp : Usuario) => {
        this.usuario = resp
        this.router.navigate(['/login'])
        this.alerta.showAlertSucess('Usuario cadastrado com sucesso!')
        environment.token = ''
        environment.nome = ''
      })
    } else{
      this.alerta.showAlertDanger('Senha incorreta')
    }
  }

  
}
