import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Seller} from '../services/seller'
import { Router } from '@angular/router';
import { SignUp } from '../data-type';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './seller-auth.html',
  styleUrls: ['./seller-auth.css']   
})
export class SellerAuth {

  showLogin = false
  authError:string ='';
  constructor(private seller:Seller){}

  ngOnInit():void{
    this.seller.reloadSeller()
  }

  signUp(data:SignUp):void{
    this.seller.userSignUp(data);
  }
  Login(data:SignUp):void{
    this.seller.userLogin(data)
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError="Email or pasword is not correct"
      }
      
    })
  }

  openLogin(){
    this.showLogin=true
  }
  openSignUp(){
    this.showLogin=false
  }
}
