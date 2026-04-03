import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { CartService } from '../../../core/services/cart-service';

@Component({
  selector: 'app-navbar',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  panierService = inject(CartService);
}
