import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.css']
})
export class BarraLateralComponent implements OnInit {

  nomeUser = environment.nome
  fotoUser = environment.imagem
  bioUser = environment.bio
  usuario: Usuario = new Usuario()

  idUsuario = environment.id

  constructor(
    private authService : AuthService
  ) { }

  ngOnInit() {
  }

}
