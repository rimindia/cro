import {NgModule} from "@angular/core";

import {routing} from "./app-views.routing";
import {SmartadminModule} from "../shared/smartadmin.module";
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { ApproveLeaveComponent } from './approve-leave/approve-leave.component';

@NgModule({
  declarations: [

  ApplyLeaveComponent,

  ApproveLeaveComponent],
  imports: [
    SmartadminModule,
    routing,

  ],
  entryComponents: [ApplyLeaveComponent, ApproveLeaveComponent]
})
export class AppViewsModule {
}
