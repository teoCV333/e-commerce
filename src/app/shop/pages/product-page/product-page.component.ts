import { Component, inject, OnInit, signal } from '@angular/core';
import { NewsletterComponent } from '../../../shared/newsletter/newsletter.component';
import { ProductsComponent } from '../../../shared/products/products.component';
import { ProductsService } from '../../../services/products.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product } from '../../../interfaces/product';
import { CartService } from '../../../services/cart.service';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-product-page',
  imports: [NewsletterComponent, ProductsComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export default class ProductPageComponent implements OnInit {
  private productService = inject(ProductsService);
  private alertService = inject(AlertService)
  private cartService = inject(CartService);
  private route = inject(ActivatedRoute);

  public product = toSignal<Product | undefined>(
  this.route.params.pipe(
    switchMap(({ id }) => this.productService.getProductById(id))
  )
);

  ngOnInit(): void {}
  
  quantity = signal(1);

  updateQuantity(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed) && parsed > 0) {
     this.quantity.set(parsed);
    }
  }

  addToCart(id: string) {
    this.cartService.addProduct(id, this.quantity());
    this.alertService.addToCartAlert();
  }
}
