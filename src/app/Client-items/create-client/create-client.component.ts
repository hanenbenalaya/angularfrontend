import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/model/client';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {
   
  role:String="clt";
  client :Client = new Client();
  rslt: any;
  done:boolean=true
  submitted = false;
  constructor(private clientService: ClientService,
    private router: Router) { 
      this.client.role=this.role;
    }

  ngOnInit(): void {
    

  }

  newClient(): void {
    this.submitted = false;
    this.client = new Client();
    this.client.role=this.role;
  }

  save() {
    this.clientService.createClient(this.client).subscribe(data => this.rslt=data);
      console.log("resultat",this.rslt)
      
      console.log("client created",this.client);
      this.submitted = true;
      this.router.navigate(['/login']);
    
    this.client = new Client();
   
  }

  onSubmit() {
    this.save(); 
       
  }

  
}
