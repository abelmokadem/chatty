import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Subject, BehaviorSubject } from 'rxjs';
import { Http } from '@angular/http';


@Injectable()
export class UserService {

  public currentUser: Subject<User> = new BehaviorSubject<User>(null);

  constructor(private http:Http) {

  }

  login(username: string, password: string):void {
    this.http.post('/login', {
      username: username,
      password: password
    }).subscribe((data) => {
      this.currentUser.next(data.user);
    });
  }

}
