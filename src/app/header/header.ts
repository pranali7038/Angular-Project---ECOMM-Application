import { CommonModule} from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterLink,Router} from '@angular/router';
import { Seller } from '../services/seller';

@Component({
  selector: 'app-header',
  imports: [RouterLink,CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  sellerName:string ="";
  menuType:string = "default"
  constructor(private route:Router){}

  ngOnInit():void{
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          let sellerStore = localStorage.getItem('seller');
          let sellerData = sellerStore && JSON.parse(sellerStore);
          this.sellerName = sellerData.name;
          this.menuType = "seller";
          
        }else{
          this.menuType ="default"
          
        }
      } 
      
    });
  }

  Logout(){
    localStorage.removeItem('seller');
    this.route.navigate(["/"])
  }

}
