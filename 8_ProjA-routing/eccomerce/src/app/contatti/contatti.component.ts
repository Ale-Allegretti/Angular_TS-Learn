import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent implements OnInit {

  tipi = [
    { val: 1, label: "Informazioni sui libri"},
    { val: 2, label: "Disponibilità di prodotto"},
    { val: 3, label: "Altre informazioni"}
  ];

  frmContatti = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    tipoRichiesta: new FormControl("", Validators.required),
    messaggio: new FormControl("", Validators.required), 
    acconsento: new FormControl(false, Validators.requiredTrue)
  })

  constructor() { }

  ngOnInit(): void {
    // (this.frmContatti.get("email") as FormControl).setValue("email@email.com");
    // (this.frmContatti.controls["email"] as FormControl).setValue("email@email.com");
  }


  // utile scriversi anche i GETTERS
  get ctrlEmail(): FormControl { return (this.frmContatti.get("email") as FormControl)}
  get ctrlTipoRichiesta(): FormControl { return (this.frmContatti.get("tipoRichiesta") as FormControl)}
  get ctrlMessaggio(): FormControl { return (this.frmContatti.get("messaggio") as FormControl)}
  get ctrlAcconsento(): FormControl { return (this.frmContatti.get("acconsento") as FormControl)}

  submit(): void {
    this.frmContatti.markAllAsTouched();
    if(this.frmContatti.valid) {
      console.log(this.frmContatti.value);
    }
  }

}
