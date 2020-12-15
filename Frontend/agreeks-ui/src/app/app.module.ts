import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CarouselComponent } from './share-component/carousel/carousel.component';
import { FlipCardComponent } from './share-component/flip-card/flip-card.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { PostCategoriaComponent } from './post-categoria/post-categoria.component';
import { PutPostagemComponent } from './put-postagem/put-postagem.component';
import { PutCategoriaComponent } from './put-categoria/put-categoria.component';
import { DeletePostagemComponent } from './delete-postagem/delete-postagem.component';
import { DeleteCategoriaComponent } from './delete-categoria/delete-categoria.component';
import { DuvidasComponent } from './duvidas/duvidas.component';
import { NavVerticalComponent } from './nav-vertical/nav-vertical.component';
import { AlertasComponent } from './alertas/alertas.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FeedComponent,
    HomeComponent,
    FooterComponent,
    SobreNosComponent,
    LoginComponent,
    CadastroComponent,
    CarouselComponent,
    FlipCardComponent,
    BarraLateralComponent,
    PostCategoriaComponent,
    PutPostagemComponent,
    PutCategoriaComponent,
    DeletePostagemComponent,
    DeleteCategoriaComponent,
    DuvidasComponent,
    NavVerticalComponent,
    AlertasComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    OrderModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
