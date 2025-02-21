import { Product } from './product';

export interface Cart {
  products: CartItem[];
  subtotal: number;
}

export interface CartItem {
  productId: string;
  quantity: number;
}
