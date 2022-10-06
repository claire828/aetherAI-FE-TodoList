import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { ITask } from '@monorepo/todolist/main/data-access/models';
import { filter, fromEvent, merge , map, throttleTime, tap} from 'rxjs';
import { SubSink } from 'subsink';
import {v4 as uuid} from 'uuid';
import {WebEventUtil} from '@monorepo/web/utils';

@Component({
  selector: 'monorepo-input-header',
  templateUrl: './input-header.component.html',
  styleUrls: ['./input-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputHeaderComponent implements OnInit, OnDestroy, AfterViewInit {

  @Output() addNewTaskEvent = new EventEmitter<ITask>();
  @ViewChild('inputHeader') inputHeader!:ElementRef<HTMLInputElement>;

  private sub = new SubSink();
  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void { 
  }

  ngAfterViewInit(): void {
    const elem = this.inputHeader.nativeElement;
    this.sub.sink = merge(
      fromEvent<MouseEvent>(elem, WebEventUtil.Mouse.Type.Click),
      fromEvent<KeyboardEvent>(elem, WebEventUtil.Keyboard.Type.KeyPress)
      .pipe(
        filter(x=>x.key === WebEventUtil.Keyboard.Key.Enter))
    ).pipe(
      map(()=>elem.value),
      filter(Boolean),
      throttleTime(300),
      tap(x=>{
        const task:ITask = {
          id: uuid(),
          name:x,
          complete:false,
          ts: +new Date()
        }
        this.addNewTaskEvent.emit(task);
        elem.value = "";
      })
    ).subscribe();
  }

 

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
