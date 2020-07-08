import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientListeComponent } from './Client-items/client-liste/client-liste.component';
import { ClientService } from './services/client.service';
import { ProductListeComponent } from './product-items/product-liste/product-liste.component';
import { ProductService } from './services/product.service';
import { ProductsHomeComponent } from './product-items/products-home/products-home.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { CategorieProdComponent } from './components/categorie-prod/categorie-prod.component';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailsComponent } from './product-items/product-details/product-details.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { CartStatusComponent } from './components/cart-status/cart-status.component'; // <-- import the module
import{NgxSpinnerModule} from 'ngx-spinner';
import { CartDetailsComponent } from './components/cart-details/cart-details.component'
import { CreateClientComponent } from './Client-items/create-client/create-client.component';
import { CreateProductComponent } from './product-items/create-product/create-product.component';
import { AjoutCategorieComponent } from './components/ajout-categorie/ajout-categorie.component';
import { CategAddProdComponent } from './components/categ-add-prod/categ-add-prod.component';
import { AdminHomeComponent } from './espace-admin/admin-home/admin-home.component';
import { CategorieAdminComponent } from './components/categorie-admin/categorie-admin.component';
import { ProductListAdminComponent } from './espace-admin/product-list-admin/product-list-admin.component';
import { ListeClientComponent } from './espace-admin/liste-client/liste-client.component';
import { UpdateClientComponent } from './espace-admin/update-client/update-client.component';
import { ProductUpdateComponent } from './product-items/product-update/product-update.component';
import { RegisterAdminComponent } from './espace-admin/register-admin/register-admin.component';
import { LoginAdminComponent } from './espace-admin/login-admin/login-admin.component';
import { DetailProdAdminComponent } from './espace-admin/detail-prod-admin/detail-prod-admin.component';
import { AuthGuard } from './guards/auth.guard';
//import {JwPaginationComponent} from 'jw-angular-pagination'
@NgModule({
  declarations: [
    AppComponent,
    
    ClientListeComponent,
    
    ProductListeComponent,
    
    ProductsHomeComponent,
    
    LoginComponent,
    
    PagenotfoundComponent,
    
    CategorieProdComponent,
    
    SearchComponent,
    
    ProductDetailsComponent,
    
    CartStatusComponent,
    
    CartDetailsComponent,
    
    CreateClientComponent,
    
    CreateProductComponent,
    
    AjoutCategorieComponent,
    
    CategAddProdComponent,
    
    AdminHomeComponent,
    
    CategorieAdminComponent,
    
    ProductListAdminComponent,
    
    ListeClientComponent,
    
    UpdateClientComponent,
    
    ProductUpdateComponent,
    
    RegisterAdminComponent,
    
    LoginAdminComponent,
    
    DetailProdAdminComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    , NgxPaginationModule,
    NgxSpinnerModule, 
    FormsModule,

  ],
  providers: [
    ClientService,
    ProductService,
    AuthGuard,

    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
