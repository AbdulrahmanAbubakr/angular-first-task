import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Product } from '../../db';
import { ProductsListService } from './services/products-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-app';
  products: Product[];
  constructor(private _productService: ProductsListService) {
    this.products = _productService.products;
  }
}
