import { Component, signal } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, NgClass, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  menuHidden = signal<boolean>(true);
  public dropDownIsVisible = signal<boolean>(false);
  public menuItems = routes
    .map((route) => route.children ?? [])
    .flat()
    .filter((route) => route && route.path)
    .filter((route) => !route.path?.includes(':'))
    .filter((route) => route.title);

  public dropdownItems = [
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

  toggleMenu() {
    if(this.dropDownIsVisible()) {
      this.toggleDropDownMenu()
    }
    this.menuHidden.update((current) => !current);
  }

  toggleDropDownMenu() {
    this.dropDownIsVisible.update((current) => !current);
  }
}
