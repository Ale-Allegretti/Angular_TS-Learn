import { ModalEsitoComponent } from './../modal-esito/modal-esito.component';
import { environment } from './../../environments/environment';

import { Provincia } from './../province.interface';
import { Regione } from '../regioneInterface';
import { ItaliaService } from './../italia.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { Router} from '@angular/router';
import { Comune } from '../comuni.interface';
import { dateValidator } from '../form-errors/dateValidator.validator';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as moment from 'moment';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-calcola',
  templateUrl: './calcola.component.html',
  styleUrls: ['./calcola.component.css']
})
export class CalcolaComponent implements OnInit {

  frmCF = new FormGroup({
    nome: new FormControl("", [Validators.required, Validators.minLength(3)]),
    cognome: new FormControl("", [Validators.required, Validators.minLength(3)]),
    sesso: new FormControl("M"),
    dataNascita: new FormControl("01/01/1900", dateValidator()),
    comune: new FormControl("", Validators.required),  // codice ISTAT
    provincia: new FormControl("", Validators.required),   // id provincia 
    regione: new FormControl("", Validators.required)
  }) 
  oggi = new Date();
  dataMinima = new Date(1900, 1, 1);
  regioni?: Regione[];
  province?: Provincia[];
  comuni?: Comune[];

  constructor(
    private localeService: BsLocaleService,
    private italiaService: ItaliaService,
    private http: HttpClient,
    private modalService: BsModalService,
    private router: Router
  ) { }
  

  ngOnInit(): void {
    this.localeService.use("it");
    this.provincia.disable();
    this.comune.disable();

    this.italiaService.downloadRegioni().subscribe(
      (risultati: Regione[]) => { this.regioni = risultati}
    );

    this.regione.valueChanges.subscribe(
      // idRegione corrisponde all'id della regione selezionato nel select-option
      (idRegione) => {
        if(idRegione.length == 0) {
          this.province = undefined;
          this.comuni = undefined;
          this.comune.disable({ emitEvent: false} );
          this.provincia.disable({ emitEvent: false} );
          return
        }
        this.italiaService.getProvinciaByID(idRegione).subscribe(
          (risultati: Provincia[]) => { 
            this.provincia.setValue("", { emitEvent: false });
            this.province = risultati;
            this.provincia.enable({emitEvent: false});
           }
        )
      }
    );
    
    this.provincia.valueChanges.subscribe(
      (idProvincia) => {
        if(idProvincia.length == 0) {
          this.comuni = undefined;
          this.comune.disable({ emitEvent: false} )
          return
        }
        this.italiaService.getComuniByID(idProvincia).subscribe(
          (risultati: Comune[]) => {
            this.comune.setValue("");
            this.comuni = risultati;
            this.comune.enable();
          }
        )
      }
    )
  }

  get nome(): FormControl { return this.frmCF.get("nome") as FormControl };
  get cognome(): FormControl { return this.frmCF.get("cognome") as FormControl };
  get sesso(): FormControl { return this.frmCF.get("sesso") as FormControl };
  get regione(): FormControl { return this.frmCF.get("regione") as FormControl };
  get provincia(): FormControl { return this.frmCF.get("provincia") as FormControl };
  get comune(): FormControl { return this.frmCF.get("comune") as FormControl };
  get dataNascita(): FormControl { return this.frmCF.get("dataNascita") as FormControl };


  calcola() {

    /* Per provare si potrebbe usare direttamente il router ad inizio funzione
    this.router.navigate(['/mostra-codice'], { state: { codice: "XXX"} });
    return
    */

    if(this.frmCF.invalid) {
      this.frmCF.markAllAsTouched();
      return
    }
    let params = new HttpParams();
    params = params.set("nome", this.nome.value);
    params = params.set("cognome", this.cognome.value);
    params = params.set("sesso", this.sesso.value);
    params = params.set("provincia", this.provincia.value);
    params = params.set("comune", this.comune.value);
    params = params.set("compleanno_gg", moment(this.dataNascita.value).format("D"));
    params = params.set("compleanno_mm", moment(this.dataNascita.value).format("M"));
    params = params.set("compleanno_aa", moment(this.dataNascita.value).format("YYYY"));
    this.http.post<CFResponse>(`${environment.endPoint}/calcola-codice-fiscale.php`, params).subscribe(
      (r: CFResponse) => { 
        if(r.codice === false) {
          this.modalService.show(ModalEsitoComponent, { 
            initialState: { titolo: "Errore!", messaggio: "Impossibile calcolare il CF della persona"}
          });
        } else {
          this.router.navigate(['/mostra-codice'], { state: r });
        }
      },
      // 500 SERVER ERROR
      (e) => {
        this.modalService.show(ModalEsitoComponent, { 
          initialState: { titolo: "Errore!", messaggio: "Errore sul server, riprova più tardi"}
        })
      }
    );
  }
}

interface CFResponse {
  codice: string | false;
}
