import { Animal } from "./animal";
import { Corre } from "./correr";

class Cachorro extends Animal implements Corre { 
    constructor (nome : string, idade : number, emitirSom : string){
        super(nome, idade, emitirSom)    
}
    public correr(): void {
        console.log(`${this.nome} sua idade é ${this.idade} anos, e emite o seguinte som: ${this.emitirSom}`);
    }
}

export { Cachorro };