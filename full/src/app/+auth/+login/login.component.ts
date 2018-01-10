import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
    styleUrls: [
        './login.component.css']

})
export class LoginComponent implements OnInit {

  public username;
  public password;

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

  login(event){
    event.preventDefault();
    /*this.router.navigate(['/dashboard/+analytics'])*/
    this.authservice.login(this.username, this.password);
    //console.log('\n', this.username, this.password,'\n\n');
  }

}
