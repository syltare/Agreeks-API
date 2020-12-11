import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/Categoria';
import { Postagem } from '../model/Postagem';
import { CategoriaService } from '../service/categoria.service';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  key = 'data'
  reverse = true;

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number

  constructor(
    private postagemService: PostagemService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    this.findAllPostagens()
    this.findAllCategorias()
  }
  findAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })

  }

  publicar() {
    this.categoria.id = this.idCategoria
    this.postagem.categoria = this.categoria

    if (this.postagem.titulo == null || this.postagem.categoria == null || this.postagem.categoria == null) {
      alert ('Preencha todos os campos antes de publicar!')
    } else {
      this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
        this.postagem = resp
        this.postagem = new Postagem()
        alert('Postagem realizada com sucesso!')
        this.findAllPostagens()
      })
    }
  }
  

findAllCategorias(){
  this.categoriaService.getAllCategorias().subscribe((resp : Categoria[])=>{
    this.listaCategorias = resp
  })
}
findByIdCategorias(){
  this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp : Categoria)=>{
    this.categoria = resp
  })
}

}
