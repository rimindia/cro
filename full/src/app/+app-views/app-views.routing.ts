
import {RouterModule, Routes} from "@angular/router";
import {ApplyLeaveComponent} from './apply-leave/apply-leave.component'
import {ApproveLeaveComponent} from './approve-leave/approve-leave.component'


export const routes:Routes = [
  {
    path: 'forum',
    loadChildren: './+forum/forum.module#ForumModule'
  },
  {
    path: 'profile',
    loadChildren: './+profile/profile.module#ProfileModule'
  },
  {
    path: 'blog',
    loadChildren: './+blog/blog.module#BlogModule'
  },
  {
    path: 'gallery',
    loadChildren: './+gallery/gallery-demo.module#GalleryDemoModule'
  },
  {
    path: 'timeline',
    loadChildren: './+timeline/timeline.module#TimelineModule'
  },
  {
    path: 'projects',
    loadChildren: './+projects/projects-list.module#ProjectsListModule'
  },
  {path: 'applyLeave', component: ApplyLeaveComponent, data: {pageTitle: 'Apply Leave'}},
  {path: 'approveLeave', component: ApproveLeaveComponent, data: {pageTitle: 'Approve Leave'}},
];

export const routing = RouterModule.forChild(routes);
