import { Component } from '@angular/core';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  array: Todo[] = [];
  cambio: boolean = true;

  addTask(event: Todo) {
    this.array.push(event);
  }
  selezionaTodo() {
    this.cambio = true;
  }
  selezionaDone() {
    this.cambio = false;
  }

  selezionaTabTodo(): string {
    if(this.cambio) {
      return 'active';
    } else {
      return '';
    }
  }
  selezionaTabDone(): string {
    if(!this.cambio) {
      return 'active';
    } else {
      return '';
    }
  }

  get completati(): Todo[] {
    return this.array.filter(el => el.completato);
  }
  get daCompletare(): Todo[] {
    return this.array.filter(el => !el.completato);
  }
}
