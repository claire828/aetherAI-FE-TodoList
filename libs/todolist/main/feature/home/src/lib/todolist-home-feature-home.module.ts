import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { FooterComponent } from './footer/footer.component';
import { TodolistHomeUiHomeModule } from '@monorepo/todolist/main/ui/home';
import { WebSharedPipesModule } from '@monorepo/web/shared/pipes';
import { TodolistSharedUiToggleArrowModule } from '@monorepo/todolist/shared/ui/toggle-arrow';


@NgModule({
  imports: [
    CommonModule,
    WebSharedPipesModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
    TodolistHomeUiHomeModule,
    TodolistSharedUiToggleArrowModule
  ],
  declarations: [HomeComponent, TasksComponent, FooterComponent],
  exports: [HomeComponent],
})
export class TodolistHomeFeatureHomeModule {}
