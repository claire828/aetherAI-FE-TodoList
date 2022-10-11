import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { FooterComponent } from './footer/footer.component';
import { TodolistHomeUiHomeModule } from '@monorepo/todolist/main/ui/home';
import { WebSharedPipesModule } from '@monorepo/web/shared/pipes';
import { TodolistSharedUiToggleArrowModule } from '@monorepo/todolist/shared/ui/toggle-arrow';
import { TodolistSharedUiIconModule } from '@monorepo/todolist/shared/ui/icon';
import { SearchComponent } from './search/search.component';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { TodolistSharedUiBtnBasicModule } from '@monorepo/todolist/shared/ui/btn-basic';
@NgModule({
  imports: [
    CommonModule,
    WebSharedPipesModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
    TodolistHomeUiHomeModule,
    TodolistSharedUiToggleArrowModule,
    SvgIconsModule,
    TodolistSharedUiBtnBasicModule
  ],
  declarations: [
    HomeComponent,
    TasksComponent,
    FooterComponent,
    SearchComponent,
  ],
  exports: [HomeComponent, SearchComponent],
})
export class TodolistHomeFeatureHomeModule {}
