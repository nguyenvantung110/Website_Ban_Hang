import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddEditProductComponent } from './products/add-edit-product/add-edit-product.component';
import { ProductsComponent } from './products/products.component';
import { ShowProductsComponent } from './products/show-products/show-products.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:HomeComponent},
  // {path:'cart',component:CartComponent},
  {path:'user',component:CartComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'products',component:ProductsComponent},
  {path:'product-details',component:ProductDetailsComponent},
  {path:'show-products',component:ShowProductsComponent},
  {path:'add-edit-product',component:AddEditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
