import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DatatablesCaseComponent1} from "./datatables-case.component";
/*import {CreateAccesspolicyComponent} from "./create-accesspolicy/create-accesspolicy.component";*/

const routes: Routes = [{
  path: '',
  component: DatatablesCaseComponent1
  }/*,
  {
    path: 'ceate-accesspolicy',
    component: CreateAccesspolicyComponent
  }*/];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatatablesCaseRoutingModule { }
