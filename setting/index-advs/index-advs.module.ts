import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexAdvsRoutingModule } from './index-advs-routing.module';
import { IndexAdvsComponent } from './index-advs.component';

@NgModule({
  imports: [
    CommonModule,
    IndexAdvsRoutingModule
  ],
  declarations: [IndexAdvsComponent]
})
export class IndexAdvsModule { }
