import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { environment } from 'src/environments/environment.prod';
// import { threadId } from 'worker_threads';
import { Categoria } from '../model/Categoria';
import { Postagem } from '../model/Postagem';
import { Resposta } from '../model/Resposta';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';
import { PostagemService } from '../service/postagem.service';
import { RespostaService } from '../service/resposta.service';

@Component({
  selector: 'app-post-resposta',
  templateUrl: './post-resposta.component.html',
  styleUrls: ['./post-resposta.component.css']
})
export class PostRespostaComponent implements OnInit {

  resposta : Resposta = new Resposta()
  idResposta : number
  listaRespostas: Resposta[]
 
  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  usuario: Usuario = new Usuario()
  
  

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number
  idPost: number

  constructor(
    private categoriaService: CategoriaService,
    private postagemService: PostagemService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertasService,
    private respostaService : RespostaService
    
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    let token = environment.token

    if (token == '') {
      this.router.navigate(['/login'])
      this.alert.showAlertInfo('Necessário fazer login')
    }

    this.idPost = this.route.snapshot.params["id"]
    this.findByIdPostagem(this.idPost)
    
    

    this.findAllCategorias()
    
    this.findAllRespostas()
    
    

  }

    
    
  

  findByIdPostagem(id: number) {
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) => {
      this.postagem = resp
    })
  }

  cadastrar(){
        this.resposta.postagem = this.postagem
     if(this.resposta.resposta == null){
       this.alert.showAlertInfo('Preencha o campo de resposta para responder!')
     }
     else{
       this.respostaService.postRespostas(this.resposta).subscribe((resp: Resposta)=>{
         this.resposta = resp
         this.findAllRespostas()
       
         this.alert.showAlertSucess('Resposta Cadastrada com sucesso!')
       })
     }
   }

  findAllCategorias(){
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
    })
  }

  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria = resp;
    })
  }
  findAllRespostas() {
    this.respostaService.getAllRespostas().subscribe((resp: Resposta[]) => {
      this.listaRespostas = resp
    })
  
  }
  findByIdRespostas(){
    this.respostaService.getByIdRespostas(this.idResposta).subscribe((resp : Resposta)=>{
      this.resposta = resp
    })
  }

}

  