import { Employee } from './../interfaces/reqres.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  @Input() emp!: Employee;

  constructor() { }

  ngOnInit(): void {
  }

  getNomeCognome(): string {
    return `${this.emp.first_name} ${this.emp.last_name}`
  }


}
