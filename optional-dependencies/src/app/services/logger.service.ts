import { Injectable } from '@angular/core';
import { Logger } from '../interfaces/logger';

@Injectable()
export class LoggerService implements Logger{

  constructor() { }


  info(val:any):void{
    this.saveLog(val,'info');
  }

  error(val:any):void{
    this.saveLog(val,'error');
  }

  warn(val:any):void{
    this.saveLog(val,'warn');
  }

  log(val:any):void{
    this.saveLog(val,'log');
  }


  saveLog(val:any,type:any){
    const key=`log_${type}`;
    const logs = JSON.parse(localStorage.getItem(key) || '[]');
    logs.push(val);
    localStorage.setItem(key,JSON.stringify(logs));
  }

}
