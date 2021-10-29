import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signup = new FormGroup({
    nome: new FormControl('', Validators.required),
    cognome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    accountType: new FormControl('user', Validators.required)
  })

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  registra(): void {
   this.auth.register(this.signup.value);
  }

  

}
