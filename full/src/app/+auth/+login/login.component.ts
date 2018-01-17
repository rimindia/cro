import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../auth.service";
import { SessionStorageService } from '../../services/session-storage.service';
import { Login } from 'app/+auth/+login/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
    styleUrls: [
        './login.component.css']

})
export class LoginComponent implements OnInit {

  public username;
  public password;

  constructor(
    private authservice: AuthService,
    private sessionStorageService: SessionStorageService,
    private router: Router
  ) { }

  ngOnInit() {}

  login(login: Login){
    let body = new URLSearchParams();
    body.set("username", login.UserName);
    body.set("password", login.Password);

    this.authservice
        .login(body.toString())
        .then((response: any) => {
          //TODO: Get the current user id and store it in local storage
          
          this.authservice.isLoggedIn = true;
          this.sessionStorageService.set('user', response);
          this.router.navigate(['/analytics']);
        });
  }
}
