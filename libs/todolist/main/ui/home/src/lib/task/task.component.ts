import { AfterViewInit, OnDestroy, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ITask } from '@monorepo/todolist/main/data-access/models';
import { filter, fromEvent, merge, map, tap,throttleTime, BehaviorSubject } from 'rxjs';
import { SubSink } from 'subsink';

@Component({
  selector: 'monorepo-todolist-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() task!:ITask;
  @Input() isLast = false;
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

    const editEvents$ = merge(
      fromEvent<KeyboardEvent>(this.editElm.nativeElement, 'keypress').pipe(filter(x=>x.key ==='Enter')),
      fromEvent<FocusEvent>(this.editElm.nativeElement,'focusout'),
    ).pipe(
      throttleTime(300),
      map(()=>this.editElm.nativeElement.value),
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
      fromEvent<MouseEvent>(this.checkElm.nativeElement,'click').pipe(
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
