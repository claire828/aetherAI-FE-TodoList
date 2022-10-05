
import { createReducer, on} from "@ngrx/store";
import { loadTasks,loadTasksSuccess, loadTasksFail, addTask, addTaskSuccess, addTaskFail, deleteTask, deleteTaskSuccess ,deleteTaskFail, deleteTasksSuccess,  editTask, editTaskSuccess, editTaskFail, swichMenu} from "./tasks.action";
import {ICommonState} from '@monorepo/web/shared/data-access/models';
import { ITask, tasksMenuType } from "@monorepo/todolist/home/data-access/models";

export const tasksFeatureKey = 'tasks';


export interface ITaskState<T> extends ICommonState<T>{
  menu:tasksMenuType,
}

const initState:ITaskState<ITask[]> = {
  data:[],
  error:"",
  status:"pending",
  menu:'all'
}

export const tasksReducer = createReducer(
  initState,
  /* loading tasks */
  on(loadTasks, (state)=>({
    ...state,
    status:'loading'
  })),


  on(loadTasksSuccess, (state,{tasks})=>({
    ...state,
    status:'success',
    data:tasks
  })),

  on(loadTasksFail, (state,{error})=>({
    ...state,
    status:'error',
    error
  })),


  /* add task */
  on(addTask, (state)=>({
    ...state,
    status:'loading',
  }) ),

  on(addTaskSuccess, (state,{task})=>({
    ...state,
    status:'success',
    data:[...state.data, task]
  }) ),

  on(addTaskFail, (state,{error})=>({
    ...state,
    status:'error',
    error
  }) ),


   /* delete task */
   on(deleteTask,(state)=>({
    ...state,
    status:'loading',
   })),


   on(deleteTaskSuccess,(state, {id})=>
    {
      const data = state.data.filter(x=>x.id !== id);
      return {
          ...state,
          status:'success',
          data
      }
    }
  ),

   on(deleteTaskFail,(state,{error})=>
      ({
        ...state,
        status:'error',
        error
      })
    ),

  /* delete tasks */

  on(deleteTasksSuccess,(state)=>
    {
      const data = state.data.filter(x=> !x.complete)
      return {
          ...state,
          status:'success',
          data
      }
    }
  ),



    /* edit status */
  
    on(editTask,(state)=>{
      return {...state, status:"loading"}
    }),

    on(editTaskSuccess,(state, {task})=>{
      const data = state.data.map(x=>{
        return x.id === task.id ? task : x;
      })
      return {
        ...state,
         status:"success",
         data
        }
    }),

    on(editTaskFail,(state, {error})=>{
      return {...state, status:'error', error}
    }),


     /* change menu */

     on(swichMenu, (state,{menu})=>{
      return {...state, menu}
     })


)
