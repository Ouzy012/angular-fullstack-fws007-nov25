import { Component, inject, OnInit, signal } from '@angular/core';
import { Products } from '../../../core/services/products';
import { Produit } from '../../../models/produit.model';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';
import { LimitePipe } from '../../../core/utils/limite-pipe';
import { CartService } from '../../../core/services/cart-service';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [CommonModule, RouterLink, LimitePipe],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent implements OnInit{
  private productService = inject(Products);
  private panierService = inject(CartService);

  produits = signal<Produit[]>([])
  loading = signal(false)

  async ngOnInit() {
    console.log("executer");
    console.log(this.produits());
    this.fetchProducts()
    console.log(this.produits());
  }


  fetchProducts() {
    this.loading.set(true)
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.produits.set(data)
        this.loading.set(false)

      },
      error: (err) => {
        this.produits.set([]);
        this.loading.set(false);
        console.log(err);
      }
    })
  }

  addCart(produit: Produit) {
    this.panierService.ajouterPanier(produit);
  }
}
