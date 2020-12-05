import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Employee {
  constructor(
    public id: number,
    public name: string,
    public password: string,
    public salary: string,
  ) { }


}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getEmployees() {
    // console.log("test call");
    return this.httpClient.get<Employee[]>('http://localhost:8080/user_list');
  }


  deleteEmployee(employee) {
    return this.httpClient.delete<Employee>("http://localhost:8080/user_del" + "/" + employee.id);
  }

  createEmployee(employee) {
    return this.httpClient.post<Employee>("http://localhost:8080/user_add", employee);
  }

  updateEmp(employee) {

    return this.httpClient.post<Employee>("http://localhost:8080/user_update", employee);

  }

  loginemp(employee) {

    return this.httpClient.post<Employee[]>("http://localhost:8080/user_login", employee);

  }

}

