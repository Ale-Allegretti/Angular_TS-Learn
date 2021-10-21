import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { BookCardComponent } from './book-card/book-card.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MasterComponent } from './master/master.component';
import { FormsModule } from '@angular/forms';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import localeIt from '@angular/common/locales/it';
import { registerLocaleData } from '@angular/common';
import { OfferteComponent } from './offerte/offerte.component';
import { ContattiComponent } from './contatti/contatti.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { SingleComponent } from './single/single.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LinkCategoriePipe } from './pipes/link-categorie.pipe';
import { AddToCartSelectComponent } from './add-to-cart-select/add-to-cart-select.component';
import { AppRoutingModule } from './app-routing.module';
import { CatalogoService } from './services/catalogo.service';
import { CartService } from './services/cart.service';
import { SetToCartSelectComponent } from './set-to-cart-select/set-to-cart-select.component';

registerLocaleData(localeIt);

@NgModule({
  declarations: [
    MasterComponent,
    HeaderComponent,
    FooterComponent,
    BookCardComponent,
    HomeComponent,
    SearchComponent,
    OfferteComponent,
    ContattiComponent,
    CarrelloComponent,
    SingleComponent,
    NotFoundComponent,
    LinkCategoriePipe,
    AddToCartSelectComponent,
    SetToCartSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    CatalogoService,
    CartService,
    { provide: LOCALE_ID, useValue: 'it-IT'}
  ],
  bootstrap: [MasterComponent]
})
export class AppModule { }
