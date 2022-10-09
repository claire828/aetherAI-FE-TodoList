import { ChangeDetectionStrategy, Component,ElementRef,Input,OnDestroy,OnInit, QueryList, ViewChild, ViewChildren ,AfterViewInit} from '@angular/core';
import { ITask } from '@monorepo/todolist/main/data-access/models';
import { deleteTask, editTask, getCurrMenu, getTasks } from '@monorepo/todolist/main/data-access/store';
import { TaskComponent } from '@monorepo/todolist/main/ui/home';
import { Store } from '@ngrx/store';
import { BehaviorSubject, combineLatest , map,  tap, withLatestFrom, distinctUntilChanged, debounceTime, startWith, pairwise, merge, mapTo, of} from 'rxjs';
import { SubSink } from 'subsink';

@Component({
  selector: 'monorepo-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksComponent implements OnInit, OnDestroy {

  @Input() set isSortByTime(sort:boolean) {this.isSort$.next(sort);}
  @ViewChildren(TaskComponent) taskUIs!: QueryList<TaskComponent>;
  @ViewChild("scrollArea") scrollArea!:ElementRef<HTMLElement>;

  private subSink = new SubSink();
  private isSort$ = new BehaviorSubject<boolean>(false);
  private menu$ = this.store.select(getCurrMenu);
  private data$ = combineLatest([this.store.select(getTasks),this.menu$])
    .pipe(
      map(([tasks, menu] )=>{
          if(menu==='all') return tasks;
          const complete = menu === 'completed';
          const result = tasks.filter(task=>task.complete === complete);
          return result;
        }
      )
  );

  result$ = merge(this.data$,this.isSort$).pipe(
    debounceTime(200),
    distinctUntilChanged(),
    withLatestFrom( this.data$,this.isSort$),
    map(([,tasks,sort])=>{
        return {tasks,sort}
      }
    )
  );
  
  trackByIdentity(index: number, task: ITask){return task.id;}
  onRemoveTask(task:ITask){this.store.dispatch(deleteTask({id:task.id}));}
  onEditTask(task:ITask){this.store.dispatch(editTask({task}));}

  ngOnDestroy(){this.subSink.unsubscribe();}
  constructor(private store:Store) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}

}
