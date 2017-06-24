import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FooterBarComponent} from "./footer-bar.component";

const routes: Routes = [
  {
    path: '',
    component: FooterBarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooterBarRoutingModule { }
