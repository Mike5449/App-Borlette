export enum history{
  PAIEMENT='PAIEMENT',
  DEPOT='DEPOT',
  RETRAIT='RETRAIT'
}

export interface ITransactionHistory{

  id?:number;
  description?:string;
  type_tranaction?:history;
  montan?:number;
  create_by?:string;
  create_date?:Date;
  last_modified_date?:Date;
  last_modified_by?:string;
  id_utiliateur?:number;

}

export class TransactionHistory implements ITransactionHistory{
  constructor(

    public id?:number,
    public description?:string,
    public type_tranaction?:history,
    public montan?:number,
    public create_by?:string,
    public create_date?:Date,
    public last_modified_date?:Date,
    public last_modified_by?:string,
    public id_utiliateur?:number,
  ){}
}
