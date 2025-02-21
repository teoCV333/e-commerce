import { inject, Injectable, signal } from '@angular/core';
import { CartItem } from '../interfaces/cart';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  productsService = inject(ProductsService);

  cart = signal<CartItem[]>([
    {
      productId: '1',
      quantity: 2,
    },
    {
      productId: '2',
      quantity: 1,
    },
  ]);

  constructor() {}

  getProduct(productId: string) {
    return this.productsService.products.filter(
      (product) => product.id === productId
    )[0];
  }
}
