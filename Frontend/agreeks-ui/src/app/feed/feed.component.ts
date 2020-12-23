import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Postagem } from '../model/Postagem';
import { Resposta } from '../model/Resposta';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';
import { PostagemService } from '../service/postagem.service';
import { RespostaService } from '../service/resposta.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  key = 'data'
  reverse = true;
  
  nomeUser = environment.nome
  
  
  
  usuario: Usuario = new Usuario()
  idUsuario = environment.id

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]
  titulo: string
  idPostagem : number

  resposta: Resposta = new Resposta()
  listaRespostas: Resposta[]
  idResposta: number
  nomeResposta: string

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number
  nomeCategoria: string

  constructor(
    private respostaService : RespostaService,
    private postagemService: PostagemService,
    private categoriaService: CategoriaService,
    private alerta: AlertasService,
    private router: Router

  ) { }

  ngOnInit() {
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
      
      this.usuario.id = this.idUsuario
      this.postagem.usuario =  this.usuario

    if (this.postagem.titulo == null || this.postagem.categoria == null || this.postagem.categoria == null) {
      this.alerta.showAlertInfo ('Preencha todos os campos antes de publicar!')
    }
     else {
     
     

      this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
        this.postagem = resp
        this.postagem = new Postagem()
        
        this.alerta.showAlertSucess('Postagem realizada com sucesso!')
        this.findAllPostagens()
      }, erro =>{
        if ( erro.status == 500){
          alert('Deu ruim pai')
        }
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
findAllRespostas() {
  this.respostaService.getAllRespostas().subscribe((resp: Resposta[]) => {
    this.listaRespostas = resp
  })

}

}
