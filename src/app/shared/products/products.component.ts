import { Component, inject, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-products-component',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  @Input({ required: true }) filter!: string;

  productsService = inject(ProductsService);
  cartService = inject(CartService);
  alertService = inject(AlertService)
  products: Product[] = [];

  constructor(private router: Router) {
    //Filter from service signal
  }
  ngOnInit(): void {
    switch (this.filter) {
      case 'featured': {
        this.products = this.productsService.products.slice(0, 8);
        break;
      }
      case 'new': {
        this.products = this.productsService.products.slice(8, 16);
        break;
      }
      case 'all': {
        this.products = this.productsService.products;
        break;
      }
    }
  }

  productDetail(id: string) {
    this.router.navigate(['shop/product', id]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  addToCart(id: string, event: MouseEvent) {
    event.stopPropagation(); 
    this.cartService.addProduct(id);
    this.alertService.addToCartAlert()
  }

}