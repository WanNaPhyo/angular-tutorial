import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface ReadTimeConfig{
  wordsPerMinute:number;
}

@Directive({
  selector: '[appReadTime]'
})
export class ReadTimeDirective implements OnInit{

  @Input()
  configuration:ReadTimeConfig = {
    wordsPerMinute:200
  }

  @Output()
  readTimeCalculated = new EventEmitter<string>();


  constructor(private el:ElementRef) { }


  ngOnInit(): void {
    const text = this.el.nativeElement.textContent;
    const time = this.calculateReadTime(text);
    const timeStr = this.createTimeString(time);
    return this.readTimeCalculated.emit(timeStr);
  }

  calculateReadTime(text:string){
    const wordsCount = text.split(/\s+/g).length;
    const minutes = wordsCount / this.configuration.wordsPerMinute;
    return Math.ceil(minutes);
  }

  createTimeString(timeMinutes:number){
    if(timeMinutes === 1){
      return '1 minutes';
    }
    else if(timeMinutes < 1){
      return '1 < minutes';
    }
    else {
      return `${timeMinutes} minutes`;
    }
  }

}
