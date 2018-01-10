import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';

import {SparklinesComponent} from "./+sparklines/sparklines.component";
import {EasyPieChartsComponent} from "./+easy-pie-charts/easy-pie-charts.component";
import {AssetCreationComponent} from './asset-creation/asset-creation.component'
import {IssueOfPropsComponent} from "./issue-of-props/issue-of-props.component";
import {ProsCreationComponent} from "./pros-creation/pros-creation.component";
import {DiscountComponent} from './discount/discount.component'
import {PromotionComponent} from './promotion/promotion.component'
import {SalesComponent} from './sales/sales.component'
import {SchemesComponent} from './schemes/schemes.component'
import {FlashMessageComponent} from './flash-message/flash-message.component'
import {TrainingVideoComponent} from './training-video/training-video.component'

export const routes: Routes = [
  {
    path: 'flot-charts',
    loadChildren: 'app/+graphs/+flot-charts/flot-charts.module#FlotChartsModule'
  },
  {
    path: 'morris-charts',
    loadChildren: 'app/+graphs/+morris-charts/morris-charts.module#MorrisChartsModule'
  },
  {
    path: 'sparklines',
    component: SparklinesComponent
  },
  {
    path: 'easy-pie-charts',
    component: EasyPieChartsComponent
  },
  {
    path: 'dygraphs',
    loadChildren: 'app/+graphs/+dygraphs/dygraphs.module#DygraphsModule'
  },
  {
    path: 'chart-js',
    loadChildren: 'app/+graphs/+chart-js/chart-js-showcase.module#ChartJsShowcaseModule'
  },
  {
    path: 'highchart-tables',
    loadChildren: 'app/+graphs/+highchart-tables/highchart-tables.module#HighchartTablesModule'
  },
    {path: 'assetCreation', component: AssetCreationComponent, data: {pageTitle: 'Asset Creation'}},
    {path: 'issueOfProps', component: IssueOfPropsComponent, data: {pageTitle: 'Issue Of Porps'}},
    {path: 'propsCreation', component: ProsCreationComponent, data: {pageTitle: 'Porps Creation'}},
    {path: 'discount', component: DiscountComponent, data: {pageTitle: 'Discount'}},
    {path: 'promotion', component: PromotionComponent, data: {pageTitle: 'Promotion '}},
    {path: 'sales', component: SalesComponent, data: {pageTitle: 'Sales'}},
    {path: 'schemes', component: SchemesComponent, data: {pageTitle: 'Schemes'}},
    {path: 'flashMessage', component: FlashMessageComponent, data: {pageTitle: 'Flash Message'}},
    {path: 'trainingVideo', component: TrainingVideoComponent, data: {pageTitle: 'Training Video'}},
];

export const routing = RouterModule.forChild(routes);
