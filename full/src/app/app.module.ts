import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, XHRBackend, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../app/services/token-interceptor'

/*
 * Platform and Environment providers/directives/pipes
 */
import { routing } from './app.routing'
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import {AccessPolicyService} from './+smartadmin-intel/access-policy.service';

// Core providers
import {CoreModule} from "./core/core.module";
import {SmartadminLayoutModule} from "./shared/layout/layout.module";
import { NgxDatatableCaseComponent } from './ngx-datatable-case/ngx-datatable-case.component';

import { SessionStorageService } from '../app/services/session-storage.service'


// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,


  ],
  imports: [ // import Angular's modules
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    CoreModule,
    SmartadminLayoutModule,
    routing
  ],
  exports: [
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    // ENV_PROVIDERS,
      APP_PROVIDERS,
      AccessPolicyService,
      SessionStorageService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
      }
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) {}
}