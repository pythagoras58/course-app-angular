import {Injectable} from "@angular/core";

@Injectable()

export class VersionService{
  public static version = '1.0.0';

  public getVersion(){
    return VersionService.version;
  }
}
