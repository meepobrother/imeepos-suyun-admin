import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSettingRoutingModule } from './admin-setting-routing.module';
import { AdminSettingComponent } from './admin-setting.component';
import {AdminFooterModule, WeuiGridsModule} from "imeepos-runner-components";

@NgModule({
  imports: [
    CommonModule,
    AdminSettingRoutingModule,
    AdminFooterModule,
    WeuiGridsModule
  ],
  declarations: [AdminSettingComponent]
})
export class AdminSettingModule { }
