import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  // users: string[] = ['sandy', 'akshay', 'pranita', 'supriya'];

  // getFristUser(){
  //   return this.users[0];
  // }

  private user = new BehaviorSubject<string>('Thorat');
  cast = this.user.asObservable();

  editUser(newUser){
    this.user.next(newUser);
  }

}
