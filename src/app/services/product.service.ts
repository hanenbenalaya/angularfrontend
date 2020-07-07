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

  private baseurl="http://localhost:8090/api/v1/produits";
  private baseurl3="http://localhost:8090/api/v1/proddel";

  private baseurl2="http://localhost:8090/api/v1/produitscateg";

  private categurl="http://localhost:8090/api/v1/categories";
  categorieProd: CategorieProd[]
  constructor(private http: HttpClient) {}
  
  getProdByCat(CatId:number,currentPage:number,pageSize:number):Observable<GetResponseProductscat>{
    return  this.http.get<GetResponseProductscat>("http://localhost:8090/api/v1/produits/"+CatId+"/"+currentPage+"/"+pageSize);
    
       
  };
  getNbrPages(CatId:number,currentPage:number,pageSize:number):Observable<number>{
    return  this.http.get<GetResponseProductscat>("http://localhost:8090/api/v1/produits/"+CatId+"/"+currentPage+"/"+pageSize).pipe(
      map(response =>response.totalPages) 
    );
    
       
  };
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


getProduits():Observable<Produit[]>{
  return this.http.get<GetResponseProducts>(this.baseurl).pipe(
     map(response => response._embedded.produits)
   )

 }

 createProduit(produit: Produit): Observable<Object> {
 

   console.log("product sent:", produit)


   return this.http.post(`${this.baseurl2}`, produit);
  
 }

 updateProduit(id: number, value: any): Observable<Object> {
   return this.http.put(`${this.baseurl}/${id}`, value);
 }
 deleteProduit(id: number): Observable<any> {
  return this.http.delete(`${this.baseurl3}/${id}`, { responseType: 'text' });
}
 
}


interface GetResponseProducts{
_embedded:{
  produits: Produit[];
}}
interface GetResponseProductscat{
   totalItems: number
    size: number
    totalPages: number
    currentPage: number
    articles: Produit[];
  }
