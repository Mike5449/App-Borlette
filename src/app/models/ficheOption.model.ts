
export interface IFicheOption{

  id?:number;
  type_option?:string;
  choix?:string;
  montant?:number;
  statut?:string;
  create_date?:Date;
  create_by?:string;

}

export class FicheOption implements IFicheOption{
  constructor (
   public id?:number,
   public type_option?:string,
   public choix?:string,
   public montant?:number,
   public statut?:string,
   public create_date?:Date,
   public create_by?:string,
  ) {

  }

}

