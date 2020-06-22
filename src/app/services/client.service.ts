import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import{Client} from '../model/client'
import { AuthObj } from '../model/auth-obj';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl="http://localhost:8090/api/v1/clients";
  private baseUrl2="http://localhost:8090/api/v1/clientauth";
   x:Observable<object>
   data:Observable<Client[]>
   num:Observable<number>
  constructor(private http: HttpClient) {}
  getClients(page: number):Observable<Client[]>{
    this.data= this.http.get<GetResponseClientss>(this.baseUrl+'?page='+page).pipe(
      map(response => response.content) 
    );
    return this.data;
 
   }
   getClientsnumpages():Observable<any>{
    this.num= this.http.get<GetResponseClientss>(this.baseUrl).pipe(
      map(response => response.totalPages) 
    );
    console.log("nombre des pages:",this.num);
    return this.num; }
     

  
  getClient(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }


  createClient(client: Client): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, client);
   
  }

  updateClient(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteClient(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
 verif(auth:AuthObj){
  return this.http.post(`${this.baseUrl2}`, auth);

}

auth(auth:AuthObj){
 this.x=this.verif(auth);
return this.x
}

}
interface GetResponseClients{
_embedded:{
  clients: Client[];
}

}
interface GetResponseClientss{
  content: Client[];
  totalPages: number;
  }
  
  