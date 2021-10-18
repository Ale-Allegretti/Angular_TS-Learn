
import { Component, OnInit } from '@angular/core';
import { Book, books } from 'src/app/books/book.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  libri: Book[] = books.filter(el => el.promo);

  constructor() { }

  ngOnInit(): void {
  }

}
