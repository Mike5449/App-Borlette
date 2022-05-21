import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCongigurationService {

  constructor() { }

  public serverAPI:any={

    authentificationEndPoint:'http://localhost:8080/authenticate',
    userSaveEndPoint:'http://localhost:8080/user/save',
    userAllEndPoint:'http://localhost:8080/user/all',
    // authentificationEndPoint:'http://localhost:8080/authenticate',
    // authentificationEndPoint:'http://localhost:8080/authenticate',



  }
}
