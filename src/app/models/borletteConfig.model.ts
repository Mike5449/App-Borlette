export interface IBorletteConf{
  id?:number;
  premier_lot?:number;
  deuxiem_lot?:number;
  troisieme_lot?:number;
  montant_minimum?:number;
  montant_maimum?:number;
  create_date?:Date;
  create_by?:string;
}


export class BorletteConfig implements IBorletteConf{
  constructor(
   public id?:number,
   public premier_lot?:number,
   public deuxiem_lot?:number,
   public troisieme_lot?:number,
   public montant_minimum?:number,
   public montant_maimum?:number,
   public create_date?:Date,
   public create_by?:string,
  ){}
}
