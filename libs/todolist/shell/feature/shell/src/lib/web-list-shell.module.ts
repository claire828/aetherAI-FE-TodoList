import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { todolistShellRoutes } from './web-list-shell';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {TaskEffect, tasksFeatureKey, tasksReducer} from "@monorepo/todolist/home/data-access/store";

//todo 創主要根據feature為global入口的reducer。  keyName & reducer 都放在 data-access中的reducer.ts中 
const rootReducers = {
 [tasksFeatureKey]: tasksReducer
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      todolistShellRoutes, 
      {scrollPositionRestoration:'top'}),
    EffectsModule.forRoot([TaskEffect]),
    StoreModule.forRoot(rootReducers),
  ],
})
export class TodoListShellModule {}
