import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserCredential } from 'src/app/models/UseCredential';
import { AuthService } from '../../shared-service/authenticate/auth.service';
import { AuthentificationService } from '../../shared-service/authenticate/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  responseData:any;
  infoUser?:UserCredential;

  constructor(
   private router:Router,
   private auth:AuthService
    ) { }

  ngOnInit(): void {

  }

  onSubmit(form:NgForm){

    if(form.valid){

      const userName=form.value['user'];
      const password=form.value['pass'];

      this.infoUser=new UserCredential(userName,password);

      this.auth.login(this.infoUser).subscribe(result=>{

        this.responseData=result;
        this.auth.setToken(this.responseData.body.jwtToken)
        

      })
      this.router.navigate(['/adduser']);
    }

  }

}
