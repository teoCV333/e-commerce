import { inject, Injectable, signal } from '@angular/core';
import { CartItem } from '../interfaces/cart';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  productsService = inject(ProductsService);

  cart = signal<CartItem[]>([
    /*     {
      productId: '1',
      quantity: 2,
    },
    {
      productId: '2',
      quantity: 1,
    }, */
  ]);

  constructor() {}

  getProduct(productId: string) {
    return this.productsService.products.filter(
      (product) => product.id === productId
    )[0];
  }

 addProduct(productId: string, quantity: number = 1) {
  this.cart.update((items) => {
    const existingItem = items.find((item) => item.productId === productId);
    if (existingItem) {
      return items.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + quantity } // Use actual quantity
          : item
      );
    } else {
      return [...items, { productId, quantity }];
    }
  });
}

  /** Remove a product entirely */
  removeProduct(productId: string) {
    this.cart.update((items) => items.filter(item => item.productId !== productId));
  }
  
  increaseQuantity(productId: string) {
    this.cart.update((items) =>
      items.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  decreaseQuantity(productId: string) {
    this.cart.update((items) =>
      items
        .map((item) =>
          item.productId === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) // remove if quantity is 0
      );
    }

  updateQuantity(productId: string, quantity: number) {
  this.cart.update((items) =>
    items.map((item) =>
      item.productId === productId
        ? { ...item, quantity: quantity }
        : item
    )
  );
}
}
