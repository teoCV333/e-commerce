import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-shop',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export default class ShopComponent {}
