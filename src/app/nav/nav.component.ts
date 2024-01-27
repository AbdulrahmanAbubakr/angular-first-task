import { Component, OnInit } from '@angular/core';
import { ProductsListService } from '../services/products-list.service';
import { CartListService } from '../services/cart-list.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent implements OnInit {
  count = 0;
  isLoggedIn: boolean = false;
  constructor(
    private cartService: CartListService,
    private _prodService: ProductsListService,
    private authSevice: AuthService,
    private router: Router
  ) {
    this.cartService.cartSubject.subscribe((value) => {
      this.count = value.length;
      console.log(value);
    });
  }
  ngOnInit(): void {
    this.authSevice.isLoggedIn.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
  }
  logOut() {
    this.authSevice.logOut();
    this.router.navigate([]);
  }
}
