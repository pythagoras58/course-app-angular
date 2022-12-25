import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Product, ProductResponse} from "../models/product.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn : 'root'
})
export class ProductService{
  // define the api
  private readonly apiUrl = environment.apiUrl;

  constructor(private http : HttpClient) {
  }

  getProduct() : Observable<ProductResponse>{
    return this.http.get<ProductResponse>(this.apiUrl+'/products');
  }
}
