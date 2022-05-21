import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared-service/authenticate/auth.service';
import { ServicesGeneralService } from 'src/app/shared-service/services-general.service';
import { AuthentificationService } from '../../../shared-service/authenticate/authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  infoHeader?:string='Gestion des ventes';
  hideOrShow?:boolean;


  constructor(private headerInfo:ServicesGeneralService,private authServive:AuthService,private router:Router) { }

  ngOnInit(): void {


    ServicesGeneralService.headerInfo.subscribe((info)=>{

      this.infoHeader=info

    })
    ServicesGeneralService.hideAndShowSideBar.subscribe(status=>{

      this.hideOrShow=status;


    })
  }

  hideOrShowSideBar(){

    ServicesGeneralService.hideAndShowSideBar.next(!this.hideOrShow);

  }

  logout(){

    this.authServive.logout();
    this.router.navigate(['/login']);


  }

}
