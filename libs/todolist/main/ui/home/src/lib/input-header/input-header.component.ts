import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { ITask } from '@monorepo/todolist/main/data-access/models';
import { BehaviorSubject } from 'rxjs';
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
    this.sub.sink = merge(
      fromEvent<MouseEvent>(this.inputHeader.nativeElement, WebEventUtil.Mouse.Type.Click),
      fromEvent<KeyboardEvent>(this.inputHeader.nativeElement, WebEventUtil.Keyboard.Type.KeyPress)
      .pipe(
        filter(x=>x.key === WebEventUtil.Keyboard.Key.Enter))
    ).pipe(
      map(()=>this.inputHeader.nativeElement.value),
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
        this.inputHeader.nativeElement.value = "";
      })
    ).subscribe();
  }

  onSort(toggle:boolean){
   console.log(`current state:${toggle}`)
  }
 

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
