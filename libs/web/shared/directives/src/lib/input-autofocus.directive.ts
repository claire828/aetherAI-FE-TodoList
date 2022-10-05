import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[monorepoInputAutofocus]'
})
export class InputAutofocusDirective implements AfterViewInit {

  constructor(private el:ElementRef) { }

  ngAfterViewInit(): void {
      this.el.nativeElement.focus();
  }

}
