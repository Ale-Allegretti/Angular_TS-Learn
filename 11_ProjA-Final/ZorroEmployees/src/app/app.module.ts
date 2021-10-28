import { CardComponent } from './card/card.component';
import { UiModule } from './ui.module';
import { EmployeesService } from './services/employees.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';

import { registerLocaleData } from '@angular/common';
import it from '@angular/common/locales/it';
import { it_IT } from 'ng-zorro-antd/i18n';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';



registerLocaleData(it);

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CardComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UiModule, 
    ReactiveFormsModule
  ],
  providers: [
    EmployeesService,
    { provide: NZ_I18N, useValue: it_IT }],
  bootstrap: [AppComponent]
})
export class AppModule { }
