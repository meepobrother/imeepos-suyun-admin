import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  imports: [
    CommonModule,
    ManageRoutingModule
  ],
  declarations: [TasksComponent]
})
export class ManageModule { }
