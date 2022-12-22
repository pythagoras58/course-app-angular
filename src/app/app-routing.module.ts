// create an array of routes

import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./modules/home/home/home.component";
import {ProfileComponent} from "./modules/profile/profile.component";
import {NgModule} from "@angular/core";

const routes : Routes = [
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'profle',
    component : ProfileComponent
  }
];


@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule{}
