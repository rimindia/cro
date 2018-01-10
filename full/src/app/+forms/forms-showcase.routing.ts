
import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";
import {ProductionTrackingComponent} from './production-tracking/production-tracking.component'
import {ProductComponent} from './product/product.component';
import {StoresComponent} from './stores/stores.component'
import {ProductionCreationComponent} from './production-creation/production-creation.component'
import {ProductCategoryComponent} from './product-category/product-category.component'
import {ProductTransferComponent} from './product-transfer/product-transfer.component'
import {DefectiveProductsComponent} from "./defective-products/defective-products.component";

export const routes:Routes = [
  { path: 'editors',
    loadChildren: 'app/+forms/+bootstrap-editors/bootstrap-editors.module#BootstrapEditorsModule',
    data: {pageTitle: 'Bootstrap Editors'}
  },

  { path: 'bootstrap-elements',
    loadChildren: 'app/+forms/+bootstrap-elements/bootstrap-elements.module#BootstrapElementsModule',
    data: {pageTitle: 'Bootstrap Elements'}
  },

  {
    path: 'bootstrap-validation',
    loadChildren: 'app/+forms/+bootstrap-validation/bootstrap-validation.module#BootstrapValidationModule',
    data: {pageTitle: 'Bootstrap Validation'}
  },
  {
    path: 'dropzone',
    loadChildren: 'app/+forms/+dropzone-showcase/dropzone-showcase.module#DropzoneShowcaseModule',
    data: {pageTitle: 'Dropzone'}
  },
  {
    path: 'elements',
    loadChildren: 'app/+forms/+form-elements/form-elements.module#FormElementsModule',
    data: {pageTitle: 'Elements'}
  },
  {
    path: 'layouts',
    loadChildren: 'app/+forms/+form-layouts/form-layouts.module#FormLayoutsModule',
    data: {pageTitle: 'Layouts'}
  },
  {
    path: 'plugins',
    loadChildren: 'app/+forms/+form-plugins/form-plugins.module#FormPluginsModule',
    data: {pageTitle: 'Plugins'}
  },
  {
    path: 'validation',
    loadChildren: 'app/+forms/+form-validation/form-validation.module#FormValidationModule',
    data: {pageTitle: 'Validation'}
  },
  {
    path: 'image-cropping',
    loadChildren: 'app/+forms/+image-cropping/image-editor.module#ImageEditorModule',
    data: {pageTitle: 'Image Cropping'}},
  {
    path: 'wizards',
    loadChildren: 'app/+forms/+wizards/wizards.module#WizardsModule',
    data: {pageTitle: 'Wizards'}
  },
  {path: 'productionTracking', component: ProductionTrackingComponent, data: {pageTitle: 'Product Tracking'}},
  {path: 'product', component: ProductComponent, data: {pageTitle: 'Product'}},
  {path: 'store', component: StoresComponent, data: {pageTitle: 'Stores'}},
  {path: 'productionCreation', component: ProductionCreationComponent, data: {pageTitle: 'Production Creation'}},
  {path: 'productCategory', component: ProductCategoryComponent, data: {pageTitle: 'Product Category'}},
    {path: 'productTransfer', component: ProductTransferComponent, data: {pageTitle: 'Product Transfer'}},
    {path: 'defectiveProducts', component: DefectiveProductsComponent, data: {pageTitle: 'Defective Products'}},
];

export const routing = RouterModule.forChild(routes);
