import { Animal } from "./animal";
import { SobeEmArvore } from "./emitirSons";

class Preguica extends Animal implements SobeEmArvore { 
    constructor (nome : string, idade : number, emitirSom : string){
        super(nome, idade, emitirSom)    
}
    public subir(): void {
        console.log(`${this.nome} sua idade é ${this.idade} anos, sobe em arvore e emite o seguinte som: ${this.emitirSom}`);
    }
}

export { Preguica };