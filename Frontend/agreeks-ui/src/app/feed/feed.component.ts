import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Postagem } from '../model/Postagem';
import { AlertaService } from '../service/alerta.service';
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
  titulo: string

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number
  nomeCategoria: string

  constructor(
    private postagemService: PostagemService,
    private categoriaService: CategoriaService,
    private alerta: AlertaService,
    private router: Router

  ) { }

  ngOnInit() {
    // console.log(environment.token)
    let token = environment.token

    if (token == '') {
      this.router.navigate(['/login'])
      this.alerta.showAlertInfo('Necessário fazer login')
    }

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
      this.alerta.showAlertInfo ('Preencha todos os campos antes de publicar!')
    } else {
      this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
        this.postagem = resp
        this.postagem = new Postagem()
        this.alerta.showAlertSucess('Postagem realizada com sucesso!')
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

findByTituloPostagem() {
  if (this.titulo === '') {
    this.findAllPostagens()
  } else {
    this.postagemService.getByTituloPostagem(this.titulo).subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }
}

findByNomeCategoria() {
  if (this.nomeCategoria === '') {
    this.findAllCategorias()
  } else {
    this.categoriaService.getByNomeCategoria(this.nomeCategoria).subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
    })
  }
}

}