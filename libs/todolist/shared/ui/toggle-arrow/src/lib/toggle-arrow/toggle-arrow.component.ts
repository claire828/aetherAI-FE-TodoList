/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'monorepo-toggle-arrow',
  template: `<button (click)="onToggle()"
            [style.transform]="(isToggle$ | async) ? 'rotate(90deg)' : 'rotate(-90deg)'"
            monorepoClickStopPropagation> ❯</button>`,

  styles: [`button{
              @apply text-2xl cursor-default text-gray-600 w-10 ;
            }`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleArrowComponent implements OnInit {
  @Output() clickToggle = new EventEmitter<boolean>();
  @Input() defaultState = false;
  
  private isToggle = new BehaviorSubject<boolean>(this.defaultState);
  isToggle$ = this.isToggle.asObservable();

  onToggle(){
    this.isToggle.next(!this.isToggle.value);
    this.clickToggle.emit(this.isToggle.value);
  }

  constructor() {}
  ngOnInit(): void {}
  
}
