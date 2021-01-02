import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
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
  confirmarSenha: string
  tipoUsuario: string
  

  categoria : Categoria = new Categoria()
  idCategoria : number
 



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
    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }

    this.idUser = this.route.snapshot.params['id']
    this.findByIdUser(this.idUser)
    this.findAllCategorias()
    this.findAllPostagens()
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
findByIdUser(id: number) {
  this.authService.getByIdUsuario(id).subscribe((resp: Usuario) => {
    this.usuario = resp
  })
}
salvar() {
  this.categoria.id = this.idCategoria
  this.categoriaService.putCategoria(this.categoria).subscribe((resp: Categoria) => {
    this.categoria = resp
    this.alerta.showAlertSucess('Tema atualizado com sucesso!')
    this.findAllCategorias()
  })
}
findByIdCategorias(){
  this.categoriaService.getByIdCategoria(this.categoria.id).subscribe((resp : Categoria)=>{
    this.categoria = resp
  })
}
btnSim() {
  this.categoriaService.deleteCategoria(this.categoria.id).subscribe(() => {
    this.router.navigate(['/cadastro-tema'])
    this.alerta.showAlertSucess('Tema apagado com sucesso!')
  })
}

}
