import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminMoneyRoutingModule } from './admin-money-routing.module';
import { AdminMoneyComponent } from './admin-money.component';
import {AdminFooterModule} from "imeepos-runner-components";

@NgModule({
  imports: [
    CommonModule,
    AdminMoneyRoutingModule,
    AdminFooterModule
  ],
  declarations: [AdminMoneyComponent]
})
export class AdminMoneyModule { }
