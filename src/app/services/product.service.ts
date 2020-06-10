import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produit } from '../model/produit';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { CategorieProd } from '../model/categorie-produit';
import { CategorieProdComponent } from '../components/categorie-prod/categorie-prod.component';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseurl="http://localhost:8080/api/v1/produits";
  private categurl="http://localhost:8080/api/v1/categories";
  categorieProd: CategorieProd[]
  constructor(private http: HttpClient) {}
  
  getProducts(theCategoryeid: number):Observable<Produit[]>{

    const searchUrl=`${this.baseurl}/search/categorieid?id=${theCategoryeid}`
   return this.http.get<GetResponseProducts>(searchUrl).pipe(
      map(response => response._embedded.produits) 
    );

  }

getcatprod():Observable<any>{
  return this.http.get(this.categurl);
    }




searchProducts(keyword: String):Observable<Produit[]>{

      const searchUrl=`${this.baseurl}/search/searchbykeyword?nomProduit=${keyword}`
     return this.http.get<GetResponseProducts>(searchUrl).pipe(
        map(response => response._embedded.produits) 
      );
  
    }
    getPriduct(productid: number):Observable<Produit>{
      const productDetailsUrl=`${this.baseurl}/${productid}`;
     return this.http.get<Produit>(productDetailsUrl);
    }

}


interface GetResponseProducts{
_embedded:{
  produits: Produit[];
}}
