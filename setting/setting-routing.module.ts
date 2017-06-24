import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin/setting/footer-bar',
    loadChildren: '../node_modules/imeepos-suyun-admin/setting/footer-bar/footer-bar.module#FooterBarModule'
  },
  {
    path: 'admin/setting/index-feed-tab',
    loadChildren: 'app/admin/setting/index-feed-tab/index-feed-tab.module#IndexFeedTabModule'
  },
  {
    path: 'admin/setting/index-nav',
    loadChildren: 'app/admin/setting/index-nav/index-nav.module#IndexNavModule'
  },
  {
    path: 'admin/setting/index-hots',
    loadChildren: 'app/admin/setting/index-hots/index-hots.module#IndexHotsModule'
  },
  {
    path: 'admin/setting/index-advs',
    loadChildren: 'app/admin/setting/index-advs/index-advs.module#IndexAdvsModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
