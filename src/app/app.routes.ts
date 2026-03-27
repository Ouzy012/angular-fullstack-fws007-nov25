import { Routes } from '@angular/router';
import { HomeComponent } from './features/pages/home-component/home-component';
import { DetailComponent } from './features/pages/detail-component/detail-component';
import { CartComponent } from './features/pages/cart-component/cart-component';
import { CheckoutComponent } from './features/pages/checkout-component/checkout-component';
import { App } from './app';
import { Navbar } from './features/layout/navbar/navbar.component';

export const routes: Routes = [
  {
    path: '',
    component: Navbar,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'produit/:id', component: DetailComponent },
      { path: 'panier', component: CartComponent },
      { path: 'paiement', component: CheckoutComponent },
    ]
  },
  { path: '**', redirectTo: '' }
];
