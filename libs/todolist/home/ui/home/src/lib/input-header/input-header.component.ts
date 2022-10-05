import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { ITask } from '@monorepo/todolist/home/data-access/models';
import { BehaviorSubject } from 'rxjs';
import { filter, fromEvent, merge , map, throttleTime, tap} from 'rxjs';
import { SubSink } from 'subsink';
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'monorepo-input-header',
  templateUrl: './input-header.component.html',
  styleUrls: ['./input-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputHeaderComponent implements OnInit, OnDestroy, AfterViewInit {

  @Output() addNewTaskEvent = new EventEmitter<ITask>();
  @ViewChild('inputHeader') inputHeader!:ElementRef<HTMLInputElement>;

  private isToggle = new BehaviorSubject<boolean>(true);
  isToggle$ = this.isToggle.asObservable();

  private sub = new SubSink();

  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.sub.sink = merge(
      fromEvent<MouseEvent>(this.inputHeader.nativeElement, 'click'),
      fromEvent<KeyboardEvent>(this.inputHeader.nativeElement,'keypress')
      .pipe(
        filter(x=>x.key === "Enter"))
    ).pipe(
      map(()=>this.inputHeader.nativeElement.value),
      filter(Boolean),
      throttleTime(300),
      tap(x=>{
        const task:ITask = {
          id: uuid(),
          name:x,
          complete:false
        }
        this.addNewTaskEvent.emit(task);
        this.inputHeader.nativeElement.value = "";
      })
    ).subscribe();
  }

  onToggleAll(){
   this.isToggle.next(!this.isToggle.value);
  }
 

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
