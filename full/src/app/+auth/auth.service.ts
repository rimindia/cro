import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import {userInfo} from "os";
import { Login } from 'app/+auth/+login/login';
import { Config } from '../shared/config/env.config';
import { RequestOptions } from '@angular/http/src/base_request_options';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private router: Router, private http: HttpClient){}

  login(loginData: any): any {
    return this.http
              .get(Config.LoginEndpoint, loginData)
              .toPromise()
              .then((response: any) => {
                return response;
              })
              .catch((error) => {                
                return Promise.reject(error);
              });
  }

  logout(): any {
    this.isLoggedIn = false;

    return this.http
              .post(Config.LogoutEndpoint, {})
              .toPromise()
              .then((response: any) => {
                return response;
              })
              .catch((error) => {
                return Promise.reject(error);
              });
  }
}
