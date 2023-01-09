import { Component, OnInit } from '@angular/core';
import { first, Observable } from 'rxjs';
import { NotificationsService } from '../service/notifications.service';


@Component({
  selector: 'app-notifications-manager',
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.css']
})
export class NotificationsManagerComponent implements OnInit{

  notificatonsCount$:Observable<number> = new Observable<number>();

  constructor(private notificationsService:NotificationsService){}


  ngOnInit(): void {
    this.notificatonsCount$ = this.notificationsService.count$;
  }

  getCountValue(callback:any){
    this.notificatonsCount$.pipe(first()).subscribe(callback);
  }

  addNotifications(){
    this.getCountValue((countValue:any)=>{
      this.notificationsService.setCount(++countValue);
  })
  }

  removeNotifications(){
    this.getCountValue((countValue:any)=>{
      if(countValue == 0){
        return;
      }
      this.notificationsService.setCount(--countValue);
    })
  }

  resetNotifications(){
    this.notificationsService.setCount(0);
  }

}
