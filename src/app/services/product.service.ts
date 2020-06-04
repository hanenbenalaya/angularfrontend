import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produit } from '../model/produit';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseurl="http://localhost:8080/api/v1/produits";

  constructor(private http: HttpClient) {}
  
  getProducts():Observable<Produit[]>{
   return this.http.get<GetResponseProducts>(this.baseurl).pipe(
      map(response => response._embedded.produits)
    )

  }
}
interface GetResponseProducts{
_embedded:{
  produits: Produit[];
}}
