export interface ICreditSolde{
  id?:number;
  montant?:number;
  id_utilisateur?:number;
  date_fait?:Date;
  fait_par?:string

}

export class CreditSolde implements ICreditSolde{
  constructor(
   public id?:number,
   public montant?:number,
   public id_utilisateur?:number,
   public date_fait?:Date,
   public fait_par?:string
  ){}
}
