/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { ChangeDetectionStrategy, Component, OnInit,OnDestroy, inject } from '@angular/core';
import { ITask } from '@monorepo/todolist/core/data-access/models';
import { deleteTask, editTask, getCurrMenu, getTasks } from '@monorepo/todolist/core/data-access/store';
import { Store } from '@ngrx/store';
import { SubSink } from 'subsink';

@Component({
  selector: 'monorepo-task-manipulate',
  template: '',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent implements OnInit, OnDestroy {

  private store = inject(Store)
  protected sub = new SubSink();
  protected tasks$ = this.store.select(getTasks);
  protected menu$ = this.store.select(getCurrMenu);

  ngOnInit(): void {}

  onRemoveTask(task:ITask){
    task = task as unknown as ITask;
    this.store.dispatch(deleteTask({id:task.id}));
  }

  onEditTask(task:ITask){
    this.store.dispatch(editTask({task}));
  }
  trackByIdentity(index: number, task: ITask){ return task.id; }
  ngOnDestroy(): void {this.sub.unsubscribe();}
  
}
