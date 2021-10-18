import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  attivo: number = 0;
  oggi: Date = new Date();
  dataStringa: string = '2021-12-31';

  numero: number = 4.45362;
  prezzo: number = 19.99;

  nome: string = "Ale";
  cognome: string = "Allegretti";
  frase: string = "è MOlto BeLLo ANDaRe in GIro";

  numeri: number [] = [10, 32, 25, 11, 98, 4];

  // isAttivo(element: number): string[] {      // ngClass che restituisce una stringa o un array di stringhe
  //   if(element === this.attivo) {
  //     return ['active', 'bg-info', 'text-red'];
  //   } else {
  //     return ['bg-warning'];
  //   }
  // }

  // alternativa a quella di cui sopra    // ngClass che restituisce un oggetto con proprietà stringhe
  isAttivo(element: number): any {
    return {
      'selezionato': element === this.attivo,
      'active': element === this.attivo,
      'bg-warning': element !== this.attivo,
      'text-dark': element === this.attivo,
      'bg-info': element !== this.attivo
    }
  }

  setAttivo(element: number): void {
      this.attivo = element;
  }

  isAttivoStyle(element: number): any {
    if(element === this.attivo) {
      return {
        'text-align': 'left',
        'height.em': 3       // questo traduce in 3em l'altezza
      }
    } else {
      return {
        'text-align': 'center'
      }
    }
  }
}
