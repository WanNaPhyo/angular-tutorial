import { InjectionToken } from "@angular/core";
import { User } from "../interfaces/user";

export class Greet implements User{


  firstName!: string;
  lastName!: string;

  constructor(user:User){
    this.firstName=user.firstName;
    this.lastName=user.lastName;
  }

  greet(){
   return `Hello ${this.firstName} ${this.lastName}`;
  }
}

export const GREET = new InjectionToken('Greet',{
  providedIn:'root',
  factory: () => Greet,
})
