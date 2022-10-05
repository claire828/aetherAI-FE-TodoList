import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { FooterComponent } from './footer/footer.component';
import { TodolistHomeUiHomeModule } from '@monorepo/todolist/main/ui/home';
import { WebSharedPipesModule } from '@monorepo/web/shared/pipes';

@NgModule({
  imports: [
    CommonModule,
    WebSharedPipesModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
    TodolistHomeUiHomeModule
  ],
  declarations: [HomeComponent, TasksComponent, FooterComponent],
  exports: [HomeComponent],
})
export class TodolistHomeFeatureHomeModule {}
