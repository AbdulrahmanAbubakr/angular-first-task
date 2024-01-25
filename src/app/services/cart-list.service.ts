import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartListService {
  // list: any[] = [];
  cartSubject: BehaviorSubject<any>;
  getFromStorage(): any[] {
    let str = localStorage.getItem('cart');
    if (str == null || str == '') {
      return [];
    } else {
      return JSON.parse(str) as any[];
    }
  }
  setInStorage(data: any[]) {
    localStorage.setItem('cart', JSON.stringify(data));
  }
  addToCart(id: any) {
    // this.list.push(id);
    let oldData = this.cartSubject.value;
    oldData.push(id);
    this.setInStorage(oldData);
    this.cartSubject.next(oldData);
  }
  constructor() {
    // Need to modify
    this.cartSubject = new BehaviorSubject<any[]>(this.getFromStorage());
  }
}
