import {Categoria} from './Categoria';
import { Resposta } from './Resposta';
import { Usuario } from './Usuario';

export class Postagem {
    public id: number
    public titulo: string
    public post: string
    
    public data: Date
    public categoria : Categoria
    public usuario : Usuario
    public resposta : Resposta[]

    
}