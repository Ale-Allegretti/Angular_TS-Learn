import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NuovoUtenteComponent } from './nuovo-utente/nuovo-utente.component';
import { SingleComponent } from './single/single.component';
import { MasterComponent } from './master/master.component';

@NgModule({
  declarations: [
    HomeComponent,
    NuovoUtenteComponent,
    SingleComponent,
    MasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class AppModule { }
