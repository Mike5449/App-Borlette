
export enum nomTirage{
  MATIN='MATIN',
  MIDI='MIDI'
}

export interface ITirage {

  id:number;
  nom_tirage?:nomTirage;
  premier_lot?:string;
  deuxiem_lot?:string;
  troisieme_lot?:string;
  vente?:number;
  gain?:number;
  create_date?:Date;
  create_by?:string;
  last_modified_date?:Date;
  last_modified_by?:string;

}

export class Tirage implements ITirage{

  constructor(

    public id:number,
    public nom_tirage?:nomTirage,
    public premier_lot?:string,
    public deuxiem_lot?:string,
    public troisieme_lot?:string,
    public vente?:number,
    public  gain?:number,
    public create_date?:Date,
    public create_by?:string,
    public last_modified_date?:Date,
    public last_modified_by?:string,

  ){}


}
