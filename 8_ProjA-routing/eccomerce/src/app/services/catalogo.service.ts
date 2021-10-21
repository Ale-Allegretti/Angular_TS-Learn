
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../books/book.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  // private _catalogo: Book[];


  constructor(private http: HttpClient) { 
  }

  // get catalogo(): Book[] {
  //   return this._catalogo;
  // }
  // get catalogoPromo(): Book [] {
  //   return this._catalogo.filter(b => b.promo);
  // }

  // getGeneri(): string[] {
  //   // ["horror", "bambini", "classici", ...]
  //   let output = new Set<string>();
  //   for(let book of this.catalogo){
  //       for(let genere of book.genre){
  //           output.add(genere);
  //       }
  //   }
  //   return Array.from(output).sort();
  // }

  // getLibriOffertaSpeciale(): Book[] {
  //   return this._catalogo.filter(b => b.offerta_speciale);
  // }

  // getOffertaSpeciale() : Book | undefined {
  //   return this.catalogo.find((b : Book) => b.offerta_speciale)
  // }

  numberToArray(numero : number) : number[] {
    let theArray = [];
    for(let i = 1; i <= numero; i++){
        theArray.push(i);
    }
    return theArray;
  }

  // torna il prezzo a seconda se in promo o offerta speciale
  getPrezzo(libro: Book): number {
    return libro.offerta_speciale ? (libro.price - (libro.price*25/100)) : 
    libro.promo ? (libro.price - (libro.price*15/100)) : libro.price;
  }

  //torna un book per ISBN (se presente)
  getById(isbn: string): Observable<Book> {
    // questa ws vuole un pametro di nome "chiave" con valore ISBN
    // 1. QUERYSTRING: www.***.com?parametro1=valore&parametro2=valore2...
    // 2. Utilizzare il get() di Angular
    return this.http.get<Book>(
      `${environment.endPoint}/getBookById.php`,
      { params: { chiave: isbn } }
    );
  }

  search(cat: string): Observable<Book[]> {
    return this.http.get<Book[]> (
      `${environment.endPoint}/searchBooks.php`,
      {
        params: {
          genere: cat
        }
      }
    );

    // ALTERNATIVA A QUELLA DI CUI SOPRA
    // let parametri = new HttpParams().set("genere", cat);
    // return this.http.get<Book[]> (
    //   `${environment.endPoint}/searchBook.php`, { params: parametri}
    // );
  }

  // getBooksByCategory(nomeCat: string[], exclude: Book): Book[] {

  //   // return this.catalogo.filter(
  //   //   (b : Book) => {
  //   //       return nomeCat.filter((genere) => b.genre.includes(genere)).length > 0 && b.isbn != exclude.isbn
  //   //   })
    
  //   let result: Book[] = [];
  //   let trovato: boolean = false;
  //   for(let book of this.catalogo) {
  //     for(let genere of nomeCat) {
  //       if(book.genre.indexOf(genere) >= 0) {
  //         trovato = true;
  //         break;
  //       }
  //     }
  //     if(trovato && book.isbn !== exclude.isbn) {
  //       result.push(book);
  //     }
  //     trovato = false;
  //   }
  //   return result;
  // }

  downloadCatalogo(): Observable<Book[]> {
    return this.http.get<Book[]>(`${environment.endPoint}/getBooks.php`);
  }

}
