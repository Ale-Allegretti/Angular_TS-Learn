import { FormsModule } from '@angular/forms';
import { CartService } from './services/cart.service';
import { CatalogoService } from './services/catalogo.service';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { BookCardComponent } from './components/book-card/book-card.component';

import localeIt from '@angular/common/locales/it';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeIt);

@NgModule({
  // component, pipes, ect
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    BookCardComponent
  ],
  // moduli esterni, sottomoduli, dipendenze
  imports: [
    BrowserModule,
    FormsModule
  ],
  // classi iniettabili (services)
  providers: [
    CatalogoService,
    CartService,
    { provide: LOCALE_ID, useValue: 'it-IT'}
  ],
  // array di component da avviare quando parte questo modulo
  bootstrap: [AppComponent]
})
export class AppModule { }
