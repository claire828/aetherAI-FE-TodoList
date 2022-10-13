import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { WebEventUtil } from '@monorepo/web/utils';
import { debounceTime, distinctUntilChanged, exhaustMap, filter,  fromEvent, map, merge, Subject,  tap } from 'rxjs';
import { MaskComponent} from '@monorepo/todolist/core/ui/home';
import {TaskComponent as TaskManipulate} from '../task/task.component';

@Component({
  selector: 'monorepo-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPanelComponent extends TaskManipulate implements AfterViewInit {

  @ViewChild('searchInput') searchInput!:ElementRef<HTMLInputElement>;
  readonly FilterKey = "name";
  focusOut$ = new Subject<boolean>();
  searchWord$ = new Subject<string>();

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


  constructor() { super();}

}

