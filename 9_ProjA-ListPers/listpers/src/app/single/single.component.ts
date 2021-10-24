import { Support } from './../persona/support.model';
import { WSInterfaceSingle } from './../persona/wsInterface.model';
import { Persona } from './../persona/persona.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  persona?: Persona;
  wsSingle?: WSInterfaceSingle;
  support?: Support;

  constructor(
    private ar: ActivatedRoute, 
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.ar.params
    .subscribe((p: Params) => {
      this.getPersonById(p.id).subscribe(
        (ws: WSInterfaceSingle) => { 
          this.wsSingle = ws;
          this.persona = this.wsSingle?.data;
          this.support = this.wsSingle?.support;
        },
        (e) => { console.log("non trovato")}
      )
    })    
  }

  getPersonById(id: string): Observable<WSInterfaceSingle> {
    return this.http.get<WSInterfaceSingle>(`${environment.endPoint}/users/${id}`);
  }

}
