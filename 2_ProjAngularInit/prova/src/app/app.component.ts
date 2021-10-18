import { Component } from '@angular/core';

// decorator
@Component({
  // descrive un tag <app-root> in htlm che farà partire tutto quello che viene qui dichiarato
  selector: 'app-root',   
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title: string = 'Sito Angular';

  mostrare: boolean = true;

  background: string = 'transparent';
  articolo: string = `
  <h3>Titolo dell'articolo</h3>
  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.<br>Odit ullam voluptates illum natus autem officia quis veniam, ab mollitia quaerat, eum eos assumenda enim necessitatibus aut earum quae temporibus? Quas.
  </p>` ;

  attivo: boolean = true;
  testo: string = '';
  colore: string = 'black';
  immagine: string = "/assets/download.jpg";

  utente = {
    nome: "Alessandro",
    cognome: "Allegretti"
  };


  getNomeCognome(): string {
    return "Alessandro Allegretti"
  }

  isActive() : boolean {
    return this.attivo;
  }

  clickBottone (): void {
    this.mostrare = !this.mostrare;
    this.attivo = !this.attivo;
  }
  
  cambiaColore(colore: string): void {
    this.background = colore;
  }
  
  cambiaTesto(): void {
     this.testo = "Ciao, mondo!"
  }

}
