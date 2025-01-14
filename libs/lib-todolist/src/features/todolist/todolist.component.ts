import { Component, inject, model } from '@angular/core';
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
  template: `<section class="mx-auto mt-10 max-w-lg rounded-md bg-white p-4 shadow-md">
  <header class="mb-4 text-2xl font-bold text-gray-700">Todo List</header>

  <!-- Add Task Section -->
  <section class="mb-4 flex items-center gap-2">
    <input
      #addTaskInput
      [(ngModel)]="taskModel"
      type="text"
      placeholder="Add a new task"
      class="flex-1 rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
      (keydown.enter)="test(addTaskInput)"
    />
    <uis-web-button [buttonName]="'Add Task'" (click)="addTaskHandler()"></uis-web-button>
  </section>

  <!-- Task List Section -->
  <section>
    @if (store.todoLists().length > 0) {
      <div class="space-y-2">
        @for (task of store.todoLists(); track $index) {
          <lib-task-component [task]="task"></lib-task-component>
        }
      </div>
    } @else {
      <p class="text-center text-gray-500">No tasks available. Add your first task!</p>
    }
  </section>

  <lib-todolist-footer
    [showCompletedArea]="!!store.selectedIds().length"
    (completeTodos)="completeHandler($event)"
  ></lib-todolist-footer>
</section>
`,
})
export class TodolistComponent {
  protected store = inject(TodolistSignalStore);
  protected taskModel = model<string>('');


  // Method 1: 不需要Model, pass Input from template
  protected test(inputElem: HTMLInputElement): void {
    if (inputElem.value.length === 0 || inputElem.value.trim() === '') {
      return;
    }
    this.store.addTodo({
      id: uuid.v4(),
      name: inputElem.value,
      completed: false,
      ts: new Date().getTime().toString()
    });
    inputElem.value = '';
    this.taskModel.set('');
  }

  // Method 2: 使用Model, 透過Model取得資料
  // 可以註冊 taskModel 的監聽事件, angular 會自動註銷
  // this.taskModel.subscribe((value) => {
  //  console.log('TaskModel', value);
  // })
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
