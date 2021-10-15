import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gioco-counter';

  messaggio: string = '';

  ricevoDati(evento: number): void {
    this.messaggio = evento === 20 ? "Hai vinto!" : "Riprova";
  }
  
}
