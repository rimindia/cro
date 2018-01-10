import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SmartadminModule} from "../../shared/smartadmin.module";
import {AccessPolicyComponent} from "./access-policy.component";
import {SmartadminDatatableModule} from "../../shared/ui/datatable/smartadmin-datatable.module";
import { DatatablesRestDemoComponent } from './datatables-rest-demo.component';
import {AccessPolicyRoutingModule} from "./access-policy-routing.module";


@NgModule({
    imports: [
        CommonModule,
        SmartadminModule,
        SmartadminDatatableModule,
        AccessPolicyRoutingModule
    ],
    declarations: [
        AccessPolicyComponent, DatatablesRestDemoComponent
    ]
})

export class AccessPolicyModule { }