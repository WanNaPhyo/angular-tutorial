import { Component, Input, OnChanges, OnInit, Optional, SimpleChanges } from '@angular/core';
import { Logger } from 'src/app/interfaces/logger';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-v-logs',
  templateUrl: './v-logs.component.html',
  styleUrls: ['./v-logs.component.scss']
})

export class VLogsComponent implements OnInit,OnChanges{

  @Input()
  vName:any;

  logs:string[] = [];

  logger!:Logger;

  constructor(@Optional() private loggerService:LoggerService){
    if(!this.loggerService){
      this.logger=console;
    }
    else{
      this.logger=this.loggerService;
    }
  }

  ngOnInit(): void {
   
  }

  ngOnChanges(changes:SimpleChanges):void{
    const currentValue = changes['vName'].currentValue;
    let message;
    if(changes['vName'].isFirstChange()){
      message = `initial version is ${currentValue.trim()}`;
    }
    else{
      message = `version change to ${currentValue.trim()}`;
      this.logger.log(message);
    }
    this.logs.push(message);
  }

}
