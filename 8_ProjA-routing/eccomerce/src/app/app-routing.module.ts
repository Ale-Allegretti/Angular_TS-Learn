import { NotFoundComponent } from './not-found/not-found.component';
import { SingleComponent } from './single/single.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { OfferteComponent } from './offerte/offerte.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContattiComponent } from './contatti/contatti.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "offerte", component: OfferteComponent},
  { path: "carrello", component: CarrelloComponent},
  { path: "single/:isbnLibro", component: SingleComponent},
  { path: "search", component: SearchComponent},
  { path: "categoria/:nomeCategoria", component: SearchComponent},
  { path: "contatti", component: ContattiComponent},
  { path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
