import { Quadrato } from './esInterfaceClass';

// variabili tipizzate che regolarizzano le stesse
let a : number = 10;
const NUM : number = 1;

let stringa : string = "Alessandro";

let varTrue : boolean = true;

let varAny : any = {
    // qualsiasi contenuto, compreso function
};

let numeri : Array<number> = [10, 4, 22, 6];

let stringArray: string[] = ["Ciao", "mondo", "!"];


let varStringa: any = "10|492|593";
let castStringa = (varStringa as string);

castStringa.split("|");



// funzioni tipizzate
let concatenaStringhe = (a: string, b:string): string => {
    return a + b;
}



// INTERFACCE e CLASSI
interface Persona {
    nome: string;
    cognome: string;
    email: string;
    eta: number;
    getNomeCognome(): string;
}

let p: Persona = {
    nome: "Ale",
    cognome: "Allegretti",
    email: "email@email.com",
    eta: 28,
    getNomeCognome() {
        return this.nome + this.cognome;
    }
};


class Cane {
    nome: string;
    razza: string;
    eta: number;

    constructor(nome: string, razza: string, eta: number) {
        this.nome = nome;
        this.razza = razza;
        this.eta = eta;
    }
} 

// utilizzando un modulo esterno, farà il transpile anche di quello
import * as EsempioClassi from './esInterfaceClass';

let quad : EsempioClassi.Quadrato = new Quadrato(9);

console.log("Area del quadrato in index:", quad.area());
 