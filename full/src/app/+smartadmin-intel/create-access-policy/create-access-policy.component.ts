import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AccessPolicyService} from '../access-policy.service';
import {AccessPolicy} from '../access-policy';

import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {Router, RouterModule} from "@angular/router";


@FadeInTop()
@Component({
  selector: 'app-create-access-policy',
  templateUrl: './create-access-policy.component.html',
  styleUrls: ['./create-access-policy.component.css']
})
export class CreateAccessPolicyComponent implements OnInit {

    allAccessPolicy: AccessPolicy[];
    statusCode: number;
    requestProcessing = false;
    accessIdToUpdate = null;
    processValidation = false;

    accessForm = new FormGroup({
        policyId: new FormControl('', Validators.required),
        policyName: new FormControl('', Validators.required),
        policyDescription: new FormControl('', Validators.required)
    });

  constructor(private router: Router, private accessService: AccessPolicyService) { }

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
        /*if (this.accessForm.invalid) {
            return; //Validation failed, exit from method.
        }*/
        //Form is valid, now perform create or update
        this.preProcessConfigurations();
        let policyId = this.accessForm.get('policyId').value.trim();
        let policyName = this.accessForm.get('policyName').value.trim();
        let policyDescription = this.accessForm.get('policyDescription').value.trim();
        const temp = {policyId:'policyId',policyName:'policyName',policyDescription:'policyDescription'}
        let article = new AccessPolicy(policyId, policyName, policyDescription);
        this.accessService.createAccess(article)
            .subscribe(successCode => {
                    this.statusCode = successCode;
                    /*this.getAllAccess();*/
                    this.backToCreateArticle();
                },
                errorCode => this.statusCode = errorCode);
        /*if (this.accessIdToUpdate === null) {
            //Handle create article
            let article = new AccessPolicy(policyId, policyName, policyDescription);
            this.accessService.createAccess(article)
                .subscribe(successCode => {
                        this.statusCode = successCode;
                        /!*this.getAllAccess();*!/
                        this.backToCreateArticle();
                    },
                    errorCode => this.statusCode = errorCode);
        }*/


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

    /*save(){
        console.log("save method");
        /!*this.accessService.accessUrl;*!/
    }*/

    clear(){
        this.accessForm.reset();
    }

    back(){
        console.log("Back to access policy page");
        this.router.navigate(['/smartadmin/accessPolicy']);
    }


}
