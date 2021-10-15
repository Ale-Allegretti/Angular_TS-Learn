import { Book } from './components/models/book.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  numeroRicevuto: number = 0;

  libro: Book = {
    title: "Titolo",
    author: "Autore",
    price: 25
    // promo può anche non esserci, essendo un optional
  };

  ricevoDati(evento: number) {
    console.log("Ho ricevuto da generatoComponent un evento:", evento);
    this.numeroRicevuto = evento;
  }

  title = 'valuta';
  importoInit: number = 0;
  importoFin: string = '0';
  simbolo: string = '€';
  valutaInit: 'EUR' | 'USD' | 'GBP' = 'EUR';
  valutaFin: 'EUR' | 'USD' | 'GBP' = 'EUR';
  value = {
    EUR: {
      USD: 1.16,
      GBP: 0.85,
      EUR: 1
    },
    USD: {
      USD: 1,
      GBP: 0.73,
      EUR: 0.86
    },
    GBP: {
      USD: 1.37,
      GBP: 1,
      EUR: 1.18
    }
  };

  getCambioValuta(): void {
    let partenza = this.valutaInit; // EUR
    let arrivo = this.valutaFin; // USD
    this.getSimboloValuta(this.valutaFin);
    let tassoCambio = this.value[partenza][arrivo]; // this.value.EUR.USD
    let conversione = this.importoInit * tassoCambio;
    this.importoFin = conversione.toFixed(2);
  }

  getSimboloValuta(value: string): void {
    if(value == 'EUR') {
      this.simbolo = "€";
    }
    if(value == 'USD') {
      this.simbolo = "$";
    }
    if(value == 'GBP') {
      this.simbolo = "£";
    }
  }


  /* importoInit: number = 0;
  importoFin: number = 0;

  valutaInit: string = "euro";
  valutaFin: string = "euro";

  getCambioValuta(): number {
    if(this.valutaInit == this.valutaFin) {
      return this.importoInit;
    }
    else if (this.valutaInit == 'euro') {
      return this.valutaFin == 'dollaro' ? 
          this.importoInit * 1.16 : this.valutaFin == 'sterlina' ? this.importoInit * 0.85 : this.importoInit;
    }
    else if (this.valutaInit == 'sterlina') {
      return this.valutaFin == 'euro' ? 
          this.importoInit * 1.17 : this.valutaFin == 'dollaro' ? this.importoInit * 1.37 : this.importoInit;
    }
    else if (this.valutaInit == 'dollaro') {
      return this.valutaFin == 'euro' ? 
          this.importoInit * 0.86 : this.valutaFin == 'sterlina' ? this.importoInit * 0.73 : this.importoInit;
    }
    return 0;
  }

  getSimboloValuta(): string {
    if(this.valutaFin == 'euro') {
      return "€";
    }
    if(this.valutaFin == 'dollaro') {
      return "$";
    }
    else {
      return "£";
    }
  } */



}
