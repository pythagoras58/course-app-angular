// create an array of routes

import {Routes} from "@angular/router";
import {HomeComponent} from "./modules/home/home/home.component";
import {ProfileComponent} from "./modules/profile/profile.component";

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
