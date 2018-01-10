import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import {userInfo} from "os";

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;

  users=
   {
      admin: '123'
   };
  admin={
      user: 'password'
  };
  cro={
      cro: 'password'
  };
  manager={
      manager: 'password'
  }; 

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  /*login(): Observable<boolean> {
    return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  }*/

  constructor(private router: Router){

  }

  login(username: any, password: any){
     var key = btoa(btoa(username) + '??' + btoa(password));
     //console.log('\n auth login',username , password,'\n\n');
     console.log(key);
    if(username && password && this.users[username] && this.users[username]==password){
      this.isLoggedIn=true;
      /*this.router.navigate(['/dashboard/+analytics'])*/
      this.router.navigate(this.redirectUrl ? [this.redirectUrl] : ['/dashboard/+analytics'])
      /*console.log('\n', 'user credentials are valid', '\n\n');*/
      /*alert("user credentials are valid");*/

    }else if(username && password && this.admin[username] && this.admin[username]==password){
            this.isLoggedIn=true;
            /*this.router.navigate(['/dashboard/+analytics'])*/
            this.router.navigate(this.redirectUrl ? [this.redirectUrl] : ['/dashboard/+analytics'])
            /*console.log('\n', 'admin credentials are valid', '\n\n');*/


    } else if(username && password && this.cro[username] && this.cro[username]==password){
        this.isLoggedIn=true;
        /*this.router.navigate(['/dashboard/+analytics'])*/
        this.router.navigate(this.redirectUrl ? [this.redirectUrl] : ['/dashboard/+analytics'])
        /*console.log('\n', 'admin credentials are valid', '\n\n');*/


    } else if(username && password && this.manager[username] && this.manager[username]==password){
        this.isLoggedIn=true;
        /*this.router.navigate(['/dashboard/+analytics'])*/
        this.router.navigate(this.redirectUrl ? [this.redirectUrl] : ['/dashboard/+analytics'])
        /*console.log('\n', 'admin credentials are valid', '\n\n');*/


    } else {
      alert("user credentials is not valid");
      /*console.log('\n', 'user credentials is not valid','\n\n');*/

    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
