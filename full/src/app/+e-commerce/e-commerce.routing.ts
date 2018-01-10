
import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from "@angular/router";
import {OrdersComponent} from "./orders/orders.component";
import {ProductsViewComponent} from "./products-view/products-view.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {LfsCreationComponent} from './lfs-creation/lfs-creation.component'
import {LfsGroupComponent} from './lfs-group/lfs-group.component'
import {LfsStockComponent} from './lfs-stock/lfs-stock.component'

export const routes:Routes = [
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'products-view',
    component: ProductsViewComponent
  },
  {
    path: 'product-details',
    component: ProductDetailsComponent
  },
  {path: 'lfsCreation', component: LfsCreationComponent, data: {pageTitle: 'LFS Creation'}},
  {path: 'lfsGroup', component: LfsGroupComponent, data: {pageTitle: 'LFS Group/Network'}},
  {path: 'lfsStock', component: LfsStockComponent, data: {pageTitle: 'LFS Stock'}},
];

export const routing = RouterModule.forChild(routes)
