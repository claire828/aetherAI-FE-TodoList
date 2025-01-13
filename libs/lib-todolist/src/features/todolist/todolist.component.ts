import { Component, inject, signal, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponentComponent } from '../task-component/task-component.component';
import { TaskEntity } from 'todolist-store';
import { WebButtonComponent } from 'web/uis';
import { TodolistSignalStore } from 'todolist-store';
import { TodolistFooterComponent } from '../../uis/todolist-footer/todolist-footer.component';
import * as uuid from 'uuid';
import { FormsModule } from '@angular/forms';
const url = 'http://localhost:3000/tasks';
export const allTaskLoader = async () => {
  const data = await fetch(url);
  if (!data.ok) {
    throw Error('error');
  }
  return await data.json() as TaskEntity[];
}


@Component({
  selector: 'todolist',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskComponentComponent, WebButtonComponent, TodolistFooterComponent],
  providers: [TodolistSignalStore],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css',
})
export class TodolistComponent {
  protected store = inject(TodolistSignalStore);
  protected taskModel = model<string>('');

  protected addTaskHandler(): void {
    if (this.taskModel().length === 0 || this.taskModel().trim() === '') {
      return;
    }
    this.store.addTodo({
      id: uuid.v4(),
      name: this.taskModel(),
      completed: false,
      ts: new Date().getTime().toString()
    });
    this.taskModel.set('');
  }


  protected completeHandler(completed: boolean): void {
    this.store.completeAllTodos(completed);
  }
}
