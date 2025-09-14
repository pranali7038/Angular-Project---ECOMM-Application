import { CommonModule} from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterLink,Router} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink,CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  menuType:string = "default"
  constructor(private route:Router){}

  ngOnInit():void{
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          console.log("this is seller area");
          this.menuType = "seller";
          
        }else{
          this.menuType ="default"
          
        }
      } 
      
    })
  }

}
