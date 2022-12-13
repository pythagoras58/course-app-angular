import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";

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

  constructor(private formBuilder : FormBuilder) {

  }
  onFormSubmit() : void{
    console.log('FORM DATA')
    console.log(this.name)
    console.log(this.surname)
  }

  ngOnInit(): void {
  }
}
