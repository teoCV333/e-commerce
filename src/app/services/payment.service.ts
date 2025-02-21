import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  showPaymentModal = signal<boolean>(false);
  constructor() {}

  togglePaymentModal() {
    this.showPaymentModal.update((current) => !current);
  }
}
