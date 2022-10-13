import { createAction, props } from "@ngrx/store";
import{ITask, tasksMenuType} from '@monorepo/todolist/main/data-access/models';

// create action 只要給 keyName & props<  {...}  >


//讀取
export const loadTasks = createAction('[home/loadTasks]');
export const loadTasksSuccess = createAction('[home/loadTasksSuccess]', props<{tasks:ITask[]}>() );
export const loadTasksFail = createAction('[home/loadTasksFail]', props<{error:string}>());


//新增
export const addTask = createAction('[home/addTask]', props<{task:ITask}>() );
export const addTaskSuccess = createAction('[home/addTaskSuccess]', props<{task:ITask}>());
export const addTaskFail = createAction('[home/addTaskFail]',props<{error:string}>());


//刪除
export const deleteTask = createAction('[home/deleteTask]', props<{id:string}>());
export const deleteTaskSuccess = createAction('[home/deleteTaskSuccess]', props<{id:string}>());
export const deleteTaskFail = createAction('[home/deleteTaskFail]',props<{error:string}>());


//更改
export const editTask = createAction('[home/editTask]',props<{task:ITask}>());
export const editTaskSuccess = createAction('[]',props<{task:ITask}>());
export const editTaskFail = createAction('[home/editTaskFail]',props<{error:string}>());


//MENU切換
export const swichMenu = createAction(`[home/createMenu]`,props<{menu:tasksMenuType}>())
