import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { users } from '../../models/users.model';
import { UserService } from 'src/app/shared-service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  precedOrNext?:string;
  user?:User

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.precedOrNext='precedent'
  }

  isPrecedOrNext(choix:string){

    this.precedOrNext=choix;

  }

  getValueInForm(form:NgForm){

    this.user=new User();

    if(form.valid){

      this.user.nom=form.value['nom']
      this.user.prenom=form.value['prenom']
      this.user.sexe=form.value['sexe']
      this.user.nifOuCin=form.value['nif']
      this.user.typeUer=form.value['type']
      this.user.statut=form.value['statut']
      this.user.userName=form.value['username']
      this.user.password=form.value['password']
      this.user.pointOfSale=form.value['point']

    }
    return this.user;

  }

  onSubmit(form:NgForm){

    const userCreat=this.getValueInForm(form);
    const password=form.value['password'];
    const confPassword=form.value['confpassword'];

    password==confPassword?
      this.userService.setUser(userCreat).subscribe((data)=>{
      //console.log(data);
    })
    

    :alert('mot pa non confirmer')

  }

}
