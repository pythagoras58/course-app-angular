import {NgModule} from "@angular/core";
import {HeaderComponent} from "./layout/header/header.component";
import { FooterComponent } from './layout/footer/footer.component';
import {CommonModule} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";

const components = [
  HeaderComponent,
  FooterComponent
]
@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    FormsModule
  ],
  exports: [...components]
})

export class SharedModule{}
