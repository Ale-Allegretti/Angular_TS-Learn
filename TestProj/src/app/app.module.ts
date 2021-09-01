import { CoursesService } from './courses.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';

@NgModule({   // traduzione del modulo in vero e proprio visualizzatore per Angular
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent    // da inserire con la costruzione dei components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [      // da aggiungere i component per cui ci sono delle dependecie
    CoursesService      // per es. courses.component dipende da CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// da terminale -> ng serve     per avviare la simulazione in localhost