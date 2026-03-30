import { Injectable, signal, computed } from '@angular/core';
import { Panier } from '../../models/panier.model';
import { Produit } from '../../models/produit.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  listePaniers = signal<Panier[]>([]);

  quantiteTotal = computed(() =>
    this.listePaniers().reduce((somme, item) => somme + item.quantity, 0)
  );

  totalProduit = computed(() => {
    this.listePaniers().reduce(
      (somme, item) =>
        somme + item.quantity * item.product.price, 0
      //somme += qty * price
    )
  })

  ajouterPanier(produit: Produit) {
    const items = this.listePaniers();
    const existingItem = items.find(item => item.product.id === produit.id);

    if (existingItem) {
      this.listePaniers.update(items =>
        items.map(item =>
          item.product.id === produit.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      this.listePaniers.update(items => [...items, { product: produit, quantity: 1 }]);
    }
  }

  augmenterQuantite(productId: number): void {
    this.listePaniers.update(items =>
      items.map(item =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  dimunerQuantite(productId: number): void {
    this.listePaniers.update(items =>
      items
        .map(item =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  }

  supprimerProduit(productId: number): void {
    this.listePaniers.update(items =>
      items.filter(item => item.product.id !== productId)
    );
  }

  viderPanier(): void {
    this.listePaniers.set([]);
  }
}
