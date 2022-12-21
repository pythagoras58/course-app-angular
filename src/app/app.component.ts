import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable, of, Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit, OnDestroy{
  title = 'course-app';
  headerTitle = 'Pythagoras';

  // data binding
  name : string | undefined;
  surname : string | undefined;

  formGroup : FormGroup | undefined;

  constructor(private formBuilder : FormBuilder) {
  }

  observableS : Observable<number> = of(1,2,3,4,5);
  subscription : Subscription | undefined;

  ngOnInit(): void {
    this.displayObservableNumbers();
    this.formGroup = this.formBuilder.group({
      name : [undefined, [Validators.required, Validators.minLength(8)]],
      surname : [undefined, [Validators.required,Validators.minLength(8)]]
    });
  }

  private displayObservableNumbers(): void{
      this.subscription = this.observableS.subscribe(value => {
        console.log(value);
      });
  }
  onFormSubmit() : void{
    if(this.formGroup?.valid === false){
      console.log('Null Submission')
    }else{
      console.log(this.formGroup?.value)
    }

  }

  ngOnDestroy(): void {
  }
}
