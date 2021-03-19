import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../features/user/authentication.service';
import { not } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  constructor(private readonly _router: Router,
              private readonly auth: AuthenticationService) { }

  navigateHome(event){
    this._router.navigate([""])
  }

  createAccount(event) {
    this._router.navigate(['signin'])
    console.log('User wants to create an account');
  }

  logIn(event) {
    console.log('User wants to log in');
    this._router.navigate(['login'])
  }

  logOut(event) {
    console.log('User wants to log out');
    this.auth.logout()
  }

  // True if logged in, false otherwise
  isUserLoggedIn(): boolean {
    return !!this.auth.token;
  }
}
