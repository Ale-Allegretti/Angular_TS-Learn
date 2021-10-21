
import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../services/catalogo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public catalogoService: CatalogoService) { }

  ngOnInit(): void {
    
   }

}
