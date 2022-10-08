import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ITask } from '@monorepo/todolist/main/data-access/models';
import { getTasks } from '@monorepo/todolist/main/data-access/store';
import { WebEventUtil } from '@monorepo/web/utils';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, exhaustMap, from, fromEvent, merge, Subject, takeUntil, tap, zip } from 'rxjs';
import { SubSink } from 'subsink';

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

    const focusEvent$ = merge(
      fromEvent<InputEvent>(elem, WebEventUtil.Focus.Type.Focus),
      fromEvent<InputEvent>(elem, WebEventUtil.Focus.Type.FocusOut)
    );

    this.sub.add(
      fromEvent<InputEvent>(elem, WebEventUtil.Keyboard.Type.Input).pipe(
      distinctUntilChanged(),
      debounceTime(200),
      tap(()=>this.searchWord$.next(elem.value))
    ).subscribe());

    this.sub.add(
      focusEvent$.pipe(
      tap(x=> this.focusOut$.next(x.type === WebEventUtil.Focus.Type.FocusOut))
    ).subscribe());

  }

  trackByIdentity(index: number, task: ITask){
    return task.id;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
  constructor(private store:Store) {}

}

