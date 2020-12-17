import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from '../model/Postagem';
import { Postagem2Service } from '../service/postagem2.service';

@Component({
  selector: 'app-resposta',
  templateUrl: './resposta.component.html',
  styleUrls: ['./resposta.component.css']
})
export class RespostaComponent implements OnInit {

  postagem: Postagem = new Postagem()
  idPost: number

  constructor(
    private postagemService: Postagem2Service,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.idPost = this.route.snapshot.params["id"]
    this.findByIdPostagem(this.idPost)
  }

  findByIdPostagem(id : number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem)=>{
      this.postagem = resp;
      console.log("postagem " + JSON.stringify(this.postagem))
      console.log("respota " + this.postagem.resposta)
    })
  }

  responderPostagem(){
    this.postagem.resposta = "";
    this.postagemService.putPostagem(this.postagem).subscribe((resp: Postagem) =>{
      this.postagem = resp
      this.router.navigate(['/feed'])
      alert("Você respondeu à esta publicação")
    }, err=>{
      if(err.status == '500'){
        alert("Preencha todos os campos corretamente antes de enviar!")
      }
    })
  }

  btnNao(){
    this.router.navigate(['/feed'])
  }

}
