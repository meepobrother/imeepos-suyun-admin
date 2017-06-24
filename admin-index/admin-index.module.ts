import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminIndexRoutingModule } from './admin-index-routing.module';
import { AdminIndexComponent } from './admin-index.component';
import {AdminFooterModule, WeuiGridsModule} from "imeepos-runner-components";

@NgModule({
  imports: [
    CommonModule,
    AdminIndexRoutingModule,
    WeuiGridsModule,
    AdminFooterModule
  ],
  declarations: [AdminIndexComponent]
})
export class AdminIndexModule { }
