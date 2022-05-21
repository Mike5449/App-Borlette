export interface IPaiementBanq{
  id?:number;
  montant?:number;
  balance?:number;
  date_fait?:Date;
  fait_par?:string;
}

export class PaiementBanq implements IPaiementBanq{
  constructor(
   public id?:number,
   public montant?:number,
   public balance?:number,
   public date_fait?:Date,
   public fait_par?:string,
  ){

  }
}
