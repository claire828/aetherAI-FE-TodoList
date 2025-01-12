import { ChangeDetectionStrategy, Component, resource } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponentComponent } from '../../uis/task-component/task-component.component';
import { TaskEntity } from 'todolist-store';
import { WebBorderButtonComponent, WebButtonComponent } from 'web/uis';
import { TodolistSignalStore } from 'todolist-store';

const url = 'http://localhost:3000/tasks';
const allTaskLoader = async () => {
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
  // resourceAPI 可以跟 input 綁一起使用
  // resource < responseType, requestType>
  public todoLists = resource<TaskEntity[], unknown>({ loader: allTaskLoader })

  constructor() {
    this.todoLists.reload();
  }
}
