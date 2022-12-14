import {Injectable} from "@angular/core";

@Injectable()

export class VersionService{
  private version = '1.0.0';

  public getVersion(){
    return this.version;
  }
}
