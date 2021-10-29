import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  login = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required)
  })

  constructor(
    private auth: AuthService,
    private ar: Router) { }

  ngOnInit(): void {
  }

  accedi(): void {
    this.auth.login(this.login.value).subscribe({
      next: response => {
        if(response.esito) {
          localStorage.setItem("token", response.token);
          localStorage.setItem("username", response.username);
          localStorage.setItem("nome", response.nome);
          localStorage.setItem("cognome", response.cognome);
          this.ar.navigateByUrl("/dashboard")
        }
      },
      error: err => {
        console.error(err);
      }
    });
  }

}
