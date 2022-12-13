import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'course-app';
  headerTitle = 'Pythagoras';

  // data binding
  name : string | undefined;
  surname : string | undefined;

  formGroup : FormGroup | undefined;

  constructor(private formBuilder : FormBuilder) {
  }




  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name : undefined,
      surname : undefined
    });
  }

  onFormSubmit() : void{
    console.log(this.formGroup?.value)
  }
}
