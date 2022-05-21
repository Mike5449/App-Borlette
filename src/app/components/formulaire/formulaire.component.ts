import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit  {

  defaultOnOff='eteint'

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){

    const name=form.value['name'];
    const status=form.value['status']

    console.log(form);


  }
}
