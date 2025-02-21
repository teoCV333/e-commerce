import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'shop',
    loadComponent: () => import('./shop/shop.component'),
    children: [
      {
        path: 'home',
        title: 'Inicio',
        loadComponent: () => import('./shop/pages/home/home.component'),
      },
      {
        path: 'products',
        title: 'Productos',
        loadComponent: () =>
          import('./shop/pages/shop-page/shopPage.component'),
      },
      {
        path: 'product/:id',
        title: 'Producto',
        loadComponent: () =>
          import('./shop/pages/product-page/product-page.component'),
      },
      {
        path: 'blog',
        title: 'Blog',
        loadComponent: () => import('./shop/pages/blog/blog.component'),
      },
      {
        path: 'about',
        title: 'Acerca',
        loadComponent: () => import('./shop/pages/about/about.component'),
      },
      {
        path: 'contact',
        title: 'Contacto',
        loadComponent: () => import('./shop/pages/contact/contact.component'),
      },
      {
        path: 'cart',
        title: '',
        loadComponent: () => import('./shop/pages/cart/cart.component'),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'auth',
    title: '',
    loadComponent: () => import('./auth/auth.component'),
  },
  {
    path: '',
    redirectTo: '/shop',
    pathMatch: 'full',
  },
];
