import { AfterViewInit, OnDestroy, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ITask } from '@monorepo/todolist/main/data-access/models';
import { filter, fromEvent, merge, map, tap,throttleTime, BehaviorSubject } from 'rxjs';
import { SubSink } from 'subsink';
import {WebEventUtil} from '@monorepo/web/utils';

@Component({
  selector: 'monorepo-todolist-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() task!:ITask;
  @Output() removeTask = new EventEmitter();
  @Output() editTask = new EventEmitter();
  @ViewChild('edit') editElm!:ElementRef<HTMLInputElement>;
  @ViewChild('check') checkElm!:ElementRef<HTMLInputElement>;

  private editModeSub = new BehaviorSubject<boolean>(false);
  editMode$ = this.editModeSub.asObservable();


  private subs = new SubSink();
  constructor(public ref: ElementRef<HTMLHtmlElement>) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}


  ngAfterViewInit(){
    const editElem = this.editElm.nativeElement;
    const editEvents$ = merge(
      fromEvent<KeyboardEvent>(editElem, WebEventUtil.Keyboard.Type.KeyPress)
        .pipe(
          filter(x=>x.key === WebEventUtil.Keyboard.Key.Enter)
        ),
      fromEvent<FocusEvent>(editElem, WebEventUtil.Focus.Type.FocusOut),
    ).pipe(
      throttleTime(300),
      map(()=>editElem.value),
      tap(()=>this.switchEditMode(false)),
      map(x=>{
        return {
          ...this.task,
          name:x
        }
      })
    )

    this.subs.sink = merge(
      editEvents$,
      fromEvent<MouseEvent>(this.checkElm.nativeElement, WebEventUtil.Mouse.Type.Click).pipe(
        tap(()=>this.switchEditMode(false)),
        map(()=> {
          return{
            ...this.task,
            complete:!this.task.complete
          }
        })
      )
    ).pipe(
      filter(x=>x.name !== this.task.name || x.complete !==this.task.complete),
      throttleTime(300),
      tap(afterTask=>{
         !afterTask.name ? this.onRemoveTask() : this.editTask.emit(afterTask)
        }
      )
    ).subscribe();

  } 

  onRemoveTask(){
    this.removeTask.emit(this.task);
  }


  switchEditMode(mode:boolean){
    this.editModeSub.next(mode);
    if(mode) this.editElm.nativeElement.focus();
  }


  get defaultInput():string{ 
    return this.editModeSub.value ? this.task.name : '';
   }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }


}
