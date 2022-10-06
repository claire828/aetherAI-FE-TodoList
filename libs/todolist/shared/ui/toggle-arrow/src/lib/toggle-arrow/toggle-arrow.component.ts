import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'monorepo-toggle-arrow',
  templateUrl: './toggle-arrow.component.html',
  styleUrls: ['./toggle-arrow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleArrowComponent implements OnInit {

  @Output() OnToggleEvent = new EventEmitter<boolean>();
  private isToggle = new BehaviorSubject<boolean>(true);
  isToggle$ = this.isToggle.asObservable();

  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}

  onToggle(){
    this.isToggle.next(!this.isToggle.value);
    this.OnToggleEvent.emit(this.isToggle.value);
  }
  
}
