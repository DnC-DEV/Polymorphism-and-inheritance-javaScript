"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cachorro_1 = require("./cachorro");
var cavalo_1 = require("./cavalo");
var preguica_1 = require("./preguica");
var cavalo = new cavalo_1.Cavalo('Pocoto', 8, 'iiirrrrí');
var cachorro = new cachorro_1.Cachorro('Rexx', 3, 'Miau');
var preguica = new preguica_1.Preguica('Cleber', 18, 'zzzzzzz');
function takeoff(animal) {
    animal.subir();
}
function takeoff1(animal) {
    animal.correr();
}
takeoff(preguica);
takeoff1(cavalo);
takeoff1(cachorro);
