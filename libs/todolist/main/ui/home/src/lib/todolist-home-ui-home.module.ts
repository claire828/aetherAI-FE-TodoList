import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputHeaderComponent } from './input-header/input-header.component';
import { WebSharedDirectivesModule } from '@monorepo/web/shared/directives';
import { TaskComponent } from './task/task.component';
import { WebSharedPipesModule } from '@monorepo/web/shared/pipes';
import { MaskComponent } from './mask/mask.component';
import { TodolistSharedUiBtnBasicModule } from '@monorepo/todolist/shared/ui/btn-basic';

@NgModule({
  imports: [CommonModule, WebSharedDirectivesModule, WebSharedPipesModule,TodolistSharedUiBtnBasicModule],
  exports: [
    InputHeaderComponent,
    TaskComponent,
    MaskComponent,
  ],
  declarations: [
    InputHeaderComponent,
    TaskComponent,
    MaskComponent,
  ],
})
export class TodolistHomeUiHomeModule {}
