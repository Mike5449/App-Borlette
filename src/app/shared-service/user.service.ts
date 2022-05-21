import { AddUserComponent } from './../components/add-user/add-user.component';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/user.model';
import { ApiCongigurationService } from './api-congiguration.service';
import { users } from '../models/users.model';
import { AuthService } from './authenticate/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private configuration:ApiCongigurationService,private  http: HttpClient,private authService:AuthService) { }
  // createAuthorizationHeader(headers: Headers) {
  //   headers.append('Authorization', 'Basic ' +
  //     btoa(this.authService.getToken()));
  // }
  // get(url) {
  //   let headers = new Headers();
  //   this.createAuthorizationHeader(headers);
  //   return this.http.get(url, {
  //     headers: headers
  //   });
  // }
  setUser(newUser: IUser): Observable<HttpResponse<IUser>> {

    return this.http.post<IUser>(`${this.configuration.serverAPI.userSaveEndPoint}`, newUser, {observe: 'response'});
  }


  getUser(): Observable<HttpResponse<IUser>> {
    return this.http.get<IUser>(`${this.configuration.serverAPI.userAllEndPoint}`, {observe: 'response'});
  }
}
