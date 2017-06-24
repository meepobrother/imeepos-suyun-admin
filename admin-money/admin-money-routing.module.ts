import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminMoneyComponent} from "./admin-money.component";

const routes: Routes = [
  {
    path: '',
    component: AdminMoneyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminMoneyRoutingModule { }
