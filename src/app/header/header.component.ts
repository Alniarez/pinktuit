import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  constructor(private _router: Router) { }

  navigateHome(event){
    this._router.navigate([""])
  }

  createAccount(event) {
    console.log('User wants to create an account');
  }

  logIn(event) {
    console.log('User wants to log in');
    this._router.navigate(['login'])
  }

  logOut(event) {
    console.log('User wants to log out');
  }
}
