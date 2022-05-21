import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesGeneralService } from 'src/app/shared-service/services-general.service';

@Component({
  selector: 'app-list-bank',
  templateUrl: './list-bank.component.html',
  styleUrls: ['./list-bank.component.scss']
})
export class ListBankComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  goToAdd(route:string,info:string){
    ServicesGeneralService.headerInfo.next(info);
    this.router.navigate([`/${route}`]);
  }

}
