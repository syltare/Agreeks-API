import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Usuario } from '../model/Usuario';

import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  usuario :Usuario = new Usuario()
 idUsuario = environment.id
 email = environment.email
 postagem : Postagem = new Postagem()
 listaPostagens : Postagem[]
  constructor(
    private router: Router,
    public auth: AuthService,
    private postagemService : PostagemService
  ) { }

  ngOnInit() {
   this.findAllPostagens()
    
    
  }
  findAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })

  }
  
  sair() {
    this.router.navigate(['/login'])
    environment.token = ''
    environment.nome = ''
    environment.email= ''
    environment.bio = ''
    environment.imagem = ''
    environment.id = 0
  }

  
}
