import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategorieProd } from '../model/categorie-produit';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private baseUrl="http://localhost:8090/api/v1/categories";
  constructor(private http: HttpClient) { }

  getCategories():Observable<CategorieProd[]>{
    return this.http.get<GetResponseCategories>(this.baseUrl).pipe(
       map(response => response._embedded.categories)
     )
 
   }
 
   createCategorie(categorie: CategorieProd): Observable<Object> {
     return this.http.post(`${this.baseUrl}`, categorie);
    
   }
 
   updateCategorie(id: number, value: any): Observable<Object> {
     return this.http.put(`${this.baseUrl}/${id}`, value);
   }
 
   deleteCategorie(id: number): Observable<any> {
     return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
   }
 
   getCategorie(categorieid: number):Observable<CategorieProd>{
    const categorieurl=`${this.baseUrl}/${categorieid}`;
   return this.http.get<CategorieProd>(categorieurl);
  }
 
 }
 interface GetResponseCategories{
 _embedded:{
   categories: CategorieProd[];
 }
 
}
