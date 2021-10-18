import { Book } from 'src/app/books/book.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  @Input() libro?: Book;

  constructor() { }

  ngOnInit(): void {
  }

}
