
import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../books/book.model';
import { CatalogoService } from '../services/catalogo.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  @Input() libro!: Book;

  constructor(public catalogoService: CatalogoService) {

  }
  ngOnInit(): void {
  }

  

}
