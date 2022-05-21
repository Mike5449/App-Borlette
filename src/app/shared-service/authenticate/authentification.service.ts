import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(
    // private http:HttpClient
    ) { }

  // processLogin(user:any){
  //   this.http.post('apiUrl',user)

  // }
  isLogin(){
    return localStorage.getItem('token')!=null;
  }
  getToken(){
    return localStorage.getItem('token')||'';
  }

  haveAccess(){
   let loginToken=localStorage.getItem('token')||'';
   let _extrectedtoken=loginToken.split('.')[1];
   let _atobdata=atob(_extrectedtoken);
   let _finaldata=JSON.parse(_atobdata);
   if(_finaldata.role=='ADMIN'){
     return true;
   }else{
     alert('vous n/avez pas access')
     return false
   }


  }
}
