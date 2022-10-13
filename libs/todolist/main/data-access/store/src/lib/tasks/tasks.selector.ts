import { ITask } from "@monorepo/todolist/main/data-access/models";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ITaskState, tasksFeatureKey } from "./tasks.reducer";

//儲存主資料結構
export const getTasksState = createFeatureSelector<ITaskState<ITask[]>>(tasksFeatureKey);

export const getTasksLoaing = createSelector(getTasksState, (s)=> s.status ==='loading');
export const getTasks = createSelector(getTasksState, (s) => s.data);


export const getCurrMenu = createSelector(getTasksState, (s)=> s.menu );