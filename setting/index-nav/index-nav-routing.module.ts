import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexNavComponent} from "./index-nav.component";

const routes: Routes = [
  {
    path: '',
    component: IndexNavComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexNavRoutingModule { }
