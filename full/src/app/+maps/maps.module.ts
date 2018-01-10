

import {NgModule} from "@angular/core";
import {SmartadminModule} from "../shared/smartadmin.module";
import {MapsComponent} from "./maps.component";
import {MapStyleService} from "./shared/map-style.service";
import {GoogleAPIService} from "./shared/google-api.service";
import {routing} from "./maps.routing";
import { MessageCategoryComponent } from './message-category/message-category.component';
import { GroupMessageComponent } from './group-message/group-message.component';

@NgModule({
  imports: [routing, SmartadminModule],
  declarations: [MapsComponent, MessageCategoryComponent, GroupMessageComponent],
  exports: [MapsComponent],
  providers: [GoogleAPIService, MapStyleService],
  entryComponents:[MessageCategoryComponent, GroupMessageComponent],
})
export class MapsModule{}
