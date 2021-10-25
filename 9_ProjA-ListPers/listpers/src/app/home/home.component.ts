import { Router } from '@angular/router';
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
  pgSelect: string = '';
  tempSelect: string = '6';
  tempPers: string = '';
  total_pages: number = 2;
  numPagineTot: number[] = [];
  utenteIscritto?: object;

  constructor(
    public listpersonService: ListpersonService,
    private http: HttpClient,
    private router: Router
  ) {
    this.utenteIscritto = this.router.getCurrentNavigation()?.extras.state;
   }

  ngOnInit(): void {
    this.getPeopleByPage('1', '6');
  }

  getPeopleByPage(page: string, perPages: string): void {
    if(perPages == 'Pers') {
      return;
    }
    this.pgSelect = perPages;
    this.pagina = page;
    this.http.get<WSInterface>(`${environment.endPoint}/users?page=${page}&per_page=${perPages}`)
    .subscribe((wsResponse: WSInterface) => {
      this.wsR = wsResponse;
      this.persone = this.wsR.data;
      this.total_pages = this.wsR.total_pages;
      this.numberToArray();
    })
  }


  setPagina(page: string): void {
    this.pagina = page;
    this.getPeopleByPage(this.pagina, this.pgSelect);
  }

  visPers(): boolean {
    return this.tempSelect == 'Pers' ? false : true;
  }

  numberToArray(): void {
    this.numPagineTot = [];
    for(let i = 1; i <= this.total_pages!; i++){
      this.numPagineTot.push(i);
    }
  }


  showAlert(): boolean {
    if(this.utenteIscritto) {
      return true;
    } else {
      return false;
    }

  }

}
