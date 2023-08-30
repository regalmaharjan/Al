import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { products } from './shared/models/product';
import { ProductpageComponent } from './productpage/productpage.component';
import { CartPageComponent } from './cart-page/cart-page.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search/:searchItem',component:HomeComponent},
  {path:'tag/:tag', component:HomeComponent},
  {path:'product/:id', component:ProductpageComponent},
  {path:'cart-page', component:CartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
