import { Component } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  createAccount(event) {
    console.log('User wants to create an account');
  }

  logIn(event) {
    console.log('User wants to log in');
  }

  logOut(event) {
    console.log('User wants to log out');
  }
}
