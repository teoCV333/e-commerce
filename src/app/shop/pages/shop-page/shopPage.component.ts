import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/page-header/page-header.component';
import { ProductsComponent } from '../../../shared/products/products.component';
import { NewsletterComponent } from '../../../shared/newsletter/newsletter.component';

@Component({
  selector: 'app-products',
  imports: [PageHeaderComponent, ProductsComponent, NewsletterComponent],
  templateUrl: './shopPage.component.html',
  styleUrl: './shopPage.component.css',
})
export default class ShopPageComponent {
  public pageHeaderData = {
    title: '#compraenlinea',
    text: 'Ahorra dinero con cupones de hasta 70% de descuento!',
    bg: 'b1.jpg',
  };
}
