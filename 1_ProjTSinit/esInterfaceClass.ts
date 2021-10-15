
export interface FormaGeometrica {
    perimetro(): number;
    area(): number;
}

export class Triangolo implements FormaGeometrica {
    
    private lato1: number;
    private lato2: number;
    private lato3 : number;

    constructor(lato1: number, lato2: number, lato3: number) {
        this.lato1 = lato1;
        this.lato2 = lato2;
        this.lato3 = lato3;
    }

    perimetro(): number {
        return this.lato1 + this.lato2 + this.lato3;
    }

    area(): number {
        return Math.sqrt((this.lato1 * this.lato1) + (this.lato2 * this.lato2) + (this.lato3 * this.lato3));
    }
}

export class TriangoloEquilatero extends Triangolo {
    constructor(private _lato: number) {
        super(_lato, _lato, _lato);
    }

    perimetro(): number {
        return this._lato * 3;
    }
}



export class Quadrato implements FormaGeometrica {

    // public lato permette di non dichiarare appositamente lato
    constructor(public _lato: number) { }

    perimetro(): number {
        return this._lato * 4;
    }

    area(): number {
        return this._lato * this._lato;
    }

    set lato(l: number) {
        this._lato = l;
    }

    get lato(): number {
        return this._lato;
    }
}

const creaFormaGeometrica = (...lati: number[]): FormaGeometrica => {
    switch(lati.length) {
        case 1: 
            return new Quadrato(lati[0]);
        case 3:
            return new Triangolo(lati[0], lati[1], lati[2]);
        default:
            return null;
    }
}

let forma: FormaGeometrica = creaFormaGeometrica(2, 5, 8);
let area : number = forma.area();

console.log(area);

// permette di verificare prima di fare un cast
if (forma instanceof Triangolo) {
    const t1 = (forma as Triangolo);
}


let quad = new Quadrato(4);

quad.lato = 5;
console.log("Il lato del quadrato è", quad.lato);
console.log("L'area del quadrato è", quad.area());


let f: Triangolo = new TriangoloEquilatero(10);
console.log(f.perimetro());
console.log(f.area());

