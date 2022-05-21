export enum statusFiche{
  NEW='NEW',
  LOSE='LOSE',
  WIN='WIN',
  CLOSE='CLOSE'
}

export interface IFiche{
  id?:number;
  montant_joue?:number;
  cote?:number;
  gain?:number;
  statut?:statusFiche;
  annule_par?:string;
  paye_par?:string;
  paye_le?:Date;
  paye_id?:number;
  paye?:boolean;
  id_utilisateur?:number;
  created_date?:Date;
  created_by?:string;
  tirage_id?:number;

}

export class Fiche implements IFiche
{
  constructor(

   public id?:number,
   public montant_joue?:number,
   public cote?:number,
   public gain?:number,
   public statut?:statusFiche,
   public annule_par?:string,
   public paye_par?:string,
   public paye_le?:Date,
   public paye_id?:number,
   public paye?:boolean,
   public id_utilisateur?:number,
   public created_date?:Date,
   public created_by?:string,
   public tirage_id?:number,

  ){}
}
