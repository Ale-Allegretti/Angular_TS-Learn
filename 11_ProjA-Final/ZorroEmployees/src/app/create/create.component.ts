import { EmployeesService } from './../services/employees.service';
import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  frm = new FormGroup({
    nome: new FormControl(""),
    cognome: new FormControl(""),
    job: new FormControl("Simple"),
    recapiti: new FormArray([])
  })

  constructor(
    private fb: FormBuilder,
    private eService: EmployeesService,
    private notification: NzNotificationService
  ) { }

  ngOnInit(): void {
  }

  addRecapito(): void {
    let nuovoRecapito = this.fb.group({
      tipo: (""),
      numero: ("")
    })
    this.recapiti.push(nuovoRecapito);
  }

  removeRecapito(num: number): void {
    this.recapiti.removeAt(num);
  }

  save(): void {
    this.eService.createEmployee({
      name: this.frm.get("nome")!.value,
      job: this.frm.get("job")!.value
    })
    .subscribe((r) => {
      this.notification.create(
        "success",
        'Conferma',
        'Employee creato'
      )
      console.log(r);
    })
  }

  get recapiti(): FormArray { return this.frm.get("recapiti") as FormArray };
  get recapitiControl(): FormGroup[] { return this.recapiti.controls as FormGroup[]}


}