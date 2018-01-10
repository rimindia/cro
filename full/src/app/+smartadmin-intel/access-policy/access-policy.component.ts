import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AccessPolicyService} from '../access-policy.service';
import {AccessPolicy} from '../access-policy';

import {Router, RouterModule} from "@angular/router";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";

@FadeInTop()
@Component({
  selector: 'app-access-policy',
  templateUrl: './access-policy.component.html',
  styleUrls: ['./access-policy.component.css']
})
export class AccessPolicyComponent implements OnInit {

    allAccessPolicy: AccessPolicy[];
    statusCode: number;
    requestProcessing = false;
    accessIdToUpdate = null;
    processValidation = false;

    accessForm = new FormGroup({
        title: new FormControl('', Validators.required),
        category: new FormControl('', Validators.required)
    });

    constructor(private router: Router, private accessService: AccessPolicyService) {
    }

    ngOnInit(): void {
        /*this.getAllAccess();*/
    }

    /*getAllAccess() {
        this.accessService.getAllAccess()
            .subscribe(
                data => this.allAccessPolicy = data,
                errorCode => this.statusCode = errorCode);
    }*/

    onArticleFormSubmit() {
        this.processValidation = true;
        if (this.accessForm.invalid) {
            return; //Validation failed, exit from method.
        }
        //Form is valid, now perform create or update
        this.preProcessConfigurations();
        let policyName = this.accessForm.get('policyName').value.trim();
        let policyDescription = this.accessForm.get('policyDescription').value.trim();
        if (this.accessIdToUpdate === null) {
            //Handle create article
            let article = new AccessPolicy(null, policyName, policyDescription);
            this.accessService.createAccess(article)
                .subscribe(successCode => {
                        this.statusCode = successCode;
                        /*this.getAllAccess();*/
                        this.backToCreateArticle();
                    },
                    errorCode => this.statusCode = errorCode);
        }


    }

    preProcessConfigurations() {
        this.statusCode = null;
        this.requestProcessing = true;
    }
    //Go back from update to create
    backToCreateArticle() {
        this.accessIdToUpdate = null;
        this.accessForm.reset();
        this.processValidation = false;
    }


    create(){
        console.log("create Access Policy Page");
        this.router.navigate(['/smartadmin/create-access']);
    }

    home(){
        console.log("Home Page");
        this.router.navigate(['/dashboard/+analytics']);
    }

}
