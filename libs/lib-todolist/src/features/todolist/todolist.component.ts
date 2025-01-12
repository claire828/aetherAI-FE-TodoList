import { ChangeDetectionStrategy, Component, inject, resource, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponentComponent } from '../../uis/task-component/task-component.component';
import { TaskEntity } from 'todolist-store';
import { WebBorderButtonComponent, WebButtonComponent } from 'web/uis';
import { TodolistSignalStore } from 'todolist-store';

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
  imports: [CommonModule, TaskComponentComponent, WebButtonComponent, WebBorderButtonComponent],
  providers: [TodolistSignalStore],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodolistComponent {
  private todolistStore = inject(TodolistSignalStore);

  // resourceAPI 可以跟 input 綁一起使用
  // resource < responseType, requestType>
  // public todoLists = resource<TaskEntity[], unknown>({ loader: allTaskLoader })

  // public todoLists = signal<TaskEntity[]>([]);

  constructor() {

    //  this.todoLists.reload();
  }

  public get todoLists() {
    return this.todolistStore.entities()
  }
}
