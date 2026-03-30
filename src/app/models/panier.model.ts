import { Produit } from "./produit.model";

export interface Panier {
  product: Produit;
  quantity: number
}
