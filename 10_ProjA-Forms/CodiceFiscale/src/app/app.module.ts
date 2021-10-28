import { ItaliaService } from './italia.service';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcolaComponent } from './calcola/calcola.component';
import { HttpClientModule} from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { defineLocale, itLocale } from 'ngx-bootstrap/chronos';
import { FormErrorsComponent } from './form-errors/form-errors.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalEsitoComponent } from './modal-esito/modal-esito.component';
import { EsitoOkComponent } from './esito-ok/esito-ok.component';

defineLocale("it", itLocale);

@NgModule({
  declarations: [
    AppComponent,
    CalcolaComponent,
    FormErrorsComponent,
    ModalEsitoComponent,
    EsitoOkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  providers: [ItaliaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
