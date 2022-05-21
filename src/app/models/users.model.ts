import { typeUser } from './enums/typeUser';
import { roleUser } from './enums/roleUSer';

export enum enumSexe{

  MASCULIN='MASCULIN',
  FEMININ='FEMININ'

}
export interface IUsers {
  
  id?:bigint;
  user_name?:String;
  type_user?:typeUser;
  role_user?:roleUser;
  nom?:string;
  prenom?:string;
  sexe?:enumSexe;
  nif_cin?:bigint;
  statut?:string;
  create_date?:Date;
  last_modified_date?:Date;
  last_modified_by?:string;
  id_point_vente?:number;

}

export class users implements IUsers{

  constructor(

   public id?:bigint,
   public user_name?:String,
   public type_user?:typeUser,
   public role_user?:roleUser,
   public nom?:string,
   public prenom?:string,
   public sexe?:enumSexe,
   public nif_cin?:bigint,
   public statut?:string,
   public create_date?:Date,
   public last_modified_date?:Date,
   public last_modified_by?:string,
   public id_point_vente?:number,

  ){}

}
