import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  token = {
    headers : new HttpHeaders().set('Authorization', environment.token!)
  }
  getAllCategorias() : Observable<Categoria[]>{
    return this.http.get<Categoria[]>('http://localhost:8080/categoria', this.token)

  }
  getByIdCategoria(id : number) : Observable<Categoria>{
    return this.http.get<Categoria>(`http://localhost:8080/categoria/${id}`, this.token)

  }
  postCategoria(categoria : Categoria) : Observable<Categoria>{
    return this.http.post<Categoria>('http://localhost:8080/categoria',categoria,this.token )
  }

  putCategoria(categoria : Categoria) : Observable<Categoria> {
    return this.http.put<Categoria>('http://localhost:8080/categoria', categoria, this.token)
  }

  deleteCategoria(id: number) : Observable<Categoria> {
    return this.http.delete<Categoria>(`http://localhost:8080/categoria/${id}`, this.token)
  }

  getByNomeCategoria(nome: string) : Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`http://localhost:8080/categoria/descricao/${nome}`, this.token)

  }

}