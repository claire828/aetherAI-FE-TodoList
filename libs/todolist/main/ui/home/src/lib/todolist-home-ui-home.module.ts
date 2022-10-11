import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputAddTaskComponent } from './input-add-task/input-add-task.component';
import { WebSharedDirectivesModule } from '@monorepo/web/shared/directives';
import { TaskComponent } from './task/task.component';
import { WebSharedPipesModule } from '@monorepo/web/shared/pipes';
import { MaskComponent } from './mask/mask.component';
import { TodolistSharedUiBtnBasicModule } from '@monorepo/todolist/shared/ui/btn-basic';

@NgModule({
  imports: [CommonModule, WebSharedDirectivesModule, WebSharedPipesModule,TodolistSharedUiBtnBasicModule],
  exports: [
    InputAddTaskComponent,
    TaskComponent,
    MaskComponent,
  ],
  declarations: [
    InputAddTaskComponent,
    TaskComponent,
    MaskComponent,
  ],
})
export class TodolistHomeUiHomeModule {}
