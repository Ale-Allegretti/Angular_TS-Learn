import { Book } from './../models/book.model';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-generato',
  templateUrl: './generato.component.html',
  styleUrls: ['./generato.component.css']
})
export class GeneratoComponent implements OnInit {

  // tutti i dati ricevuti dall'esterno per il binding di elementi -> [elementoInput]="..."
  @Input() numero: number = 0;
  @Input() stringa: string = '';
  @Input() libro: Book | undefined;

  // tutti i dati da inviare al component padre generando un evento per il biding di eventi -> (funzione)="..."
  @Output() evento: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  bottoneClick(): void {
    this.evento.emit(100);
  }

}
