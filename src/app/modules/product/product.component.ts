import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Subscription} from "rxjs";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {

  productSubscription : Subscription | undefined;

  products : Product[] = [];

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe((productRes)=>{
      console.log(productRes);
      this.products = productRes.products;
      console.log(this.products)
    }, (error) =>{
      console.log(error.message())
    });

  }

  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe();
  }

}
