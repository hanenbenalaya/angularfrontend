import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListeComponent } from './Client-items/client-liste/client-liste.component';
import { ProductsHomeComponent } from './product-items/products-home/products-home.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ProductDetailsComponent } from './product-items/product-details/product-details.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CreateClientComponent } from './Client-items/create-client/create-client.component';
import { CreateProductComponent } from './product-items/create-product/create-product.component';
import { AjoutCategorieComponent } from './components/ajout-categorie/ajout-categorie.component';
import { AdminHomeComponent } from './espace-admin/admin-home/admin-home.component';
import { ListeClientComponent } from './espace-admin/liste-client/liste-client.component';
import { UpdateClientComponent } from './espace-admin/update-client/update-client.component';
import { ProductUpdateComponent } from './product-items/product-update/product-update.component';
import { RegisterAdminComponent } from './espace-admin/register-admin/register-admin.component';
import { LoginAdminComponent } from './espace-admin/login-admin/login-admin.component';
import { DetailProdAdminComponent } from './espace-admin/detail-prod-admin/detail-prod-admin.component';


const routes: Routes = [
   {
    path:'updateprod/:id',
    component: ProductUpdateComponent 

  }, 
  {
    path:'loginadmin',
    component: LoginAdminComponent

  },
  {
    path:'registeradmin',
    component: RegisterAdminComponent

  }, 
  {
    path:'login',
    component: LoginComponent

  },
  {
    path:'adminhome',
    component: AdminHomeComponent

  },
  {
    path:'adminhome/:id',
    component: AdminHomeComponent

  },
  {
    path:'listeclients/:id',
    component: ListeClientComponent

  },
  {
    path:'update/:id',
    component: UpdateClientComponent

  },
  {
    path:'register',
    component: CreateClientComponent

  },
  {
    path:'ajoutcatecorie',
    component: AjoutCategorieComponent

  },
  {
    path:'ajoutproduit/:id',
    component: CreateProductComponent

  },
  {
    path:'logout',
    component: LoginComponent

  },
  {
    path:'cart-details',
    component: CartDetailsComponent

  },
  {
    path:'clients',
    component: ClientListeComponent

  }, {
    path:'adminhomep/:id',
    component: DetailProdAdminComponent

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
