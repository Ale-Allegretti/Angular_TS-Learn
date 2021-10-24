import { WSInterface } from './../persona/wsInterface.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WSRequestService {

  wsRequest?: WSInterface;

  constructor(
    private http: HttpClient
  ) { 


  }

}
