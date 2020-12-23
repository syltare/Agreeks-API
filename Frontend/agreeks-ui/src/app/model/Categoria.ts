import {Postagem} from './Postagem';

export class Categoria {
    public id: number
    public nomeCategoria: string
    public descricao: string
    public proposito: number
    public postagem : Postagem[]
}