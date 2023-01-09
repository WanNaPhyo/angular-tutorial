import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,
AfterViewInit,AfterViewChecked{

  @Input()
  data:string = ''


  constructor(){
    this.log('Constructor');
  }

  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    this.log('ngAfterViewInit');
  }

  ngAfterContentChecked(): void {
   this.log('ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    this.log('ngAfterContentInit');
  }

  ngDoCheck(): void {
    this.log('ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.log('OnChanges');
    console.log('Changes');
  }

  ngOnInit(): void {
    this.log('NgOninit');
  }

  private log(message:string){
    console.log(`${message} called.`)
  }

}
