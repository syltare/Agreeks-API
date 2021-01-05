import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';

import { AuthService } from '../service/auth.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  usuario :Usuario = new Usuario()
 idUsuario = environment.id
 email = environment.email
  constructor(
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit() {
   
    
    
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
