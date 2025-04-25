import { Injector } from '@angular/core';
import { Overlay, OverlayConfig, OverlayPositionBuilder, PositionStrategy } from '@angular/cdk/overlay';
import { DecorateOverlayRef } from './decorate-overlay-ref';

export type DecorateRefBuilder = (
  overlayConfig: OverlayConfig,
  autoClose: boolean
) => DecorateOverlayRef;

export function createRefBuilder(
  positionBuilder: OverlayPositionBuilder,
  overlay: Overlay
): DecorateRefBuilder {
  return (overlayConfig, autoClose) => {
    const positionStrategy: PositionStrategy = positionBuilder.global().centerHorizontally().centerVertically();
    const overlayRef = overlay.create({ ...overlayConfig, positionStrategy });
    return new DecorateOverlayRef(overlayRef, autoClose);
  };
}

export function createRefInjector(
  injectorID: string,
  decorateRef: DecorateOverlayRef,
  providers: any[]
): Injector {
  return Injector.create({
    parent: Injector.NULL,
    providers: [
      { provide: 'INJECTOR_ID', useValue: injectorID },
      { provide: DecorateOverlayRef, useValue: decorateRef },
      ...providers,
    ],
  });
}
