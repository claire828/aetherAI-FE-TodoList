import { inject, Injectable, Injector } from '@angular/core';
import { DialogConfig } from '../models';
import { Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { DecorateRefBuilder, createRefBuilder } from '../utils';
import { DecorateOverlayRef } from '../utils/decorate-overlay-ref';
import { ComponentPortal } from '@angular/cdk/portal';
import { WebFeaturesDialogComponent } from '../web-features-dialog/web-features-dialog.component';
import { DIALOG_PROVIDER } from '../default-configs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Injectable({ providedIn: 'root' })
export class DialogService {
  #injector: Injector = inject(Injector);
  #refBuilder: DecorateRefBuilder = createRefBuilder(inject(OverlayPositionBuilder), inject(Overlay));

  constructor() { }

  public openDialog(dialogConfig: DialogConfig): DecorateOverlayRef {
    const { overlayConfig } = dialogConfig;
    const { decorateRef, overlayRef } = this.#refBuilder(overlayConfig);
    const injector = this.createInjector(decorateRef, dialogConfig);
    const portal = new ComponentPortal(WebFeaturesDialogComponent, null, injector);
    overlayRef.attach(portal);
    if (overlayConfig.hasBackdrop) {
      overlayRef.backdropClick().pipe(takeUntilDestroyed()).subscribe(() => decorateRef.close());
    }
    return decorateRef;
  }

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
