import { Employee } from './../interfaces/reqres.interface';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WSResponse } from '../interfaces/reqres.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(
    private http: HttpClient) { }

  getEmployees(pagina: number, limit: number): Observable<WSResponse> {
    return this.http.get<WSResponse>(
      `${environment.endPoint}/users`,
      {
        params: {
          delay: 2,
          page: pagina,
          per_page: limit
        }
      }
    )
  }

  createEmployee(e: {name: string, job: string}): Observable<any> {
    return this.http.post<any>(
      `${environment.endPoint}/users`,
      e
    )
  }

}
