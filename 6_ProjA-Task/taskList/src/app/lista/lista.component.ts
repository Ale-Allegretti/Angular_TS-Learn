import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() lista: Todo[] = [];
  @Input() change: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  completaTask(element: number) {
    this.lista[element].completato = true;
  }


}
