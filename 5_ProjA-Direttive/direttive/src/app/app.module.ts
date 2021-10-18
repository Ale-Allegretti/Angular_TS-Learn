import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { MiaPipePipe } from './mia-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    MiaPipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
