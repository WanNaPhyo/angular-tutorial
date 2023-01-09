import { Injectable, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {


  private count:BehaviorSubject<number> = new BehaviorSubject<number>(0);
  count$:Observable<number> = this.count.asObservable();

  constructor(@Optional() @SkipSelf() existingService:NotificationService) {
    if(existingService){
      throw Error('This service has already been provided in a app.'+'Avoide providing it again in child modules')
    }
  }

  setCount(countVal:any){
    this.count.next(countVal);
  }

}
