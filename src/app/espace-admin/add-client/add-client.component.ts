import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/model/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

   
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
      this.router.navigate(['listeclients/0']);
    
    this.client = new Client();
   
  }

  onSubmit() {
    this.save(); 
       
  }


}
