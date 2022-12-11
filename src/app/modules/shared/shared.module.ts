import {NgModule} from "@angular/core";
import {HeaderComponent} from "./layout/header/header.component";

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports :[
    HeaderComponent
  ]
})

export class SharedModule{}
