import { inject, Injectable, Injector } from '@angular/core';
import { DialogComponentConfig, DefaultDialogConfig, DialogType } from './models';
import { Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { createRefBuilder, createRefInjector } from './utils';
import { DecorateOverlayRef } from './decorate-overlay-ref';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { CoreDialogComponent } from './dialog.component';
import { DIALOG_DEFAULT_PROVIDER, ProviderTypes, DIALOG_COMPONENT_PROVIDER } from './providers';

@Injectable({ providedIn: 'root' })
export class CoreDialogService {
  #refBuilder: DecorateRefBuilder = createRefBuilder(inject(OverlayPositionBuilder), inject(Overlay));
  #refInjector = createRefInjector(inject(Injector));
  constructor() { }

  public openDefaultDialog(config: DefaultDialogConfig): DecorateOverlayRef {
    const dialogProvider = { provide: DIALOG_DEFAULT_PROVIDER, useValue: config };
    return this.createDialog(config, CoreDialogComponent, [dialogProvider]);
  }

  public openComponentDialog(config: DialogComponentConfig, providers: ProviderTypes = []): DecorateOverlayRef {
    const dialogComponentProvider = { provide: DIALOG_COMPONENT_PROVIDER, useValue: config };
    return this.createDialog(config, config.componentRef(), [...providers, dialogComponentProvider]);
  }

  private createDialog<T extends DialogType, C>(
    dialogConfig: T, component: ComponentType<C>, providers: ProviderTypes = []
  ): DecorateOverlayRef {
    const { overlayConfig, autoClose, injectorID } = dialogConfig;
    const decorateRef = this.#refBuilder(overlayConfig, autoClose);
    const injector = this.#refInjector(injectorID, decorateRef, providers);
    const portal = new ComponentPortal(component, null, injector);
    return this.attachDialog(decorateRef, portal);
  }

  private attachDialog(decorateRef: DecorateOverlayRef, portal: ComponentPortal<any>): DecorateOverlayRef {
    decorateRef.attachPortal(portal);
    return decorateRef;
  }
}
