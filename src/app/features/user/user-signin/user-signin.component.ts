import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ButtonType } from "src/app/controls/button/button.component";
import { AuthenticationService } from "../authentication.service";

@Component({
  templateUrl: "user-signin.component.html",
  styleUrls: ["user-signin.component.css"]
})
export class UserSigninComponent {

  ButtonType:typeof ButtonType = ButtonType;

  constructor(private readonly auth: AuthenticationService){
  }

  signin(form: NgForm){
    if(form.invalid){
      console.log("Invalid data");
      return;
    }
    if(form.value.password !== form.value.repeatPassword){
      console.log("Passwords don't match");
      return;
    }
    this.auth.signin(form.value.email, form.value.name, form.value.password);
  }

}
