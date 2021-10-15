import { Component } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  counter = 0;
  interval: any;

  constructor() {
    this.interval = setInterval(() => {
      this.counter++;
    }, 100);
  }

  buttonClicked() {
    clearInterval(this.interval);
    // Inviare il numero al padre.
  }
}
