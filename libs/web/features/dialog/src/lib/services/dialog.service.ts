import { inject, Injectable, Injector } from '@angular/core';
import { DialogComponentConfig, DefaultDialogConfig, DialogType } from '../models';
import { Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { DecorateRefBuilder, createRefBuilder, createRefInjector } from '../utils';
import { DecorateOverlayRef } from '../utils/decorate-overlay-ref';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { DIALOG_COMPONENT_PROVIDER, DIALOG_DEFAULT_PROVIDER, ProviderTypes } from '../default-configs';
import { WebFeaturesDialogComponent } from '../web-features-dialog/web-features-dialog.component';

@Injectable({ providedIn: 'root' })
/**
 * Service to manage and open dialog overlays in the application.
 *
 * The `DialogService` provides methods to open default dialogs and component-based dialogs
 * with specified configurations and providers. It utilizes an internal reference builder
 * and injector to create and manage dialog overlays.
 *
 * @example
 * // Injecting DialogService in a component
 * constructor(private dialogService: DialogService) {}
 *
 * // Opening a default dialog
 * const config: DefaultDialogConfig = { /* configuration options *\/ };
 * const dialogRef = this.dialogService.openDefaultDialog(config);
 *
 * // Opening a component-based dialog
 * const componentConfig: DialogComponentConfig = { /* configuration options *\/ };
 * const dialogRef = this.dialogService.openComponentDialog(componentConfig);
 *
 * @publicApi
 */
export class DialogService {
  #refBuilder: DecorateRefBuilder = createRefBuilder(inject(OverlayPositionBuilder), inject(Overlay));
  #refInjector = createRefInjector(inject(Injector));
  constructor() { }

  /**
 * Opens a default dialog with the specified configuration.
 *
 * @param {DefaultDialogConfig} config - The configuration object for the default dialog.
 * @returns {DecorateOverlayRef} - A reference to the created dialog overlay.
 */
  public openDefaultDialog(config: DefaultDialogConfig): DecorateOverlayRef {
    const dialogProvider = { provide: DIALOG_DEFAULT_PROVIDER, useValue: config };
    return this.createDialog(config, WebFeaturesDialogComponent, [dialogProvider]);
  }

  /**
 * Opens a component dialog with the specified configuration and providers.
 *
 * @param {DialogComponentConfig} config - The configuration object for the component dialog.
 * @param {ProviderTypes} [providers=[]] - Optional array of providers to be injected into the dialog.
 * @returns {DecorateOverlayRef} - A reference to the created dialog overlay.
 */
  public openComponentDialog(config: DialogComponentConfig, providers: ProviderTypes = []): DecorateOverlayRef {
    const dialogComponentProvider = { provide: DIALOG_COMPONENT_PROVIDER, useValue: config };
    return this.createDialog(config, config.componentRef(), [...providers, dialogComponentProvider]);
  }

  /**
   * Creates and opens a dialog with the specified configuration and component.
   *
   * @template T - The type of the dialog configuration.
   * @template C - The type of the component to be rendered inside the dialog.
   *
   * @param {T} dialogConfig - The configuration object for the dialog, including overlay settings.
   * @param {ComponentType<C>} component - The component to be rendered inside the dialog.
   * @param {ProviderTypes} [providers=[]] - Optional array of providers to be injected into the dialog.
   *
   * @returns {DecorateOverlayRef} - A reference to the created dialog overlay.
   */
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
