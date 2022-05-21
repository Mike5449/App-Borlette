import { Component, OnInit } from '@angular/core';
import { ServicesGeneralService } from 'src/app/shared-service/services-general.service';

@Component({
  selector: 'app-manage-bank',
  templateUrl: './manage-bank.component.html',
  styleUrls: ['./manage-bank.component.scss']
})
export class ManageBankComponent implements OnInit {
  hideOrShowSideBar?:boolean;
  
  constructor() { }

  ngOnInit(): void {
    ServicesGeneralService.hideAndShowSideBar.subscribe(status=>{
      this.hideOrShowSideBar=status;
    })
  }

}
