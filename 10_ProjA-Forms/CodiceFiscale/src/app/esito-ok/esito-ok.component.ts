import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-esito-ok',
  templateUrl: './esito-ok.component.html',
  styleUrls: ['./esito-ok.component.css']
})
export class EsitoOkComponent implements OnInit {

  codice?: string;


  constructor(
    private router: Router
  ) {
    if(this.router.getCurrentNavigation()) {
      if(!this.router.getCurrentNavigation()!.extras.state) {
        this.router.navigate(['/']);
      }
      this.codice = this.router.getCurrentNavigation()!.extras.state!.codice;
    }
   }

  ngOnInit(): void {
  }

}
