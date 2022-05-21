import{typeUser} from './enums/typeUser'
import { SexeUser } from './enums/sexeUser';
import {UserStatut} from './enums/userStatut'
import { PointOfSale } from './pointOfSale';

export interface IUser{
  id?:number;
  userName?:string;
  password?:string;
  typeUer?:typeUser;
  nom?:string;
  prenom?:string;
  sexe?:SexeUser;
  nifOuCin?:string;
  statut?:UserStatut;
  pointOfSale?:PointOfSale;

}

export class User{

  constructor(
   public userName?:string,
   public id?:number,
   public password?:string,
   public typeUer?:typeUser,
   public nom?:string,
   public prenom?:string,
   public sexe?:SexeUser,
   public nifOuCin?:string,
   public statut?:UserStatut,
   public pointOfSale?:PointOfSale,
  ){}

}
