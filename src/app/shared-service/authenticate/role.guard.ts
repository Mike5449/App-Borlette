import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private service:AuthService,private route:Router){

  }
  canActivate(){

    if(this.service.haveAccess()){
     return true;
    }else{
      this.route.navigate(['/adduser'])
     return false
    }


   }

}
