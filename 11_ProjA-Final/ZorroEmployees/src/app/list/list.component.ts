import { EmployeesService } from './../services/employees.service';
import { Employee, WSResponse } from './../interfaces/reqres.interface';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list?: Employee[];
  loading: boolean = false;
  currentPage: number = 1;
  totalItem: number = 0;
  limit = new FormControl(4);
  limitOptions = [2, 3, 4, 5, 6];
  

  constructor(
    private eService: EmployeesService
  ) { }

  ngOnInit(): void {
    this.getUsers();
    this.limit.valueChanges.subscribe(
      (v) => {
        this.currentPage = 1;
        this.getUsers();
      }
    )
  }

  getUsers(): void {
    this.loading = true;
    this.eService.getEmployees(this.currentPage, this.limit.value).subscribe(
      (r: WSResponse) => { 
        this.list = r.data
        this.totalItem = r.total;
        this.loading = false
      }
    )
  }

  changePage(p: number): void {
    this.currentPage = p;
    this.getUsers();
  }

  // da implementare meglio a seconda della visualizzazione per_page
  getColsMd(): number {
    return this.list!.length < 4 ? 12 : 6;
  }

}
