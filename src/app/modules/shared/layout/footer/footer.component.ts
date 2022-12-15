import { Component, OnInit } from '@angular/core';
import {VersionService} from "../../../../services/version.service";
import {RightService} from "../../../../services/right.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  array = [1,2,3,4,5];

  version : string | undefined;
  copyright : string | undefined;
  constructor(private versionService : VersionService, private rightService : RightService) { }

  ngOnInit(): void {
    this.version = this.versionService.getVersion()
    this.copyright = this.rightService.getCopyright();
    console.log('NG FOOTER')
  }



}
