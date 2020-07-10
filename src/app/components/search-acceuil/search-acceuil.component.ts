import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-acceuil',
  templateUrl: './search-acceuil.component.html',
  styleUrls: ['./search-acceuil.component.css']
})
export class SearchAcceuilComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  searchProduit(keyword: String){

    console.log('keyword',keyword);
 this.router.navigateByUrl('/searchh/'+keyword);
   }

}
