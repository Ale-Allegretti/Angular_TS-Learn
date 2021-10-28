import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-esito',
  templateUrl: './modal-esito.component.html',
  styleUrls: ['./modal-esito.component.css']
})
export class ModalEsitoComponent implements OnInit {

  titolo!: string;
  messaggio!: string;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

}
