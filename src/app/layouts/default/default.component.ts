import { Component, OnInit } from '@angular/core';
import { ServicesGeneralService } from 'src/app/shared-service/services-general.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  hideOrShowSideBar?:boolean;

  constructor() { }

  ngOnInit(): void {
    ServicesGeneralService.hideAndShowSideBar.subscribe(status=>{
      this.hideOrShowSideBar=status;
    })
  }

}
