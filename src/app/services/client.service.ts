import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import{Client} from '../model/client'
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl="http://localhost:8090/api/v1/clients";

  constructor(private http: HttpClient) {}
  
  getClients():Observable<any>{
   return this.http.get(this.baseUrl);
     

  }
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



}
interface GetResponseClients{
_embedded:{
  clients: Client[];
}

}
