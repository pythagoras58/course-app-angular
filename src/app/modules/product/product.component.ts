import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Subscription} from "rxjs";
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {

  productSubscription : Subscription | undefined;

  products : ProductModel[] = [];

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
   this.productSubscription = this.productService.getProduct().subscribe((products)=>{
      console.log(products)
    }, (error) =>{
      console.log(error.message())
    });

  }

  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe();
  }

}
