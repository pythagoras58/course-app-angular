import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  array = [1,2,3,4,5];
  constructor() { }

  ngOnInit(): void {
    console.log('NG FOOTER')
  }

}
