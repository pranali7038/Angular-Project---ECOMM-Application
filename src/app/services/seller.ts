import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, SignUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class Seller {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);

  constructor(private http: HttpClient, private router: Router) { }

  userSignUp(data: SignUp) {
    this.http.post('http://localhost:3000/seller', data, { observe: 'response' })
      .subscribe((result) => {
        console.log(result);
        if (result) {
          this.isSellerLoggedIn.next(true);
          localStorage.setItem('seller', JSON.stringify(result.body));
          this.router.navigate(['seller-home']);
        }
      });
  }

  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home'])
    }
  }

  userLogin(data: Login) {

    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`, {
      observe: 'response'
    }).subscribe((result: any) => {
      console.log(result);

      if (result && result.body && result.body.length > 0) {
        //  this.isLoginError.emit(false);
        // localStorage.setItem('seller',JSON.stringify(result.body[0])); 
        // this.router.navigate(['seller-home']); 
        const seller = result.body[0].data ? result.body[0].data : result.body[0];

        this.isLoginError.emit(false);
        localStorage.setItem('seller', JSON.stringify(seller));
        this.router.navigate(['seller-home']);
      } else {
        this.isLoginError.emit(true);

      }
    })

  }

}
