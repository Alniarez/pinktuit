import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { MessageService } from "../message/message.service";

@Injectable({providedIn: "root"})
export class AuthenticationService {

  private _token: string;
  private _myEmail: string;
  private _myId: string;

  get token(){
    return this._token;
  }

  get myEmail(){
    return this._myEmail;
  }

  get myId(){
    return this._myId;
  }

  constructor(private readonly _httpClient: HttpClient,
              private readonly _router: Router,
              private readonly _messageService: MessageService){
  }

  signin(email: string, username: string, password: string){
    this._httpClient.post('http://localhost:3000/api/user/signin', {email: email, username: username, password: password})
      .subscribe(result => {
        this._messageService.showMessage("Created user succesfully")
        // Redirect to login
        this._router.navigate(['login'])
      },
      errorData => this._messageService.showError(errorData.error.message))
  }

  login(email: string, password: string) {
    this._httpClient.post<{ token: string, myId: string }>('http://localhost:3000/api/user/login', {
        email: email,
        password: password,
      })
      .subscribe((responseData) => {
          this._token = responseData.token;
          this._myEmail = email;
          this._myId = responseData.myId;

          this._messageService.showMessage("Logged in succesfully")

          // Redirect to home
          this._router.navigate([''])
        },(errorData) => {
          this._messageService.showError(errorData.error.message)
         }
      );
  }

  logout() {
    this._token = undefined;
    this._myEmail = undefined;
    this._myId = undefined;

    this._messageService.showMessage("Logged out succesfully")
  }

}
