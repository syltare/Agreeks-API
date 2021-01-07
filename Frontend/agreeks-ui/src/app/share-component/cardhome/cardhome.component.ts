import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/model/Categoria';
import { Postagem } from 'src/app/model/Postagem';
import { CategoriaService } from 'src/app/service/categoria.service';
import { PostagemService } from 'src/app/service/postagem.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-cardhome',
  templateUrl: './cardhome.component.html',
  styleUrls: ['./cardhome.component.css']
})
export class CardhomeComponent implements OnInit {
postagem : Postagem = new Postagem()
listaPostagens : Postagem[]
categoria : Categoria = new Categoria()
listaCategorias : Categoria[]
id = environment.id
  constructor(
    private categoriaService : CategoriaService,
    private postagemService : PostagemService
  ) { }

  ngOnInit(){
    this.findAllCategorias()
    this.findAllPostagens()
  }
  findAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })

  }
  findAllCategorias(){
    this.categoriaService.getAllCategorias().subscribe((resp : Categoria[])=>{
      this.listaCategorias = resp
    })
  }
}
