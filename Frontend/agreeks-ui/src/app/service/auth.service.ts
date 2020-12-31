import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  // token = {
  //   headers : new HttpHeaders().set('Authorization', environment.token)
  // }

  logar(userLogin: UserLogin) : Observable<UserLogin>{
    console.log(userLogin)
    return this.http.post<UserLogin>('http://localhost:8080/usuarios/logar', userLogin )
  }

  cadastrar(usuario: Usuario) : Observable<Usuario>{
    return this.http.post<Usuario>('http://localhost:8080/usuarios/cadastrar', usuario )
  }
  getByIdUsuario(id : number) : Observable<Usuario>{
    return this.http.get<Usuario>(`http://localhost:8080/usuarios/${id}`)
  }

  bntSair(){
    let ok = false
    let token = environment.token
    if(token != ''){
      ok = true
    }

    return ok
  }

  btnLogin(){
    let ok : boolean = false
    let token = environment.token
    if(token == ''){
      ok = true
    }

    return ok
  }
  
}
