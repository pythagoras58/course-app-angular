import { Component, OnInit } from '@angular/core';
import {VersionService} from "../../../../services/version.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  array = [1,2,3,4,5];

  version : string | undefined;
  constructor(private versionService : VersionService) { }

  ngOnInit(): void {
    this.version = this.versionService.getVersion()
    console.log('NG FOOTER')
  }



}
