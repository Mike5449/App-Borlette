export interface IPaiementUtilConfig{
  id?:string;
  typePaiment?:string;
  montant?:number;
  date_fait?:Date;
  fait_par?:string;
  id_utilisateur?:string;
}

export class PaiementUtilConfig implements IPaiementUtilConfig{

  constructor(
   public id?:string,
   public typePaiment?:string,
   public montant?:number,
   public date_fait?:Date,
   public fait_par?:string,
   public id_utilisateur?:string,
  ){

  }
}
