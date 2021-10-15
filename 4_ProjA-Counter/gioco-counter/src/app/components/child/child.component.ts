import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  counter = 0;
  interval: any;

  @Output() evento: EventEmitter<number> = new EventEmitter();
  @Output() reset: EventEmitter<void> = new EventEmitter();
  @Input() stringa: string = '';

  constructor() {
    this.resetGame();
  }

  private resetGame() {
    this.counter = 0;
    this.interval = setInterval(() => {
      this.counter++;
    }, 50);
  }

  buttonClicked(): void {
    clearInterval(this.interval);
    this.evento.emit(this.counter);
  }

  buttonReset(): void {
    this.reset.emit();
    this.resetGame();
  }
}
