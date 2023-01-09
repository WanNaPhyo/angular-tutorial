import { Component, OnInit } from '@angular/core';
import { first, Observable } from 'rxjs';
import { NotificationsServiceService } from 'src/app/services/notifications.service.service';

@Component({
  selector: 'app-notifications-manager',
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.scss']
})
export class NotificationsManagerComponent implements OnInit{

  notificationsCount$!:Observable<number>;

  constructor(private notificationsService:NotificationsServiceService){}


  ngOnInit(): void {
    this.notificationsCount$ = this.notificationsService.count$;
  }

  getCountValue(callback:any){
    this.notificationsCount$.pipe(first()).subscribe(callback)
  }

  addNotification(){
    this.getCountValue((countVal:number)=>{
      this.notificationsService.setCount(++countVal);
    })
  }

  removeNotification(){
    this.getCountValue((countVal:number)=>{
      if(countVal === 0){
        return;
      }
      this.notificationsService.setCount(--countVal);
    })
  }

  resetCount(){
    this.notificationsService.setCount(0);
  }

}
