import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ButtonType } from "src/app/controls/button/button.component";

@Component({
  selector: "user-login",
  templateUrl: "./user-login.component.html",
  styleUrls: ["./user-login.component.css"]
})
export class UserLoginComponent {

  ButtonType:typeof ButtonType = ButtonType;

  login(form: NgForm) {
    console.log(`The user named ${form.value.name} wants to login`)
    console.log('We have a security problem')
    console.log(form.value.password)
  }

}
