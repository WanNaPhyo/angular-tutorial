import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-john',
  templateUrl: './john.component.html',
  styleUrls: ['./john.component.css']
})
export class JohnComponent {

  myArray:string [] = [];

  constructor(private dataService:DataService){}

  ngOnInit(): void{
    this.myArray=this.dataService.getAllData();
  }

  addToArray(data:string){
    this.dataService.storeData(data);
  }

}
