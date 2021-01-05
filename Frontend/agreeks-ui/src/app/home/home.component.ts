import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/Categoria';
import { Postagem } from '../model/Postagem';
import { CategoriaService } from '../service/categoria.service';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  postagem : Postagem = new Postagem()
listaPostagens : Postagem[]
categoria : Categoria = new Categoria()
listaCategorias : Categoria[]

  constructor(

    private categoriaService : CategoriaService,
    private postagemService : PostagemService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
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
