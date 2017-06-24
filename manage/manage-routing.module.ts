import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin/manage/topic',
    loadChildren: 'app/admin/manage/bbs/bbs.module#BbsModule'
  },
  {
    path: 'admin/manage/tasks',
    loadChildren: 'app/admin/manage/tasks/tasks.module#TasksModule'
  },
  {
    path: 'admin/manage/runner',
    loadChildren: 'app/admin/manage/runner/runner.module#RunnerModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
