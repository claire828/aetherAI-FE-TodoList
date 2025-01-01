import { Directive, ElementRef, EventEmitter, OnDestroy, Output } from '@angular/core';
import { debounceTime, fromEvent } from 'rxjs';
import { SubSink } from 'subsink';
import { WebEventUtil } from '@monorepo/web/utils';

@Directive({
  selector: '[monorepoClickDebounce]',
})
export class ClickDebounceDirective implements OnDestroy {
  private subSink = new SubSink();
  @Output() monorepoClickDebounce = new EventEmitter();

  constructor(elemRef: ElementRef) {
    //這個是傳入pointEvent, 如果要MouseEvent做其他對應動作，就專注使用HostListener
    this.subSink.sink = fromEvent(elemRef.nativeElement, WebEventUtil.Mouse.Type.Click)
      .pipe(debounceTime(300))
      .subscribe((x) => this.monorepoClickDebounce.emit(x));
  }

  ngOnDestroy() {
    this.subSink.unsubscribe();
  }
}
