import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(

  ): void {
    if (!sessionStorage.getItem('name')) {
      this.router.navigate(['employees']);
    } else {
      this.router.navigate(['home']);

    }
  }

  logout() {
    sessionStorage.removeItem('name');
    this.router.navigate(['employees']);
  }

}
