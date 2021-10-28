import { Comune } from './comuni.interface';
import { Provincia } from './province.interface';
import { environment } from './../environments/environment';
import { Regione } from './regioneInterface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItaliaService {

  constructor(
    private http: HttpClient
  ) { }

  downloadRegioni(): Observable<Regione[]> {
    return this.http.get<Regione[]>(`${environment.endPoint}/regioni.php`);
  }

  getProvinciaByID(chiave: string): Observable<Provincia[]> {
    // return this.http.get<Provincia[]>(
    //   `${environment.endPoint}/province.php?idRegione=${chiave}`);
    return this.http.get<Provincia[]>(
      `${environment.endPoint}/province.php`, { params: { idRegione: chiave}}
    )
  }

  getComuniByID(chiave: string): Observable<Comune[]> {
    return this.http.get<Comune[]>(
      `${environment.endPoint}/comuni.php`, { params: { idProvincia: chiave}}
    )
  }


}
