
import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from "@angular/router";
import {OutlookComponent} from "./outlook.component";
import {FolderComponent} from "./folder/folder.component";
import {DetailsComponent} from "./details/details.component";
import {ReplayComponent} from "./replay/replay.component";
import {ComposeComponent} from "./compose/compose.component";
import {ReportComponent} from './report/report.component'


export const routes: Routes = [
  {
    path: '',
    component: OutlookComponent,
    children: [
      {
        path: '',
        redirectTo: 'inbox',
        pathMatch: 'full'
      },

      {
        path: 'details/:id',
        component: DetailsComponent
      },
      {
        path: 'reply/:id',
        component: ReplayComponent
      },
      {
        path: 'compose',
        component: ComposeComponent
      },
      {
        path: ':folder',
        component: FolderComponent
      },
      {path: 'report', component: ReportComponent, data: {pageTitle: 'Reports'}},
    ]
  }
];


export const routing = RouterModule.forChild(routes);
