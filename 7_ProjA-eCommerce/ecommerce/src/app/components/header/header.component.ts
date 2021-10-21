import { CartService } from './../../services/cart.service';
import { CatalogoService } from './../../services/catalogo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public catalogoService: CatalogoService, public cartService: CartService) { }

  ngOnInit(): void {
    console.log(this.catalogoService.getGeneri());
  }

}
