import { Component } from '@angular/core';
import { ProductsListService } from '../services/products-list.service';
import { CartListService } from '../services/cart-list.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  count = 0;
  constructor(
    private cartService: CartListService,
    private _prodService: ProductsListService
  ) {
    this.cartService.cartSubject.subscribe((value) => {
      this.count = value.length;
      console.log(value);
    });
  }
}
