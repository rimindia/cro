
import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from "@angular/router";
import {ReadMoreComponent} from './read-more/read-more.component'
import {AppLayoutsComponent} from "../+smartadmin-intel/app-layouts/app-layouts.component";

export const routes:Routes = [
  {
    path: 'login',
    loadChildren: './+login/login.module#LoginModule'
  },
  {path: 'readMore', component: ReadMoreComponent, data: {pageTitle: 'Read More'}},
  {
    path: 'register',
    loadChildren: './+register/register.module#RegisterModule'
  },
  {
    path: 'forgot-password',
    loadChildren: './+forgot/forgot.module#ForgotModule'
  },
  {
    path: 'locked',
    loadChildren: './+locked/locked.module#LockedModule'
  }
];

export const routing = RouterModule.forChild(routes);
