import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUserCredential } from 'src/app/models/UseCredential';
import { ApiCongigurationService } from '../api-congiguration.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private  http: HttpClient,private conf:ApiCongigurationService) { }

  login(userCredential: IUserCredential) {
    return this.http.post<IUserCredential>(this.conf.serverAPI.authentificationEndPoint, userCredential, {observe: 'response'});
  }

  getToken(){
    return localStorage.getItem('access_token') || sessionStorage.getItem('access_token');
  }

  setToken(paylod?: any) {

    localStorage.setItem('access_token', paylod);

    // if (paylod.rememberMe) {
    //   localStorage.setItem('access_token', paylod.access_token);
    // } else {
    //   sessionStorage.setItem('access_token', paylod.access_token);
    // }
  }

  // register(userAccount: IUserAccount) {
  //   return this.http.post<any>(this.conf.serverAPI.registrationEndPoint, userAccount, {observe: 'response'});
  // }

  logout(): Observable<boolean> {
    localStorage.removeItem('access_token');
    sessionStorage.removeItem('access_token');
    return of(true);
  }

  haveAccess(){

   let loginToken=localStorage.getItem('access_token')||'';
   let _extrectedtoken=loginToken.split('.')[1];
   let _atobdata=atob(_extrectedtoken);
   let _finaldata=JSON.parse(_atobdata);

   if(_finaldata.role==='ADMIN'){
    //alert('Vous etes administrateur')

     return true;
   }else{
     alert('vous n/avez pas access')
     return false
   }


  }
}
