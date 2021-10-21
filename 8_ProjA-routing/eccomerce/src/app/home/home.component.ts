
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Book } from '../books/book.model';
import { CatalogoService } from '../services/catalogo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  libroInOfferta?: Book; 
  libriInPromo?: Book[];

  constructor(
    public catalogoService: CatalogoService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<Book[]>(`${environment.endPoint}/getBooks.php`).subscribe(
      (catalogoLibri: Book[]) => { 
        this.libroInOfferta = catalogoLibri.find(b => b.offerta_speciale);
        this.libriInPromo = catalogoLibri.filter(b => b.promo);
       }
    );
  }

}
