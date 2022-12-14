import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl : 'header.component.html',
  styleUrls:['header.component.css']
})

export class HeaderComponent implements OnInit{

  @Input() title : string | undefined;

  // PIPES
  capitalText = 'CAPITAL';
  isodate = '2011-10-05T14:48:00.000Z';

  amount = '3043223';
  num = 92.32;
  birthday : Date = new Date(1996,5,12);

  fullname : string = 'Danso Solomon Danquah';
  constructor() {
  }
  ngOnInit(): void {
    console.log('NG HEADER')
  }
}
