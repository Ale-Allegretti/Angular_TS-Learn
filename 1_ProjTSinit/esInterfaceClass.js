"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quadrato = exports.TriangoloEquilatero = exports.Triangolo = void 0;
var Triangolo = /** @class */ (function () {
    function Triangolo(lato1, lato2, lato3) {
        this.lato1 = lato1;
        this.lato2 = lato2;
        this.lato3 = lato3;
    }
    Triangolo.prototype.perimetro = function () {
        return this.lato1 + this.lato2 + this.lato3;
    };
    Triangolo.prototype.area = function () {
        return Math.sqrt((this.lato1 * this.lato1) + (this.lato2 * this.lato2) + (this.lato3 * this.lato3));
    };
    return Triangolo;
}());
exports.Triangolo = Triangolo;
var TriangoloEquilatero = /** @class */ (function (_super) {
    __extends(TriangoloEquilatero, _super);
    function TriangoloEquilatero(_lato) {
        var _this = _super.call(this, _lato, _lato, _lato) || this;
        _this._lato = _lato;
        return _this;
    }
    TriangoloEquilatero.prototype.perimetro = function () {
        return this._lato * 3;
    };
    return TriangoloEquilatero;
}(Triangolo));
exports.TriangoloEquilatero = TriangoloEquilatero;
var Quadrato = /** @class */ (function () {
    // public lato permette di non dichiarare appositamente lato
    function Quadrato(_lato) {
        this._lato = _lato;
    }
    Quadrato.prototype.perimetro = function () {
        return this._lato * 4;
    };
    Quadrato.prototype.area = function () {
        return this._lato * this._lato;
    };
    Object.defineProperty(Quadrato.prototype, "lato", {
        get: function () {
            return this._lato;
        },
        set: function (l) {
            this._lato = l;
        },
        enumerable: false,
        configurable: true
    });
    return Quadrato;
}());
exports.Quadrato = Quadrato;
var creaFormaGeometrica = function () {
    var lati = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        lati[_i] = arguments[_i];
    }
    switch (lati.length) {
        case 1:
            return new Quadrato(lati[0]);
        case 3:
            return new Triangolo(lati[0], lati[1], lati[2]);
        default:
            return null;
    }
};
var forma = creaFormaGeometrica(2, 5, 8);
var area = forma.area();
console.log(area);
// permette di verificare prima di fare un cast
if (forma instanceof Triangolo) {
    var t1 = forma;
}
var quad = new Quadrato(4);
quad.lato = 5;
console.log("Il lato del quadrato è", quad.lato);
console.log("L'area del quadrato è", quad.area());
var f = new TriangoloEquilatero(10);
console.log(f.perimetro());
console.log(f.area());
