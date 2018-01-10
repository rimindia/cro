import {NgModule} from "@angular/core";

import {routing} from "./forms-showcase.routing";
import { ProductionTrackingComponent } from './production-tracking/production-tracking.component';
import { ProductComponent } from './product/product.component';
import { StoresComponent } from './stores/stores.component';
import { ProductionCreationComponent } from './production-creation/production-creation.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductTransferComponent } from './product-transfer/product-transfer.component';
import { DefectiveProductsComponent } from './defective-products/defective-products.component';

@NgModule({
  declarations: [
  ProductionTrackingComponent,
  ProductComponent,
  StoresComponent,
  ProductionCreationComponent,
  ProductCategoryComponent,
  ProductTransferComponent,
  DefectiveProductsComponent],
  imports: [
    routing,
  ],
  providers: [],
  entryComponents: [ProductionTrackingComponent, ProductComponent, StoresComponent, ProductionCreationComponent,
                    ProductCategoryComponent, ProductTransferComponent, DefectiveProductsComponent]
})
export class FormsShowcaseModule {}

