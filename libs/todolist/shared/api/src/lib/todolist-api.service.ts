import { Inject, Injectable } from '@angular/core';
import { AppConfig, APP_CONFIG } from '@monorepo/todolist-shared-app-config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ITask } from '@monorepo/todolist/core/data-access/models';
import { shareReplay } from 'rxjs';



// eslint-disable-next-line @typescript-eslint/ban-types
const httpOptions: Object = {
  header: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TodolistApiService {

  constructor( @Inject(APP_CONFIG) private appConfig: AppConfig, private http:HttpClient) 
  { }


  loadTasks(){
    return this.http.get<ITask[]>(`${this.appConfig.baseURL}/tasks`).pipe(shareReplay(1));
  }

  addTask(task:ITask){
    return this.http.post<ITask>(`${this.appConfig.baseURL}/tasks`, task, httpOptions );
  }

  editTask(task:ITask){
    return this.http.put<ITask>(`${this.appConfig.baseURL}/tasks/${task.id}`, task, httpOptions);
  }


  removeTask(id:string){
    return this.http.delete<ITask>(`${this.appConfig.baseURL}/tasks/${id}`);
  }


}
