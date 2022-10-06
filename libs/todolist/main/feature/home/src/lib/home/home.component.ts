import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ITask } from '@monorepo/todolist/main/data-access/models';
import { addTask, loadTasks } from '@monorepo/todolist/main/data-access/store';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'monorepo-todolist-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  sort$ = new BehaviorSubject<boolean>(false);

  constructor(private store:Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadTasks());
  }

  onAddTask(task:ITask){
    this.store.dispatch(addTask({task}));
  }

  onSort(toggle:boolean){
    console.log(`home:${toggle}`)
    this.sort$.next(toggle);
  }
}
