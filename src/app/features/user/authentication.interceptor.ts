import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private readonly auth: AuthenticationService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Add the token to the request
    const token = this.auth.token;

    const authRequest = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });

    // Move on with whatever the request is doing
    return next.handle(authRequest)
  }

}
