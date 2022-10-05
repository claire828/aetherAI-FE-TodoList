/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'monorepo-btn-footer',
  templateUrl: './btn-footer.component.html',
  styleUrls: ['./btn-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BtnFooterComponent<T> implements OnInit {
  constructor() {}

  @Input() param?:T ;
  @Input() isHoverBoder = false;
  @Input() isHoverUnderline = false;
  @Input() isSelect = false;

  @Output() beClicked= new EventEmitter();

  ngOnInit(): void {}


  onSelect(){
    this.beClicked.emit(this.param);
  }
}
