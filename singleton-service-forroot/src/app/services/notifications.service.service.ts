import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable()
export class NotificationsServiceService {

  private count:BehaviorSubject<number> = new BehaviorSubject<number>(0);
  count$:Observable<number> = this.count.asObservable();

  constructor() { }

  setCount(countVal:number){
    this.count.next(countVal);
  }
}
