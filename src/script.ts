import { Cachorro } from "./cachorro";
import { Cavalo } from "./cavalo";
import { Preguica } from "./preguica";
import { Corre } from "./correr"; 
import { SobeEmArvore } from "./emitirSons"; 

const cavalo = new Cavalo('Pocoto', 8, 'iiirrrrí')
const cachorro = new Cachorro('Rexx', 3,'Miau')
const preguica = new Preguica('Cleber', 18, 'zzzzzzz')

function takeoff(animal : SobeEmArvore) {
    animal.subir()
}
function takeoff1(animal : Corre) {
    animal.correr()
}

takeoff(preguica);
takeoff1(cavalo);
takeoff1(cachorro);