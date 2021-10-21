import { Book, ItemInCart } from './../books/book.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: ItemInCart[];
  private LS_KEY = "Ecommerce_cart"

  constructor() {
    this.cart = [];
   }
  
  add(b: Book, qty: number) {
    // verifico se il Book b è già presente nel cart
    let presente = this.cart.find((i : ItemInCart) => 
        i.item.isbn === b.isbn
    );
    // se non lo trovo -> push
    if(!presente){
      this.cart.push({ 
        item: b, 
        qtyInCart: qty 
      });
    }
    // altrimenti (già presente) -> aumento la qtyInCart in quella posizione
    else {
      this.cart[this.cart.indexOf(presente)].qtyInCart += qty;
    }
    this.syncToStorage();

    /* ALTERNATIVA PIU' PROLISSA

    let trovato: boolean = false; 

    let i;
    for(i = 0; i < this.cart.length; i++) {
      if(this.cart[i].item.isbn === b.isbn) {
        trovato = true;
        break;
      }
    }
    if(trovato) {
      let totale = this.cart[i].qtyInCart + qty;
      if(totale <= this.cart[i].item.stock) {
        this.cart[i].qtyInCart += qty;
      } else {
        throw alert(
        `Non è possibile superare la quantità massima di ${this.cart[i].item.stock} libri!
         Puoi aggiungerne ancora ${this.cart[i].item.stock - this.cart[i].qtyInCart}`);
      }
    } else {
      this.cart.push( {
        item: b,
        qtyInCart: qty
      })
    }
    */
  }

  getCount(): number {
    let tot = 0;
    for(let i of this.cart) {
      tot += i.qtyInCart;
    }
    return tot;
  }

  numberOfBooksInCart(b: Book): number {
    return this.cart.find((i: ItemInCart) => i.item.isbn === b.isbn)?.qtyInCart || 0;
  }

  syncToStorage(){
    sessionStorage.setItem(this.LS_KEY, JSON.stringify(this.cart))
  }

  getTotal(): number {
    let tot = 0;
    for(let i of this.cart) {
      let prezzo = 
      i.item.promo ? (i.item.price - (i.item.price*15/100)) : i.item.offerta_speciale ? 
      (i.item.price - (i.item.price*25/100)) : i.item.price;
      tot += prezzo * i.qtyInCart;
    }
    return tot;
  }
}
