import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[monorepoClickStopPropagation]'
})
export class ClickStopPropagationDirective {

  constructor() { }

  @HostListener('click',['$event']) onClick(e:MouseEvent){
    e.preventDefault();
    e.stopPropagation();
  }

}
