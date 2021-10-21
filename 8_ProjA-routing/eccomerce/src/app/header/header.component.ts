import { CartService } from './../services/cart.service';
import { CatalogoService } from './../services/catalogo.service';

import { Component, OnInit } from '@angular/core';
import { Book } from '../books/book.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  generi?: string[];
  searchKeyword: string = "";

  constructor(
    public catalogoService: CatalogoService, 
    public cartService: CartService
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

}
