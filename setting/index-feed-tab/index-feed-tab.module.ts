import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexFeedTabRoutingModule } from './index-feed-tab-routing.module';
import { IndexFeedTabComponent } from './index-feed-tab.component';
import {AlionModule} from "../../../runner-components/alion/alion.module";
import {IndexFeedTabEditModule} from "../index-feed-tab-edit/index-feed-tab-edit.module";

@NgModule({
  imports: [
    CommonModule,
    IndexFeedTabRoutingModule,
    AlionModule,
    IndexFeedTabEditModule
  ],
  declarations: [IndexFeedTabComponent]
})
export class IndexFeedTabModule { }
