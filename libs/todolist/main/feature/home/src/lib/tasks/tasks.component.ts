import { ChangeDetectionStrategy, Component,ElementRef,Input,OnDestroy,OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ITask } from '@monorepo/todolist/main/data-access/models';
import { deleteTask, editTask, getCurrMenu, getTasks } from '@monorepo/todolist/main/data-access/store';
import { TaskComponent } from '@monorepo/todolist/main/ui/home';
import { Store } from '@ngrx/store';
import { BehaviorSubject, combineLatest , map,  tap, withLatestFrom} from 'rxjs';
import { SubSink } from 'subsink';

@Component({
  selector: 'monorepo-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksComponent implements OnInit, OnDestroy {

  private isSort$ = new BehaviorSubject<boolean>(false);
  @Input() set isSortByTime(bSort:boolean) {
    this.isSort$.next(bSort);
    console.log(`receive from parent:${bSort}`)
  }
  private subSink = new SubSink();
  @ViewChildren(TaskComponent) taskUIs!: QueryList<TaskComponent>;
  @ViewChild("scrollArea") scrollArea!:ElementRef<HTMLElement>;

  private menu$ = this.store.select(getCurrMenu);
  
  data$ = combineLatest([this.store.select(getTasks),this.menu$,this.isSort$])
    .pipe(
      map(([tasks, menu] )=>{
          if(menu==='all') return tasks;
          const complete = menu === 'completed';
          const result = tasks.filter(task=>task.complete === complete);
          return result;
        }
      ),
      withLatestFrom(this.isSort$),
      map(([tasks, sort])=>{
        return {tasks, sort}
      })
  );
  

  
  trackByIdentity(index: number, task: ITask){
    return task.id;
  }
  


  onRemoveTask(task:ITask){
    this.store.dispatch(deleteTask({id:task.id}));
  }

  onEditTask(task:ITask){
    this.store.dispatch(editTask({task}));
  }

 

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}

  ngOnDestroy(){
    this.subSink.unsubscribe();
  }
  constructor(private store:Store) {}

}
