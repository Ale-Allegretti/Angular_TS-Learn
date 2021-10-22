import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Book } from '../books/book.model';
import { CatalogoService } from '../services/catalogo.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  filtroGenere?: string;
  results?: Book[];
  generi?: string[];
  attivo: boolean = false;
  generiMap: Map<string, { count: number }> = new Map();
  sorting: string = "3";
  filtroPrezzoDa: string = "";
  filtroPrezzoA: string = "";
  temp?: Book[];
  unfilteredResults?: Book[];


  constructor(
    private ar: ActivatedRoute,
    private catalogoService: CatalogoService
  ) { }

  ngOnInit(): void {
    // URL: /categoria/Kids (router parameter, app.routing.model)
    this.ar.params.subscribe(
      (p: Params) => {
        // nomeCategoria è impostato nel app
        this.filtroGenere = p.nomeCategoria;
        this.catalogoService.search(this.filtroGenere!).subscribe(
          (risultati: Book[]) => { 
            this.results = risultati; 
            this.temp = risultati;
            this.ordina();
          }
      )
      this.catalogoService.downloadCatalogo().subscribe((cat: Book[]) => {
        this.generiMap.clear();
        cat.forEach((b: Book) => {
          for (let genre of b.genre) {
            if (this.generiMap.has(genre)) {
              this.generiMap.get(genre)!.count++;
            } else {
              this.generiMap.set(genre, { count: 1 });
            }
          }
      })
    })
    })

    // URL: /search?chiave=XXX (querystring parameter, passato dal form di ricerca)
    this.ar.queryParams.subscribe(
      (p : Params) => {
        if(!p.chiave) { return; }
        this.catalogoService.searchByKeyword(p.chiave).subscribe(
          (b : Book[]) => {
            this.results = b
            this.unfilteredResults = b
          }
        )
      }
    )
  }

  ordina(): void {
    switch (this.sorting) {
      case "1":
        this.results!.sort(
          (a : Book, b : Book) =>
            b.price - a.price
        );
        break;
      case "2":
        this.results!.sort(
          (a : Book, b : Book) =>
            a.price - b.price
        );
        break;
      case "3":
        this.results!.sort(
          (a : Book, b : Book) =>
            a.title > b.title ? 1 : - 1
        );
        break;
      case "4":
        this.results!.sort(
          (a : Book, b : Book) =>
            a.title < b.title ? 1 : - 1
        );
        break;
      default:
        break;
    }


  }

  filtraPrezzo(): void {
    let prezzoDa = Number(this.filtroPrezzoDa);
    let prezzoA = Number(this.filtroPrezzoA);
    
    this.results = this.temp!
                      .filter((b: Book) => !isNaN(prezzoDa) ? b.price >= prezzoDa : true)
                      .filter((b: Book) => !isNaN(prezzoA) ? b.price <= prezzoA : true);
  }

}
