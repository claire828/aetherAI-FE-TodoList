import {
  Overlay,
  OverlayConfig,
  OverlayPositionBuilder,
  PositionStrategy,
} from '@angular/cdk/overlay';
import { DecorateOverlayRef } from './decorate-overlay-ref';
import { generateGlobalCenterPosition } from './position-builder';

/**
 * Type definition for a function that decorates a reference builder.
 *
 * @param config - The configuration object for the overlay.
 * @param positionStrategy - Optional. The strategy for positioning the overlay.
 * @returns A map of references.
 */
export type DecorateRefBuilder = (
  config: OverlayConfig,
  positionStrategy?: PositionStrategy
) => DecorateOverlayRef;


/**
 * Creates a reference builder function that can be used to create overlay references with a specified configuration and position strategy.
 *
 * @param builder - The `OverlayPositionBuilder` instance used to generate position strategies.
 * @param overlay - The `Overlay` instance used to create overlay references.
 * @returns A function that takes an overlay configuration and an optional position strategy, and returns an object containing the created `OverlayRef` and a decorated reference.
 */
export function createRefBuilder(
  builder: OverlayPositionBuilder,
  overlay: Overlay
): DecorateRefBuilder {
  return (config, positionStrategy = generateGlobalCenterPosition(builder)) => {
    const overlayConfig = { ...config, positionStrategy };
    const overlayRef = overlay.create(overlayConfig);
    return new DecorateOverlayRef(overlayRef, config.hasBackdrop);
  };
}

