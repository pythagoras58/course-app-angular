import {NgModule} from "@angular/core";
import {HeaderComponent} from "./layout/header/header.component";
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports :[
    HeaderComponent,
    FooterComponent
  ]
})

export class SharedModule{}
