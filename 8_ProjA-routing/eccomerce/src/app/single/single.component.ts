
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Book } from '../books/book.model';
import { CartService } from '../services/cart.service';
import { CatalogoService } from '../services/catalogo.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  book?: Book;
  q: number = 0;

  constructor(
    // service di Angular per aver informazioni sulla rotta
    private ar: ActivatedRoute, 
    public catalogoService: CatalogoService,
    public cartService: CartService,
    // service di Angular per gestire il router
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ar.params.subscribe(
      (p: Params) => {
        this.catalogoService.getById(p.isbnLibro).subscribe(
          (b: Book) => { this.book = b },
          (e) => { this.router.navigate(["/notFound"])}
        )
    })
  }

  getDisponibilita() {
    this.q = this.book!.stock - this.cartService.numberOfBooksInCart(this.book!);
    return {
      "text-success" : this.q > 10,
      "text-warning" : this.q <= 10 && this.q >= 5,
      "text-danger" : this.q < 5
    }
  }

}
