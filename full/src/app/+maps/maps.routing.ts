
import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";
import {MapsComponent} from "./maps.component";
import {MessageCategoryComponent} from './message-category/message-category.component'
import {GroupMessageComponent} from './group-message/group-message.component'

export const routes:Routes = [

  {
    path: '',
    component: MapsComponent
  },
  {path: 'messageCategory', component: MessageCategoryComponent, data: {pageTitle: 'Message Category'}},
    {path: 'groupMessage', component: GroupMessageComponent, data: {pageTitle: 'Group Message'}},
];

export const routing = RouterModule.forChild(routes);
