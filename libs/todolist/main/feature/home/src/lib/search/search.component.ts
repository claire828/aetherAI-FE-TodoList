import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { deleteTask, editTask, getTasks } from '@monorepo/todolist/main/data-access/store';
import { WebEventUtil } from '@monorepo/web/utils';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, exhaustMap, filter,  fromEvent, map, merge, Subject,  tap } from 'rxjs';
import { SubSink } from 'subsink';
import { MaskComponent} from '@monorepo/todolist/main/ui/home';
import { ITask } from '@monorepo/todolist/main/data-access/models';

@Component({
  selector: 'monorepo-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('searchInput') searchInput!:ElementRef<HTMLInputElement>;
  readonly FilterKey = "name";


  private sub = new SubSink();
  focusOut$ = new Subject<boolean>();
  searchWord$ = new Subject<string>();
  tasks$ = this.store.select(getTasks);


  ngAfterViewInit():void{
    const elem = this.searchInput.nativeElement;
    const lostFocus$ = fromEvent<MouseEvent>(document, WebEventUtil.Mouse.Type.Click).pipe(
      map(x=> (x.target as Element).id),
      map(x=> x === MaskComponent.MaskName),
      filter(Boolean),
    );

    const focusEvent$ = fromEvent<InputEvent>(elem, WebEventUtil.Focus.Type.Focus).pipe(
      tap(()=>this.focusOut$.next(false)),
      exhaustMap(()=>lostFocus$),
      tap(()=>this.focusOut$.next(true)),
    );

    const inputEvent$ = fromEvent<InputEvent>(elem, WebEventUtil.Keyboard.Type.Input).pipe(
      distinctUntilChanged(),
      debounceTime(200),
      tap(()=>this.searchWord$.next(elem.value))
    );

    this.sub.sink = merge(inputEvent$,focusEvent$).subscribe()

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
  constructor(private store:Store) {}

  onRemoveTask(task:ITask){
    this.store.dispatch(deleteTask({id:task.id}));
  }

  onEditTask(task:ITask){
    this.store.dispatch(editTask({task}));
  }
}

