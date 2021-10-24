import { environment } from './../../environments/environment';
import { WSInterface } from './../persona/wsInterface.model';
import { Persona } from './../persona/persona.model';
import { ListpersonService } from './../services/listperson.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  wsR?: WSInterface;
  persone?: Persona[];
  pagina: string = '1';
  pgPersValid = new RegExp(/^[1-12]{1,2}$/)
  pgPers: string = '';
  pgSelect: string = '6';
  total_pages: number = 2;
  numPagineTot: number[] = [];

  constructor(
    public listpersonService: ListpersonService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getPeopleByPage('1', '6');
  }

  getPeopleByPage(page: string, perPages: string): void {
    this.pagina = page;
    this.http.get<WSInterface>(`${environment.endPoint}/users?page=${page}&per_page=${perPages}`)
    .subscribe((wsResponse: WSInterface) => {
      this.wsR = wsResponse;
      this.persone = this.wsR.data;
      this.total_pages = this.wsR.total_pages;
      this.numberToArray();
      console.log(this.total_pages);
    })
  }

  setPagina(page: string): void {
    this.pagina = page;
    this.getPeopleByPage(this.pagina, this.pgSelect);
  }

  visPers(): boolean {
    return this.pgSelect == 'Pers' ? false : true;
  }

  numberToArray(): void {
    this.numPagineTot = [];
    for(let i = 1; i <= this.total_pages!; i++){
      this.numPagineTot.push(i);
    }
  }

  // setNumPage(num: string): void {
  //   this.pages = [];
  //   let resto = 12 % Number(num) != 0 ? 1 : 0;
  //   let numPages = (12 / Number(num)) + resto;
    
  //   for(let i = 1; i <= (parseInt(numPages.toPrecision(1))); i++) {
  //     this.pages[i-1] = i;
  //   }
  // }

  

}
