
export interface IUserBanque{
  id?:number;
  type_user_banque?:string;
  montant_vendu?:number;
  fiche_annule?:number;
  fiche_paye?:number;
  montant_net?:number;
  balance?:number;
  montant_a_payer?:number;
  create_date?:Date;
  create_by?:string;
  last_modified_date?:Date;

}

export class UserBanque implements IUserBanque{
  constructor(

   public id?:number,
   public type_user_banque?:string,
   public montant_vendu?:number,
   public fiche_annule?:number,
   public fiche_paye?:number,
   public montant_net?:number,
   public balance?:number,
   public montant_a_payer?:number,
   public create_date?:Date,
   public create_by?:string,
   public last_modified_date?:Date,
  ){}
}
