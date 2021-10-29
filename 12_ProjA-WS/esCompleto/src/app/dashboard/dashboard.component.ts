import { UserRequest } from './../models/user-request.model';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userRequest?: UserRequest[];

  constructor(
    private api: AuthService
  ) { }

  ngOnInit(): void {
    this.api.getUser().subscribe(
      (value) => {
        this.userRequest = value;

      }
    )
  }

  

}
