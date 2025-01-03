import { inject, Injectable, Injector } from '@angular/core';
import { DialogComponentConfig, DefaultDialogConfig, DialogType, ProviderTypes } from '../models';
import { Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { DecorateRefBuilder, createRefBuilder, createRefInjector } from '../utils';
import { DecorateOverlayRef } from '../utils/decorate-overlay-ref';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { DIALOG_PROVIDER } from '../default-configs';
import { WebFeaturesDialogComponent } from '../web-features-dialog/web-features-dialog.component';

@Injectable({ providedIn: 'root' })
export class DialogService {
  #refBuilder: DecorateRefBuilder = createRefBuilder(inject(OverlayPositionBuilder), inject(Overlay));
  #refInjector = createRefInjector(inject(Injector));
  constructor() { }

  public openDefaultDialog(config: DefaultDialogConfig): DecorateOverlayRef {
    const dialogProvider = { provide: DIALOG_PROVIDER, useValue: config };
    return this.createDialog(config, WebFeaturesDialogComponent, [dialogProvider]);
  }

  public openComponentDialog(config: DialogComponentConfig, providers: ProviderTypes = []): DecorateOverlayRef {
    return this.createDialog(config, config.componentRef(), providers);
  }

  private createDialog<T extends DialogType, C>(
    dialogConfig: T, component: ComponentType<C>, providers: ProviderTypes = []
  ): DecorateOverlayRef {
    const decorateRef = this.#refBuilder(dialogConfig.overlayConfig);
    const injector = this.#refInjector(dialogConfig.name, decorateRef, providers);
    const portal = new ComponentPortal(component, null, injector);
    decorateRef.attachPortal(portal);
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
