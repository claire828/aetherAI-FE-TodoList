
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'monorepo-btn-basic',
  templateUrl: './btn-basic.component.html',
  styleUrls: ['./btn-basic.component.scss'],
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
