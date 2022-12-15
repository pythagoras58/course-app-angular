import {Injectable} from "@angular/core";

@Injectable({providedIn : 'root'})

export class RightService{
    private copyright = 'Pythagoras';

    public getCopyright(){
      return this.copyright;
    }
}
