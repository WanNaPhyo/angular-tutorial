import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fruits:string [] = []

  addfruit(fruit:string){
    this.fruits.push(fruit);
  }

}
