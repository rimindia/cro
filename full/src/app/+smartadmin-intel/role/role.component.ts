import { Component, OnInit } from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {Router, RouterModule} from "@angular/router";

@FadeInTop()
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

    create(){
        console.log("create Users Page");
        this.router.navigate(['/smartadmin/roleCreate']);
    }
}
