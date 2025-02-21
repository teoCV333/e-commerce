import { Component, inject, signal } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/page-header/page-header.component';
import { Cart } from '../../../interfaces/cart';
import { CartService } from '../../../services/cart.service';
import { PayFormComponent } from '../../../shared/pay-form/pay-form.component';
import { CommonModule } from '@angular/common';
import { PaymentService } from '../../../services/payment.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-cart',
  imports: [PageHeaderComponent, PayFormComponent, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export default class CartComponent {
  cartService = inject(CartService);
  paymentService = inject(PaymentService);

  showPaymentForm = this.paymentService.showPaymentModal;

  public pageHeaderData = {
    title: '#telomereces',
    text: '!No lo pienses más! date el gusto que te mereces.',
    bg: 'b1.jpg',
  };
  cart = this.cartService.cart();
  cartItems = this.cart.map((cartItem) => {
    let product = this.cartService.getProduct(cartItem.productId);
    return {
      img: product.image,
      title: product.title,
      price: product.price,
      quantity: cartItem.quantity,
      subtotal: product.price * cartItem.quantity,
    };
  });

  togglePaymentForm() {
    this.paymentService.togglePaymentModal();
  }
}
