import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'read-time-directive';


  readTime:string = '';

  onReadTimeCalculated(readTimeStr:string){
    this.readTime = readTimeStr;
  }

}
