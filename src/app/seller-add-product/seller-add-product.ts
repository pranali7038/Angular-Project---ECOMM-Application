import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../services/product';


@Component({
  selector: 'app-seller-add-product',
  imports: [FormsModule],
  templateUrl: './seller-add-product.html',
  styleUrl: './seller-add-product.css'
})
export class SellerAddProduct {
    addproductMessage:string | undefined;
    constructor(private product:Product){}

    ngOnInit():void{

    }
    submit(data:Product){
      this.product.addProduct(data).subscribe((result)=>{
        console.log(result);
        if(result){
          this.addproductMessage="Product is added successfully"
        }
      });

      setTimeout(()=>{
          this.addproductMessage=undefined;
      },3000)
      
    }
}
