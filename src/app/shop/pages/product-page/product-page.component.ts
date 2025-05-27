import { Component, inject, OnInit } from '@angular/core';
import { NewsletterComponent } from '../../../shared/newsletter/newsletter.component';
import { ProductsComponent } from '../../../shared/products/products.component';
import { ProductsService } from '../../../services/products.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product } from '../../../interfaces/product';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-page',
  imports: [NewsletterComponent, ProductsComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export default class ProductPageComponent implements OnInit {
  private productService = inject(ProductsService);
  private cartService = inject(CartService);
  private route = inject(ActivatedRoute);

  public product = toSignal<Product | undefined>(
  this.route.params.pipe(
    switchMap(({ id }) => this.productService.getProductById(id))
  )
);

  ngOnInit(): void {}

  addToCart(id: string) {
    this.cartService.addProduct(id);
  }
}
