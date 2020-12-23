import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faWindows } from '@fortawesome/free-brands-svg-icons';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Postagem } from '../model/Postagem';
import { Resposta } from '../model/Resposta';
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
  postagem: Postagem = new Postagem()

  categoria: Categoria = new Categoria
  listaCategorias: Categoria[]
  idCategoria: number
  idPost: number

  resposta: Resposta = new Resposta()
  listaResposta: Resposta[]
  idResposta : number


  constructor(
    private categoriaService : CategoriaService,
    private postagemService: PostagemService,
    private  respostaService: RespostaService,
    private router:Router,
    private alerta:AlertasService,
    private route :ActivatedRoute


  ) { }

  ngOnInit() { 
       
    this.idPost = this.route.snapshot.params["id"]
    this.findByIdPostagem(this.idPost)
  }
  findByIdPostagem(id: number) {
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) => {
      this.postagem = resp
    })
  }

  findAllrespostas(){
    this.respostaService.getAllRespostas().subscribe((resp: Resposta[])=>{
      this.listaResposta = resp
    })
  }
  cadastrar(){
    this.categoria.id = this.idCategoria
    this.postagem.categoria = this.categoria
    this.resposta.id = this.idResposta
    this.postagem.resposta = this.resposta
    if(this.resposta.resposta == null){
      this.alerta.showAlertInfo('Preencha o campo de resposta para responder!')
    }
    else{
      this.respostaService.postRespostas(this.resposta).subscribe((resp: Resposta)=>{
        this.resposta = resp
        
        this.router.navigate(['/feed'])
        this.alerta.showAlertSucess('Resposta Cadastrada com sucesso!')
      })
    }
  }
  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria = resp;
    })
  }



}
