import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Postagem } from '../model/Postagem';
import { Auth2Service } from '../service/auth2.service';
import { CategoriaService } from '../service/categoria.service';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  

  constructor(
    private router: Router,
    public auth2: Auth2Service
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
}
