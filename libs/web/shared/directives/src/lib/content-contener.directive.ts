import { Directive, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[monorepoContentContainer]',
})
export class ContentContainerDirective {
  constructor(private viewContainerRef: ViewContainerRef) { }

  @Input() set sharedContentContainer(
    contentFactory: (viewContainerRef: ViewContainerRef) => void
  ) {
    contentFactory(this.viewContainerRef);
  }
}

//  <ng-container *sharedContentContainer="widget.contentFactory"></ng-container> 
// protected override createContentFactory(): (contentContainerRef: ViewContainerRef) => void {
//   return (contentContainerRef: ViewContainerRef) => {
//     contentContainerRef.createComponent(ZStackSlideWidgetComponent);
//   };
// }
