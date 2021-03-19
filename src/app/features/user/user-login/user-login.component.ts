import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ButtonType } from 'src/app/controls/button/button.component';
import { AuthenticationService } from '../authentication.service';

@Component({
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {

  constructor(private readonly _authService: AuthenticationService) {}

  ButtonType: typeof ButtonType = ButtonType;

  login(form: NgForm) {
      this._authService.login(form.value.email, form.value.password);
  }
}
