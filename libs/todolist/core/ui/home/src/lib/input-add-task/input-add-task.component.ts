/* eslint-disable @angular-eslint/no-empty-lifecycle-method */

import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { ITask } from '@monorepo/todolist/core/data-access/models';
import { filter, fromEvent, merge , map, throttleTime, tap} from 'rxjs';
import { SubSink } from 'subsink';
import {v4 as uuid} from 'uuid';
import {WebEventUtil} from '@monorepo/web/utils';

@Component({
  selector: 'monorepo-input-add-task',
  template: `<input #inputHeader monorepoInputAutofocus type="text" placeholder="What needs to be done?" >`,
  styles: [
            `:host{ @apply bg-white  w-full;}`, 
            `input{ @apply outline-none p-4 text-gray-400 w-full text-2xl placeholder:text-gray-200 placeholder:italic ;}`
          ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputAddTaskComponent implements OnInit, OnDestroy, AfterViewInit {

  @Output() addNewTaskEvent = new EventEmitter<ITask>();
  @ViewChild('inputHeader') inputHeader!:ElementRef<HTMLInputElement>;

  private sub = new SubSink();
  constructor() {}
  ngOnInit(): void { }

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
