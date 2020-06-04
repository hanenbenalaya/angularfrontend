import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientListeComponent } from './Client-items/client-liste/client-liste.component';
import { ClientService } from './services/client.service';
import { ProductListeComponent } from './product-items/product-liste/product-liste.component';
import { ProductService } from './services/product.service';
import { ProductsHomeComponent } from './product-items/products-home/products-home.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    
    ClientListeComponent,
    
    ProductListeComponent,
    
    ProductsHomeComponent,
    
    LoginComponent,
    
    PagenotfoundComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    

  ],
  providers: [
    ClientService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
