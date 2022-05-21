import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './authenticate/auth.service';
import { AuthentificationService } from './authenticate/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuardGuard implements CanActivate {

  constructor(
    private service:AuthService,
    private route:Router
  ){}

  canActivate(){

    if(this.service.getToken()){
      return true;
    }else{
      this.route.navigate(['/login'])
      return false
    }

  }


}
