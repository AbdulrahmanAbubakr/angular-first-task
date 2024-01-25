import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductComponent } from './product/product.component';
import { routes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ProductComponent,
    HomeComponent,
    CartComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
