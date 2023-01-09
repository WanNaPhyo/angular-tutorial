import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationService} from 'src/app/services/notification-service.service';

@Component({
  selector: 'app-notification-button',
  templateUrl: './notification-button.component.html',
  styleUrls: ['./notification-button.component.scss']
})

export class NotificationButtonComponent implements OnInit{


  notificationCount$!:Observable<number>;

  constructor(private notificationService:NotificationService){}

  ngOnInit(): void {
   this.notificationCount$ = this.notificationService.count$;
  }

}
