import Tema from "./Tema";
interface Postagem {
    id: number;
    titulo:number;
    texto: string;
    tema?:Tema | null;

}
export default Postagem;