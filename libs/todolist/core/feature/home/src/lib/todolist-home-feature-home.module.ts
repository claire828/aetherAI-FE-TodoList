import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { TasksPanelComponent } from './tasks-panel/tasks-panel.component';
import { FooterComponent } from './footer/footer.component';
import { TodolistHomeUiHomeModule } from '@monorepo/todolist/core/ui/home';
import { WebSharedPipesModule } from '@monorepo/web/shared/pipes';
import { TodolistSharedUiToggleArrowModule } from '@monorepo/todolist/shared/ui/toggle-arrow';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { TodolistSharedUiBtnBasicModule } from '@monorepo/todolist/shared/ui/btn-basic';
import { TodolistSharedUiSpinnerModule } from '@monorepo/todolist/shared/ui/spinner';
import { TaskComponent } from './task/task.component';
@NgModule({
  imports: [
    CommonModule,
    WebSharedPipesModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
    TodolistHomeUiHomeModule,
    TodolistSharedUiToggleArrowModule,
    SvgIconsModule,
    TodolistSharedUiBtnBasicModule,
    TodolistSharedUiSpinnerModule,
  ],
  declarations: [
    HomeComponent,
    TasksPanelComponent,
    FooterComponent,
    SearchPanelComponent,
    TaskComponent,
  ],
  exports: [HomeComponent, SearchPanelComponent, TaskComponent],
})
export class TodolistHomeFeatureHomeModule {}
