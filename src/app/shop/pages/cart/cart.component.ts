import { Component, computed, inject, signal } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/page-header/page-header.component';
import { Cart } from '../../../interfaces/cart';
import { CartService } from '../../../services/cart.service';
import { PayFormComponent } from '../../../shared/pay-form/pay-form.component';
import { CommonModule } from '@angular/common';
import { PaymentService } from '../../../services/payment.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-cart',
  imports: [PageHeaderComponent, PayFormComponent, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export default class CartComponent {
  cartService = inject(CartService);
  alertService = inject(AlertService)
  paymentService = inject(PaymentService);

  showPaymentForm = this.paymentService.showPaymentModal;

  public pageHeaderData = {
    title: '#telomereces',
    text: '!No lo pienses más! date el gusto que te mereces.',
    bg: 'b1.jpg',
  };
  cart = this.cartService.cart;
  cartItems = computed(() => {
    return this.cart().map((cartItem) => {
      const product = this.cartService.getProduct(cartItem.productId);
      return {
        id: product.id,
        img: product.image,
        title: product.title,
        price: product.price,
        quantity: cartItem.quantity,
        subtotal: product.price * cartItem.quantity,
      };
    });
  });

  cartTotal = computed(() => {
    return this.cartItems().reduce((total, item) => total + item.subtotal, 0);
  });

  togglePaymentForm() {
    this.paymentService.togglePaymentModal();
  }

  removeItem(productId: string) {
    this.cartService.removeProduct(productId)
    this.cartService.decreaseQuantity(productId)
    this.alertService.removeToCart()
  }

  increaseQty(productId: string) {
  this.cartService.increaseQuantity(productId);
  }

  decreaseQty(productId: string) {
    this.cartService.decreaseQuantity(productId);
  }

  updateQty(event: Event, productId: string) {
    const input = event.target as HTMLInputElement;
    const newQuantity = Number(input.value);
    if (newQuantity > 0) {
      this.cartService.updateQuantity(productId, newQuantity);
    }
  }

}
