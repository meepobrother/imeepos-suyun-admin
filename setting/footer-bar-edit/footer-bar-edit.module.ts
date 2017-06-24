import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterBarEditComponent } from './footer-bar-edit.component';
import {ModulesSelectModule} from "../../../runner-components/modules-select/modules-select.module";
import {FormsModule} from "@angular/forms";
import {AlionModule} from "../../../runner-components/alion/alion.module";
import {IconSelectModule} from "../../../runner-components/icon-select/icon-select.module";
import {LinkSelectModule} from "../../../runner-components/link-select/link-select.module";

@NgModule({
  imports: [
    CommonModule,
    ModulesSelectModule,
    FormsModule,
    AlionModule,
    IconSelectModule,
    LinkSelectModule
  ],
  declarations: [FooterBarEditComponent],
  exports: [FooterBarEditComponent]
})
export class FooterBarEditModule { }
