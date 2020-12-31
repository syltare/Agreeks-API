import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { Postagem } from 'src/app/model/Postagem';
import { Usuario } from 'src/app/model/Usuario';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { PostagemService } from 'src/app/service/postagem.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  
  usuario : Usuario = new Usuario()
  idUser: number

  categoria : Categoria = new Categoria()

  id  = environment.id



  listaCategorias : Categoria[]

  postagem : Postagem = new Postagem()
  listaPostagens: Postagem[]


  

  constructor(
    private postagemService: PostagemService,
    private categoriaService: CategoriaService,
    private router : Router,
    private route : ActivatedRoute,
    private alerta : AlertasService,
    private authService : AuthService
  ) { }

  ngOnInit(){
    this.findAllCategorias()
    this.findAllPostagens()
    // this.findByIdUser(this.id)
    let token = environment.token

    if (token == '') {
      this.router.navigate(['/login'])
      this.alerta.showAlertInfo('Necessário fazer login')
      

    }
    // this.idUser = this.route.snapshot.params['id']
    // this.findByIdUser(this.idUser)
}

findAllCategorias(){
  this.categoriaService.getAllCategorias().subscribe((resp : Categoria[])=>{
    this.listaCategorias = resp
  })
}
findAllPostagens() {
  this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
    this.listaPostagens = resp
  })

}
  // findByIdUser(id : number){
  //   this.authService.getByIdUsuario(id).subscribe((resp: Usuario) =>{
  //     this.usuario = resp
  //   })
  // }

}
