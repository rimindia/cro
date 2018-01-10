import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {routing} from "./auth.routing";
import { AuthComponent } from './auth.component';
import { ReadMoreComponent } from './read-more/read-more.component';

@NgModule({
  imports: [
    CommonModule,

    routing,
  ],
  declarations: [ AuthComponent, ReadMoreComponent]
})
export class AuthModule { }
