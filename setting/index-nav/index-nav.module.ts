import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexNavRoutingModule } from './index-nav-routing.module';
import { IndexNavComponent } from './index-nav.component';

@NgModule({
  imports: [
    CommonModule,
    IndexNavRoutingModule
  ],
  declarations: [IndexNavComponent]
})
export class IndexNavModule { }
