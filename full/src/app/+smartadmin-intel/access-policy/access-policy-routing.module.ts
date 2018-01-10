import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccessPolicyComponent} from "./access-policy.component";

const routes: Routes = [{
  path: '',
  component: AccessPolicyComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessPolicyRoutingModule { }
