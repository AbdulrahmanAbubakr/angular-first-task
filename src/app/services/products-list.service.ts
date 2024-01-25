import { Injectable } from '@angular/core';
import { Product } from '../../../db';

@Injectable({
  providedIn: 'root',
})
export class ProductsListService {
  addToCart() {
    throw new Error('Method not implemented.');
  }
  constructor() {}
  products: Product[] = [
    new Product(
      '1',
      'Lenovo think pad X230',
      100000,
      'https://picsum.photos/200',
      20
    ),
    new Product('2', 'Dell', 2002020, 'https://picsum.photos/201', 5),
    new Product('3', 'Lenovo Tab', 100888, 'https://picsum.photos/202', 1),
    new Product(
      '1',
      'Lenovo think pad X230',
      100000,
      'https://picsum.photos/203',
      30
    ),
    new Product(
      '1',
      'Lenovo think pad X230',
      100000,
      'https://picsum.photos/204',
      0
    ),
    new Product(
      '1',
      'Lenovo think pad X230',
      10000,
      'https://picsum.photos/205',
      0
    ),
  ];
}
