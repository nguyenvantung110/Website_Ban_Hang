import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShowProductsComponent } from './products/show-products/show-products.component';
import { AddEditProductComponent } from './products/add-edit-product/add-edit-product.component';
import { SharedService } from './shared.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { JwtInterceptorInterceptor } from './jwt-interceptor.interceptor';
import { JwtModule } from "@auth0/angular-jwt";
import { UserComponent } from './user/user.component';
import { ngxLoadingAnimationTypes, NgxLoadingModule } from 'ngx-loading';
import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { IAppState } from './shared/services/loading.service';
export const appReducers: ActionReducerMap<IAppState, any> = {}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    AboutComponent,
    ContactComponent,
    ProductDetailsComponent,
    ShowProductsComponent,
    AddEditProductComponent,
    UserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["example.com"],
        disallowedRoutes: ["http://example.com/examplebadroute/"],
      },
    }),
    ModalModule.forRoot(),
    PopoverModule.forRoot(),
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.circleSwish,
      fullScreenBackdrop: true,
      primaryColour: '#1CCE82',
      secondaryColour: '#1CCE82',
      tertiaryColour: '#1CCE82'
  }),
  StoreModule.forRoot(appReducers),
  ],
  providers: [SharedService,
    BsModalRef,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function tokenGetter() {
  return localStorage.getItem("jwt");
}