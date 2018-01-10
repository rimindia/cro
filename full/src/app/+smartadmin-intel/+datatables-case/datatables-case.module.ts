import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {DatatablesCaseComponent1} from "./datatables-case.component";
import {SmartadminDatatableModule} from "../../shared/ui/datatable/smartadmin-datatable.module";
import {DatatablesCaseRoutingModule} from "./datatables-case-routing.module";
/*import {CreateAccesspolicyComponent} from "./create-accesspolicy/create-accesspolicy.component"*/


@NgModule({
  imports: [
    CommonModule,
    SmartadminModule,
    SmartadminDatatableModule,
    DatatablesCaseRoutingModule

  ],
  declarations: [
     DatatablesCaseComponent1/*, CreateAccesspolicyComponent,*/
  ]
})
export class DatatablesCaseModule { }
