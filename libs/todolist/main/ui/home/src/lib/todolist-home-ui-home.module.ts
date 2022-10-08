import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputHeaderComponent } from './input-header/input-header.component';
import { BtnFooterComponent } from './btn-footer/btn-footer.component';
import { WebSharedDirectivesModule } from '@monorepo/web/shared/directives';
import { TaskComponent } from './task/task.component';
import { WebSharedPipesModule } from '@monorepo/web/shared/pipes';
import { MaskComponent } from './mask/mask.component';

@NgModule({
  imports: [CommonModule, WebSharedDirectivesModule, WebSharedPipesModule],
  exports: [
    InputHeaderComponent,
    BtnFooterComponent,
    TaskComponent,
    MaskComponent,
  ],
  declarations: [
    InputHeaderComponent,
    BtnFooterComponent,
    TaskComponent,
    MaskComponent,
  ],
})
export class TodolistHomeUiHomeModule {}
