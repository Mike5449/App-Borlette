import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private inject:Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let authservice=this.inject.get(AuthentificationService);

    let jwtToken=req.clone({
      setHeaders:{
        Authorization:'bearer'+authservice.getToken()
      }

    });
    return next.handle(jwtToken)
  }
}
