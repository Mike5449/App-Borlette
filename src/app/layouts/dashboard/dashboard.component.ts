import { Component, OnInit } from '@angular/core';
import { ServicesGeneralService } from 'src/app/shared-service/services-general.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  hideOrShowSideBar?:boolean;
  constructor() { }

  ngOnInit(): void {
    ServicesGeneralService.hideAndShowSideBar.subscribe(status=>{
      this.hideOrShowSideBar=status;
    })
  }

}
