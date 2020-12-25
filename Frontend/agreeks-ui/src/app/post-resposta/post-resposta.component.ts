import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faWindows } from '@fortawesome/free-brands-svg-icons';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Postagem } from '../model/Postagem';
import { Resposta } from '../model/Resposta';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
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
  
  postagem : Postagem = new Postagem()
  idPostagem = environment.postagem
 

  constructor(
   
    private  respostaService: RespostaService,
   
    private router:Router,
    private alerta:AlertasService,
    private route :ActivatedRoute


  ) { }

  ngOnInit() { 
    window.scroll(0, 0)
    let token = environment.token

    if (token == '') {
      this.router.navigate(['/login'])
      this.alerta.showAlertInfo('Necessário fazer login')

    }
    
    
    
        
  }
 
  cadastrar(){
    this.resposta.id = this.idResposta
    // this.postagem.id = this.idPostagem
    this.resposta.postagem = this.postagem


  
 
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
   }}


