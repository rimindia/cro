
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }         from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { routing } from './smartadmin-intel.routing';
import { AppLayoutsComponent} from './app-layouts/app-layouts.component';
import {PrebuiltSkinsComponent} from "./prebuilt-skins/prebuilt-skins.component";
import { RoleComponent } from './role/role.component';
import { PageCreationComponent } from './page-creation/page-creation.component';
import { AccessPolicyComponent } from './access-policy/access-policy.component';
import { CreateAccessPolicyComponent } from './create-access-policy/create-access-policy.component';
import { UserComponent } from './user/user.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { RoleCreateComponent } from './role-create/role-create.component';
import { DeviceCreationComponent } from './device-creation/device-creation.component';
import { DeviceLogComponent } from './device-log/device-log.component';
/*import {DatatablesCaseComponent} from "../+tables/+datatables-case/datatables-case.component";*/


/*const routes: Routes = [{
    path: '',
    component: ''
}];*/

@NgModule({
  declarations: [
    AppLayoutsComponent,
    PrebuiltSkinsComponent,
    RoleComponent,
    PageCreationComponent,
    AccessPolicyComponent,
    CreateAccessPolicyComponent,
    UserComponent,
    UserCreateComponent,
    RoleCreateComponent,
    DeviceCreationComponent,
    DeviceLogComponent
  ],
  imports: [
    routing,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule

  ],
  entryComponents: [AppLayoutsComponent, PrebuiltSkinsComponent, CreateAccessPolicyComponent, UserComponent, UserCreateComponent, RoleCreateComponent, DeviceCreationComponent,
                    DeviceLogComponent],
})
export class SmartadminIntelModule {

}
