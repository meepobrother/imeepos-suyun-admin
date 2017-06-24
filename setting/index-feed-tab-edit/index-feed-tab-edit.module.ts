import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexFeedTabEditComponent } from './index-feed-tab-edit.component';
import {FormsModule} from "@angular/forms";
import {ModulesSelectModule} from "../../../runner-components/modules-select/modules-select.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModulesSelectModule
  ],
  declarations: [IndexFeedTabEditComponent],
  exports: [IndexFeedTabEditComponent]
})
export class IndexFeedTabEditModule { }
