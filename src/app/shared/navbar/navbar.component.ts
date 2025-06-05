import { Component, computed, inject, signal } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, NgClass, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  private cartService = inject(CartService)
  private auth = inject(AuthService);

  isLoggedIn = computed(() => this.auth.isLoggedIn());

  cartItems = this.cartService.cart;
  menuHidden = signal<boolean>(true);
  public dropDownIsVisible = signal<boolean>(false);
  public menuItems = routes
    .map((route) => route.children ?? [])
    .flat()
    .filter((route) => route && route.path)
    .filter((route) => !route.path?.includes(':'))
    .filter((route) => route.title);

  public dropdownItemsLogged = [
    {
      url: 'profile',
      icon: 'far fa-user',
      text: 'Mi Perfil',
    },
    {
      url: 'orders',
      icon: 'far fa-list-ul',
      text: 'Mis ordenes',
    },
    { 
      url: '/auth',
      icon: 'far fa-sign-out',
      text: 'Cerrar sesión',
    },
  ];

  public dropdownItemsUnlogged = [
    { 
      url: '/auth',
      icon: 'far fa-sign-out',
      text: 'Iniciar sesión',
    },
  ];

  toggleMenu() {
    if(this.dropDownIsVisible()) {
      this.toggleDropDownMenu()
    }
    this.menuHidden.update((current) => !current);
  }

  toggleDropDownMenu() {
    this.dropDownIsVisible.update((current) => !current);
  }

   totalQuantity = computed(() =>
    this.cartItems().reduce((sum, item) => sum + (item.quantity || 0), 0)
  );
}
