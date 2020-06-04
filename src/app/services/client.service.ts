import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import{Client} from '../model/client'
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseurl="http://localhost:8080/api/v1/clients";

  constructor(private http: HttpClient) {}
  
  getClients():Observable<Client[]>{
   return this.http.get<GetResponseClients>(this.baseurl).pipe(
      map(response => response._embedded.clients)
    )

  }
}
interface GetResponseClients{
_embedded:{
  clients: Client[];
}

}
