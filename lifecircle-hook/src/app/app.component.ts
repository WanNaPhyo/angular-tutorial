import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cockpit:string = '';


  Addon(val:string){
    this.cockpit = val;
  }


}
