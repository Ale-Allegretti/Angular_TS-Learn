import { CartService } from './../../services/cart.service';
import { CatalogoService } from './../../services/catalogo.service';
import { Book } from 'src/app/books/book.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  @Input() libro!: Book;
  qtaNelCart!: number;
  qta: string = "";

  constructor(public catalogoService: CatalogoService, public cartService: CartService) {
    this.qtaNelCart = this.cartService.numberOfBooksInCart(this.libro);
   }

  ngOnInit(): void {
  }

  addToCart(): void {
    this.cartService.add(this.libro, parseInt(this.qta));
    this.qtaNelCart = this.cartService.numberOfBooksInCart(this.libro);
    this.qta = "";
  }

}
