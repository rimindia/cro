
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';



import {AppLayoutsComponent} from './app-layouts/app-layouts.component'
import {PrebuiltSkinsComponent} from './prebuilt-skins/prebuilt-skins.component'
import {RoleComponent} from './role/role.component'
import {PageCreationComponent} from './page-creation/page-creation.component'
import {AccessPolicyComponent} from './access-policy/access-policy.component'
import {CreateAccessPolicyComponent} from './create-access-policy/create-access-policy.component'
import {UserComponent} from './user/user.component'
import {UserCreateComponent} from './user-create/user-create.component'
import {RoleCreateComponent} from './role-create/role-create.component'
import {DeviceCreationComponent} from './device-creation/device-creation.component'
import {DeviceLogComponent} from './device-log/device-log.component'
/*import {DatatablesCaseComponent} from "../+tables/+datatables-case/datatables-case.component";*/


export const routes:Routes =  [

    {path: '', redirectTo: 'app-layouts', pathMatch: 'full'},
    /*{
        path: '',
        component: DatatablesCaseComponent
    },*/
    {path: 'app-layouts', component: AppLayoutsComponent, data: {pageTitle: 'Access Layout'}},
    {path: 'prebuilt-skins', component: PrebuiltSkinsComponent},
    {path: 'role', component: RoleComponent, data: {pageTitle: 'Role'}},
    {path: 'roleCreate', component: RoleCreateComponent, data: {pageTitle: 'Role'}},
    {path: 'page-creation', component: PageCreationComponent, data: {pageTitle: 'Page-Creation'}},
    {path: 'accessPolicy', component: AccessPolicyComponent, data: {pageTitle: 'Access Policy Details'}},
    {path: 'create-access', component: CreateAccessPolicyComponent, data: {pageTitle: 'Access Policy Details'}},
    {path: 'userComponent', component: UserComponent, data: {pageTitle: 'User'}},
    {path: 'userCreate', component: UserCreateComponent, data: {pageTitle: 'User'}},
    {path: 'deviceCreation', component: DeviceCreationComponent, data: {pageTitle: 'Device Creation'}},
    {path: 'deviceLog', component: DeviceLogComponent, data: {pageTitle: 'Device Log'}},
    {
        path: 'bootstrap-validation',
        loadChildren: 'app/+forms/+bootstrap-validation/bootstrap-validation.module#BootstrapValidationModule',
        data: {pageTitle: 'Bootstrap Validation'}
    },
    /*{
        path: 'accessPolicy',
        loadChildren: 'app/+smartadmin-intel/+datatables-case/datatables-case.module#DatatablesCaseModule',
        data: {pageTitle: 'Access Policy Details'}
    }*/
  ]

export const routing = RouterModule.forChild(routes);
