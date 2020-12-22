import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Resposta } from '../model/Resposta';

@Injectable({
  providedIn: 'root'
})
export class RespostaService {

  constructor(private http: HttpClient) { }

  token = {
    headers : new HttpHeaders().set('Authorization', environment.token)
  }
  getAllRespostas() : Observable<Resposta[]>{
    return this.http.get<Resposta[]>('http://localhost:8080/respostas',this.token)
  }
  getByIdRespostas(id : number) : Observable<Resposta>{
    return this.http.get<Resposta>(`http://localhost:8080/respostas/${id}`,this.token)
  }
  postRespostas(resposta : Resposta) : Observable<Resposta>{
    return this.http.post<Resposta>('http://localhost:8080/respostas', resposta,this.token)

  }
  putRespostas(resposta : Resposta) : Observable<Resposta>{
    return this.http.put<Resposta>('http://localhost:8080/respostas', resposta,this.token)
  }
  deleteRespostas(id: number) : Observable<Resposta>{
    return this.http.delete<Resposta>(`http://localhost:8080/respostas/${id}`, this.token)
  }
  getByRespostas(nome: string) : Observable<Resposta[]>{
    return this.http.get<Resposta[]>(`http://localhost:8080/respostas/resposta/${nome}`,this.token)
  }


}
