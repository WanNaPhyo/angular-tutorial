import { Component } from '@angular/core';

export enum Fruit{
  Apple = 'Apple',
  Orange = 'Orange',
  Pineapple = 'Pineapple',
  Mango = 'Mango',
  Banana = 'Banana'
}

interface IfFuit{
  id:number,
  name:Fruit
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mult-structure-directive';
  selectedFruit !: Fruit;
  fruits : string [] = Object.values(Fruit);
  MAX_BUSKET_LENGTH = 10;
  bucket : IfFuit[] = [];



  addSelectedFruitToBusket(){
    this.bucket.push({
      id:Date.now(),
      name:this.selectedFruit
    })
  }

  deletedFromBusket(item:IfFuit){
    this.bucket =
    this.bucket.filter(fruit => fruit.id != item.id)
  }

}
