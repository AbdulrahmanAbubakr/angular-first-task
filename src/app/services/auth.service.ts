import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(true);
  private userData = new BehaviorSubject<any>(null);
  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
  get userObservableData(): Observable<any> {
    return this.userData.asObservable();
  }
  loginSuccess(user: any): void {
    this.loggedIn.next(true);
    this.userData.next(user);
  }
  logOut(): void {
    this.loggedIn.next(false);
    this.userData.next(null);
  }
}
