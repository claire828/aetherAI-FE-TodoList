import { ChangeDetectionStrategy, Component,ElementRef,Input,QueryList, ViewChild, ViewChildren} from '@angular/core';
import { TaskComponent } from '@monorepo/todolist/main/ui/home';
import { BehaviorSubject, combineLatest , map, withLatestFrom, distinctUntilChanged, debounceTime, merge} from 'rxjs';
import { orderBy, orderByType } from '@monorepo/web/shared/pipes';
import {TaskComponent as TaskManipulate} from '../task/task.component';

@Component({
  selector: 'monorepo-tasks-panel',
  templateUrl: './tasks-panel.component.html',
  styleUrls: ['./tasks-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksPanelComponent extends TaskManipulate {
  @Input() set isSortByTime(sort:boolean) {this.isSort$.next(sort);}
  @ViewChildren(TaskComponent) taskUIs!: QueryList<TaskComponent>;
  @ViewChild("scrollArea") scrollArea!:ElementRef<HTMLElement>;

  private readonly OrderBy = orderBy;
  private isSort$ = new BehaviorSubject<boolean>(false);
  private data$ = combineLatest([this.tasks$, this.menu$])
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
        const sortType:orderByType = this.OrderBy[+sort];
        return {tasks, sortType, field:'ts' }
      }
    )
  );
  
}
