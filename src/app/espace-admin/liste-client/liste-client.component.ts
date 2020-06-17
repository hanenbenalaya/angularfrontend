import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/model/client';
import { ClientService } from 'src/app/services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.css']
})
export class ListeClientComponent implements OnInit {
clients:Client[];
  constructor(private clientService:ClientService, 
    private _activitedRouter: ActivatedRoute,private router: Router ) { }

  ngOnInit(): void {
      this.ListClients();

    
  }
  ListClients() {
    this.clientService.getClients().subscribe(
      data =>{this.clients=data;
      console.log(this.clients)})}


      deleteclient(id: number) {
        this.clientService.deleteClient(id)
          .subscribe(
            data => {
              console.log(data);
              this.ListClients();
            },
            error => console.log(error));
      }

      
      updateclient(id: number){
        this.router.navigate(['update', id]);
      }
  

}
