
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'monorepo-btn-basic',
  templateUrl: './btn-basic.component.html',
  styles: [`button{ @apply text-sm px-2 box-border mx-2 transition-all duration-100 rounded-md; }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BtnBasicComponent<T> implements OnInit {
  constructor() {}

  @Input() param?:T ;
  @Input() isHoverBoder = false;
  @Input() isHoverUnderline = false;
  @Input() isSelect = false;

  @Output() beClicked= new EventEmitter();

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}


  onSelect(){
    this.beClicked.emit(this.param);
  }
}
