// create an array of routes

import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./modules/home/home/home.component";
import {ProfileComponent} from "./modules/profile/profile.component";
import {NgModule} from "@angular/core";
import {ProductComponent} from "./modules/product/product.component";

const routes : Routes = [
  {
    path : '',
    redirectTo : 'home',
    pathMatch : 'full'
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'profile',
    component : ProfileComponent
  },
  {
    path : 'product',
    component : ProductComponent
  }
];


@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule{}
