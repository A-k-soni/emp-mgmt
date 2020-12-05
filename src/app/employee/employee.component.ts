import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService, Employee } from '../service/httpclient.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];
  name: string;
  password: string;
  nameU: string;
  passwordU: string;
  idd: number;
  constructor(
    private httpClientService: HttpClientService,
    private router: Router
  ) { }

  ngOnInit() {
    if (!sessionStorage.getItem('name')) {
      this.getAllEmployees();
    }
    else {
      this.router.navigate(['home']);
    }
  }

  deleteEmployee(employee: Employee): void {
    this.httpClientService.deleteEmployee(employee)
      .subscribe(data => {
        this.getAllEmployees();
      })
  };


  updateEmployee(employee: Employee): void {
    this.nameU = employee.name;
    this.passwordU = employee.password;
    this.idd = employee.id;
  }
  upEmployee(idd, passwordU, nameU) {

    this.httpClientService.updateEmp(new Employee(idd, nameU, passwordU, null)).
      subscribe(res => {
        this.getAllEmployees();
        this.nameU = "";
        this.idd = null;
        this.passwordU = "";
      })


  }

  getAllEmployees() {
    this.httpClientService.getEmployees().subscribe(
      response => { this.employees = response; }
    );
  }


  addEmployee() {

    this.httpClientService.createEmployee
      (new Employee(null, this.name, this.password, null)).subscribe(res => {
        this.getAllEmployees();
        this.name = "";
        this.password = "";

      }
      )
  }

}