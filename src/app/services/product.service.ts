import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn : 'root'
})
export class ProductService{
  // define the api
  private readonly apiUrl = environment.apiUrl;
}
