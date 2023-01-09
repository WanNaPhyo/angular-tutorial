import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Greet } from './classes/greet';
import { UserServiceService } from './services/user.service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  user!:Greet;

  ngOnInit(): void {
    this.user = this.userService.getUser();
  }

  constructor(private userService:UserServiceService){}

}
