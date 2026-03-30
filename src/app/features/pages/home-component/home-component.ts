import { Component, inject } from '@angular/core';
import { Products } from '../../../core/services/products';
import { Produit } from '../../../models/produit.model';
import { RouterLink } from "@angular/router";
import { SlicePipe } from '@angular/common';
import { LimitePipe } from '../../../core/utils/limite-pipe';

@Component({
  selector: 'app-home-component',
  imports: [RouterLink, LimitePipe],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {
  private productService = inject(Products);

  produits: Produit[] = []

  ngOnInit(){
    this.fetchProducts();
  }

  fetchProducts(){
    this.productService.getProducts().subscribe({
      next: data => {
        this.produits = data
        console.log(this.produits);

      },
      error: err => {
        console.log(err);
      }
    })
  }

  addCart(produit: Produit){

  }
}
