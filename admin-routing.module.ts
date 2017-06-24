import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin/index',
    loadChildren: './admin-index/admin-index.module#AdminIndexModule'
  },
  {
    path: 'admin/money',
    loadChildren: './admin-money/admin-money.module#AdminMoneyModule'
  },
  {
    path:'admin/setting',
    loadChildren: './admin-setting/admin-setting.module#AdminSettingModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
