import {NgModule} from "@angular/core";
import {HeaderComponent} from "./layout/header/header.component";
import { FooterComponent } from './layout/footer/footer.component';
import {CommonModule} from "@angular/common";

const components = [
  HeaderComponent,
  FooterComponent
]
@NgModule({
  declarations: [...components],
  imports: [
    CommonModule
  ],
  exports: [...components]
})

export class SharedModule{}
