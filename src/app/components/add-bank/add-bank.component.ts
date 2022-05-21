import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PointOfSale, statutPoint } from '../../models/pointOfSale';

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html',
  styleUrls: ['./add-bank.component.scss']
})
export class AddBankComponent implements OnInit {

  pointOfSale?:PointOfSale;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){


    if(form.valid){

      let{adress_point,type_point,phone1,phone2,pourcentagePoint,statut}=form.value;

      // this.pointOfSale=new(id,adress_point,type_point,phone1,phone2,pourcentagePoint,statut);

      console.log(this.pointOfSale);

    }

    // const name=form.value['name'];
    // const status=form.value['status']




  }

}
