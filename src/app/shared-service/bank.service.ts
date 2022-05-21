import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPointOfSale } from '../models/pointOfSale';
import { ApiCongigurationService } from './api-congiguration.service';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(
    private  http: HttpClient,private conf:ApiCongigurationService
  ) { }

  setPointOfSale(newPointOsale: IPointOfSale) {
    return this.http.post<IPointOfSale>(this.conf.serverAPI.authentificationEndPoint, newPointOsale, {observe: 'response'});
  }
}
