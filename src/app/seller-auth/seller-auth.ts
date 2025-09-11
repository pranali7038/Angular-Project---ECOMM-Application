import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './seller-auth.html',
  styleUrls: ['./seller-auth.css']   
})
export class SellerAuth {

  signUp(data:object):void{
    console.log(data);
    
  }
}
