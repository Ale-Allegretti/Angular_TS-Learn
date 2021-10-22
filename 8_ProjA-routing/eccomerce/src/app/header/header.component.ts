import { CartService } from './../services/cart.service';
import { CatalogoService } from './../services/catalogo.service';

import { Component, OnInit } from '@angular/core';
import { Book } from '../books/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  generi?: string[];
  searchKeyword: string = "";
  cap = new RegExp(/^[0-9]{5}$/);

  constructor(
    public catalogoService: CatalogoService, 
    public cartService: CartService,
    private router: Router
  ) { }



  ngOnInit(): void {
    this.catalogoService.downloadCatalogo().subscribe(
      (cat: Book[]) => {
        let output = new Set<string>();
        for(let book of cat) {
          for(let genere of book.genre) {
            output.add(genere);
          }
        }
        this.generi = Array.from(output).sort();
      }
    )
  }

  cerca() {
    this.router.navigate(["/search"], { queryParams: { chiave: this.searchKeyword }});
  }

}
