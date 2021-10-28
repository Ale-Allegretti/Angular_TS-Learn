import { Component, Input, OnInit } from '@angular/core';
import { ValidationErrors, FormControl } from '@angular/forms';

@Component({
  selector: 'form-errors',
  templateUrl: './form-errors.component.html',
  styleUrls: ['./form-errors.component.css']
})
export class FormErrorsComponent implements OnInit {

  @Input() control!: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

}
