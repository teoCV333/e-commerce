import {inject, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})

export class AlertService {
  private toastr = inject(ToastrService);

  addToCartAlert() {
    this.toastr.success('Item added to cart', 'Success');
  }

  removeToCart() {
    this.toastr.success('Item removed to cart', 'Success');
  }
}
