import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexFeedTabComponent} from "./index-feed-tab.component";

const routes: Routes = [
  {
    path: '',
    component: IndexFeedTabComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexFeedTabRoutingModule { }
