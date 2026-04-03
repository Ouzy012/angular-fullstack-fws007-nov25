import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../../core/services/cart-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-component',
  imports: [FormsModule],
  templateUrl: './cart-component.html',
  styleUrl: './cart-component.css',
})
export class CartComponent implements OnInit{
  panierService = inject(CartService)

  ngOnInit(): void {
    this.panierService.totalProduit();

  }

  changerQuantitePlus(produitId: number){
    this.panierService.augmenterQuantite(produitId);
  }

  changerQuantiteMoins(productId: number){
    this.panierService.dimunerQuantite(productId)
  }

}
