import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../config/constant';
import { Produit } from '../../models/produit.model';

@Injectable({
  providedIn: 'root',
})
export class Products {
  private http = inject(HttpClient)

  getProducts(): Observable<Produit[]> {
    return this.http.get<Produit[]>(apiUrl + "/products");
  }
}
