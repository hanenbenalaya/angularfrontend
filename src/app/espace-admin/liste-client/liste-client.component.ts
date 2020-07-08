import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/model/client';
import { ClientService } from 'src/app/services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.css']
})
export class ListeClientComponent implements OnInit {
clients:Client[];
numpage:number=0;
pages:Array<number>
id:number=0

  constructor(private cltservice: ClientService,private activatedRoutr: ActivatedRoute,private clientService:ClientService, 
    private _activitedRouter: ActivatedRoute,private router: Router ) { }

    ngOnInit(): void {
      this.id=+this.activatedRoutr.snapshot.paramMap.get('id');
console.log("page num:", this.id);
      this.ListClients(this.id);
     this.pages=new Array(3);



    }
    deconnect(){
      this.cltservice.logout();
  
    }
    ListClients(n: number){
      this.clientService.getClients(n).subscribe(
        data =>this.clients=data);
      console.log("resultat",this.clients);
    }


      deleteclient(id: number) {
        this.clientService.deleteClient(id)
          .subscribe(
            data => {
              console.log(data);
              this.ListClients(this.numpage);
            },
            error => console.log(error));
      }

      
      updateclient(id: number){
        this.router.navigate(['update', id]);
        this.ngOnInit();
      }
    
      

}
