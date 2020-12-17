import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Postagem } from '../model/Postagem';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    // this.findAllPostagens()
    // this.findAllCategorias()
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

  sair() {
    this.router.navigate(['/login'])
    localStorage.clear()
    //environment.token = ''
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
}
