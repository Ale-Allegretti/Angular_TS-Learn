import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // titolo: string = '';
  // descrizione: string = '';
  // scadenza: string = '';
  // urgente: boolean = false;

  @Output() aggiungi = new EventEmitter<Todo>();

  newTodo: Todo = {
    titolo: '',
    descrizione: '',
    scadenza: '',
    urgente: false,
    completato: false
  };

  constructor() { }

  ngOnInit(): void {
  }

  submitTask() {
    this.aggiungi.emit(this.newTodo);

    this.newTodo = {
      titolo: '',
      descrizione: '',
      scadenza: '',
      urgente: false,
      completato: false
    };
  }

}
