import { Persona } from './../persona/persona.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListpersonService {

  constructor(
    private http: HttpClient
  ) { }

  

  getPeopleByPage(page: string): Persona[] {

    return [];
  }

}
