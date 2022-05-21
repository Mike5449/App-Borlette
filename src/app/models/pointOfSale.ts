
export enum statutPoint{
  OUVRIR='OUVRIR',
  FERMER='FERMER'
}

export interface IPointOfSale{

  id?:number;
  address_point?:string;
  type_point?:string;
  phone1?:number;
  phone2?:number;
  pourcentagePoint?:number;
  statut?:statutPoint;
  create_date?:Date;
  create_by?:string;
  last_modified_date?:Date;

}

export class PointOfSale implements IPointOfSale{
  constructor(

    public id?:number,
    public address_point?:string,
    public type_point?:string,
    public statut?:statutPoint,
    public phone1?:number,
    public phone2?:number,
    public pourcentagePoint?:number,
    public create_date?:Date,
    public create_by?:string,
    public last_modified_date?:Date,

  ){}
}
