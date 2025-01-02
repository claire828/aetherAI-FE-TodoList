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
  #injector: Injector = inject(Injector);
  #refBuilder: DecorateRefBuilder = createRefBuilder(inject(OverlayPositionBuilder), inject(Overlay));
  #refInjector = createRefInjector(this.#injector);
  constructor() { }

  public openDefaultDialog(dialogConfig: DefaultDialogConfig): DecorateOverlayRef {
    return this.createDialog(dialogConfig, WebFeaturesDialogComponent);
  }

  public openComponentDialog(dialogConfig: DialogComponentConfig): DecorateOverlayRef {
    const dialogProvider = { provide: DIALOG_PROVIDER, useValue: dialogConfig };
    return this.createDialog(dialogConfig, dialogConfig.componentRef(), [dialogProvider]);
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
