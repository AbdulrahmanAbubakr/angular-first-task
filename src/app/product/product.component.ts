import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../db';
import { ProductsListService } from '../services/products-list.service';
import { CartListService } from '../services/cart-list.service';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../datatypes/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  products: IProduct[] = [];

  constructor(
    private _cartServ: CartListService,
    // private prodServ: ProductsListService,
    private ProdApiService: ApiService,
    private route: ActivatedRoute
  ) {
    // this.products = this.prodServ.products;

    this.ProdApiService.getAllProducts().subscribe({
      next: (res) => {
        console.log(res);
        this.products = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  add(item: IProduct) {
    this._cartServ.addToCart(item._id);
  }
}
