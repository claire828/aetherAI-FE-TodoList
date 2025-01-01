import { inject, Injectable, Injector } from '@angular/core';
import { DialogConfig } from '../models';
import { Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { DecorateRefBuilder, createRefBuilder } from '../utils';
import { DecorateOverlayRef } from '../utils/decorate-overlay-ref';
import { ComponentPortal } from '@angular/cdk/portal';
import { DIALOG_PROVIDER } from '../default-configs';

@Injectable({ providedIn: 'root' })
export class DialogService {
  #injector: Injector = inject(Injector);
  #refBuilder: DecorateRefBuilder = createRefBuilder(inject(OverlayPositionBuilder), inject(Overlay));

  constructor() { }

  // TODO: 製作按鈕按下後，通知enter / close and send 資料。
  // 分清楚custom or default.
  public openDialog(dialogConfig: DialogConfig): DecorateOverlayRef {
    const decorateRef = this.#refBuilder(dialogConfig.overlayConfig);
    const injector = this.createInjector(decorateRef, dialogConfig);
    const portal = new ComponentPortal(dialogConfig.componentRef(), null, injector);
    decorateRef.attachPortal(portal);
    return decorateRef;
  }

  // 拔出去的原因是因為要讓DialogComponent可以使用到DialogService
  private createInjector(decorateRef: DecorateOverlayRef, dialogConfig: DialogConfig): Injector {
    return Injector.create({
      providers: [
        { provide: DecorateOverlayRef, useValue: decorateRef }, // 是Class, 有實體
        { provide: DIALOG_PROVIDER, useValue: dialogConfig }, // 因為是interface, 因此要創token
      ],
      parent: this.#injector,
      name: dialogConfig.name,
    });
  }
}


// classes ?: string | string[] | Set<string> | { [className: string]: any };
//  contentFactory: (contentContainerRef: ViewContainerRef) => void;
// <ng-container *sharedContentContainer="widget.contentFactory"></ng-container>
// protected override createContentFactory(): (contentContainerRef: ViewContainerRef) => void {
//   return (contentContainerRef: ViewContainerRef) => {
//     contentContainerRef.createComponent(ZStackSlideWidgetComponent);
//   };
// }
