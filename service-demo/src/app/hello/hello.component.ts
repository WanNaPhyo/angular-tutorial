import { Component } from '@angular/core';
import { LogService } from '../service/log.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {


  constructor(private logService:LogService){}

  showInfo(data:any){
    this.logService.log(data);
  }

}
