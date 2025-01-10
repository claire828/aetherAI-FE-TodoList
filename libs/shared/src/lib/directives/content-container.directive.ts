import { Directive, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[sharedContentContainer]',
})
export class ContentContainerDirective {
  constructor(private viewContainerRef: ViewContainerRef) { }

  @Input() set sharedContentContainer(
    contentFactory: (viewContainerRef: ViewContainerRef) => void
  ) {
    contentFactory(this.viewContainerRef);
  }
}
