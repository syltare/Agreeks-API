import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.css']
})
export class BarraLateralComponent implements OnInit {

  nomeUser = environment.nome
  fotoUser = environment.imagem
  bioUser = environment.bio

  constructor() { }

  ngOnInit() {
  }

}
