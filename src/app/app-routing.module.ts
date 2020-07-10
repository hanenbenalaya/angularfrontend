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
import { AuthGuard } from './guards/auth.guard';
import { AProposComponent } from './components/a-propos/a-propos.component';
import { AddClientComponent } from './espace-admin/add-client/add-client.component';
import { AcceuillComponent } from './components/acceuill/acceuill.component';
import { DetailprodAcceuilComponent } from './components/detailprod-acceuil/detailprod-acceuil.component';


const routes: Routes = [
   {
    path:'updateprod/:id',
    canActivate:[AuthGuard],
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
    canActivate:[AuthGuard],

    component: AdminHomeComponent

  },
  {
    path:'adminhome/:id',
    canActivate:[AuthGuard],

    component: AdminHomeComponent

  },
  {
    path:'listeclients/:id',
    canActivate:[AuthGuard],

    component: ListeClientComponent

  },
  {
    path:'update/:id',
    canActivate:[AuthGuard],

    component: UpdateClientComponent
  },  {
    path:'addclient',
    component: AddClientComponent

  },
  {
    path:'apropos',
    component: AProposComponent

  },
  {
    path:'register',
    component: CreateClientComponent

  },
  {
    path:'ajoutcatecorie',
    canActivate:[AuthGuard],

    component: AjoutCategorieComponent

  },
  {
    path:'ajoutproduit/:id',
    canActivate:[AuthGuard],

    component: CreateProductComponent

  },
  {
    path:'logout',
    component: LoginComponent

  },
  {
    path:'cart-details',
    canActivate:[AuthGuard],

    component: CartDetailsComponent

  },
  {
    path:'clients',
    canActivate:[AuthGuard],

    component: ClientListeComponent

  },{
    path:'acceuilp/:id',
    

    component: DetailprodAcceuilComponent

  },{
    path:'acceuil',
    

    component: AcceuillComponent

  },{
    path:'acceuil/:id',
    

    component: AcceuillComponent

  }, {
    path:'adminhomep/:id',
    canActivate:[AuthGuard],

    component: DetailProdAdminComponent

  },
  {
    path:'produits/:id',    
    canActivate:[AuthGuard],

    component: ProductDetailsComponent

  },
  {
    path:'produits',
    canActivate:[AuthGuard],

    component: ProductsHomeComponent

  },
  {
    path:'searchh/:keyword',
    component:  AcceuillComponent

  },
  {
    path:'search/:keyword',
    component: ProductsHomeComponent

  },
  {
    path:'categorie/:id',
    canActivate:[AuthGuard],

    component:    ProductsHomeComponent

  }, 

  {
    path:'',
   redirectTo:'/acceuil',pathMatch:"full"

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
