import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { ServicesGeneralService } from '../../shared-service/services-general.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faCoffee = faCoffee;

  model?: NgbDateStruct;
  
  constructor(private modalService:ServicesGeneralService) { }

  ngOnInit(): void {
  }

  openModal(id: string) {
    this.modalService.open(id);
}

closeModal(id: string) {
    this.modalService.close(id);
}

  onSubmit(form:NgForm){

    const name=form.value['name'];
    const status=form.value['status']

    console.log(name);


  }
}
