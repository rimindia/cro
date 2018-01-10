
import { NgModule } from '@angular/core';

import { SmartadminModule } from '../shared/smartadmin.module'


import {SparklinesComponent} from "./+sparklines/sparklines.component";
import {EasyPieChartsComponent} from "./+easy-pie-charts/easy-pie-charts.component";

import { routing } from './graphs-showcase.routing';
import {InlineGraphsModule} from "../shared/graphs/inline/inline-graphs.module";
import { AssetCreationComponent } from './asset-creation/asset-creation.component';
import { IssueOfPropsComponent } from './issue-of-props/issue-of-props.component';
import { ProsCreationComponent } from './pros-creation/pros-creation.component';
import { DiscountComponent } from './discount/discount.component';
import { PromotionComponent } from './promotion/promotion.component';
import { SalesComponent } from './sales/sales.component';
import { SchemesComponent } from './schemes/schemes.component';
import { FlashMessageComponent } from './flash-message/flash-message.component';
import { TrainingVideoComponent } from './training-video/training-video.component';

@NgModule({
    declarations: [
      SparklinesComponent,
      EasyPieChartsComponent,
      AssetCreationComponent,
      IssueOfPropsComponent,
      ProsCreationComponent,
      DiscountComponent,
      PromotionComponent,
      SalesComponent,
      SchemesComponent,
      FlashMessageComponent,
      TrainingVideoComponent,
    ],
    imports: [
        SmartadminModule,
        routing
    ],
    providers: [],
    entryComponents:[AssetCreationComponent, IssueOfPropsComponent, ProsCreationComponent, DiscountComponent, PromotionComponent, SalesComponent, SchemesComponent,
                     FlashMessageComponent, TrainingVideoComponent],
})
export class GraphsShowcaseModule {

}
