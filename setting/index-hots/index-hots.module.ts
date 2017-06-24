import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexHotsRoutingModule } from './index-hots-routing.module';
import { IndexHotsComponent } from './index-hots.component';

@NgModule({
  imports: [
    CommonModule,
    IndexHotsRoutingModule
  ],
  declarations: [IndexHotsComponent]
})
export class IndexHotsModule { }
