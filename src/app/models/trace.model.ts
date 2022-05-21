export interface ITrace{

  id?:number;
  typeTrace?:string;
  description?:string;
  id_utilisateur?:number;
  created_date?:Date;
  last_modified_date?:Date;
}

export class Trace implements ITrace{
  constructor(
    public id?:number,
   public typeTrace?:string,
   public description?:string,
   public id_utilisateur?:number,
   public created_date?:Date,
   public last_modified_date?:Date, 
  ){

  }
}
