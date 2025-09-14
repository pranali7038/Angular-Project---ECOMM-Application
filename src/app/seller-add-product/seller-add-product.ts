import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-seller-add-product',
  imports: [FormsModule],
  templateUrl: './seller-add-product.html',
  styleUrl: './seller-add-product.css'
})
export class SellerAddProduct {

    constructor(){}

    ngOnInit():void{

    }
    submit(data:object){
      console.log(data);
      
    }
}
