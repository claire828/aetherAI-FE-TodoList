import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { TodolistShellUiHeaderModule } from '@monorepo/todolist/shell/ui/header';


@NgModule({
  imports: [CommonModule, RouterModule,TodolistShellUiHeaderModule],
  declarations: [LayoutComponent],
  exports:[LayoutComponent]
})
export class LayoutModule {}
