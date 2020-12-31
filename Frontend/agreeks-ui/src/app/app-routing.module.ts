import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { LoginComponent } from './login/login.component';
import { FeedComponent } from './feed/feed.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PostCategoriaComponent } from './post-categoria/post-categoria.component';
import { PutPostagemComponent } from './put-postagem/put-postagem.component';
import { DeletePostagemComponent } from './delete-postagem/delete-postagem.component';
import { PutCategoriaComponent } from './put-categoria/put-categoria.component';
import { DeleteCategoriaComponent } from './delete-categoria/delete-categoria.component';
import { DuvidasComponent } from './duvidas/duvidas.component';
import { Carousel2Component } from './carousel2/carousel2.component';
import { PostRespostaComponent } from './post-resposta/post-resposta.component';
import { PostagemTelaComponent } from './postagem-tela/postagem-tela.component';
import { ConfigComponent } from './configuracoes/config/config.component';




const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'sobre-nos', component: SobreNosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'cadastro-categoria', component: PostCategoriaComponent },
  { path: 'put-postagem/:id', component: PutPostagemComponent },
  { path: 'delete-postagem/:id', component: DeletePostagemComponent },
  { path: 'editar-categoria/:id', component: PutCategoriaComponent },
  { path: 'delete-categoria/:id', component: DeleteCategoriaComponent },
  { path: 'duvidas', component: DuvidasComponent },
  { path: 'carousel', component: Carousel2Component },
  { path: 'resposta/:id', component: PostRespostaComponent},
  { path: 'postagem-tela/:id', component: PostagemTelaComponent},
  { path: 'config/:id', component: ConfigComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }*/
