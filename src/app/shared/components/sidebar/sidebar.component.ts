import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesGeneralService } from 'src/app/shared-service/services-general.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isSelect:string='home';


  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  changeLayout(route:string,info:string){

    ServicesGeneralService.headerInfo.next(info);
    this.isSelect=route;
    this.router.navigate([`/${route}`]);


  }

}
