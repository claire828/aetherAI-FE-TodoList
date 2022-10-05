import { AfterViewInit, ChangeDetectionStrategy, Component,ElementRef,OnDestroy,OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ITask } from '@monorepo/todolist/main/data-access/models';
import { deleteTask, editTask, getCurrMenu, getTasks } from '@monorepo/todolist/main/data-access/store';
import { TaskComponent } from '@monorepo/todolist/main/ui/home';
import { Store } from '@ngrx/store';
import { BehaviorSubject, combineLatest , debounceTime, distinctUntilChanged, filter, map, of, pairwise, startWith, Subject, tap, withLatestFrom} from 'rxjs';
import { SubSink } from 'subsink';

@Component({
  selector: 'monorepo-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksComponent implements OnInit, OnDestroy {

  private subSink = new SubSink();
  @ViewChildren(TaskComponent) taskUIs!: QueryList<TaskComponent>;
  @ViewChild("scrollArea") scrollArea!:ElementRef<HTMLElement>;
  public readonly loadedMax = 6;

  private paging = new BehaviorSubject<number>(1);
  private menu$ = this.store.select(getCurrMenu);
  

  tasks$ =  combineLatest([this.store.select(getTasks),this.menu$])
    .pipe(
      map(([tasks, menu] )=>{
          if(menu==='all') return tasks;
          const complete = menu === 'completed';
          const result = tasks.filter(task=>task.complete === complete);
          return result;
        }
      )
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
  ngOnInit(): void {
   
  }


  ngOnDestroy(){
    this.subSink.unsubscribe();
  }
  constructor(private store:Store) {}

}
