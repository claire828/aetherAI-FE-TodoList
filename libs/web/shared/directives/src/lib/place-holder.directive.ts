import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[monorepoPlaceHolder]'
})
export class PlaceHolderDirective {

  constructor(public viewContainerRef:ViewContainerRef) { }

}
