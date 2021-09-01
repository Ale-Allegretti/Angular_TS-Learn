
import { CoursesService } from './courses.service';
import { Component  } from "@angular/core";

@Component({
    selector: 'courses',
    template: `<h2>{{"Title: " + getTitle() }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>

        </ul>
    
    `// *ngFor è una direttiva
    // let indica la variabile che itera nella lista (in questo caso)
})

export class CoursesComponent {
    title = "List of courses";
    courses;  //di solito presi dal server
    
    constructor(service: CoursesService) {          //il costruttore userà il riferimento di service passato come argomento (dependecie injection)
        // let service = new CoursesService();        così da evitare errori in caso CoursesService venga modificato o ampliato
        this.courses = service.getCourses();
    }

    getTitle() {
        return this.title;
    }
}