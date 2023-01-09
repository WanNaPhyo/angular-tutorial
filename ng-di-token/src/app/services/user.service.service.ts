import { Inject, Injectable } from '@angular/core';
import { Greet, GREET } from '../classes/greet';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  users=[
    {
      firstName : 'John',
      lastName : 'Doe'
    },
    {
      firstName : 'Thomas',
      lastName : 'Hardy'
    },
    {
      firstName : 'Thaw',
      lastName : 'Thaw'
    },
    {
      firstName : 'Aung',
      lastName : 'Aung'
    }

  ]

  constructor(@Inject(GREET) public greet:typeof Greet) { }

  getUser(){
    const user = this.users[Math.floor(Math.random() * this.users.length)];
    return new this.greet(user);
  }
}
