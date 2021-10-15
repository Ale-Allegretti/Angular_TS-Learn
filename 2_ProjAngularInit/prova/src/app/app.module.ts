
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

/* funziona come un override
* permette di inserire tutte le funzionalità del progetto
* tra cui dichiarazioni, moduli, bootstrap
*/
@NgModule({
  declarations: [
    AppComponent
   ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
//
export class AppModule { }
