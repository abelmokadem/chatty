import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegmentComponent } from './segment/segment.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SegmentComponent
  ],
  exports: [
    SegmentComponent
  ]
})
export class ComponentsModule { }
