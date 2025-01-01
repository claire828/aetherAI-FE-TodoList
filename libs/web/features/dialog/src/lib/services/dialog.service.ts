import { inject, Injectable, Injector } from '@angular/core';
import { DialogConfig } from '../models';
import { Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { DecorateRefBuilder, createRefBuilder } from '../utils';
import { DecorateOverlayRef } from '../utils/decorate-overlay-ref';
import { ComponentPortal } from '@angular/cdk/portal';
import { WebFeaturesDialogComponent } from '../web-features-dialog/web-features-dialog.component';
import { DEFAULT_OVERLAY_CONFIG } from '../default-configs';

@Injectable({ providedIn: 'root' })
export class DialogService {
  #injector: Injector = inject(Injector);
  #refBuilder: DecorateRefBuilder = createRefBuilder(inject(OverlayPositionBuilder), inject(Overlay));

  constructor() { }

  public openDialog(config: DialogConfig) {
    const { decorateRef, overlayRef } = this.#refBuilder(DEFAULT_OVERLAY_CONFIG);
    const injector = this.createInjector(decorateRef, config);
    const portal = new ComponentPortal(WebFeaturesDialogComponent, null, injector);
    overlayRef.attach(portal);
    overlayRef.backdropClick().subscribe(() => decorateRef.close());
  }

  private createInjector(decorateRef: DecorateOverlayRef, config: DialogConfig): Injector {
    return Injector.create({
      providers: [
        { provide: DecorateOverlayRef, useValue: decorateRef },
        // TODO: 要加入config
      ],
      parent: this.#injector,
      name: config.name,
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
