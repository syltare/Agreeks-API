import {Categoria} from './Categoria';

export class Postagem {
    public id: number
    public titulo: string
    public post: string
    public resposta: string
    public data: Date
    public categoria : Categoria
}