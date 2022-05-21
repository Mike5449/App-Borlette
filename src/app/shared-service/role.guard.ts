import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from './authenticate/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor (private service:AuthentificationService,private route:Router) {


  }

  canActivate(){

   if(this.service.haveAccess()){
    return true;
   }else{
     this.route.navigate([''])
    return false
   }


  }

}
