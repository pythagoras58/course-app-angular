import {Injectable} from "@angular/core";

@Injectable()

export class VersionService{
  public version = '1.0.0';

  public getVersion(){
    return this.version;
  }
}
