import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Seller} from '../services/seller'
import { Router } from '@angular/router';
import { SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './seller-auth.html',
  styleUrls: ['./seller-auth.css']   
})
export class SellerAuth {

  constructor(private seller:Seller,private router:Router){}

  signUp(data:SignUp):void{
    this.seller.userSignUp(data).subscribe((result)=>{
        if(result){
          this.router.navigate(['seller-home'])
        }
        
    });
  }
}
