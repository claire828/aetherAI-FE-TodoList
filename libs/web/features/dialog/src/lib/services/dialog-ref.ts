import { OverlayRef, PositionStrategy } from '@angular/cdk/overlay';

export class DialogRef {
  #overlayRef: OverlayRef;
  constructor(overlay: OverlayRef) {
    this.#overlayRef = overlay;
  }

  public updatePosition(strategy: PositionStrategy): void {
    this.#overlayRef.updatePositionStrategy(strategy);
    this.#overlayRef.updatePosition();
  }

  public close(): void {
    this.#overlayRef.dispose();
  }
}
