import { Component, OnInit } from '@angular/core';
import { AuthObj } from 'src/app/model/auth-obj';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
 notfound:boolean;
  auth:AuthObj=new AuthObj;
  idclt:any
  constructor(private clientService:ClientService,private router: Router
    ) {   }

  ngOnInit() {
  }
 
authClt(){

  this.clientService.authAdm(this.auth).subscribe(data=>this.idclt=data);
   
    localStorage.setItem("currentUser",JSON.stringify(this.idclt))
    console.log(this.idclt);
    if(this.idclt)
    {this.router.navigate(['/adminhome']);
    this.notfound=false;}
    else
    this.notfound=true;
}

}
