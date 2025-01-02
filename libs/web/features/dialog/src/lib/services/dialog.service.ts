import { inject, Injectable, Injector, Provider, StaticProvider } from '@angular/core';
import { DialogConfig } from '../models';
import { Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { DecorateRefBuilder, createRefBuilder, createRefInjector } from '../utils';
import { DecorateOverlayRef } from '../utils/decorate-overlay-ref';
import { ComponentPortal } from '@angular/cdk/portal';
import { DIALOG_PROVIDER } from '../default-configs';
import { WebFeaturesDialogComponent } from '../web-features-dialog/web-features-dialog.component';

@Injectable({ providedIn: 'root' })
export class DialogService {
  #injector: Injector = inject(Injector);
  #refBuilder: DecorateRefBuilder = createRefBuilder(inject(OverlayPositionBuilder), inject(Overlay));

  constructor() { }

  public openCustomizeDialog(dialogConfig: DialogConfig): DecorateOverlayRef {
    const decorateRef = this.#refBuilder(dialogConfig.overlayConfig);
    // 因為是interface, 因此要創token (這一個拔出去，因為給custom使用)
    const dialogProvider = { provide: DIALOG_PROVIDER, useValue: dialogConfig };
    const injector = createRefInjector(this.#injector, dialogConfig.name, decorateRef, [dialogProvider]);
    const portal = new ComponentPortal(dialogConfig.componentRef(), null, injector);
    decorateRef.attachPortal(portal);
    return decorateRef;
  }

  public openDefaultDialog(dialogConfig: DialogConfig): DecorateOverlayRef {
    const decorateRef = this.#refBuilder(dialogConfig.overlayConfig);
    const injector = createRefInjector(this.#injector, dialogConfig.name, decorateRef, []);
    const portal = new ComponentPortal(WebFeaturesDialogComponent, null, injector);
    decorateRef.attachPortal(portal);
    decorateRef.updateInput('content', 'mes');
    return decorateRef;
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
