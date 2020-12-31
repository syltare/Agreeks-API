import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Postagem } from '../model/Postagem';
import { AuthService } from '../service/auth.service';

import { CategoriaService } from '../service/categoria.service';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
 id = environment.id
  constructor(
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    
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
  config(){
    console.log(environment.id)
    console.log(environment.token)
    console.log(environment.nome)
    this.router.navigate(['/config'])
  }
}
