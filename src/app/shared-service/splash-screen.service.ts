import { Injectable } from '@angular/core';
import { Subscription,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SplashScreenService {

  subject = new Subject();

  subcribe(onNext:any):Subscription{
    return this.subject.subscribe(onNext)

  }

  stop(){
    this.subject.next(false);
  }


  constructor() { }
}
