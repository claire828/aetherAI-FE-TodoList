import { Directive, ElementRef, EventEmitter, OnDestroy, Output } from '@angular/core';
import { debounceTime, fromEvent } from 'rxjs';
import { SubSink } from 'subsink';

@Directive({
  selector: '[monorepoClickDebounce]'
})
export class ClickDebounceDirective implements OnDestroy {

  private subsink = new SubSink();
  @Output() monorepoClickDebounce = new EventEmitter();

  constructor(elemRef:ElementRef) { 
    //這個是傳入pointEvent, 如果要MouseEvent做其他對應動作，就專注使用HostListener
    this.subsink.sink = fromEvent(elemRef.nativeElement, 'click')
    .pipe(debounceTime(300))
    .subscribe(x=>this.monorepoClickDebounce.emit(x));
  }


  ngOnDestroy(){
    this.subsink.unsubscribe();
  }

}
