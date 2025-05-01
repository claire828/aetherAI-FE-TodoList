import { CommonModule } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoreButtonComponent } from 'core-ui-kit'; // Ensure this import matches the alias in tsconfig
import * as uuid from 'uuid';
import { TaskEntity, TodolistSignalStore } from '../../stores';
import { TodolistFooterComponent } from '../../uis/todolist-footer/todolist-footer.component';
import { TaskComponentComponent } from '../task-component/task-component.component';

// const url = 'http://localhost:3000/tasks';
// export const allTaskLoader = async () => {
//   const data = await fetch(url);
//   if (!data.ok) {
//     throw Error('error');
//   }
//   return await data.json() as TaskEntity[];
// }


@Component({
  selector: 'todolist',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskComponentComponent, TodolistFooterComponent, CoreButtonComponent],
  providers: [TodolistSignalStore],
  template: `<section class="mx-auto mt-10 max-w-lg rounded-md bg-white p-4 shadow-md">
  <header class="mb-4 text-2xl font-bold text-gray-700">Todo List</header>

  <!-- Add Task Section -->
  <section class="mb-4 flex items-center gap-2">
    <input
      [(ngModel)]="taskModel"
      type="text"
      placeholder="Add a new task"
      class="flex-1 rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
      (keydown.enter)="addTaskHandler()"
    />
    <core-button [label]="'Add Task'" (click)="addTaskHandler()" />
  </section>

  <!-- Task List Section -->
  <section>
    @if (store.todoLists().length > 0) {
      <div class="space-y-2">
        @for (task of store.todoLists(); track $index) {
          <lib-task-component [task]="task" />
        }
      </div>
    } @else {
      <p class="text-center text-gray-500">No tasks available. Add your first task!</p>
    }
  </section>

  <lib-todolist-footer [showCompletedArea]="!!store.selectedIds().length" (completeTodos)="completeHandler($event)" />
</section>
`,
})
export class TodolistComponent {
  protected store = inject(TodolistSignalStore);
  protected taskModel = model<string>('');
  private url = 'http://localhost:3000/tasks'
  // FIXME: httpHandler requires provider, but why
  private taskResource = httpResource<TaskEntity[]>(this.url); // 直接給網址的寫法
  // Parse & defaultValue 都屬於Option config.

  constructor() {
    console.log("🚀 ~ TodolistComponent ~ taskResource:", this.taskResource)
  }
  // 這邊要改成HTTP Resource取得，並且解析為json
  //  protected fetchAllTasks:

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
