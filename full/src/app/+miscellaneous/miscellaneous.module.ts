import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routing} from "./miscellaneous.routing";
import { VideoComponent } from './video/video.component';



@NgModule({
  imports: [
    CommonModule,
    routing,

  ],
  declarations: [VideoComponent],
    entryComponents:[VideoComponent],
})
export class MiscellaneousModule { }
