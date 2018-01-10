import { Component, OnInit } from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {Router, RouterModule} from "@angular/router";

@FadeInTop()
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

    create(){
        console.log("create Users Page");
        this.router.navigate(['/smartadmin/userCreate']);
    }
}
