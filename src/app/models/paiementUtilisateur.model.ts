

export interface IPaiementUtilisateur {

  id?:number;
  montant?:number;
  balance?:number;
  reduction_horaire?:string;
  payer_le?:Date;
  payer_par?:string;
  date_fait?:Date;

}

export class PaiementUtilisateur implements IPaiementUtilisateur{
  constructor(
   public id?:number,
   public montant?:number,
   public balance?:number,
   public reduction_horaire?:string,
   public payer_le?:Date,
   public payer_par?:string,
   public date_fait?:Date,
  ){}
}
