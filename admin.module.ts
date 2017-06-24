import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {SettingModule} from "./setting/setting.module";
import {ManageModule} from "./manage/manage.module";

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SettingModule,
    ManageModule
  ],
  declarations: []
})
export class AdminModule { }
