import { catchError, map, mergeMap,tap,switchMap, withLatestFrom } from 'rxjs/operators';
import { select, Store } from "@ngrx/store";
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodolistApiService } from '@monorepo/todolist/shared/api';
import { addTask, addTaskFail, addTaskSuccess, deleteTask, deleteTaskFail,  deleteTaskSuccess, editTask, editTaskFail, editTaskSuccess, loadTasks, loadTasksFail, loadTasksSuccess } from './tasks.action';
import { EMPTY, of } from 'rxjs';
import { getTasks } from './tasks.selector';




@Injectable({providedIn:'root'})
export class TaskEffect{

  constructor(private action$:Actions, private taskAPI:TodolistApiService, private store:Store){}

  loadTask$ = createEffect(()=> this.action$.pipe(
      ofType(loadTasks),
      mergeMap(()=>{
        return this.taskAPI.loadTasks().pipe(
          map((tasks)=> loadTasksSuccess({tasks})),
          catchError((err)=> of(loadTasksFail({error:err.message}) ))
        )
      })
    )
  )


  addTask$ = createEffect(()=> this.action$.pipe(
      ofType(addTask),
      mergeMap(({task})=>{
        return this.taskAPI.addTask(task).pipe(
          map(()=> addTaskSuccess({task})),
          catchError((err)=>of(addTaskFail({error:err.message})))
        )
      })
    )
  )


  editTask$ = createEffect(()=> this.action$.pipe(
      ofType(editTask),
      mergeMap(({task})=>{
        return this.taskAPI.editTask(task).pipe(
          map(()=>editTaskSuccess({task})),
          catchError((err)=>of(editTaskFail({error:err.message})))
        )
      })
    )
  )


  deleteTask$ = createEffect(()=> this.action$.pipe(
        ofType(deleteTask),
        mergeMap(({id})=>{
          return this.taskAPI.removeTask(id).pipe(
            map(()=>deleteTaskSuccess({id})),
            catchError((err)=>of(deleteTaskFail({error:err.message})))
          )
        })
      )
  )


}