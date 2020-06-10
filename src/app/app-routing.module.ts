import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListeComponent } from './Client-items/client-liste/client-liste.component';
import { ProductsHomeComponent } from './product-items/products-home/products-home.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ProductDetailsComponent } from './product-items/product-details/product-details.component';


const routes: Routes = [
    
  {
    path:'login',
    component: LoginComponent

  },
  {
    path:'clients',
    component: ClientListeComponent

  },
  {
    path:'produits/:id',
    component: ProductDetailsComponent

  },
  {
    path:'produits',
    component: ProductsHomeComponent

  },
  {
    path:'search/:keyword',
    component: ProductsHomeComponent

  },
  {
    path:'categorie/:id',
    component:    ProductsHomeComponent

  }, 

  {
    path:'',
   redirectTo:'/login',pathMatch:"full"

  },
  {
    path:'**',
    component: PagenotfoundComponent

  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
