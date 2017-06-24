import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterBarRoutingModule } from './footer-bar-routing.module';
import { FooterBarComponent } from './footer-bar.component';
import {RunnerComponentsModule} from "../../../runner-components/runner-components.module";
import {AlionModule} from "../../../runner-components/alion/alion.module";
import {FooterBarEditModule} from "../footer-bar-edit/footer-bar-edit.module";

@NgModule({
  imports: [
    CommonModule,
    FooterBarRoutingModule,
    RunnerComponentsModule,
    AlionModule,
    FooterBarEditModule
  ],
  declarations: [FooterBarComponent]
})
export class FooterBarModule { }
