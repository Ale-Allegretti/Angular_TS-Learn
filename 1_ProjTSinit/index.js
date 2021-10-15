"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var esInterfaceClass_1 = require("./esInterfaceClass");
// variabili tipizzate che regolarizzano le stesse
var a = 10;
var NUM = 1;
var stringa = "Alessandro";
var varTrue = true;
var varAny = {
// qualsiasi contenuto, compreso function
};
var numeri = [10, 4, 22, 6];
var stringArray = ["Ciao", "mondo", "!"];
var varStringa = "10|492|593";
var castStringa = varStringa;
castStringa.split("|");
// funzioni tipizzate
var concatenaStringhe = function (a, b) {
    return a + b;
};
var p = {
    nome: "Ale",
    cognome: "Allegretti",
    email: "email@email.com",
    eta: 28,
    getNomeCognome: function () {
        return this.nome + this.cognome;
    }
};
var Cane = /** @class */ (function () {
    function Cane(nome, razza, eta) {
        this.nome = nome;
        this.razza = razza;
        this.eta = eta;
    }
    return Cane;
}());
var quad = new esInterfaceClass_1.Quadrato(9);
console.log("Area del quadrato in index:", quad.area());
