import { Component, OnInit } from '@angular/core';
import { AuthObj } from 'src/app/model/auth-obj';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
notfound:boolean;
 auth:AuthObj=new AuthObj;
  idclt:any
  constructor(private clientService:ClientService,private router: Router
    ) {   }

  ngOnInit() {
  }
authClt(){

  this.clientService.auth(this.auth).subscribe(data=>this.idclt=data);
   
    localStorage.setItem("currentUser",JSON.stringify(this.idclt))
    console.log(this.idclt);
    if(this.idclt)
    {this.router.navigate(['/produits']);
    this.notfound=false}
    else 
    this.notfound=true;
}
logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('client id');
}
}
