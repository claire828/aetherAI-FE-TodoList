import {
  ConnectedPosition,
  FlexibleConnectedPositionStrategy,
  GlobalPositionStrategy,
  Overlay,
  OverlayConfig,
  OverlayPositionBuilder,
  PositionStrategy,
  OverlayRef,
} from '@angular/cdk/overlay';
import { ElementRef } from '@angular/core';
import { DialogRef } from '../services/dialog-ref';

export interface DialogRefMap {
  overlayRef: OverlayRef;
  dialogRef: DialogRef;
}
export type DialogRefBuilder = (
  config?: OverlayConfig,
  strategy?: PositionStrategy
) => DialogRefMap;

export const DEFAULT_OVERLAY_CONFIG: OverlayConfig = {
  hasBackdrop: true,
  backdropClass: 'overlay-backdrop',
  panelClass: 'overlay-panel',
};

export function createDialogRefBuilder(
  builder: OverlayPositionBuilder,
  overlay: Overlay
): DialogRefBuilder {
  return (config?: OverlayConfig, strategy?: PositionStrategy) => {
    const positionStrategy = strategy || generateGlobalCenterPosition(builder);
    const overlayConfig = config || { ...DEFAULT_OVERLAY_CONFIG, positionStrategy };
    const overlayRef = overlay.create(overlayConfig);
    const dialogRef = new DialogRef(overlayRef);
    return {
      overlayRef,
      dialogRef,
    };
  };
}

export function generateGlobalCenterPosition(
  builder: OverlayPositionBuilder
): GlobalPositionStrategy {
  return builder.global().centerHorizontally().centerVertically();
}

export function generateFlexiblePosition(
  builder: OverlayPositionBuilder,
  target: ElementRef<unknown> | Element,
  connectedPositions: ConnectedPosition[]
): FlexibleConnectedPositionStrategy {
  return builder.flexibleConnectedTo(target).withPositions([...connectedPositions]);
}
