import {Categoria} from './Categoria';
import { Usuario } from './Usuario';

export class Postagem {
    public id: number
    public titulo: string
    public post: string
    public resposta: string
    public data: Date
    public categoria : Categoria
    public usuario : Usuario

    
}