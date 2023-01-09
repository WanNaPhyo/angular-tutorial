import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationsServiceService } from 'src/app/services/notifications.service.service';

@Component({
  selector: 'app-notifications-button',
  templateUrl: './notifications-button.component.html',
  styleUrls: ['./notifications-button.component.scss']
})
export class NotificationsButtonComponent implements OnInit{

  notificationsCount$!:Observable<number>;

  constructor(private notificationsService:NotificationsServiceService){}

  ngOnInit(): void {
    this.notificationsCount$ = this.notificationsService.count$;
  }

}
