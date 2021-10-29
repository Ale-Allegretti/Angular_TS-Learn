import { HttpClient} from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  login = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required)
  })

  constructor(private http: HttpClient) {

  }

  doLogin(): void {
    this.http.post<any>(``, this.login).subscribe({
      next: response => {
        console.log(response);
        localStorage.setItem("token", response.token)

        console.log("Il token contiene", jwt_decode(response.token));
        
      },
      error: err => {
        console.error(err);
      }
    });
  }

  getUsers(): void {
    /* La scrittura seguente diventa inutile perchè il token viene gestito dal interceptor
    const token = localStorage.getItem("token") || "";

    const headers = new HttpHeaders().set('x-access-token', token);

    this.http.get('', { headers }).subscribe({
      next: response => {
        console.log(response);
      },
      error: err => {
        console.error(err);
      }
    })
    */
    this.http.get('').subscribe({
      next: response => {
        console.log(response);
      },
      error: err => {
        console.error(err);
      }
    })

  }
  
}
