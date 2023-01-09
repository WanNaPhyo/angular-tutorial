import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationsService } from '../service/notifications.service';


@Component({
  selector: 'app-notifications-button',
  templateUrl: './notifications-button.component.html',
  styleUrls: ['./notifications-button.component.css']
})
export class NotificationsButtonComponent implements OnInit{

   notificationsCount$:Observable<number> = new Observable<number>();

  constructor(private notificationsService:NotificationsService){}

  ngOnInit(): void {
    this.notificationsCount$=this.notificationsService.count$;
  }

}
