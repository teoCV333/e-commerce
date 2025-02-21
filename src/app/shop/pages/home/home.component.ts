import { Component } from '@angular/core';
import { FeatureComponent } from '../../../shared/feature/feature.component';
import { ProductsComponent } from '../../../shared/products/products.component';
import { BannersComponent } from '../../../shared/banners/banners.component';
import { NewsletterComponent } from '../../../shared/newsletter/newsletter.component';

@Component({
  selector: 'app-home',
  imports: [
    FeatureComponent,
    ProductsComponent,
    BannersComponent,
    NewsletterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent {}
