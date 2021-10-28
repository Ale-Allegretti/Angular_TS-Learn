import { EsitoOkComponent } from './esito-ok/esito-ok.component';
import { CalcolaComponent } from './calcola/calcola.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CalcolaComponent},
  { path: 'mostra-codice', component: EsitoOkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
