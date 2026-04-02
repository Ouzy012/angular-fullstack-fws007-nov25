import { Component, inject, OnInit } from '@angular/core';
import { Products } from '../../../core/services/products';
import { Produit } from '../../../models/produit.model';
import { RouterLink } from "@angular/router";
import { SlicePipe } from '@angular/common';
import { LimitePipe } from '../../../core/utils/limite-pipe';
import { CartService } from '../../../core/services/cart-service';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [RouterLink, LimitePipe],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent implements OnInit{
  private productService = inject(Products);
  private panierService = inject(CartService);

  produits: Produit[] = []
  loading = false

  ngOnInit() {
    console.log("executer");
    this.fetchProducts()
    console.log(this.produits);

  }


  fetchProducts() {
    this.loading = true
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.produits = data
        this.loading = false
        console.log(this.produits);
      },
      error: err => {
        this.loading = false;
        console.log(err);
      }
    })
  }

  addCart(produit: Produit) {
    this.panierService.ajouterPanier(produit);
  }
}
