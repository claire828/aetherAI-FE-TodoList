import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ITask } from '@monorepo/todolist/main/data-access/models';
import { addTask, deleteTask, loadTasks } from '@monorepo/todolist/main/data-access/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'monorepo-todolist-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  constructor(private store:Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadTasks());
  }

  onAddTask(task:ITask){
    this.store.dispatch(addTask({task}));
  }
}
