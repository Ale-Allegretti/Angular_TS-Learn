import { Router } from '@angular/router';
import { Persona } from './../persona/persona.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  nuovoUtente: Persona = {
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    avatar: ''
  };
  mansioneUtente: string = "";
  getImg: string = "";
  setImgValid = new RegExp(/(?!.+\/)(.*\.jpg$)/gi); 
  nameSurnameValid = new RegExp(/([a-zA-Z]+)/);
  emailValid = new RegExp(/.+\@.+\..+/);

  utenteAggiunto: object = { };
  

  // in POST il server ammette solo un unico nome e una masione (job)
  // immagine, email e ID sono superflui

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  iscrivi(): void { 
    this.utenteAggiunto =  {
      name: `${this.nuovoUtente?.first_name} ${this.nuovoUtente?.last_name}`,
      job: this.mansioneUtente
    }
    this.http.post(`${environment.endPoint}/users`, this.utenteAggiunto)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(["/"],
        {
          state: this.utenteAggiunto
        })
      }, err => {
        console.log(err);
      }
    );  
  }


}
