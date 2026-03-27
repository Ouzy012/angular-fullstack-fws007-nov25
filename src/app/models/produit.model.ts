export interface Produit {
  id: number;
  nom: string;
  slug: string;
  description: string;
  prix: number;
  stock: number;
  image?: string;
  categorie: Categorie
}

export interface Categorie {
  id: number;
  nom: string;
}
