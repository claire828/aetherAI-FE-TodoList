import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponentComponent } from '../task-component/task-component.component';
import { TaskEntity } from 'todolist-store';
import { WebButtonComponent } from 'web/uis';
import { TodolistSignalStore } from 'todolist-store';
import { TodolistFooterComponent } from '../todolist-footer/todolist-footer.component';

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
  imports: [CommonModule, TaskComponentComponent, WebButtonComponent, TodolistFooterComponent],
  providers: [TodolistSignalStore],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css',
})
export class TodolistComponent {
  protected store = inject(TodolistSignalStore);
  protected todoLists = computed(() => this.store.entities());
  protected selectedIds = computed(() => this.store.selectedIds());

}
